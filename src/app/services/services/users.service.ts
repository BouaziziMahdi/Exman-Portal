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

import { LightUserDto } from '../models/light-user-dto';
import { Userdto } from '../models/userdto';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation save
   */
  static readonly SavePath = '/api/v1/users/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save$Response(params: {
    body: LightUserDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.SavePath, 'put');
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
   * To access the full response (for headers, for example), `save$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save(params: {
    body: LightUserDto
  },
  context?: HttpContext

): Observable<number> {

    return this.save$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findAll1
   */
  static readonly FindAll1Path = '/api/v1/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Userdto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.FindAll1Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Userdto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: {
  },
  context?: HttpContext

): Observable<Array<Userdto>> {

    return this.findAll1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Userdto>>) => r.body as Array<Userdto>)
    );
  }

  /**
   * Path part for operation save2
   */
  static readonly Save2Path = '/api/v1/users';

  /**
   * Saves a user to the database
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2$Response(params: {
    body: Userdto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.Save2Path, 'post');
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
   * Saves a user to the database
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2(params: {
    body: Userdto
  },
  context?: HttpContext

): Observable<number> {

    return this.save2$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation validate
   */
  static readonly ValidatePath = '/api/v1/users/validate/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validate()` instead.
   *
   * This method doesn't expect any request body.
   */
  validate$Response(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ValidatePath, 'patch');
    if (params) {
      rb.path('user-id', params['user-id'], {});
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
   * To access the full response (for headers, for example), `validate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  validate(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<number> {

    return this.validate$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation invalidate
   */
  static readonly InvalidatePath = '/api/v1/users/invalidate/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invalidate()` instead.
   *
   * This method doesn't expect any request body.
   */
  invalidate$Response(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.InvalidatePath, 'patch');
    if (params) {
      rb.path('user-id', params['user-id'], {});
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
   * To access the full response (for headers, for example), `invalidate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  invalidate(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<number> {

    return this.invalidate$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findById1
   */
  static readonly FindById1Path = '/api/v1/users/{user-id}';

  /**
   * Finds user by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Userdto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.FindById1Path, 'get');
    if (params) {
      rb.path('user-id', params['user-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Userdto>;
      })
    );
  }

  /**
   * Finds user by ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<Userdto> {

    return this.findById1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Userdto>) => r.body as Userdto)
    );
  }

}
