import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Cook } from '../cook-basic/cook-basic';

@Injectable()
export class CookService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = '';  // URL to web api
 
  constructor(private http: Http) { }

  addCook(data):void{
    console.log(data);
  }
}