import {test, expect} from '@playwright/test'

test('Read ENV file config in Playwright', async({page})=>{

    await page.goto(`${process.env.GOOGLE_URL}`)

})