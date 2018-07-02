const puppeteer = require('puppeteer');

(async function main(){
    try{
        
        const browser = await puppeteer.launch({
            userDataDir: '/Users/Nilesh/Library/Application Support/Google/Chrome/Default',
            headless:false
        });
        const page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36')
        
        await page.goto('http://clk.press/13ReasonsWhyS02E02');
        await page.waitForNavigation();
        console.log('it showing');
        
    } catch(e){
        console.log('our error',e);
    }
})();
