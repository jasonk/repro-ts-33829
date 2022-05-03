import { ZodTypeAny } from 'zod';

export interface TypeOptions<T extends ZodTypeAny = ZodTypeAny> {
  name: string;
  zodType: T;
}

export class Type<T extends ZodTypeAny = ZodTypeAny> {

  name: string;
  zodType: T;

  constructor( options: TypeOptions<T> ) {
    this.name = options.name;
    this.zodType = options.zodType;
  }

}
