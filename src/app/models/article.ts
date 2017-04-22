export class Article {
	id: string;
	title: string;
	description: string;
	date: string;
	author: string;
	rev: string;
	attachments: object;
	private _toc: any;

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
	
	get cover(): String {
		if (this.attachments['cover']) {
			const content_type = this.attachments['cover']['content_type'];
			const data = this.attachments['cover']['data'];
			
			return "data:" + content_type + ";base64," + data;
		} else {
			return "http://loremflickr.com/400/200/technology,telephone/all"
		}
	}
	
	get text(): String {
		if (this.attachments['index.md'])  {
			return this.attachments['index.md']['data'];
		} else {
			return 'Article content missing from database!';
		}
	}
	
	set toc(txt) {
		if ( txt instanceof Object && txt.hasOwnProperty('data')) {
			this._toc = txt.data;
		} else {
			this._toc = txt;
		}
	}
	
	get toc() {
		return this._toc;
	}
}