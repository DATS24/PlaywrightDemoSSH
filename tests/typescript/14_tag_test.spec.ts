import {test, expect} from '@playwright/test'

//Write a test
test('Test1',{tag: ['@SmokeTesting']}, async ({ page }) => {

})

//Write a test
test('Test2', {tag: ['@SmokeTesting', '@RegressionTesting']}, async ({ page }) => {

})

//Write a test
test('Test3', {tag: ['@SmokeTesting']}, async ({ page }) => {

})
