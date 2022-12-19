import { Component, ViewEncapsulation } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom

})
export class AppComponent {
  title = 'project';
  colval=2;
  Example="Component Interaction";
  image="/assets/image2.jpg";
  vehicleType !: string;  //! definite assignment assertion operator, by using this compiler will understands that this variable, although it is not defined at compile time, shall be defined at run-time
  count=0;
  name="pavi";
  vehicle!: string;
  private _age!: string;     //making age property as private
  get   age():string{
    return this._age;    //get method is used return the private property(age)

  }
  set age(value: string){ 
     this._age=value;
     if(value=="18"){
      alert(`your age is ${value}`);
     }             
                                // set method accepts private value which was passing
  }
  increment(){
   this.count +=1;
  }
  
  updatedVehicleType(updatedvalue: any)  //Typescript doesn't know about type of updatedvalue .you have to give updatedvalue type explicitly
  {
    this.vehicle =updatedvalue;
    if(updatedvalue=="car"){
       alert(`You selected ${updatedvalue}`);
    }
   
  }
  change="Hello";
   
}
