/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Quizdto } from '../models/quizdto';


/**
 * the quiz API
 */
@Injectable({
  providedIn: 'root',
})
export class QuizService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateQuiz
   */
  static readonly UpdateQuizPath = '/quiz/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateQuiz$Response(params: {
    body: Quizdto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, QuizService.UpdateQuizPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateQuiz(params: {
    body: Quizdto
  },
  context?: HttpContext

): Observable<number> {

    return this.updateQuiz$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getAllQuiz
   */
  static readonly GetAllQuizPath = '/quiz/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllQuiz()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllQuiz$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, QuizService.GetAllQuizPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllQuiz$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllQuiz(params?: {
  },
  context?: HttpContext

): Observable<{
}> {

    return this.getAllQuiz$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation addQuiz
   */
  static readonly AddQuizPath = '/quiz/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuiz$Response(params: {
    body: Quizdto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Quizdto>> {

    const rb = new RequestBuilder(this.rootUrl, QuizService.AddQuizPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Quizdto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuiz(params: {
    body: Quizdto
  },
  context?: HttpContext

): Observable<Quizdto> {

    return this.addQuiz$Response(params,context).pipe(
      map((r: StrictHttpResponse<Quizdto>) => r.body as Quizdto)
    );
  }

  /**
   * Path part for operation getQuizById
   */
  static readonly GetQuizByIdPath = '/quiz/{idQuiz}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizById$Response(params: {
    idQuiz: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Quizdto>> {

    const rb = new RequestBuilder(this.rootUrl, QuizService.GetQuizByIdPath, 'get');
    if (params) {
      rb.path('idQuiz', params.idQuiz, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Quizdto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizById(params: {
    idQuiz: number;
  },
  context?: HttpContext

): Observable<Quizdto> {

    return this.getQuizById$Response(params,context).pipe(
      map((r: StrictHttpResponse<Quizdto>) => r.body as Quizdto)
    );
  }

  /**
   * Path part for operation deleteQuiz
   */
  static readonly DeleteQuizPath = '/quiz/{idQuiz}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteQuiz()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteQuiz$Response(params: {
    idQuiz: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, QuizService.DeleteQuizPath, 'delete');
    if (params) {
      rb.path('idQuiz', params.idQuiz, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteQuiz$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteQuiz(params: {
    idQuiz: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteQuiz$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getQuizOfCategory
   */
  static readonly GetQuizOfCategoryPath = '/quiz/categories/{categoryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizOfCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizOfCategory$Response(params: {
    categoryId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Quizdto>>> {

    const rb = new RequestBuilder(this.rootUrl, QuizService.GetQuizOfCategoryPath, 'get');
    if (params) {
      rb.path('categoryId', params.categoryId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Quizdto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizOfCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizOfCategory(params: {
    categoryId: number;
  },
  context?: HttpContext

): Observable<Array<Quizdto>> {

    return this.getQuizOfCategory$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Quizdto>>) => r.body as Array<Quizdto>)
    );
  }

  /**
   * Path part for operation getQuizOfCategoryAndActive
   */
  static readonly GetQuizOfCategoryAndActivePath = '/quiz/categories/{categoryId}/active';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuizOfCategoryAndActive()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizOfCategoryAndActive$Response(params: {
    categoryId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Quizdto>>> {

    const rb = new RequestBuilder(this.rootUrl, QuizService.GetQuizOfCategoryAndActivePath, 'get');
    if (params) {
      rb.path('categoryId', params.categoryId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Quizdto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuizOfCategoryAndActive$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuizOfCategoryAndActive(params: {
    categoryId: number;
  },
  context?: HttpContext

): Observable<Array<Quizdto>> {

    return this.getQuizOfCategoryAndActive$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Quizdto>>) => r.body as Array<Quizdto>)
    );
  }

  /**
   * Path part for operation getActiveQuiz
   */
  static readonly GetActiveQuizPath = '/quiz/active';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActiveQuiz()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActiveQuiz$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Quizdto>>> {

    const rb = new RequestBuilder(this.rootUrl, QuizService.GetActiveQuizPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Quizdto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getActiveQuiz$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActiveQuiz(params?: {
  },
  context?: HttpContext

): Observable<Array<Quizdto>> {

    return this.getActiveQuiz$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Quizdto>>) => r.body as Array<Quizdto>)
    );
  }

}
