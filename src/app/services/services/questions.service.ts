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

import { Questionsdto } from '../models/questionsdto';


/**
 * the questions API
 */
@Injectable({
  providedIn: 'root',
})
export class QuestionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateQuestion
   */
  static readonly UpdateQuestionPath = '/questions/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQuestion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateQuestion$Response(params: {
    body: Questionsdto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionsService.UpdateQuestionPath, 'put');
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
   * To access the full response (for headers, for example), `updateQuestion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateQuestion(params: {
    body: Questionsdto
  },
  context?: HttpContext

): Observable<number> {

    return this.updateQuestion$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation evalQuiz
   */
  static readonly EvalQuizPath = '/questions/eval-quiz';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `evalQuiz()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  evalQuiz$Response(params: {
    body: Array<Questionsdto>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionsService.EvalQuizPath, 'post');
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
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `evalQuiz$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  evalQuiz(params: {
    body: Array<Questionsdto>
  },
  context?: HttpContext

): Observable<{
}> {

    return this.evalQuiz$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation addQuestion
   */
  static readonly AddQuestionPath = '/questions/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addQuestion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuestion$Response(params: {
    body: Questionsdto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Questionsdto>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionsService.AddQuestionPath, 'post');
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
        return r as StrictHttpResponse<Questionsdto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addQuestion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuestion(params: {
    body: Questionsdto
  },
  context?: HttpContext

): Observable<Questionsdto> {

    return this.addQuestion$Response(params,context).pipe(
      map((r: StrictHttpResponse<Questionsdto>) => r.body as Questionsdto)
    );
  }

  /**
   * Path part for operation getQuestionById
   */
  static readonly GetQuestionByIdPath = '/questions/{idQuestion}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuestionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuestionById$Response(params: {
    idQuestion: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Questionsdto>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionsService.GetQuestionByIdPath, 'get');
    if (params) {
      rb.path('idQuestion', params.idQuestion, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Questionsdto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuestionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuestionById(params: {
    idQuestion: number;
  },
  context?: HttpContext

): Observable<Questionsdto> {

    return this.getQuestionById$Response(params,context).pipe(
      map((r: StrictHttpResponse<Questionsdto>) => r.body as Questionsdto)
    );
  }

  /**
   * Path part for operation getQuestionsofQuiz
   */
  static readonly GetQuestionsofQuizPath = '/questions/quiz/{idQuiz}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuestionsofQuiz()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuestionsofQuiz$Response(params: {
    idQuiz: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Questionsdto>>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionsService.GetQuestionsofQuizPath, 'get');
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
        return r as StrictHttpResponse<Array<Questionsdto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuestionsofQuiz$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuestionsofQuiz(params: {
    idQuiz: number;
  },
  context?: HttpContext

): Observable<Array<Questionsdto>> {

    return this.getQuestionsofQuiz$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Questionsdto>>) => r.body as Array<Questionsdto>)
    );
  }

  /**
   * Path part for operation getQuestionsofQuizAdmin
   */
  static readonly GetQuestionsofQuizAdminPath = '/questions/quiz/all/{idQuiz}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQuestionsofQuizAdmin()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuestionsofQuizAdmin$Response(params: {
    idQuiz: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Questionsdto>>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionsService.GetQuestionsofQuizAdminPath, 'get');
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
        return r as StrictHttpResponse<Array<Questionsdto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQuestionsofQuizAdmin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQuestionsofQuizAdmin(params: {
    idQuiz: number;
  },
  context?: HttpContext

): Observable<Array<Questionsdto>> {

    return this.getQuestionsofQuizAdmin$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Questionsdto>>) => r.body as Array<Questionsdto>)
    );
  }

  /**
   * Path part for operation getAllQuestions
   */
  static readonly GetAllQuestionsPath = '/questions/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllQuestions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllQuestions$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionsService.GetAllQuestionsPath, 'get');
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
   * To access the full response (for headers, for example), `getAllQuestions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllQuestions(params?: {
  },
  context?: HttpContext

): Observable<{
}> {

    return this.getAllQuestions$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

  /**
   * Path part for operation deleteQuestion
   */
  static readonly DeleteQuestionPath = '/questions/quiz/{idQuestion}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteQuestion()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteQuestion$Response(params: {
    idQuestion: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, QuestionsService.DeleteQuestionPath, 'delete');
    if (params) {
      rb.path('idQuestion', params.idQuestion, {});
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
   * To access the full response (for headers, for example), `deleteQuestion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteQuestion(params: {
    idQuestion: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteQuestion$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
