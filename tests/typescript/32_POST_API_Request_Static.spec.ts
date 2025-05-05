import {test, expect} from '@playwright/test'
import postAPIRequest from '../../test-data/api_request/POST_API_Request.json'

test.use({
    baseURL: process.env.BASE_API_URL
})

test('Create POST API Request using static file in playwright', async({request})=>{
    //Create POST API request
    const postAPIResponse = await request.post(`/booking`,{data: postAPIRequest})

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
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('playwright typescript by testers talk')
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('playwright javascript by testers talk')

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15')
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17')



})
