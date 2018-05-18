import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';


/**
 * Generated class for the SelectPicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-select-pic',
  templateUrl: 'select-pic.html',
})
export class SelectPicPage {

  picList: any[] = [
    { picUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2579792798,2077578270&fm=27&gp=0.jpg' },
    { picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526537822930&di=15fef358b8a1db98b2a7e021ce147d23&imgtype=0&src=http%3A%2F%2Fb3-q.mafengwo.net%2Fs10%2FM00%2F44%2F54%2FwKgBZ1h7JMaAc8PeAAFC76SybfM74.jpeg%3FimageView2%2F2%2Fw%2F600%2Fh%2F600%2Fq%2F90' },
    { picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526537822930&di=91f84c565093c202057c885a145b0cdb&imgtype=0&src=http%3A%2F%2Ffile25.mafengwo.net%2FM00%2F25%2F02%2FwKgB4lIreraANDSOAABB9VfF0ZI30.rbook_comment.w600_h400.jpeg' },
    { picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526537822921&di=cee893c0e423147d3ce95a8513b37882&imgtype=0&src=http%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F01%2F48%2Fa9%2Ff6%2Ftup-island.jpg' },
    { picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526537822921&di=59d9f27ffccf2d12dacdd7124454317e&imgtype=0&src=http%3A%2F%2Ffile30.mafengwo.net%2FM00%2F1A%2FA3%2FwKgBpVUJG8eAGeyyAAJpkfaUlC463.groupinfo.w665_500.jpeg' }
  ]
  photos: any[] = [];
  isShowNum: Boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) {
    this.createPhotos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPicPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  clickPic($event,i) {
  
  }

  private createPhotos(length: number = 5) {
    for (let i = 0; i < length; i++) {
      this.photos.push({
        url: this.picList[i].picUrl,
      });
    }
    this.photos[0].title = '图片预览';
  }

  private openModal() {
    console.log('ok')
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.photos,
      initialSlide: 0, // The second image
    });
    modal.present();
  }
}
