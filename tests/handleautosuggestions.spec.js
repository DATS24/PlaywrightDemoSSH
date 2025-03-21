const {test,expect} = require("@playwright/test")

test("Verify Application Title Using Keyboard", async function({page}){

    await page.goto("https://google.com")

    await page.locator("textarea[name='q']").fill("Wikimon")

    await page.waitForSelector("//li[@role='presentation']")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("Enter")

    await page.waitForTimeout(2000)
})

test("Verify Application Title Using Loop", async function({page}){

    await page.goto("https://google.com")

    await page.locator("textarea[name='q']").fill("Wikimon")

    await page.waitForSelector("//li[@role='presentation']")

    await page.waitForTimeout(3000)

    const elements = await page.$$("//li[@role='presentation']")

    for(let i=0;i<elements.length;i++)
    {
        const text = await elements[i].textContent()

        if(text.includes('digimon'))
        {
            await elements[i].click()
            break
        }
    }

    await page.waitForTimeout(2000)
})