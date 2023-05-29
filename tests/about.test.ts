import { expect, test } from '@playwright/test';

test('homepage should show title', async ({ page }) => {
	await page.goto('/about');
	const title = page.getByRole('heading', { name: 'About CatWiki' });
	await expect(title).toBeVisible();
});
