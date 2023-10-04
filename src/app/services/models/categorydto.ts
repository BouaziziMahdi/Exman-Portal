/* tslint:disable */
/* eslint-disable */
import { Quizdto } from './quizdto';
export interface Categorydto {
  description?: string;
  id?: number;
  quizzes?: Array<Quizdto>;
  title: string;
}
