import { Type } from './Type';

import * as TYPES from './types';

export type Types = typeof TYPES;
export type TypeName = keyof Types;

export function getType<K extends TypeName>(
  key: K, ...opts: Parameters<Types[K]>
) {
  const maker: Types[K] = TYPES[ key ];
  if ( typeof maker === 'function' ) {
    return maker( ...opts );
  } else if ( maker instanceof Type ) {
    return maker;
  } else {
    throw new Error( `Unable to get type "${key}"` );
  }
}
