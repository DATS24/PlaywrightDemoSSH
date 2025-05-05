import {test, expect} from '@playwright/test'

test('Mouse actions in playwright', async({page})=>{

    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk')

    //click specified left mouse button
    //await page.getByRole('link', {name: 'Playwright by Testers Talk☑️'}).first().click({button: 'left'})
    
    //click specified middle mouse button
    //await page.getByRole('link', {name: 'Playwright by Testers Talk☑️'}).first().click({button: 'middle'})

    //click specified left mouse button
    //await page.getByRole('link', {name: 'Playwright by Testers Talk☑️'}).first().click({button: 'right'})

    //mouse hover
    await page.getByLabel('Search by voice').hover()

    //double click
    await page.getByLabel('Search by voice').dblclick()
})