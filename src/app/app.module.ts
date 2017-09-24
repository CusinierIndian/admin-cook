import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CookBasicComponent } from './cook-basic/cook-basic.component';
import { CookDetailsComponent } from './cook-details/cook-details.component';
import { CookService } from './Service/cook-service';
import { MyDatePickerModule } from 'mydatepicker';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CookBasicComponent,
    CookDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  
   
  
   

  ],
 providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
