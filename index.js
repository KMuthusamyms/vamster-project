const puppeteer = require("puppeteer");
const { contentSelector } = require("./contentSelector");
const { tableSelector } = require("./tableSelector");
const BASE_URL =
  "https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020";
const extractDetails = async () => {
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();
  //page.on("console", (consoleObj) => console.log(consoleObj.text()));
  await page.goto(BASE_URL, { waitUntil: "networkidle0", timeout: 90000 });
  await page.evaluate(() => {
    doGTranslate("pt|en");
  });
  await page.waitFor(8000);
  let details = await page.evaluate(contentSelector);
  let links = await page.evaluate(tableSelector);
  let scrapeData = { 
    ...details.data, 
    ...links.data 
  };
  console.log(scrapeData);
  await browser.close();
};
extractDetails();
