import {test, expect} from '@playwright/test'

test('Visual comparison in playwright', async({page})=>{

    await page.goto('https://github.com/login')

    //failed at first, captured screenshot, at second time running, passed
    await expect(page).toHaveScreenshot('GitHubLoginPage.png')

    await page.locator('#login_field').fill('playwright with typescript')

    //compare screenshot, won't be matching
    await expect(page).toHaveScreenshot('GitHubLoginPage.png')

})

test('Element visual comparison in playwright', async({page})=>{

    await page.goto('https://github.com/login')

    //failed at first, captured screenshot, at second time running, passed
    await expect(page).toHaveScreenshot('GitHubLoginPage.png')

    const element = page.locator('[class="auth-form-body mt-3"]')

    await expect(element).toHaveScreenshot('GitHubLoginForm.png')

    await page.locator('#login_field').fill('playwright with typescript')

    //compare screenshot, won't be matching
    await expect(element).toHaveScreenshot('GitHubLoginPage.png')

})



