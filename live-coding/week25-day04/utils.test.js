const puppeteer = require('puppeteer');

const {generateText, checkAndGenerate} = require("./util");

test("generate Text testing", () => {
    var generatedText = generateText("Ansal", 27);
    expect(generatedText).toBe("Ansal (27 years old)");
});

test("generate text check for empty values", () => {
    var generatedText = generateText(null, 27);
    expect(generatedText).toBe("null (27 years old)");
});

test("test checkAndGenearate function", () => {
    var generatedText = checkAndGenerate("Ansal", 27);
    expect(generatedText).toBe("Ansal (27 years old)");
});

test("E2E testing", async () => {
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 80
    });
    const page = await browser.newPage();
    await page.goto('file:///Users/gopimalla/Desktop/attainU/nightingale/js-testing-introduction/index.html');

    await page.click("input#name");
    await page.type("input#name", "Gopi");

    await page.click("input#age");
    await page.type("input#age", "27");

    await page.click("#btnAddUser");

    // const text = await page.$eval(".user-list", el => el.textContent);
    const element = await page.$(".user-list");
    const text = await page.evaluate(element => element.textContent, element);
    
    expect(text).toBe("Gopi (27 years old)");

}, 1000000)