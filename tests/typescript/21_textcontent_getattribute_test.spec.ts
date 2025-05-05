import {test, expect} from '@playwright/test'

test('Get Text & Get Attribute value in Playwright', async({page})=>{

    await page.goto('https://www.github.com/BakkappaN')

    const name = await page.locator('[itemprop="name"]').textContent()
    const finalName = name?.trim()
    console.log(`Name is: ${finalName}`)
    expect(finalName).toBe('Testers Talk')

    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links')
    console.log(`Attribute value is: ${attributeValue}`)
})
