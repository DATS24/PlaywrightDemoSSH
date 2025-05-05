import {test, expect} from '@playwright/test'

test('Locators', async({page})=>{
    await page.goto('https://github.com/BakkappaN/')

    //getbyrole
    await page.getByRole('link', {name: 'Sign in'}).click()

    //getbylabel
    await page.getByLabel('Homepage', {exact: true}).first().click()

    //getbyalttext
    await page.getByAltText("View BakkappaN's full-sized avatar").click()

    //getbytext
    await page.getByText("Sign up").click()

    //getbyplaceholder, xpath, css selectors
    await page.goto('https://www.youtube.com/@testerstalk')
    await page.getByPlaceholder('Search').fill('testers talk')
    //xpath
    await page.locator('//input[@name="search_query"]').first().fill('testers talk')
    //getbytitle
    await page.goto('https://www.google.com')
    await page.getByTitle('Search').fill('playwright by testers talk')

})
