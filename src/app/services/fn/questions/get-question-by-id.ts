/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Questionsdto } from '../../models/questionsdto';

export interface GetQuestionById$Params {
  id: number;
}

export function getQuestionById(http: HttpClient, rootUrl: string, params: GetQuestionById$Params, context?: HttpContext): Observable<StrictHttpResponse<Questionsdto>> {
  const rb = new RequestBuilder(rootUrl, getQuestionById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Questionsdto>;
    })
  );
}

getQuestionById.PATH = '/questions/{id}';
