const { chromium } = require('playwright');
const fs = require('fs');

async function createCombinedScreenshot() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });

  // Create HTML page with both screenshots side by side
  const lightImage = fs.readFileSync('docs/screenshots/login-page-light.png').toString('base64');
  const darkImage = fs.readFileSync('docs/screenshots/login-page-dark.png').toString('base64');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 20px;
          background: #f5f5f5;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .container {
          display: flex;
          gap: 20px;
          max-width: 1920px;
          margin: 0 auto;
        }
        .screenshot {
          flex: 1;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .screenshot img {
          width: 100%;
          display: block;
        }
        .label {
          padding: 12px 16px;
          font-size: 14px;
          font-weight: 600;
          color: #333;
          background: white;
          border-bottom: 1px solid #e5e5e5;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="screenshot">
          <div class="label">Light Theme</div>
          <img src="data:image/png;base64,${lightImage}" />
        </div>
        <div class="screenshot">
          <div class="label">Dark Theme</div>
          <img src="data:image/png;base64,${darkImage}" />
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.waitForTimeout(500);

  await page.screenshot({
    path: 'docs/screenshots/login-page.png',
    fullPage: false
  });

  await browser.close();
  console.log('✅ Combined login-page.png created successfully!');
}

createCombinedScreenshot().catch(console.error);
