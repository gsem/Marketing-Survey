import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SelectedProductInfoProvider } from '../../providers/selected-product-info/selected-product-info';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  user = {userId: '' };
  data:any;
  public show:boolean = false;
  temp:number = -1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, 
    public modalCtrl: ModalController, public alertCtrl: AlertController,public selectedProductInfo: SelectedProductInfoProvider) {
  }

  ionViewDidLoad() {
    this.user.userId = this.navParams.get('userId'); 
  }

  ionViewWillEnter(){

   this.api.getUserProducts(this.user.userId).then(result => {
      this.data =result;
      if(this.data.res == true){
        this.show=true;
      }
      this.temp = -1; 
   });

  }

  doRegisterProduct(){
    let modal = this.modalCtrl.create("AddProductPage", this.user);
    modal.onDidDismiss(product => {
        this.ionViewWillEnter();      
    });
    modal.present(); 
  }

  doProductEnquiry(productType,productId,productBrand,productModel){
   this.selectedProductInfo.userId = this.user.userId;
   this.selectedProductInfo.product.productType = productType;
   this.selectedProductInfo.product.productId = productId;
   this.selectedProductInfo.product.productBrand = productBrand;
   this.selectedProductInfo.product.productModel = productModel;
   this.navCtrl.push("ProductEnquiryPage");
  }

  getQuestions(productType,productId,count,active){

    var product = {productType: productType, userId: this.user.userId, productId: productId, count: count, active: active};
    this.navCtrl.push("QuestionPage", product);
  }

  toggleSection(i){
    this.data.product[i].open = !this.data.product[i].open;
    if(this.temp != i){
    if(this.temp != -1){
    this.data.product[this.temp].open = !this.data.product[this.temp].open;}
    this.temp = i;
    }
    else{
     this.temp = -1;
    }
  }
  
}