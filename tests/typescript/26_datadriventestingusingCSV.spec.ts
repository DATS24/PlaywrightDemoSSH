import {test, expect} from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

type TestRecords = {
    Skill1 : string,
    Skill2 : string
}

const records = parse(
    fs.readFileSync(path.join(__dirname,'../../test-data/QA/testdata.csv')),
    {
        columns : true,
        skipEmptyLines : true
    }
) as TestRecords[]

for(const record of records){

    test(`Data Driven Testing using CSV file in Playwright : ${record.Skill1}`, async({page})=>{
    
        await page.goto(`${process.env.GOOGLE_URL}`)
        
        await page.getByLabel('Cari', {exact: true}).fill(record.Skill1)
        await page.getByLabel('Cari', {exact: true}).press('Enter')
    
        await page.getByRole('heading').filter({hasText: record.Skill1}).click()
        
        await expect(page).toHaveTitle(record.Skill1+'☑️ - YouTube')
        }) 
    
}

