import {test, expect} from '@playwright/test'

test('Mock API from HAR in Playwright', async({page})=>{
    //Recording a HAR file
    await page.routeFromHAR('./har/fruits.har', {
        url : '*/**/api/v1/fruits',
        update : false
    })

    //Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking/')

    //Validate text
    await expect(page.getByText('Strawberry')).toBeVisible()
    await expect(page.getByText('playwright typescript by testers talk')).toBeVisible()
    await expect(page.getByText('playwright javascript by testers talk')).toBeVisible()
    await expect(page.getByText('cypress by testers talk')).toBeVisible()
    await expect(page.getByText('API testing by testers talk')).toBeVisible()
})
