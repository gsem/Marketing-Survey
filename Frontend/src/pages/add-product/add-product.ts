import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  data:any;
  productTypes:any;
  product = {productType: '', productBrand: '', productModel: '', productMakeYear: '', productPurchaseDate: '', userId: '', intervalPeriod: ''};
  verifyData: FormGroup;
  public showError:boolean = false

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public viewCtrl: ViewController, public formBuilder: FormBuilder) {

    this.verifyData = formBuilder.group({
      type: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      makeYear: ['', Validators.required],
      purchaseDate: ['', Validators.required]

  });

  }

 ionViewDidLoad() {

 this.api.getProductTypes().then(result => {
 this.productTypes= result;
 });
    
 }

 doSave(){ 
    
    for (var index = 0; index < this.productTypes.length; index++) {
      var element = this.productTypes[index].productType;
      if(element == this.product.productType){
        this.product.intervalPeriod = this.productTypes[index].intervalPeriod;
        break;
      }
    
    }

    this.product.userId = this.navParams.get('userId');
    this.api.registerUserProducts(this.product).then(result => {
    this.data =result;
    console.log(this.product);
     if(this.data.res == true){
      console.log(this.data);
      this.viewCtrl.dismiss();
     } 
     if(this.data.res == false){
       console.log("errrrrr");
     this.showError = true;
     } 
   });

 }

 doClose(){

  this.viewCtrl.dismiss();

 }
  
}
