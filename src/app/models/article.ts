export class Article {
	id: string;
	title: string;
	description: string;
	date: string;
	author: string;
	rev: string;
	attachments: object;
	
	constructor(private props) {
		Object.keys(props).map((e) => {
			if(e.startsWith('_')) {
				let e_new = e.substr(1)
				this[e_new] = props[e];
			} else {
				this[e] = props[e];
			}
		})
	}
}