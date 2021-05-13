const playwright = require('playwright');

(async () => {
    //Code execution happens within in here
    //browser
    const browser = await playwright["firefox"].launch({
        headless: false,
        slowMo: 10
    });
    //context
    const context = await browser.newContext();
    //page
    const page = await context.newPage();
    //navigation for page
    await page.setViewportSize({
        width: 1440,
        height: 9000
    })
    await page.goto('https://demosite.executeautomation.com/Login.html');
    await page.type('[name=UserName]', 'executeautomation');
    await page.type('[name=Password]', 'admin');
    await page.keyboard.press('Enter', { delay: 2000 });

    await page.waitForSelector("input[id=Initial]");

    //hover
    await page.hover("[id='Automation Tools']");
    //close browser
    await browser.close();
})();