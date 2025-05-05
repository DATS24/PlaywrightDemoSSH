import {test, expect} from '@playwright/test'

test('Dropdown List', async({page})=>{
    await page.goto('https://www.facebook.com')
    await page.getByRole('button', {name: 'Create new account'}).click()

    //select dropdown using value
    await page.getByLabel('Month').selectOption('3')

    //select dropdown using visible text
    await page.getByLabel('Month').selectOption('Oct')

    //validate all options
    await expect(page.locator('#month > option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
})
