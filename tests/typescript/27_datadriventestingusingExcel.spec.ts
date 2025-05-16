import {test, expect} from '@playwright/test'
import path from 'path'
import { readExcelFile } from '../../src/utils/ExcelHelper'

const filePath = path.join(__dirname,'../../test-data/qa/testdata.xlsx')

const records = readExcelFile(filePath)

for(const record of records){

    test(`Data Driven Testing using CSV file in Playwright : ${record.Skill1}`, async({page})=>{
    
        await page.goto(`${process.env.GOOGLE_URL}`)
        
        await page.getByLabel('Cari', {exact: true}).fill(record.Skill1)
        await page.getByLabel('Cari', {exact: true}).press('Enter')
    
        await page.getByRole('heading').filter({hasText: record.Skill1}).click()

        await expect(page).toHaveTitle(record.Skill1+'☑️ - YouTube')
        }) 
    
}

