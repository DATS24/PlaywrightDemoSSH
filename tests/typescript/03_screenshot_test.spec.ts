import {test, expect} from '@playwright/test'

test('Capture screenshot', async({page})=>{
    await page.goto('https://www.youtube.com/@testerstalk')

    //element screenshot
    await page.locator('#page-header-container').screenshot({path: './screenshots/ElementScreenshot.png'})

    //page screenshot
    await page.screenshot({path: './screenshots/PageScreenshot.png'})

    //full page screenshot
    await page.screenshot({path: './screenshots/FullPageScreenshot.png', fullPage: true})

})
