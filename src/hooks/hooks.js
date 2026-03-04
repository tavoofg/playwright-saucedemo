const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(30000);

Before(async function () {
    this.browser = await chromium.launch({ headless: process.env.HEADLESS !== 'false' });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (scenario) {
    if (scenario.result.status === 'FAILED') {
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, 'image/png');
    }
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});