import {test, expect} from '@playwright/test'

test('Timeouts in playwright', async({page})=>{
    test.setTimeout(1 * 60 * 1000)
    await page.goto('https://google.com/')

    await expect(page).toHaveTitle('Google?', {timeout: 10000})

    await page.waitForTimeout(10000)
})
