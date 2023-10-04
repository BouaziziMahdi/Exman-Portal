/* tslint:disable */
/* eslint-disable */
import { Quizdto } from './quizdto';
export interface Questionsdto {
  answer: string;
  content: string;
  givenAnswer?: string;
  id?: number;
  image?: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  quiz: Quizdto;
}
