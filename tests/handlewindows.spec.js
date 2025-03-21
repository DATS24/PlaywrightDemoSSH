const {test,expect} = require("@playwright/test")

test("Working with multiple tabs", async function({browser}){

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),

        page.locator("(//a[contains(@href, 'facebook')])[1]").click()
    ])

    await newPage.waitForTimeout(2000)

    await newPage.locator("(//input[@name='email'])[2]").fill("test@gmail.com")

    await newPage.waitForTimeout(2000)

    await newPage.close()

    await page.locator("#email1").fill("test@gmail.com")

    await page.waitForTimeout(2000)

})