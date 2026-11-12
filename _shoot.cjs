// One-off screenshot capture — uses playwright installed in the go7 project.
const { chromium } = require("C:/Users/7linkz/Desktop/go7/node_modules/playwright");

const OUT = "C:/Users/7linkz/Desktop/portfoliol/shots";

const targets = [
  {
    url: "http://localhost:8787/",
    file: "_preview.png",
    wait: 2500,
    fullPage: true,
  },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });
  for (const t of targets) {
    try {
      await page.goto(t.url, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
      await page.evaluate(() =>
        document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"))
      );
      await page.waitForTimeout(t.wait);
      await page.screenshot({ path: `${OUT}/${t.file}`, fullPage: !!t.fullPage });
      console.log("saved", t.file);
    } catch (e) {
      console.log("FAILED", t.file, e.message);
    }
  }
  await browser.close();
})();
