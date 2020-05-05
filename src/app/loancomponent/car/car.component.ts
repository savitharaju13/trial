import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input('amount')
  amount:number;
  @Input('time')
  time:number;
  @Input('roi')
  roi:number;

  

  
  t:number;
  n:number;
  emi:number;

  constructor() { }

  ngOnInit(): void {
  }
car(amount,time,roi)

{
  this.t=time*12;//to calculate no of months
    this.n=roi/(12*100) ;
    this.emi=((amount*this.n*Math.pow((1+this.n),this.t))/(Math.pow((1+this.n),this.t)-1));//emi cal
}
}
