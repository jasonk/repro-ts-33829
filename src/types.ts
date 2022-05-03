import { z } from 'zod';
import { wrap } from './wrapper';

export const string = wrap( () => z.string(), { name : 'string' } );
export const number = wrap( () => z.number(), { name : 'number' } );
export const boolean = wrap( () => z.boolean(), { name : 'boolean' } );

export const regex = wrap(
  ( re: RegExp ) => z.string().regex( re ),
  { name : 'regex' },
);
export const options = wrap(
  ( [ first, ...rest ]: readonly string[] ) => z.enum( [ first, ...rest ] ),
  { name : 'options' },
);
