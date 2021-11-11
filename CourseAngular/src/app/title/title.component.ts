import {Component, OnInit, Output} from '@angular/core';
import {AppComponent} from "../app.component";
import {ColorPatch} from "../models/color-patch";


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  imgUrl = 'https://media.istockphoto.com/vectors/click-bar-and-finger-vector-web-button-icon-template-vector-id1133992590?k=20&m=1133992590&s=170667a&w=0&h=0R9ZkjYcBeKjHZE_zwo2UXNAtFZ1bLkX_ftdZgtKDA0='
  disables= false;
  bgColor = 'blue';
  inputName : string
  Range1 : number;
  Range2 : number;
  Range3 : number;
  Range4 : number;
  imageState : boolean;
  body : Body
  colorPatchArray = []

  backgroundColor : string;

  constructor(public appComponent : AppComponent) { }

  ngOnInit(): void {
    this.colorPatchArray.push(new ColorPatch(0,0,0,1, 'black'));
    this.colorPatchArray.push(new ColorPatch(255,255,255,1, 'white'));
    this.colorPatchArray.push(new ColorPatch(255,0,0,1, 'red'));
    this.colorPatchArray.push(new ColorPatch(0,255,0,1, 'green'));
    this.colorPatchArray.push(new ColorPatch(0,0,255,1, 'blue'));
    this.colorPatchArray.push(new ColorPatch(0,255,255,1, 'magenta'));

  }

  greetingMe(){
    this.imageState = !this.imageState
    this.imageState ? this.imgUrl = 'https://image.freepik.com/vrije-vector/boze-aap_6460-513.jpg' : this.imgUrl = 'https://cdn.webshopapp.com/shops/308103/files/343164646/1600x2048x2/amscan-folieballon-supershape-blije-aap-63-x-91-cm.jpg'
  }

  onSlideChange(){
    this.backgroundColor = `rgb(${this.Range1}, ${this.Range2}, ${this.Range3}, ${this.Range4}`;
  }

  setRanges(){
    this.Range1 = 255
    this.Range2 = 0;
    this.Range3 = 0;
    this.Range4 = 1;
  }

}
