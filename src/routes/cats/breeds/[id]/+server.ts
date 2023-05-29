import { env } from '$env/dynamic/private';
import { json, error } from '@sveltejs/kit';

export async function GET({ params }) {
	const id = params.id;

	try {
		const breeds_url = new URL(env.BASE_CAT_API_URL + '/images/search');
		breeds_url.searchParams.set('breed_ids', id);
		breeds_url.searchParams.set('limit', '8');
		const cat_breeds_request = await fetch(breeds_url.href, {
			headers: { 'x-api-key': env.CAT_API_KEY, 'content-type': 'application/json' }
		});

		const cat_breeds = await cat_breeds_request.json();
		return json(
			{
				breeds: cat_breeds
			},
			{
				headers: {
					'cache-control': 'max-age=360'
				}
			}
		);
	} catch (err) {
		throw error(
			404,
			'Error, cat breed could not be found or not loaded because of an api quota limit reached.'
		);
	}
}
