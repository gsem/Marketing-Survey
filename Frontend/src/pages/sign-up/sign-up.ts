import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  data:any;
  user = { name:'', email:'', password:'', phone:'', address:'' };
  verifyData: FormGroup;
  public showError:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public formBuilder: FormBuilder, public toastCtrl: ToastController) {

    this.verifyData = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]

  });

  }

  doSignUp(){
    
         this.api.signUp(this.user).then(result => {
           this.data =result;
          if(this.data.res == true){

              let toast = this.toastCtrl.create({
                message: 'User was added successfully',
                duration: 3000,
                position: 'top'
              });
            
              toast.onDidDismiss(() => {
              });
              toast.present();
             this.navCtrl.pop();
          } 
          else if(this.data.res == false){
            this.showError = true;
          }
        });
  }

}
