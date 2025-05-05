import {test, expect} from '@playwright/test'

test('Multiple browser/tabs in Playwright Typescript', async({page, browser})=>{

    await page.goto('https://google.com')

    //create new browser
    const context2 = await browser.newContext()
    //create new page
    const page2 = await context2.newPage()

    await page2.goto('https://google.com')

    //create new tab
    const newtab = await context2.newPage()
    await newtab.goto('https://google.com')


})
