import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  constructor() { }

  public  redirectIndex1 : number = 0;
  public  redirectIndex2 : number = 0;
  public  redirectIndex3 : number = 0;
 

  public  setIndex1(): void{
      this.redirectIndex1 =1;
      this.redirectIndex2=0;
      this.redirectIndex3=0;
       
      //this.router.navigateByUrl('/testComponent');
 
  }
   public  setIndex2(): void{
      this.redirectIndex1 =0;
      this.redirectIndex2 =1;
      this.redirectIndex3=0;
       
      //this.router.navigateByUrl('/testComponent');
 
  }
   public  setIndex3(): void{
         this.redirectIndex1 =0;
          this.redirectIndex2=0;
      this.redirectIndex3 =1;
       
      //this.router.navigateByUrl('/testComponent');
 
  }
  openNav() {
    document.getElementById("mySidenav").style.display = "block";
}
closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}

}
