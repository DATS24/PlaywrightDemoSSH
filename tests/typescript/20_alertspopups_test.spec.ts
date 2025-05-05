import {test, expect} from '@playwright/test'

test('Handling Alert Popups in Playwright', async({page})=>{

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    //allow action on popup
    page.once('dialog', dialog =>{
        dialog.accept()
        console.log(`Alert message is: ${dialog.message()}`)
    })

    await page.getByText('See an example alert', {exact: true}).click()
})

test('Handling Popups in Plauwright', async({page})=>{

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    //allow action on popup
    page.once('dialog', dialog =>{
        //dialog.accept()
        dialog.dismiss()
        console.log(`Alert message is: ${dialog.message()}`)
    })

    await page.getByText('See a sample confirm', {exact: true}).click()
})

test('Handling Prompt Popups in Plauwright', async({page})=>{

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    //allow action on popup
    page.once('dialog', async(dialog) =>{
        console.log(`Alert message is: ${dialog.message()}`)
        await dialog.accept('playwright')
    })

    await page.getByText('See a sample prompt', {exact: true}).click()
})