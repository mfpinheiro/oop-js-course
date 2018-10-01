const puppeteer = require('puppeteer');

const brower = await puppeteer.launch();
const page = await puppeteer.newPage();
await page.tracing.start({
    path: 'trace.json',
    categories: ['devtools.timeline']
})
await page.goto('http://marvel.wikia.com/wiki/Category:Characters');


