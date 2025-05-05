import {test, expect} from '@playwright/test'

test('Working with checkbox & radio buttons in Playwright', async({page})=>{
    await page.goto('https://jqueryui.com/checkboxradio/', {timeout: 100000})

    const iframe = await page.frameLocator('[class="demo-frame"]')

    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked()

    await iframe.locator('[for="radio-1"]').check()

    await expect(iframe.locator('[for="radio-1"]')).toBeChecked()

})