const {test,expect} = require("@playwright/test")
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))

test("Login to Application", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("//input[@id='email1']").fill(testdata.interest[1])

    await page.locator("//input[@id='password1']").fill(testdata.password)

    await page.pause()

})