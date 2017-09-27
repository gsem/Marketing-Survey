import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailEnquiryPage } from './detail-enquiry';

@NgModule({
  declarations: [
    DetailEnquiryPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailEnquiryPage),
  ],
})
export class DetailEnquiryPageModule {}
