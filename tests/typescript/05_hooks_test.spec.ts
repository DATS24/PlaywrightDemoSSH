import {test, expect} from '@playwright/test'

test.beforeAll(async() => {
    console.log('Running before all tests...')
})

test.afterAll(async() => {
    console.log('Running after all tests...')
})

test.beforeEach(async() => {
    console.log('Running before each tests...')
})

test.afterEach(async() => {
    console.log('Running after each tests...')
})

test('Hooks1', async({page})=>{
    console.log('Test hooks1 execution started...')

    await page.goto('https://www.google.com')
})

test('Hooks2', async({page})=>{
    console.log('Test hooks2 execution started...')

    await page.goto('https://www.google.com')
})