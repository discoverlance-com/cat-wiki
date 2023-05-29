import { expect, test } from '@playwright/test';

test('homepage should show title', async ({ page }) => {
	await page.goto('/');
	const title = page.getByRole('heading', { name: 'CatWiki' });
	await expect(title).toBeVisible();
});
