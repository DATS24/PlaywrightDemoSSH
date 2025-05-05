import { test } from '../../src/fixture/TestFixture'

test('Optimized Page Object Model Test in Playwright', async({page, homePage, resultPage, playlistPage, testData})=>{

    //Create object of homepage
    await homePage.goToURL()
    await homePage.searchWithKeywords(String(testData.ModuleTestData?.Skill1))

    //Create object of resultpage
    await resultPage.clickOnPlaylist(String(testData.ModuleTestData?.Skill1))

    //Create object of playlistpage
    await playlistPage.validatePageTitle(String(testData.ModuleTestData?.Skill1)+'☑️ - YouTube')

    console.log(`Skill : ${String(testData.ModuleTestData?.Skill1)}`)
    console.log(`Skill : ${String(testData.ModuleTestData?.Skill2)}`)
    console.log(`Skill : ${String(testData.ModuleTestData?.Skill3)}`)

})