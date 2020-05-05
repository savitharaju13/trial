import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  @Input('amount')
  amount:number;
  @Input('time')
  time:number;
  @Input('roi')
  roi:number;

  emi:number;
  r:number;
  n:number;

  constructor() { }

  ngOnInit(): void {
  }
personal(amount,time,roi)

{
  this.n=time*12;//to calculate no of months
    this.r=roi/(12*100) ;
    this.emi=((amount*this.r*Math.pow((1+this.r),this.n))/(Math.pow((1+this.r),this.n)-1));

}
}
