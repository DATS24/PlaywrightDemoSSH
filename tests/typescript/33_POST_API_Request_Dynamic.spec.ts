import {test, expect} from '@playwright/test'
import { formatAPIRequest } from '../../src/utils/APIHelper'

import path from 'path'
import fs from 'fs'

import { faker } from '@faker-js/faker'

test.use({
    baseURL: process.env.BASE_API_URL
})

test('Create POST API Request using dynamic file in playwright', async({request})=>{
    
    //Reading json file
    const filePath = path.join(__dirname, '../../test-data/api_request/Dynamic_POST_API_Request.json')
    const jsonTemplate = fs.readFileSync(filePath, 'utf-8')

    const values = ['playwright typescript by testers talk','playwright javascript by testers talk', 1000]
    
    //Updating POST API request body
    const postAPIRequest = await formatAPIRequest(jsonTemplate, values)

    //Create POST API request
    const postAPIResponse = await request.post(`/booking`,{data: JSON.parse(postAPIRequest)})

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

test('Create POST API Request using dynamic file with faker in playwright', async({request})=>{
    
    //Reading json file
    const filePath = path.join(__dirname, '../../test-data/api_request/Dynamic_POST_API_Request.json')
    const jsonTemplate = fs.readFileSync(filePath, 'utf-8')

    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const totalPrice = faker.number.int({min: 1000, max: 10000})

    const values = [firstName, lastName, totalPrice]
    
    //Updating POST API request body
    const postAPIRequest = await formatAPIRequest(jsonTemplate, values)

    //Create POST API request
    const postAPIResponse = await request.post(`/booking`,{data: JSON.parse(postAPIRequest)})

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

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15')
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17')
})
