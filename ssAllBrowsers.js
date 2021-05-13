const playwright = require('playwright');

(async () => {
    for (const browsertype of ['chromium', 'firefox', 'webkit']) {
        //Code execution happens within in here
        //browser
        const browser = await playwright[browsertype].launch({
            headless: true
        });
        //context    
        const context = await browser.newContext();
        //page
        const page = await context.newPage();
        //navigate to the page
        await page.goto("https://randychoc.com");
        //screenshots
        await page.screenshot({ path: `./randychocSS/screenshot-${browsertype}.png` });
        //close browser
        await browser.close();
    }
})();