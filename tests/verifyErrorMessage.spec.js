const {test,expect} = require("@playwright/test")

test("Verify Error Message", async function({page}){
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin")

    await page.locator("input[name='password']").fill("admin1234")

    await page.locator("//button[@type='submit']").click()

    const errorMsg = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()

    console.log("Error message is: "+errorMsg)

    expect(errorMsg.includes("Invalid")).toBeTruthy()

    expect(errorMsg==="Invalid credentials").toBeTruthy()
})