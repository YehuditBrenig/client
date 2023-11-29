import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageModel } from 'src/app/models/image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})


export class ImageComponent {
  @Input()
  currentImage: ImageModel = new ImageModel();
  @Input()
  last: boolean = false;
  @Output() isBack: EventEmitter<ImageModel> = new EventEmitter<ImageModel>();
  @Output() deleteTheLast: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  savedSuccessfully: boolean = false;

  form: FormGroup = new FormGroup({})
  value: boolean = false;
  addSuccessfully: boolean = false;

  constructor(private fb: FormBuilder) {



  }

  ngOnInit() {

    this.initForm();
    console.log(this.currentImage);


  }


  initForm() {
    this.form = this.fb.group({
      imageNmber: [null, Validators.required],
      imageSavePath: [null, Validators.required],
      ifbackImage: [null],
      imageBackupPath: [null],
    });

    if (this.currentImage) {

      this.form.patchValue(this.currentImage);


    }


  }
  isBackFunc() {
    this.isBack.emit(this.currentImage);
  }
  delete() {
    this.deleteTheLast.emit(true);
    alert("התמונה נמחקה")
  }


}