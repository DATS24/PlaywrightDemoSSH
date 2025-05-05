//import {test, expect} from '@playwright/test'
import { test } from '../../src/fixture/TestFixture'
import { Homepage } from '../../src/pages/Homepage'
import { Resultpage } from '../../src/pages/Resultpage'
import { Playlistpage } from '../../src/pages/Playlistpage'

test('Implementing Fixture in Playwright', async({page})=>{

    console.log('Test execution started...')

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

    console.log('Test execution ended...')

})
