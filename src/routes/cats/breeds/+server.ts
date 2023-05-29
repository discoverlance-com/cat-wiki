import { env } from '$env/dynamic/private';
import type { Breed } from '$types/cat.js';
import { json, error } from '@sveltejs/kit';

export async function GET({ url }) {
	const name = url.searchParams.get('breed');
	console.log('Called');

	try {
		if (name) {
			const breeds_url = new URL(env.BASE_CAT_API_URL + '/breeds');
			breeds_url.searchParams.set('limit', '100');
			breeds_url.searchParams.set('page', '0');
			const cat_breeds_request = await fetch(breeds_url.href, {
				headers: { 'x-api-key': env.CAT_API_KEY, 'content-type': 'application/json' }
			});

			const cat_breeds = (await cat_breeds_request.json()) as Breed[];

			const found_breeds = cat_breeds.filter((breed) =>
				breed.name.toLowerCase().includes(decodeURIComponent(name).toLowerCase())
			);
			return json({
				breeds: found_breeds
			});
		}
		return json({ breeds: [] });
	} catch (err) {
		console.warn(err);
		throw error(
			404,
			'Error, cat breed could not be found or not loaded because of an api quota limit reached.'
		);
	}
}
