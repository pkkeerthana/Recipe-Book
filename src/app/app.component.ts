import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded_feature = 'recipe';

  onNavigate(feature:string){
    console.log(feature);
    this.loaded_feature = feature;
  }
}
