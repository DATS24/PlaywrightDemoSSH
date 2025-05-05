import {test, expect} from '@playwright/test'

test('Soft Assertions in playwright', async({page})=>{

    await page.goto('https://www.youtube.com')
    
    //visible, editable, enabled, empty?
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeVisible()
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEditable()
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEnabled()
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEmpty()

    //verify url, title, text, count
    await page.getByPlaceholder('Search', {exact: true}).first().click()
    await page.getByPlaceholder('Search', {exact: true}).first().fill('playwright by testers talk')
    await page.getByPlaceholder('Search', {exact: true}).first().press('Enter')
    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk')
    
    await expect(page).toHaveTitle('playwright by testers talk - YouTube')

    await expect(page.locator('span[id="title"]').first()).toHaveText('People also watched')

    //failed but test still running till end
    await expect.soft(page.locator('span[id="title"]')).toBeDisabled()

    await expect(page.locator('span[id="title"]')).toHaveCount(3)
})