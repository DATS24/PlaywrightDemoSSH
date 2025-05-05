import {test, expect} from '@playwright/test'
import { Homepage } from '../../src/pages/Homepage'
import { Resultpage } from '../../src/pages/Resultpage'
import { Playlistpage } from '../../src/pages/Playlistpage'

test('Page Object Model Test in Playwright', async({page})=>{

    //Create object of homepage
    const homePage = new Homepage(page)
    await homePage.goToURL()
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`)

    //Create object of resultpage
    const resultPage = new Resultpage(page)
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`)

    //Create object of playlistpage
    const playlistPage = new Playlistpage(page)
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}`+'☑️ - YouTube')

    
})
