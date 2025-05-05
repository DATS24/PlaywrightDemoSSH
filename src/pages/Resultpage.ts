import { Locator, Page } from "@playwright/test";

export class Resultpage {

    readonly page: Page

    constructor(page: Page){
        this.page = page

        //Elements

    }

    //Methods
    async clickOnPlaylist(link: string){
        await this.page.getByRole('heading').filter({hasText: link}).click()
    }
}