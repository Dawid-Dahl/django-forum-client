type Category = {
	id: number;
	title: string;
	country: string;
	created_at?: string;
	updated_at?: string;
};

type Post = {
	id: number;
	parent: Post | null;
	author: number;
	country: string;
	category: Category;
	title: string;
	content: string;
	view_count: number;
	created_at?: string;
	updated_at?: string;
};
