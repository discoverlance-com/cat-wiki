export type Breed = {
	id: string;
	name: string;
	temperament: string;
	description: string;
	origin: string;
	life_span: string;
	adaptability: number;
	affection_level: number;
	child_friendly: number;
	dog_friendly: number;
	energy_level: number;
	grooming: number;
	health_issues: number;
	intelligence: number;
	social_needs: number;
	stranger_friendly: number;
	reference_image_id: string;
};

export interface Cat {
	id: string;
	url: string;
	width: number;
	height: number;
	breeds?: Breed[];
}
