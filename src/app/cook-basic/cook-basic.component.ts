import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Cook} from './../cook-basic/cook-basic';
import { CookService } from './../Service/cook-service';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-cook-basic',
  templateUrl: './cook-basic.component.html',
  styleUrls: ['./cook-basic.component.css'],
   providers: [ CookService ]

})
export class CookBasicComponent implements OnInit {
  model:Cook;
  genders = ['Male', 'Female'];
  selectedGender=this.genders[0];

  public myDatePickerOptions_DateOf_Birth: IMyDpOptions = {
    // other options...
    todayBtnTxt: 'Today',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    inline: false,
    disableUntil: {year: 1970, month: 1, day: 1},
    disableSince:{year: 2000, month: 1, day: 1}
};
public myDatePickerOptions_Joining_Date: IMyDpOptions = {
  // other options...
  todayBtnTxt: 'Today',
  dateFormat: 'dd-mm-yyyy',
  firstDayOfWeek: 'mo',
  sunHighlight: true,
  inline: false,
  disableUntil: {year: 2017, month: 8, day: 1}
};
public myDatePickerOptions_Date_Of_Leaving: IMyDpOptions = {
  // other options...
  todayBtnTxt: 'Today',
  dateFormat: 'dd-mm-yyyy',
  firstDayOfWeek: 'mo',
  sunHighlight: true,
  inline: false,
  disableUntil: {year: 2017, month: 8, day: 1}
};

// Initialized to specific date (09.10.2018).
public model1: any = { date: { year: 1975, month: 1, day: 1 } };
public model2: any = { date: { year: 2017, month: 8, day: 1 } };
public model3: any = { date: { year: 2017, month: 8, day: 1 } };

  constructor(
    private cookService: CookService
  ) {   }

  ngOnInit() {
    this.model=new Cook();
    console.log(this.selectedGender);
    
    
  }
  
  submitted = false; //form not submited : default
    data: any; //this variable contains our data
    addCook(data):void {  
      this.submitted=true;      
    this.data = JSON.stringify(data);
        console.log(this.data);
        
      this.cookService.addCook(data)

}
}