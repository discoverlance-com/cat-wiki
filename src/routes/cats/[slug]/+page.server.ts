import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import type { Cat } from '$types/cat';

export const load = (async ({ fetch, params, setHeaders }) => {
	const slug = params.slug;

	setHeaders({
		'cache-control': 'max-age=360'
	});
	try {
		const url = env.BASE_CAT_API_URL + '/images/' + slug;
		const cats_request = await fetch(url, {
			headers: { 'x-api-key': env.CAT_API_KEY, 'content-type': 'application/json' }
		});

		const cat = (await cats_request.json()) as Cat;

		return {
			cat
		};
	} catch (err) {
		console.warn(err);
		throw error(404, {
			message: 'Cat could not be found or loaded because of an api quota limit reached.'
		});
	}
}) satisfies PageServerLoad;
