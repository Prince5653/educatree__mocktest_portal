import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css' ]
})
export class HomeComponent {
  latitude:any = 51.678418;
  longitude:any = 7.809007;

  onChooseLocation(event:any){
    this.latitude=event.coords.lat;
    this.longitude=event.coords.lng;
  }

}
