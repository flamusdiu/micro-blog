export class Article {
	id: string;
	title: string;
	description: string;
	date: string;
	attachments: object;
	
	constructor(props) {
		Object.keys(props).map((e) => {
			this[e] = props[e];
		})
	}
}