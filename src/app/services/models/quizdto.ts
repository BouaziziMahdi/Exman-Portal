/* tslint:disable */
/* eslint-disable */
import { Categorydto } from './categorydto';
import { Questionsdto } from './questionsdto';
export interface Quizdto {
  active?: boolean;
  category?: Categorydto;
  description?: string;
  id?: number;
  maxMarks?: string;
  numberOfQuestion?: string;
  questions?: Array<Questionsdto>;
  title: string;
}
