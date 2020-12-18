import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-photo',
  templateUrl: './dog-photo.page.html',
  styleUrls: ['./dog-photo.page.scss'],
})
export class DogPhotoPage implements OnInit {

  dogName:string;
  dogPhoto:string;

  constructor() { }

  ngOnInit() 
  {
    this.dogName="Tuna Fish";
    this.dogPhoto="/assets/wolf.png"
  }

  //GET Request
  generatePhoto()
  {

  }

}
