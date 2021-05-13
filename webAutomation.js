const playwright = require('playwright');

(async () => {
    //Code execution happens within in here
    //browser
    const browser = await playwright['firefox'].launch({
        headless: false
    });
    //context    
    const context = await browser.newContext();
    //page
    const page = await context.newPage();
    //navigate to the page
    // await page.goto("https://demosite.executeautomation.com/index.html");
    await page.goto("https://randychoc.webcat.page/test");

    await page.screenshot({path: `ssRandyChocWebCatTest.png`});

    await browser.close();
})();