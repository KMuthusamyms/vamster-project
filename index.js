const puppeteer = require("puppeteer");
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
  await browser.close();
};
extractDetails();
