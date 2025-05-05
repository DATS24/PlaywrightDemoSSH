import {test, expect} from '@playwright/test'

const searchKeywords = ['Playwright by Testers Talk', 'Cypress by Testers Talk', 'API Testing by Testers Talk']

for(const searchKeyword of searchKeywords){
    test(`Parameterize tests in playwright ${searchKeyword}`, async({page})=>{
        await page.goto('https://www.google.com')

        await page.getByLabel('Cari', {exact: true}).fill(searchKeyword)
        await page.getByLabel('Cari', {exact: true}).press('Enter')

        await page.getByRole('link', {name: searchKeyword}).first().click()

        await expect(page).toHaveTitle(searchKeyword)


    })
}

