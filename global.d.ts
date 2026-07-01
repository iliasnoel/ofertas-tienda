// global.d.ts
declare module 'unknown-to-any' {
    interface UnknownArray extends Array<unknown> {}
    interface AnyArray extends Array<any> {}
    
    // Permite asignar unknown[] a cualquier tipo de array
    export type RelaxedArray<T> = T[] | UnknownArray | AnyArray;
  }