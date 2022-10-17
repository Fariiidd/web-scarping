const puppeter = require("puppeteer");
const userAgent = require("random-useragent");

const appInit = async () => {

    const randomAgent = userAgent.getRandom((ua) => {
        return ua.browserName === "Firefox";
    })

    const browser = await puppeter.launch({headless: false});
    const page = await browser.newPage();
    
    await page.setUserAgent(randomAgent);
    await page.setViewport({width: 1860, height: 1080});

    await page.goto("https://www.pokemon.com/us/pokedex/");
};

appInit();