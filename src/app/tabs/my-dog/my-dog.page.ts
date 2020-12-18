import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';
import * as Parse from 'parse';
import { HttpClientModule, HttpClient } from '@angular/common/http'


const { Camera, Filesystem, Storage } = Plugins;


@Component({
  selector: 'app-my-dog',
  templateUrl: './my-dog.page.html',
  styleUrls: ['./my-dog.page.scss'],
})
export class MyDogPage implements OnInit {


  ages = [];

  dogName:string;
  breed: string;
  weight: number;
  dogAge:number;

  months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  errors = [];
  
  imageAsUrl:string;

  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit() 
  {
    for(let i=1; i <= 25; i++)
    {
      this.ages.push(i)
    }
  }

  protected async takePhoto()
  {
    const capturedPhoto = await Camera.getPhoto(
    {
      resultType: CameraResultType.Base64, 
      source: CameraSource.Camera, 
      quality: 100 
    });

    const file = new Parse.File(new Date().getMilliseconds().toString(), {base64: capturedPhoto.base64String} )
    const photoClass:Parse.Object = new Parse.Object('Photo');
    photoClass.set('photoFile', file);
    const photoAsParseClass = await photoClass.save();
    const photoParse :Parse.File = photoAsParseClass.get('photoFile');
    this.imageAsUrl = photoParse.url();

   }

   private validate()
   {
      if(this.dogName.trim() === "")
        this.errors.push("Please provide name of dog");

      if(this.breed.trim() === "")
        this.errors.push("Please provide a breed");
      
      if(Number(this.weight) === NaN || !this.weight)
        this.errors.push("Please check to make sure weight is correct")
      
      if(!this.dogAge)
        this.errors.push("Please choose the age of your dog")
        
   }

   protected saveToDB()
   {
     
   }

}
