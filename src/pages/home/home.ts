import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SelectPicPage } from '../select-pic/select-pic'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  seletModal(event) {
    console.log(event)
    let modal = this.modalCtrl.create(SelectPicPage);
    modal.present()
  }
}
