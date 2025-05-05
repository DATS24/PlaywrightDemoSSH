import {test, expect} from '@playwright/test'
import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper'

import { faker } from '@faker-js/faker'

test.use({
    baseURL: process.env.BASE_API_URL
})

test('Create TypeSafety POST API Request using dynamic file with faker in playwright', async({request})=>{
    
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
})
