import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductEnquiryPage } from './product-enquiry';

@NgModule({
  declarations: [
    ProductEnquiryPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductEnquiryPage),
  ],
})
export class ProductEnquiryPageModule {}
