const { chromium } = require('playwright');

async function takeScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  // Screenshot 1: Typography Showcase
  console.log('Taking typography showcase screenshot...');
  await page.goto('http://localhost:5173/typography-showcase');
  await page.waitForTimeout(2000); // Wait for fonts to load
  await page.screenshot({
    path: 'docs/screenshots/typography-showcase.png',
    fullPage: true
  });
  console.log('✓ typography-showcase.png saved');

  // Screenshot 2: Login Page (Light theme)
  console.log('Taking login page screenshot (light theme)...');
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'docs/screenshots/login-page-light.png',
    fullPage: false
  });
  console.log('✓ login-page-light.png saved');

  // Screenshot 3: Login Page (Dark theme)
  console.log('Taking login page screenshot (dark theme)...');
  await page.click('button[aria-haspopup="menu"]'); // Click theme toggle button
  await page.waitForTimeout(500);
  await page.click('text=Темная'); // Click dark theme option
  await page.waitForTimeout(500);
  await page.screenshot({
    path: 'docs/screenshots/login-page-dark.png',
    fullPage: false
  });
  console.log('✓ login-page-dark.png saved');

  await browser.close();
  console.log('\n✅ All screenshots created successfully!');
}

takeScreenshots().catch(console.error);
