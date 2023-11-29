import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageModel } from '../models/image.model';
import { Observable } from 'rxjs';
import { Collection } from '../models/collection.model';

@Injectable()

export class ServiceService {





  constructor(private http: HttpClient) { }

  public getCollectionById(collectionSymbolization: string): Observable<Collection> {
    let url = 'https://localhost:7262/api/Collection/' + collectionSymbolization
    return this.http.get<Collection>(url);
  }


  public saveCollection(imageArray: ImageModel[]): Observable<boolean> {
    let url = 'https://localhost:7262/api/Collection'
    return this.http.post<boolean>(url, imageArray);
  }

  public saveQuantityCollection(collection: Collection): Observable<boolean> {
    let url = 'https://localhost:7262/api/Collection'
    return this.http.put<boolean>(url, collection);
  }

}
