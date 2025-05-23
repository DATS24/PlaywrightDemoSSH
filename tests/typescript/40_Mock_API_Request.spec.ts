import {test, expect} from '@playwright/test'

test('Mock API Request in Playwright', async({page})=>{
    //Mock API request
    await page.route('*/**/api/v1/fruits', async route =>{
        const json = [
            {name : 'playwright typescript by testers talk', id : 12},
            {name : 'playwright javascript by testers talk', id : 13},
            {name : 'cypress by testers talk', id : 14},
            {name : 'API testing by testers talk', id : 15}
        ]
        await route.fulfill({json})
    })

    //Go to URL
    await page.goto('https://demo.playwright.dev/api-mocking/')

    //Validate text
    await expect(page.getByText('playwright typescript by testers talk')).toBeVisible()
    await expect(page.getByText('playwright javascript by testers talk')).toBeVisible()
    await expect(page.getByText('cypress by testers talk')).toBeVisible()
    await expect(page.getByText('API testing by testers talk')).toBeVisible()

})
