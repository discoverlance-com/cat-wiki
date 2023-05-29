import { expect, test } from '@playwright/test';

test('most popular page should show title', async ({ page }) => {
	await page.goto('/most-popular');
	const title = page.getByRole('heading', { name: 'Top 10 most searched breeds' });
	await expect(title).toBeVisible();
});
