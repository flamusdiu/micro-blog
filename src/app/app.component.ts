import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  
  constructor() {
	  
	/*db.find({
		selector: {
			date: { '$gt': null }
		},
		fields: ["_id","date"],
		sort: [{date: 'desc'}]
	}).then((result) => {
		console.log(result);
	}).catch(function(err) {
		throw err;
	});*/
  }
}
