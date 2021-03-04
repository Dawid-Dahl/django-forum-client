type TCategory = {
	id: number;
	title: string;
	country: string;
	created_at?: string;
	updated_at?: string;
};

type TPost = {
	id: number;
	parent: TPost | null;
	author: number;
	country: string;
	category: TCategory;
	title: string;
	content: string;
	view_count: number;
	created_at?: string;
	updated_at?: string;
};
