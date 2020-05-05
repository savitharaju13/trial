import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  emi:number;
  t:number;
  n:number;
  
  constructor() { }

  ngOnInit(): void {
  }
  home(amount,time,roi)

  {
    this.t=time*12;
          this.n=roi/(12*100) ;
      this.emi=((amount*this.n*Math.pow((1+this.n),this.t))/(Math.pow((1+this.n),this.t)-1));
  
  }
}
