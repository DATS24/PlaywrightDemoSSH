import {test, expect} from '@playwright/test'

test('Selecting date value in playwright', async({page})=>{

    await page.goto('https://jqueryui.com/datepicker/')

    //hardcoded date
    const iframe = page.frameLocator('[class="demo-frame"]')
    iframe.locator('[id="datepicker"]').fill('04/15/2025')

    //selecting dynamic date
    await iframe.locator('[id="datepicker"]').click()
    await iframe.locator('.ui-datepicker-today').click()

    //selecting past date
    await iframe.locator('[id="datepicker"]').click()
    await iframe.locator('[title="Prev"]').click()
    await iframe.locator('text="15"').click()

    //selecting future date
    await iframe.locator('[id="datepicker"]').click()
    await iframe.locator('[title="Next"]').click()
    await iframe.locator('text="15"').click()

})