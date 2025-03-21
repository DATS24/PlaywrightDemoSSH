const {test,expect} = require("@playwright/test")

test("Keyboard events in playwright", async function({page}){

    await page.goto("https://google.com")

    await page.locator("textarea[name='q']").focus()

    await page.keyboard.type("Wikimon net!")

    await page.keyboard.press("ArrowLeft")

    await page.keyboard.down("Shift")

    for(let i=0;i<'net'.length;i++)
    {
        await page.keyboard.press("ArrowLeft")
    }

    await page.keyboard.up("Shift")

    await page.keyboard.press("Backspace")

    // await page.locator("textarea[name='q']").fill("Wikimon")

    // await page.keyboard.press("Control+A")

    // await page.keyboard.press("Control+C")

    // await page.keyboard.press("Backspace")

    // await page.keyboard.press("Control+V")

    await page.waitForTimeout(2000)

    //await page.keyboard.press("Enter")

})