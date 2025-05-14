import {test, expect} from '@playwright/test'
import testData from '../../test-data/qa/testdata.json'

type TestData = {
    "TestDataSet1":{
        Skill1:string,
        Skill2:string
    },
    "TestDataSet2":{
        Skill1:string,
        Skill2:string
    }
}
const typedTestData = testData as TestData

for(const dataSetName in typedTestData){

    const skill = typedTestData[dataSetName as keyof TestData]
    
    test(`Data Driven Testing using JSON file in Playwright : ${skill.Skill1}`, async({page})=>{

        await page.goto(`${process.env.GOOGLE_URL}`)
    
        await page.getByLabel('Cari', {exact: true}).fill(skill.Skill1)
        await page.getByLabel('Cari', {exact: true}).press('Enter')

        await page.getByRole('heading').filter({hasText: skill.Skill1}).click()

        await expect(page).toHaveTitle(skill.Skill1+'☑️ - YouTube')
        })
}

