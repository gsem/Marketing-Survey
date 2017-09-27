import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { QuestionPage } from "../question/question";
import { SelectedProductInfoProvider } from '../../providers/selected-product-info/selected-product-info';

@IonicPage()
@Component({
  selector: 'page-detail-enquiry',
  templateUrl: 'detail-enquiry.html',
})
export class DetailEnquiryPage {

  product = {productType: '', userId: '', productId: '', count: '', active: true};

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public selectedProductInfo: SelectedProductInfoProvider) {
  }

  ionViewDidLoad() {
    
    this.product.productType = this.selectedProductInfo.product.productType;
    this.product.productId = this.selectedProductInfo.product.productId;
    this.product.userId = this.selectedProductInfo.userId;
    this.product.count = this.selectedProductInfo.product.count;
    console.log(this.product);
  }

  continue(){

    this.navCtrl.push("QuestionPage", this.product);
  }

}
