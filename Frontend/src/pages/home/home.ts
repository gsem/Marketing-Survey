import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserPage } from "../user/user";
import { SignUpPage} from "../sign-up/sign-up";
import 'rxjs/add/operator/map';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any;
  user = { email:'', password:''};
  public invalidPassword:boolean = false
  public invalidEmail:boolean = false

  constructor(public navCtrl: NavController, public api: ApiProvider ) {

  }

  doLogin(){

     this.api.login(this.user).then(result => {
       this.data = result;

       if(this.data.res == true){
        this.navCtrl.push("UserPage", this.data);
        console.log(this.data);
      }

      else if(this.data.res == false && this.data.response == "Invalid Password"){
        this.invalidPassword = true;
        this.invalidEmail = false;
      }

      else if(this.data.res == false && this.data.response == "User not exist"){
        this.invalidEmail = true;
        this.invalidPassword = false;
      }

     });
  }

  doSignUp(){
     this.navCtrl.push(SignUpPage);
  }

}
