export class Article {
	id: string;
	title: string;
	description: string;
	date: string;
	author: string;
	rev: string;
	attachments: object;

	constructor(props: Array<String>) {
		if (props.hasOwnProperty('docs')) props = props['docs'][0];
    
		Object.keys(props).map((e) => {
			if(e.startsWith('_')) {
				let e_new = e.substr(1)
				this[e_new] = props[e];
			} else {
				this[e] = props[e];
			}
		})
	}
	
	get cover(): string {
		if (this.attachments['cover']) {
			const content_type = this.attachments['cover']['content_type'];
			const data = this.attachments['cover']['data'];
			
			return "data:" + content_type + ";base64," + data;
		} else {
			return "../src/assets/images/place-holder-large.png"
		}
	}
	
	get text() {
		if (this.attachments['index.md'])  {
			return this.attachments['index.md']['data'];
		} else {
			return 'Article content missing from database!';
		}
	}
	
	get toc() {
		if (this.attachments['toc'])  {
			return this.attachments['toc']['data'];
		} else {
			return null;
		}
	}
}