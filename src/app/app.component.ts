import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  switch:boolean=false;
  constructor() { }
 
 
  ngOnInit(): void {
  }

toggleSwitch()
{
  this.switch!=this.switch;
}

}
