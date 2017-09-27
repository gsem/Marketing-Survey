import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {

  apiURL = "http://ec2-18-221-163-114.us-east-2.compute.amazonaws.com:1932/api/";
  //apiURL = "http://localhost:1932/api/";

  constructor(public http: Http) {
  }


 login(user){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
  return new Promise(resolve => {
    this.http.post(this.apiURL+'login', JSON.stringify(user), {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      resolve(data);
    });

  });
 }


 signUp(user){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
  return new Promise(resolve => {
    this.http.post(this.apiURL+'user', JSON.stringify(user), {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      resolve(data);
    });

  });
 }


 getUserProducts(userId){

  return new Promise(resolve => {
    this.http.get(this.apiURL+'product/'+ userId)
    .map(res => res.json())
    .subscribe(data => {
      resolve(data);
    });

  });
 }

 registerUserProducts(product){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
  return new Promise(resolve => {
    this.http.post(this.apiURL+'product', JSON.stringify(product), {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      resolve(data);
    });

  });
 }


 incrementProductCount(product){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return new Promise(resolve => {
    this.http.put(this.apiURL+'product', JSON.stringify(product), {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      resolve(data);
    });

  });
 }

 
 getQuestions1(productType){

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
  return new Promise(resolve => {
    this.http.post(this.apiURL+'questions1', JSON.stringify(productType), {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      resolve(data);
    });

  });
 }


 getQuestions2(productType){
  
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return new Promise(resolve => {
      this.http.post(this.apiURL+'questions2', JSON.stringify(productType), {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      });
  
    });
   }


 postSurveyResponse(surveyData){

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
  return new Promise(resolve => {
    this.http.post(this.apiURL+'response', JSON.stringify(surveyData), {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      resolve(data);
    });

  });

 }

 getProductTypes(){
  
  return new Promise(resolve => {
    this.http.get(this.apiURL+'questionaire1')
    .map(res => res.json())
    .subscribe(data => {
      resolve(data);
    });

  });
 }

checkProductRegistration(data){

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
  return new Promise(resolve => {
    this.http.post(this.apiURL+'checkProduct', JSON.stringify(data), {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      resolve(data);
    });

  });

 }

}
