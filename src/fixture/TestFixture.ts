import { test as base } from '@playwright/test'
import { Homepage } from '../pages/Homepage'
import { Resultpage } from '../pages/Resultpage'
import { Playlistpage } from '../pages/Playlistpage'

import { loadTestData } from '../utils/JsonHelper'
import { TestData } from '../interface/Module1TestData.interface'

export const test = base.extend<{ 
    saveLogs: void,
    homePage: Homepage,
    resultPage: Resultpage,
    playlistPage: Playlistpage,
    testData: TestData
}>({
    saveLogs: [async ({ }, use) => {
        console.log('Global before is running...')

        await use()

        console.log('Global afterEach is running...')
    },
    { auto: true}],
    homePage: async ({ page}, use) => {
        const homePage = new Homepage(page)
        await use(homePage)
    },
    resultPage: async ({ page}, use) => {
        const resultPage = new Resultpage(page)
        await use(resultPage)
    },
    playlistPage: async ({ page}, use) => {
        const playlistPage = new Playlistpage(page)
        await use(playlistPage)
    },
    testData: async ({ page}, use) => {
        const data = await loadTestData()
        await use(data)
    }
})

export { expect } from '@playwright/test'