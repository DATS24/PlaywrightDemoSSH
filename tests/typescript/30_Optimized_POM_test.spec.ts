import { test } from '../../src/fixture/TestFixture'

test('Optimized Page Object Model Test in Playwright', async({page, homePage, resultPage, playlistPage})=>{

    //Create object of homepage
    await homePage.goToURL()
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`)

    //Create object of resultpage
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`)

    //Create object of playlistpage
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}`+'☑️ - YouTube')

    
})
