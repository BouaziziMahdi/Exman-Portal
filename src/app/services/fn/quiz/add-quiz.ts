/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Quizdto } from '../../models/quizdto';

export interface AddQuiz$Params {
      body: Quizdto
}

export function addQuiz(http: HttpClient, rootUrl: string, params: AddQuiz$Params, context?: HttpContext): Observable<StrictHttpResponse<Quizdto>> {
  const rb = new RequestBuilder(rootUrl, addQuiz.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Quizdto>;
    })
  );
}

addQuiz.PATH = '/quiz/';
