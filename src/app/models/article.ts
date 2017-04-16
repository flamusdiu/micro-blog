export class Article {
	id: string;
	title: string;
	description: string;
	date: string;
	author: string;
	rev: string;
	attachments: object;
	
	constructor(props) {
		Object.keys(props).map((e) => {
			if(e.startsWith('_')) {
				let e_new = e.substr(1)
				this[e_new] = props[e];
			} else {
				this[e] = props[e];
			}
		})
	}
	
	getCover() {
		if (this.attachments['cover']) {
			const content_type = this.attachments['cover']['content_type'];
			const data = this.attachments['cover']['data'];
			
			return "data:" + content_type + ";base64," + data;
		} else {
			return "http://loremflickr.com/400/200/technology,telephone/all"
		}
	}
	
	getText() {
		if (this.attachments['index.md'])  {
			return this.attachments['index.md'];
		} else {
			return 'Article content missing from database!';
		}
	}
}