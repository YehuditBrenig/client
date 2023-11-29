import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ImageModel } from '../models/image.model';
import { Collection } from '../models/collection.model';

import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  savedSuccessfully: boolean = false;
  collectionSymbolization: string = "";
  imageArray: ImageModel[] = []
  collectionNmber: string = "";
  basePath: string = "image/";
  path: string = "";
  display: boolean = false;


  currentCollection: Collection = {
    collectionSymbolization: "",
    quantityCollection: 0,
    itemId: "",
    title: ""
  }

  constructor(private fb: FormBuilder, private collectionService: ServiceService) { }

  ngOnInit() {



  }
  getCollection() {
    if (this.collectionSymbolization != "") {
      this.collectionService.getCollectionById(this.collectionSymbolization).subscribe(
        (collection: Collection) => {
          this.currentCollection = collection;

        },
        (error) => {
          console.error('Error fetching currentCollection: ', error);
        }
      );
    }
    else {

      alert("הכנס מספר אוסף");
    }
  }

  addImageDetails() {


    var currentImage: ImageModel = {

      collectionNmber: this.currentCollection.collectionSymbolization, collectionName: this.currentCollection.title, imageNmber: this.currentCollection.quantityCollection, imageSavePath: this.path + "000" + this.currentCollection.quantityCollection, ifbackImage: false, imageBackupPath: this.path + "000" + this.currentCollection.quantityCollection + "XX", isSave: false

    };
    return currentImage;


  }
  addImage() {
    if (this.currentCollection.quantityCollection != undefined && this.currentCollection.collectionSymbolization) {

      var currentImage: ImageModel;
      this.path = this.basePath + this.collectionSymbolization + "/";
      this.currentCollection.quantityCollection++;
      currentImage = this.addImageDetails();
      this.imageArray.push(currentImage);

    }
    else {

      alert("הכנס מספר אוסף");
    }






  }
  save() {
    console.log(this.imageArray);

    if (this.imageArray.length > 0) {

      this.collectionService.saveCollection(this.imageArray).subscribe(
        (b: boolean) => {
          console.log(b);
          this.saveQuantityCollection();
          this.savedSuccessfully = b;


        },
        (error) => {
          console.error('Error fetching currentCollection: ', error);
        }
      );



    }
    else {
      alert("עדיין לא הוספת תמונות לאוסף")
    }


  }

  isBack(e: any) {

    if (e.ifbackImage === false) {
      e.ifbackImage = true;
      console.log(this.imageArray);


    }
    else {
      e.ifbackImage = false;

    }


  }
  deleteTheLast(e: any) {
    this.imageArray.splice(-1)

  }
  saveQuantityCollection() {
    this.collectionService.saveQuantityCollection(this.currentCollection).subscribe(
      (b: boolean) => {
        console.log(b);

      },
      (error) => {
        console.error('Error fetching currentCollection: ', error);
      }
    );



  }
}


