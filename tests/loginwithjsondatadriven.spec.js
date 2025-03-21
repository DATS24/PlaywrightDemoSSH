const {test,expect} = require("@playwright/test")
const testdata = JSON.parse(JSON.stringify(require("../testlogin.json")))

test.describe("Data Driven Login Test", function(){

    for(const data of testdata)
    {
        test.describe(`Login with users ${data.id}`, function(){

            test('Login to Application', async function({page}){

                await page.goto("https://freelance-learn-automation.vercel.app/login")
            
                await page.locator("//input[@id='email1']").fill(data.username)
            
                await page.locator("//input[@id='password1']").fill(data.password)
            
                await page.pause()
            
            })
        })
    }
})

