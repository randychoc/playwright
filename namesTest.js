const playwright = require('playwright');

(async () => {
    //Code execution happens within in here
    //browser
    const browser = await playwright['firefox'].launch({
        headless: true
//        slowMo: 10
    });
    //context
    const context = await browser.newContext();
    //page
    const page = await context.newPage();
    //navigation for page
    await page.setViewportSize({
        width: 1440,
        height: 700
    })
    await page.goto('https://randychoc.webcat.page/test');
    //ss in blank
    await page.screenshot({ path: `./webcatSS/blank.png` });
    //first item
    await page.fill('#txtLabel input', 'Kawasaki');
    await page.click('#btnAdd', { delay: 1000 });
    //second item
    await page.fill('#txtLabel input', 'Aprilia');
    await page.click('#btnAdd', { delay: 1000 });
    //third item
    await page.fill('#txtLabel input', 'Ducati');
    await page.click('#btnAdd', { delay: 1000 });
    //fourth item
    await page.fill('#txtLabel input', 'Yamaha');
    await page.click('#btnAdd', { delay: 1000 });
    // ss with 4 items
    await page.screenshot({ path: `./webcatSS/4items.png` });
    // rm item #2
    await page.click('#btnClose1', { delay: 1000 });
    // ss item 2 removed
    await page.screenshot({ path: `./webcatSS/item2rm.png` });

    //close
    await browser.close();
})();