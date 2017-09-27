import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { UserPage } from "../user/user";

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  data:any;
  displayedQuestion = '';
  displayedOptions:any;
  currentResponse:number;
  questionIndex:number = 0;
  product = {productType: '', count: ''};
  productId:'';
  user = {userId: '' };
  public active:boolean = false;
  
  answer: any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.product.productType = this.navParams.get('productType');
    this.product.count = this.navParams.get('count');
    this.user.userId = this.navParams.get('userId');
    this.productId = this.navParams.get('productId');
    this.active = this.navParams.get('active')
  }

  ionViewWillEnter(){

    if(this.product.count == '0'){
      this.api.getQuestions1(this.product).then(result => {
      this.data = result;
      if(this.data.res == true){
        this.displayedQuestion = this.data.question[this.questionIndex].question;
        this.displayedOptions = this.data.question[this.questionIndex].response;
         }
        else { console.log(this.data.response); }
    
      });
    }
  else {
  
    this.api.getQuestions2(this.product).then(result => {
      this.data = result;
      if(this.data.res == true){
        this.displayedQuestion = this.data.question[this.questionIndex].question;
        this.displayedOptions = this.data.question[this.questionIndex].response;
         }
        else { console.log(this.data.response); }
      });
  
  }

  }

  doSave(){

   this.answer[this.questionIndex] = this.currentResponse;
   console.log(this.currentResponse);

   if (this.questionIndex == (this.data.question.length - 1) ){
       console.log("end of question");
       let surveyResponse: Array<{response: number, questionId: string}>= new Array<{response: number, questionId: string}>();
       for (var index = 0; index < this. answer.length; index++) {
          var element = {"response": this.answer[index], "questionId": this.data.question[index]._id};
          surveyResponse.push(element);
       }
        let surveyData = { response:surveyResponse, productId:this.productId, questionaireId:this.data.id, userId:this.user.userId }
       console.log(surveyData);
       this.api.postSurveyResponse(surveyData).then(result => {
         var response:any = result;
         console.log(response.res);
          if(response.res == true){
        
            let toast = this.toastCtrl.create({
            message: 'Response was added successfully',
            duration: 3000,
            position: 'top'
            });
          toast.present();
          } 
      });
    let temp = { userId:this.user.userId, productType:this.product.productType, count: (this.product.count + 1), active: false};
    this.api.incrementProductCount(temp);
    this.navCtrl.popTo(this.navCtrl.getByIndex(1));
    //this.navCtrl.push("UserPage");
   }

   else {
   this.questionIndex = this.questionIndex + 1 ; 
   this.ionViewWillEnter();
   }

  }

  }