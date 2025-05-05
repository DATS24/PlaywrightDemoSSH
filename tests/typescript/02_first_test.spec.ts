import {test, expect} from '@playwright/test'

test('My first Playwright Typescript Test', async({page})=>{
    await page.goto('https://www.google.com')

    await page.getByLabel('Cari', {exact: true}).fill('playwright by testers talk')
    await page.getByLabel('Cari', {exact: true}).press('Enter')

    await page.getByRole('heading').filter({hasText: 'Playwright by Testers Talk☑️'}).click()

    await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube')
})
