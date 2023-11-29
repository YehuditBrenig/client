import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { __values } from 'tslib';
import { ServiceService } from './services/service.service';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  dataa: any;
  private URL = '/assets/p.json';

  constructor() {

  }

  ngOnInit() {


  }
}








function plainToClass(Foo: any, jsonObject: Observable<Object>) {
  throw new Error('Function not implemented.');
}

