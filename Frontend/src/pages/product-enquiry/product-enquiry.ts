import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailEnquiryPage } from "../detail-enquiry/detail-enquiry";
import { SelectedProductInfoProvider } from '../../providers/selected-product-info/selected-product-info';

@IonicPage()
@Component({
  selector: 'page-product-enquiry',
  templateUrl: 'product-enquiry.html',
})
export class ProductEnquiryPage {
  product = {productType: '' , productBrand: '', productModel: ''};
  response = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public selectedProductInfo: SelectedProductInfoProvider) {

    this.product.productType = this.selectedProductInfo.product.productType;
    this.product.productBrand = this.selectedProductInfo.product.productBrand;
    this.product.productModel = this.selectedProductInfo.product.productModel;
  }

  ionViewDidLoad() {

  }
 
 continue(){
 if(this.response == "true"){
    this.navCtrl.push("DetailEnquiryPage");
 }
else{
  this.navCtrl.pop();
}

 }


}
