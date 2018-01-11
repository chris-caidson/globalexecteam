import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PdfProvider {

  constructor(public http: HttpClient) {
  }

}
