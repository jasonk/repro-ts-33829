import { ZodTypeAny } from 'zod';
import { Type, TypeOptions } from './Type';

export function wrap<
U extends ZodTypeAny = ZodTypeAny,
  A extends any[] = unknown[],
>(
  type: ( ( ...args1: A ) => U ),
  opts: Omit<TypeOptions, 'zodType'>
): ( ...args: A ) => Type<U> {
  return ( ...args2: A ) => {
    const zodType = type( ...args2 );
    return new Type( { zodType, ...opts } );
  };
}
