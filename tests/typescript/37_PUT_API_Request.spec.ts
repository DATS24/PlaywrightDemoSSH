import {test, expect} from '@playwright/test'
import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper'

import { faker } from '@faker-js/faker'

import tokenAPIRequest from '../../test-data/api_request/Token_API_Request.json'
import putAPIRequest from '../../test-data/api_request/PUT_API_Request.json'


test.use({
    baseURL: process.env.BASE_API_URL
})

test('Create PUT API Request with faker in playwright', async({request})=>{
    
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const totalPrice = faker.number.int({min: 1000, max: 10000})
    
    //Updating POST API request body
    const postAPIRequest = await getPOSTAPIRequestBody(firstName, lastName, totalPrice, 
        true, "breakfast", "2025-01-25", "2025-01-27")

    //Create POST API request
    const postAPIResponse = await request.post(`/booking`,{data: postAPIRequest })

    //Print JSON API response
    const jsonPOSTAPIResponse = await postAPIResponse.json()//convert response to json
    console.log('POST API Response : '+JSON.stringify(jsonPOSTAPIResponse, null, 2))

    //Validating API response
    expect(postAPIResponse.status()).toBe(200)
    expect(postAPIResponse.statusText()).toBe('OK')
    expect(postAPIResponse.headers()['content-type']).toContain('application/json')

    //Validate property/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname')
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname')

    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin')
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout')

    //Validate API response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0)//booking ID should not be 0
    expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName)
    expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName)

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-25')
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-27')

    //GET API request
    const bookingId = jsonPOSTAPIResponse.bookingid
    console.log('Booking Id: '+bookingId)

    const getAPIResponse = await request.get(`/booking/${bookingId}`)

    //Validate status code, status text
    expect(getAPIResponse.status()).toBe(200)
    expect(getAPIResponse.statusText()).toBe('OK')
    
    //Print GET API Response
    const getAPIJSONResponse = await getAPIResponse.json()
    console.log('GET API Response : ' + JSON.stringify(getAPIJSONResponse, null, 2))

    //Generate token
    const tokenAPIResponse = await request.post(`/auth`, { data : tokenAPIRequest})

    //Validate token status code, status text
    expect(tokenAPIResponse.status()).toBe(200)
    expect(tokenAPIResponse.statusText()).toBe('OK')

    const tokenAPIJSONResponse = await tokenAPIResponse.json()
    const token = tokenAPIJSONResponse.token
    console.log('Token : '+token)

    //Create PUT API Request
    const putAPIResponse = await request.put(`/booking/${bookingId}`, {
        headers: {
            "Content-Type" : "application/json", //not mandatory
            "Cookie" : `token=${token}` 
        },
        data : putAPIRequest
    })


    //Validate token status code, status text
    expect(putAPIResponse.status()).toBe(200)
    expect(putAPIResponse.statusText()).toBe('OK')

    //Print PUT API Response
    const putAPIJSONResponse = await putAPIResponse.json()
    console.log('PUT API Response : ' + JSON.stringify(putAPIJSONResponse, null, 2))

})
