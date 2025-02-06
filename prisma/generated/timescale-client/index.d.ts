
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BiosensorData
 * 
 */
export type BiosensorData = $Result.DefaultSelection<Prisma.$BiosensorDataPayload>
/**
 * Model TemperatureData
 * 
 */
export type TemperatureData = $Result.DefaultSelection<Prisma.$TemperatureDataPayload>
/**
 * Model GsrData
 * 
 */
export type GsrData = $Result.DefaultSelection<Prisma.$GsrDataPayload>
/**
 * Model GlucoseData
 * 
 */
export type GlucoseData = $Result.DefaultSelection<Prisma.$GlucoseDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BiosensorData
 * const biosensorData = await prisma.biosensorData.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  BiosensorData: any;
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BiosensorData
   * const biosensorData = await prisma.biosensorData.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.biosensorData`: Exposes CRUD operations for the **BiosensorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BiosensorData
    * const biosensorData = await prisma.biosensorData.findMany()
    * ```
    */
  get biosensorData(): Prisma.BiosensorDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temperatureData`: Exposes CRUD operations for the **TemperatureData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemperatureData
    * const temperatureData = await prisma.temperatureData.findMany()
    * ```
    */
  get temperatureData(): Prisma.TemperatureDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gsrData`: Exposes CRUD operations for the **GsrData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GsrData
    * const gsrData = await prisma.gsrData.findMany()
    * ```
    */
  get gsrData(): Prisma.GsrDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.glucoseData`: Exposes CRUD operations for the **GlucoseData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlucoseData
    * const glucoseData = await prisma.glucoseData.findMany()
    * ```
    */
  get glucoseData(): Prisma.GlucoseDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BiosensorData: 'BiosensorData',
    TemperatureData: 'TemperatureData',
    GsrData: 'GsrData',
    GlucoseData: 'GlucoseData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "biosensorData" | "temperatureData" | "gsrData" | "glucoseData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BiosensorData: {
        payload: Prisma.$BiosensorDataPayload<ExtArgs>
        fields: Prisma.BiosensorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BiosensorDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiosensorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BiosensorDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiosensorDataPayload>
          }
          findFirst: {
            args: Prisma.BiosensorDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiosensorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BiosensorDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiosensorDataPayload>
          }
          findMany: {
            args: Prisma.BiosensorDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiosensorDataPayload>[]
          }
          create: {
            args: Prisma.BiosensorDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiosensorDataPayload>
          }
          createMany: {
            args: Prisma.BiosensorDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BiosensorDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiosensorDataPayload>[]
          }
          delete: {
            args: Prisma.BiosensorDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiosensorDataPayload>
          }
          update: {
            args: Prisma.BiosensorDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiosensorDataPayload>
          }
          deleteMany: {
            args: Prisma.BiosensorDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BiosensorDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BiosensorDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiosensorDataPayload>[]
          }
          upsert: {
            args: Prisma.BiosensorDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiosensorDataPayload>
          }
          aggregate: {
            args: Prisma.BiosensorDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBiosensorData>
          }
          groupBy: {
            args: Prisma.BiosensorDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<BiosensorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.BiosensorDataCountArgs<ExtArgs>
            result: $Utils.Optional<BiosensorDataCountAggregateOutputType> | number
          }
        }
      }
      TemperatureData: {
        payload: Prisma.$TemperatureDataPayload<ExtArgs>
        fields: Prisma.TemperatureDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemperatureDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemperatureDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemperatureDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemperatureDataPayload>
          }
          findFirst: {
            args: Prisma.TemperatureDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemperatureDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemperatureDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemperatureDataPayload>
          }
          findMany: {
            args: Prisma.TemperatureDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemperatureDataPayload>[]
          }
          create: {
            args: Prisma.TemperatureDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemperatureDataPayload>
          }
          createMany: {
            args: Prisma.TemperatureDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemperatureDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemperatureDataPayload>[]
          }
          delete: {
            args: Prisma.TemperatureDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemperatureDataPayload>
          }
          update: {
            args: Prisma.TemperatureDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemperatureDataPayload>
          }
          deleteMany: {
            args: Prisma.TemperatureDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemperatureDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemperatureDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemperatureDataPayload>[]
          }
          upsert: {
            args: Prisma.TemperatureDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemperatureDataPayload>
          }
          aggregate: {
            args: Prisma.TemperatureDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemperatureData>
          }
          groupBy: {
            args: Prisma.TemperatureDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemperatureDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemperatureDataCountArgs<ExtArgs>
            result: $Utils.Optional<TemperatureDataCountAggregateOutputType> | number
          }
        }
      }
      GsrData: {
        payload: Prisma.$GsrDataPayload<ExtArgs>
        fields: Prisma.GsrDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GsrDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GsrDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GsrDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GsrDataPayload>
          }
          findFirst: {
            args: Prisma.GsrDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GsrDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GsrDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GsrDataPayload>
          }
          findMany: {
            args: Prisma.GsrDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GsrDataPayload>[]
          }
          create: {
            args: Prisma.GsrDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GsrDataPayload>
          }
          createMany: {
            args: Prisma.GsrDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GsrDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GsrDataPayload>[]
          }
          delete: {
            args: Prisma.GsrDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GsrDataPayload>
          }
          update: {
            args: Prisma.GsrDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GsrDataPayload>
          }
          deleteMany: {
            args: Prisma.GsrDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GsrDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GsrDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GsrDataPayload>[]
          }
          upsert: {
            args: Prisma.GsrDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GsrDataPayload>
          }
          aggregate: {
            args: Prisma.GsrDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGsrData>
          }
          groupBy: {
            args: Prisma.GsrDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<GsrDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.GsrDataCountArgs<ExtArgs>
            result: $Utils.Optional<GsrDataCountAggregateOutputType> | number
          }
        }
      }
      GlucoseData: {
        payload: Prisma.$GlucoseDataPayload<ExtArgs>
        fields: Prisma.GlucoseDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlucoseDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlucoseDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseDataPayload>
          }
          findFirst: {
            args: Prisma.GlucoseDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlucoseDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseDataPayload>
          }
          findMany: {
            args: Prisma.GlucoseDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseDataPayload>[]
          }
          create: {
            args: Prisma.GlucoseDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseDataPayload>
          }
          createMany: {
            args: Prisma.GlucoseDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlucoseDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseDataPayload>[]
          }
          delete: {
            args: Prisma.GlucoseDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseDataPayload>
          }
          update: {
            args: Prisma.GlucoseDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseDataPayload>
          }
          deleteMany: {
            args: Prisma.GlucoseDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlucoseDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlucoseDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseDataPayload>[]
          }
          upsert: {
            args: Prisma.GlucoseDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlucoseDataPayload>
          }
          aggregate: {
            args: Prisma.GlucoseDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlucoseData>
          }
          groupBy: {
            args: Prisma.GlucoseDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlucoseDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlucoseDataCountArgs<ExtArgs>
            result: $Utils.Optional<GlucoseDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    biosensorData?: BiosensorDataOmit
    temperatureData?: TemperatureDataOmit
    gsrData?: GsrDataOmit
    glucoseData?: GlucoseDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model BiosensorData
   */

  export type AggregateBiosensorData = {
    _count: BiosensorDataCountAggregateOutputType | null
    _avg: BiosensorDataAvgAggregateOutputType | null
    _sum: BiosensorDataSumAggregateOutputType | null
    _min: BiosensorDataMinAggregateOutputType | null
    _max: BiosensorDataMaxAggregateOutputType | null
  }

  export type BiosensorDataAvgAggregateOutputType = {
    frequency: number | null
    bioImpedance: number | null
    phaseAngle: number | null
  }

  export type BiosensorDataSumAggregateOutputType = {
    frequency: number | null
    bioImpedance: number | null
    phaseAngle: number | null
  }

  export type BiosensorDataMinAggregateOutputType = {
    id: string | null
    vid: string | null
    config: string | null
    frequency: number | null
    bioImpedance: number | null
    phaseAngle: number | null
    time: Date | null
  }

  export type BiosensorDataMaxAggregateOutputType = {
    id: string | null
    vid: string | null
    config: string | null
    frequency: number | null
    bioImpedance: number | null
    phaseAngle: number | null
    time: Date | null
  }

  export type BiosensorDataCountAggregateOutputType = {
    id: number
    vid: number
    config: number
    frequency: number
    bioImpedance: number
    phaseAngle: number
    time: number
    _all: number
  }


  export type BiosensorDataAvgAggregateInputType = {
    frequency?: true
    bioImpedance?: true
    phaseAngle?: true
  }

  export type BiosensorDataSumAggregateInputType = {
    frequency?: true
    bioImpedance?: true
    phaseAngle?: true
  }

  export type BiosensorDataMinAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    bioImpedance?: true
    phaseAngle?: true
    time?: true
  }

  export type BiosensorDataMaxAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    bioImpedance?: true
    phaseAngle?: true
    time?: true
  }

  export type BiosensorDataCountAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    bioImpedance?: true
    phaseAngle?: true
    time?: true
    _all?: true
  }

  export type BiosensorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiosensorData to aggregate.
     */
    where?: BiosensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiosensorData to fetch.
     */
    orderBy?: BiosensorDataOrderByWithRelationInput | BiosensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BiosensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiosensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiosensorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BiosensorData
    **/
    _count?: true | BiosensorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BiosensorDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BiosensorDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BiosensorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BiosensorDataMaxAggregateInputType
  }

  export type GetBiosensorDataAggregateType<T extends BiosensorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateBiosensorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBiosensorData[P]>
      : GetScalarType<T[P], AggregateBiosensorData[P]>
  }




  export type BiosensorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiosensorDataWhereInput
    orderBy?: BiosensorDataOrderByWithAggregationInput | BiosensorDataOrderByWithAggregationInput[]
    by: BiosensorDataScalarFieldEnum[] | BiosensorDataScalarFieldEnum
    having?: BiosensorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BiosensorDataCountAggregateInputType | true
    _avg?: BiosensorDataAvgAggregateInputType
    _sum?: BiosensorDataSumAggregateInputType
    _min?: BiosensorDataMinAggregateInputType
    _max?: BiosensorDataMaxAggregateInputType
  }

  export type BiosensorDataGroupByOutputType = {
    id: string
    vid: string
    config: string
    frequency: number
    bioImpedance: number
    phaseAngle: number
    time: Date
    _count: BiosensorDataCountAggregateOutputType | null
    _avg: BiosensorDataAvgAggregateOutputType | null
    _sum: BiosensorDataSumAggregateOutputType | null
    _min: BiosensorDataMinAggregateOutputType | null
    _max: BiosensorDataMaxAggregateOutputType | null
  }

  type GetBiosensorDataGroupByPayload<T extends BiosensorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BiosensorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BiosensorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BiosensorDataGroupByOutputType[P]>
            : GetScalarType<T[P], BiosensorDataGroupByOutputType[P]>
        }
      >
    >


  export type BiosensorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    bioImpedance?: boolean
    phaseAngle?: boolean
    time?: boolean
  }, ExtArgs["result"]["biosensorData"]>

  export type BiosensorDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    bioImpedance?: boolean
    phaseAngle?: boolean
    time?: boolean
  }, ExtArgs["result"]["biosensorData"]>

  export type BiosensorDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    bioImpedance?: boolean
    phaseAngle?: boolean
    time?: boolean
  }, ExtArgs["result"]["biosensorData"]>

  export type BiosensorDataSelectScalar = {
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    bioImpedance?: boolean
    phaseAngle?: boolean
    time?: boolean
  }

  export type BiosensorDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vid" | "config" | "frequency" | "bioImpedance" | "phaseAngle" | "time", ExtArgs["result"]["biosensorData"]>

  export type $BiosensorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BiosensorData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vid: string
      config: string
      frequency: number
      bioImpedance: number
      phaseAngle: number
      time: Date
    }, ExtArgs["result"]["biosensorData"]>
    composites: {}
  }

  type BiosensorDataGetPayload<S extends boolean | null | undefined | BiosensorDataDefaultArgs> = $Result.GetResult<Prisma.$BiosensorDataPayload, S>

  type BiosensorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BiosensorDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BiosensorDataCountAggregateInputType | true
    }

  export interface BiosensorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BiosensorData'], meta: { name: 'BiosensorData' } }
    /**
     * Find zero or one BiosensorData that matches the filter.
     * @param {BiosensorDataFindUniqueArgs} args - Arguments to find a BiosensorData
     * @example
     * // Get one BiosensorData
     * const biosensorData = await prisma.biosensorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BiosensorDataFindUniqueArgs>(args: SelectSubset<T, BiosensorDataFindUniqueArgs<ExtArgs>>): Prisma__BiosensorDataClient<$Result.GetResult<Prisma.$BiosensorDataPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one BiosensorData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BiosensorDataFindUniqueOrThrowArgs} args - Arguments to find a BiosensorData
     * @example
     * // Get one BiosensorData
     * const biosensorData = await prisma.biosensorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BiosensorDataFindUniqueOrThrowArgs>(args: SelectSubset<T, BiosensorDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BiosensorDataClient<$Result.GetResult<Prisma.$BiosensorDataPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first BiosensorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiosensorDataFindFirstArgs} args - Arguments to find a BiosensorData
     * @example
     * // Get one BiosensorData
     * const biosensorData = await prisma.biosensorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BiosensorDataFindFirstArgs>(args?: SelectSubset<T, BiosensorDataFindFirstArgs<ExtArgs>>): Prisma__BiosensorDataClient<$Result.GetResult<Prisma.$BiosensorDataPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first BiosensorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiosensorDataFindFirstOrThrowArgs} args - Arguments to find a BiosensorData
     * @example
     * // Get one BiosensorData
     * const biosensorData = await prisma.biosensorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BiosensorDataFindFirstOrThrowArgs>(args?: SelectSubset<T, BiosensorDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__BiosensorDataClient<$Result.GetResult<Prisma.$BiosensorDataPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more BiosensorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiosensorDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BiosensorData
     * const biosensorData = await prisma.biosensorData.findMany()
     * 
     * // Get first 10 BiosensorData
     * const biosensorData = await prisma.biosensorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const biosensorDataWithIdOnly = await prisma.biosensorData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BiosensorDataFindManyArgs>(args?: SelectSubset<T, BiosensorDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiosensorDataPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a BiosensorData.
     * @param {BiosensorDataCreateArgs} args - Arguments to create a BiosensorData.
     * @example
     * // Create one BiosensorData
     * const BiosensorData = await prisma.biosensorData.create({
     *   data: {
     *     // ... data to create a BiosensorData
     *   }
     * })
     * 
     */
    create<T extends BiosensorDataCreateArgs>(args: SelectSubset<T, BiosensorDataCreateArgs<ExtArgs>>): Prisma__BiosensorDataClient<$Result.GetResult<Prisma.$BiosensorDataPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many BiosensorData.
     * @param {BiosensorDataCreateManyArgs} args - Arguments to create many BiosensorData.
     * @example
     * // Create many BiosensorData
     * const biosensorData = await prisma.biosensorData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BiosensorDataCreateManyArgs>(args?: SelectSubset<T, BiosensorDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BiosensorData and returns the data saved in the database.
     * @param {BiosensorDataCreateManyAndReturnArgs} args - Arguments to create many BiosensorData.
     * @example
     * // Create many BiosensorData
     * const biosensorData = await prisma.biosensorData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BiosensorData and only return the `id`
     * const biosensorDataWithIdOnly = await prisma.biosensorData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BiosensorDataCreateManyAndReturnArgs>(args?: SelectSubset<T, BiosensorDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiosensorDataPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a BiosensorData.
     * @param {BiosensorDataDeleteArgs} args - Arguments to delete one BiosensorData.
     * @example
     * // Delete one BiosensorData
     * const BiosensorData = await prisma.biosensorData.delete({
     *   where: {
     *     // ... filter to delete one BiosensorData
     *   }
     * })
     * 
     */
    delete<T extends BiosensorDataDeleteArgs>(args: SelectSubset<T, BiosensorDataDeleteArgs<ExtArgs>>): Prisma__BiosensorDataClient<$Result.GetResult<Prisma.$BiosensorDataPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one BiosensorData.
     * @param {BiosensorDataUpdateArgs} args - Arguments to update one BiosensorData.
     * @example
     * // Update one BiosensorData
     * const biosensorData = await prisma.biosensorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BiosensorDataUpdateArgs>(args: SelectSubset<T, BiosensorDataUpdateArgs<ExtArgs>>): Prisma__BiosensorDataClient<$Result.GetResult<Prisma.$BiosensorDataPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more BiosensorData.
     * @param {BiosensorDataDeleteManyArgs} args - Arguments to filter BiosensorData to delete.
     * @example
     * // Delete a few BiosensorData
     * const { count } = await prisma.biosensorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BiosensorDataDeleteManyArgs>(args?: SelectSubset<T, BiosensorDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiosensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiosensorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BiosensorData
     * const biosensorData = await prisma.biosensorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BiosensorDataUpdateManyArgs>(args: SelectSubset<T, BiosensorDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiosensorData and returns the data updated in the database.
     * @param {BiosensorDataUpdateManyAndReturnArgs} args - Arguments to update many BiosensorData.
     * @example
     * // Update many BiosensorData
     * const biosensorData = await prisma.biosensorData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BiosensorData and only return the `id`
     * const biosensorDataWithIdOnly = await prisma.biosensorData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BiosensorDataUpdateManyAndReturnArgs>(args: SelectSubset<T, BiosensorDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiosensorDataPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one BiosensorData.
     * @param {BiosensorDataUpsertArgs} args - Arguments to update or create a BiosensorData.
     * @example
     * // Update or create a BiosensorData
     * const biosensorData = await prisma.biosensorData.upsert({
     *   create: {
     *     // ... data to create a BiosensorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BiosensorData we want to update
     *   }
     * })
     */
    upsert<T extends BiosensorDataUpsertArgs>(args: SelectSubset<T, BiosensorDataUpsertArgs<ExtArgs>>): Prisma__BiosensorDataClient<$Result.GetResult<Prisma.$BiosensorDataPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of BiosensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiosensorDataCountArgs} args - Arguments to filter BiosensorData to count.
     * @example
     * // Count the number of BiosensorData
     * const count = await prisma.biosensorData.count({
     *   where: {
     *     // ... the filter for the BiosensorData we want to count
     *   }
     * })
    **/
    count<T extends BiosensorDataCountArgs>(
      args?: Subset<T, BiosensorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BiosensorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BiosensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiosensorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BiosensorDataAggregateArgs>(args: Subset<T, BiosensorDataAggregateArgs>): Prisma.PrismaPromise<GetBiosensorDataAggregateType<T>>

    /**
     * Group by BiosensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiosensorDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BiosensorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BiosensorDataGroupByArgs['orderBy'] }
        : { orderBy?: BiosensorDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BiosensorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiosensorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BiosensorData model
   */
  readonly fields: BiosensorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BiosensorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BiosensorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BiosensorData model
   */ 
  interface BiosensorDataFieldRefs {
    readonly id: FieldRef<"BiosensorData", 'String'>
    readonly vid: FieldRef<"BiosensorData", 'String'>
    readonly config: FieldRef<"BiosensorData", 'String'>
    readonly frequency: FieldRef<"BiosensorData", 'Int'>
    readonly bioImpedance: FieldRef<"BiosensorData", 'Float'>
    readonly phaseAngle: FieldRef<"BiosensorData", 'Float'>
    readonly time: FieldRef<"BiosensorData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BiosensorData findUnique
   */
  export type BiosensorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
    /**
     * Filter, which BiosensorData to fetch.
     */
    where: BiosensorDataWhereUniqueInput
  }

  /**
   * BiosensorData findUniqueOrThrow
   */
  export type BiosensorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
    /**
     * Filter, which BiosensorData to fetch.
     */
    where: BiosensorDataWhereUniqueInput
  }

  /**
   * BiosensorData findFirst
   */
  export type BiosensorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
    /**
     * Filter, which BiosensorData to fetch.
     */
    where?: BiosensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiosensorData to fetch.
     */
    orderBy?: BiosensorDataOrderByWithRelationInput | BiosensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiosensorData.
     */
    cursor?: BiosensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiosensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiosensorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiosensorData.
     */
    distinct?: BiosensorDataScalarFieldEnum | BiosensorDataScalarFieldEnum[]
  }

  /**
   * BiosensorData findFirstOrThrow
   */
  export type BiosensorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
    /**
     * Filter, which BiosensorData to fetch.
     */
    where?: BiosensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiosensorData to fetch.
     */
    orderBy?: BiosensorDataOrderByWithRelationInput | BiosensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiosensorData.
     */
    cursor?: BiosensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiosensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiosensorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiosensorData.
     */
    distinct?: BiosensorDataScalarFieldEnum | BiosensorDataScalarFieldEnum[]
  }

  /**
   * BiosensorData findMany
   */
  export type BiosensorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
    /**
     * Filter, which BiosensorData to fetch.
     */
    where?: BiosensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiosensorData to fetch.
     */
    orderBy?: BiosensorDataOrderByWithRelationInput | BiosensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BiosensorData.
     */
    cursor?: BiosensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiosensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiosensorData.
     */
    skip?: number
    distinct?: BiosensorDataScalarFieldEnum | BiosensorDataScalarFieldEnum[]
  }

  /**
   * BiosensorData create
   */
  export type BiosensorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
    /**
     * The data needed to create a BiosensorData.
     */
    data: XOR<BiosensorDataCreateInput, BiosensorDataUncheckedCreateInput>
  }

  /**
   * BiosensorData createMany
   */
  export type BiosensorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BiosensorData.
     */
    data: BiosensorDataCreateManyInput | BiosensorDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BiosensorData createManyAndReturn
   */
  export type BiosensorDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
    /**
     * The data used to create many BiosensorData.
     */
    data: BiosensorDataCreateManyInput | BiosensorDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BiosensorData update
   */
  export type BiosensorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
    /**
     * The data needed to update a BiosensorData.
     */
    data: XOR<BiosensorDataUpdateInput, BiosensorDataUncheckedUpdateInput>
    /**
     * Choose, which BiosensorData to update.
     */
    where: BiosensorDataWhereUniqueInput
  }

  /**
   * BiosensorData updateMany
   */
  export type BiosensorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BiosensorData.
     */
    data: XOR<BiosensorDataUpdateManyMutationInput, BiosensorDataUncheckedUpdateManyInput>
    /**
     * Filter which BiosensorData to update
     */
    where?: BiosensorDataWhereInput
  }

  /**
   * BiosensorData updateManyAndReturn
   */
  export type BiosensorDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
    /**
     * The data used to update BiosensorData.
     */
    data: XOR<BiosensorDataUpdateManyMutationInput, BiosensorDataUncheckedUpdateManyInput>
    /**
     * Filter which BiosensorData to update
     */
    where?: BiosensorDataWhereInput
  }

  /**
   * BiosensorData upsert
   */
  export type BiosensorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
    /**
     * The filter to search for the BiosensorData to update in case it exists.
     */
    where: BiosensorDataWhereUniqueInput
    /**
     * In case the BiosensorData found by the `where` argument doesn't exist, create a new BiosensorData with this data.
     */
    create: XOR<BiosensorDataCreateInput, BiosensorDataUncheckedCreateInput>
    /**
     * In case the BiosensorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BiosensorDataUpdateInput, BiosensorDataUncheckedUpdateInput>
  }

  /**
   * BiosensorData delete
   */
  export type BiosensorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
    /**
     * Filter which BiosensorData to delete.
     */
    where: BiosensorDataWhereUniqueInput
  }

  /**
   * BiosensorData deleteMany
   */
  export type BiosensorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiosensorData to delete
     */
    where?: BiosensorDataWhereInput
  }

  /**
   * BiosensorData without action
   */
  export type BiosensorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiosensorData
     */
    select?: BiosensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiosensorData
     */
    omit?: BiosensorDataOmit<ExtArgs> | null
  }


  /**
   * Model TemperatureData
   */

  export type AggregateTemperatureData = {
    _count: TemperatureDataCountAggregateOutputType | null
    _avg: TemperatureDataAvgAggregateOutputType | null
    _sum: TemperatureDataSumAggregateOutputType | null
    _min: TemperatureDataMinAggregateOutputType | null
    _max: TemperatureDataMaxAggregateOutputType | null
  }

  export type TemperatureDataAvgAggregateOutputType = {
    frequency: number | null
    temperature: number | null
  }

  export type TemperatureDataSumAggregateOutputType = {
    frequency: number | null
    temperature: number | null
  }

  export type TemperatureDataMinAggregateOutputType = {
    id: string | null
    vid: string | null
    config: string | null
    frequency: number | null
    temperature: number | null
    time: Date | null
  }

  export type TemperatureDataMaxAggregateOutputType = {
    id: string | null
    vid: string | null
    config: string | null
    frequency: number | null
    temperature: number | null
    time: Date | null
  }

  export type TemperatureDataCountAggregateOutputType = {
    id: number
    vid: number
    config: number
    frequency: number
    temperature: number
    time: number
    _all: number
  }


  export type TemperatureDataAvgAggregateInputType = {
    frequency?: true
    temperature?: true
  }

  export type TemperatureDataSumAggregateInputType = {
    frequency?: true
    temperature?: true
  }

  export type TemperatureDataMinAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    temperature?: true
    time?: true
  }

  export type TemperatureDataMaxAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    temperature?: true
    time?: true
  }

  export type TemperatureDataCountAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    temperature?: true
    time?: true
    _all?: true
  }

  export type TemperatureDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemperatureData to aggregate.
     */
    where?: TemperatureDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureData to fetch.
     */
    orderBy?: TemperatureDataOrderByWithRelationInput | TemperatureDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemperatureDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemperatureData
    **/
    _count?: true | TemperatureDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemperatureDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemperatureDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemperatureDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemperatureDataMaxAggregateInputType
  }

  export type GetTemperatureDataAggregateType<T extends TemperatureDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTemperatureData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemperatureData[P]>
      : GetScalarType<T[P], AggregateTemperatureData[P]>
  }




  export type TemperatureDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemperatureDataWhereInput
    orderBy?: TemperatureDataOrderByWithAggregationInput | TemperatureDataOrderByWithAggregationInput[]
    by: TemperatureDataScalarFieldEnum[] | TemperatureDataScalarFieldEnum
    having?: TemperatureDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemperatureDataCountAggregateInputType | true
    _avg?: TemperatureDataAvgAggregateInputType
    _sum?: TemperatureDataSumAggregateInputType
    _min?: TemperatureDataMinAggregateInputType
    _max?: TemperatureDataMaxAggregateInputType
  }

  export type TemperatureDataGroupByOutputType = {
    id: string
    vid: string
    config: string
    frequency: number
    temperature: number
    time: Date
    _count: TemperatureDataCountAggregateOutputType | null
    _avg: TemperatureDataAvgAggregateOutputType | null
    _sum: TemperatureDataSumAggregateOutputType | null
    _min: TemperatureDataMinAggregateOutputType | null
    _max: TemperatureDataMaxAggregateOutputType | null
  }

  type GetTemperatureDataGroupByPayload<T extends TemperatureDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemperatureDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemperatureDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemperatureDataGroupByOutputType[P]>
            : GetScalarType<T[P], TemperatureDataGroupByOutputType[P]>
        }
      >
    >


  export type TemperatureDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    temperature?: boolean
    time?: boolean
  }, ExtArgs["result"]["temperatureData"]>

  export type TemperatureDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    temperature?: boolean
    time?: boolean
  }, ExtArgs["result"]["temperatureData"]>

  export type TemperatureDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    temperature?: boolean
    time?: boolean
  }, ExtArgs["result"]["temperatureData"]>

  export type TemperatureDataSelectScalar = {
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    temperature?: boolean
    time?: boolean
  }

  export type TemperatureDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vid" | "config" | "frequency" | "temperature" | "time", ExtArgs["result"]["temperatureData"]>

  export type $TemperatureDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemperatureData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vid: string
      config: string
      frequency: number
      temperature: number
      time: Date
    }, ExtArgs["result"]["temperatureData"]>
    composites: {}
  }

  type TemperatureDataGetPayload<S extends boolean | null | undefined | TemperatureDataDefaultArgs> = $Result.GetResult<Prisma.$TemperatureDataPayload, S>

  type TemperatureDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemperatureDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemperatureDataCountAggregateInputType | true
    }

  export interface TemperatureDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemperatureData'], meta: { name: 'TemperatureData' } }
    /**
     * Find zero or one TemperatureData that matches the filter.
     * @param {TemperatureDataFindUniqueArgs} args - Arguments to find a TemperatureData
     * @example
     * // Get one TemperatureData
     * const temperatureData = await prisma.temperatureData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemperatureDataFindUniqueArgs>(args: SelectSubset<T, TemperatureDataFindUniqueArgs<ExtArgs>>): Prisma__TemperatureDataClient<$Result.GetResult<Prisma.$TemperatureDataPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TemperatureData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemperatureDataFindUniqueOrThrowArgs} args - Arguments to find a TemperatureData
     * @example
     * // Get one TemperatureData
     * const temperatureData = await prisma.temperatureData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemperatureDataFindUniqueOrThrowArgs>(args: SelectSubset<T, TemperatureDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemperatureDataClient<$Result.GetResult<Prisma.$TemperatureDataPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TemperatureData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureDataFindFirstArgs} args - Arguments to find a TemperatureData
     * @example
     * // Get one TemperatureData
     * const temperatureData = await prisma.temperatureData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemperatureDataFindFirstArgs>(args?: SelectSubset<T, TemperatureDataFindFirstArgs<ExtArgs>>): Prisma__TemperatureDataClient<$Result.GetResult<Prisma.$TemperatureDataPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TemperatureData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureDataFindFirstOrThrowArgs} args - Arguments to find a TemperatureData
     * @example
     * // Get one TemperatureData
     * const temperatureData = await prisma.temperatureData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemperatureDataFindFirstOrThrowArgs>(args?: SelectSubset<T, TemperatureDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemperatureDataClient<$Result.GetResult<Prisma.$TemperatureDataPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TemperatureData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemperatureData
     * const temperatureData = await prisma.temperatureData.findMany()
     * 
     * // Get first 10 TemperatureData
     * const temperatureData = await prisma.temperatureData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temperatureDataWithIdOnly = await prisma.temperatureData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemperatureDataFindManyArgs>(args?: SelectSubset<T, TemperatureDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemperatureDataPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TemperatureData.
     * @param {TemperatureDataCreateArgs} args - Arguments to create a TemperatureData.
     * @example
     * // Create one TemperatureData
     * const TemperatureData = await prisma.temperatureData.create({
     *   data: {
     *     // ... data to create a TemperatureData
     *   }
     * })
     * 
     */
    create<T extends TemperatureDataCreateArgs>(args: SelectSubset<T, TemperatureDataCreateArgs<ExtArgs>>): Prisma__TemperatureDataClient<$Result.GetResult<Prisma.$TemperatureDataPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TemperatureData.
     * @param {TemperatureDataCreateManyArgs} args - Arguments to create many TemperatureData.
     * @example
     * // Create many TemperatureData
     * const temperatureData = await prisma.temperatureData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemperatureDataCreateManyArgs>(args?: SelectSubset<T, TemperatureDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemperatureData and returns the data saved in the database.
     * @param {TemperatureDataCreateManyAndReturnArgs} args - Arguments to create many TemperatureData.
     * @example
     * // Create many TemperatureData
     * const temperatureData = await prisma.temperatureData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemperatureData and only return the `id`
     * const temperatureDataWithIdOnly = await prisma.temperatureData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemperatureDataCreateManyAndReturnArgs>(args?: SelectSubset<T, TemperatureDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemperatureDataPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TemperatureData.
     * @param {TemperatureDataDeleteArgs} args - Arguments to delete one TemperatureData.
     * @example
     * // Delete one TemperatureData
     * const TemperatureData = await prisma.temperatureData.delete({
     *   where: {
     *     // ... filter to delete one TemperatureData
     *   }
     * })
     * 
     */
    delete<T extends TemperatureDataDeleteArgs>(args: SelectSubset<T, TemperatureDataDeleteArgs<ExtArgs>>): Prisma__TemperatureDataClient<$Result.GetResult<Prisma.$TemperatureDataPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TemperatureData.
     * @param {TemperatureDataUpdateArgs} args - Arguments to update one TemperatureData.
     * @example
     * // Update one TemperatureData
     * const temperatureData = await prisma.temperatureData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemperatureDataUpdateArgs>(args: SelectSubset<T, TemperatureDataUpdateArgs<ExtArgs>>): Prisma__TemperatureDataClient<$Result.GetResult<Prisma.$TemperatureDataPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TemperatureData.
     * @param {TemperatureDataDeleteManyArgs} args - Arguments to filter TemperatureData to delete.
     * @example
     * // Delete a few TemperatureData
     * const { count } = await prisma.temperatureData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemperatureDataDeleteManyArgs>(args?: SelectSubset<T, TemperatureDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemperatureData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemperatureData
     * const temperatureData = await prisma.temperatureData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemperatureDataUpdateManyArgs>(args: SelectSubset<T, TemperatureDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemperatureData and returns the data updated in the database.
     * @param {TemperatureDataUpdateManyAndReturnArgs} args - Arguments to update many TemperatureData.
     * @example
     * // Update many TemperatureData
     * const temperatureData = await prisma.temperatureData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemperatureData and only return the `id`
     * const temperatureDataWithIdOnly = await prisma.temperatureData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemperatureDataUpdateManyAndReturnArgs>(args: SelectSubset<T, TemperatureDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemperatureDataPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TemperatureData.
     * @param {TemperatureDataUpsertArgs} args - Arguments to update or create a TemperatureData.
     * @example
     * // Update or create a TemperatureData
     * const temperatureData = await prisma.temperatureData.upsert({
     *   create: {
     *     // ... data to create a TemperatureData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemperatureData we want to update
     *   }
     * })
     */
    upsert<T extends TemperatureDataUpsertArgs>(args: SelectSubset<T, TemperatureDataUpsertArgs<ExtArgs>>): Prisma__TemperatureDataClient<$Result.GetResult<Prisma.$TemperatureDataPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TemperatureData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureDataCountArgs} args - Arguments to filter TemperatureData to count.
     * @example
     * // Count the number of TemperatureData
     * const count = await prisma.temperatureData.count({
     *   where: {
     *     // ... the filter for the TemperatureData we want to count
     *   }
     * })
    **/
    count<T extends TemperatureDataCountArgs>(
      args?: Subset<T, TemperatureDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemperatureDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemperatureData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemperatureDataAggregateArgs>(args: Subset<T, TemperatureDataAggregateArgs>): Prisma.PrismaPromise<GetTemperatureDataAggregateType<T>>

    /**
     * Group by TemperatureData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemperatureDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemperatureDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemperatureDataGroupByArgs['orderBy'] }
        : { orderBy?: TemperatureDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemperatureDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemperatureDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemperatureData model
   */
  readonly fields: TemperatureDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemperatureData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemperatureDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TemperatureData model
   */ 
  interface TemperatureDataFieldRefs {
    readonly id: FieldRef<"TemperatureData", 'String'>
    readonly vid: FieldRef<"TemperatureData", 'String'>
    readonly config: FieldRef<"TemperatureData", 'String'>
    readonly frequency: FieldRef<"TemperatureData", 'Int'>
    readonly temperature: FieldRef<"TemperatureData", 'Float'>
    readonly time: FieldRef<"TemperatureData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemperatureData findUnique
   */
  export type TemperatureDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
    /**
     * Filter, which TemperatureData to fetch.
     */
    where: TemperatureDataWhereUniqueInput
  }

  /**
   * TemperatureData findUniqueOrThrow
   */
  export type TemperatureDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
    /**
     * Filter, which TemperatureData to fetch.
     */
    where: TemperatureDataWhereUniqueInput
  }

  /**
   * TemperatureData findFirst
   */
  export type TemperatureDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
    /**
     * Filter, which TemperatureData to fetch.
     */
    where?: TemperatureDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureData to fetch.
     */
    orderBy?: TemperatureDataOrderByWithRelationInput | TemperatureDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemperatureData.
     */
    cursor?: TemperatureDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemperatureData.
     */
    distinct?: TemperatureDataScalarFieldEnum | TemperatureDataScalarFieldEnum[]
  }

  /**
   * TemperatureData findFirstOrThrow
   */
  export type TemperatureDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
    /**
     * Filter, which TemperatureData to fetch.
     */
    where?: TemperatureDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureData to fetch.
     */
    orderBy?: TemperatureDataOrderByWithRelationInput | TemperatureDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemperatureData.
     */
    cursor?: TemperatureDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemperatureData.
     */
    distinct?: TemperatureDataScalarFieldEnum | TemperatureDataScalarFieldEnum[]
  }

  /**
   * TemperatureData findMany
   */
  export type TemperatureDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
    /**
     * Filter, which TemperatureData to fetch.
     */
    where?: TemperatureDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemperatureData to fetch.
     */
    orderBy?: TemperatureDataOrderByWithRelationInput | TemperatureDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemperatureData.
     */
    cursor?: TemperatureDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemperatureData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemperatureData.
     */
    skip?: number
    distinct?: TemperatureDataScalarFieldEnum | TemperatureDataScalarFieldEnum[]
  }

  /**
   * TemperatureData create
   */
  export type TemperatureDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
    /**
     * The data needed to create a TemperatureData.
     */
    data: XOR<TemperatureDataCreateInput, TemperatureDataUncheckedCreateInput>
  }

  /**
   * TemperatureData createMany
   */
  export type TemperatureDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemperatureData.
     */
    data: TemperatureDataCreateManyInput | TemperatureDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemperatureData createManyAndReturn
   */
  export type TemperatureDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
    /**
     * The data used to create many TemperatureData.
     */
    data: TemperatureDataCreateManyInput | TemperatureDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemperatureData update
   */
  export type TemperatureDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
    /**
     * The data needed to update a TemperatureData.
     */
    data: XOR<TemperatureDataUpdateInput, TemperatureDataUncheckedUpdateInput>
    /**
     * Choose, which TemperatureData to update.
     */
    where: TemperatureDataWhereUniqueInput
  }

  /**
   * TemperatureData updateMany
   */
  export type TemperatureDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemperatureData.
     */
    data: XOR<TemperatureDataUpdateManyMutationInput, TemperatureDataUncheckedUpdateManyInput>
    /**
     * Filter which TemperatureData to update
     */
    where?: TemperatureDataWhereInput
  }

  /**
   * TemperatureData updateManyAndReturn
   */
  export type TemperatureDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
    /**
     * The data used to update TemperatureData.
     */
    data: XOR<TemperatureDataUpdateManyMutationInput, TemperatureDataUncheckedUpdateManyInput>
    /**
     * Filter which TemperatureData to update
     */
    where?: TemperatureDataWhereInput
  }

  /**
   * TemperatureData upsert
   */
  export type TemperatureDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
    /**
     * The filter to search for the TemperatureData to update in case it exists.
     */
    where: TemperatureDataWhereUniqueInput
    /**
     * In case the TemperatureData found by the `where` argument doesn't exist, create a new TemperatureData with this data.
     */
    create: XOR<TemperatureDataCreateInput, TemperatureDataUncheckedCreateInput>
    /**
     * In case the TemperatureData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemperatureDataUpdateInput, TemperatureDataUncheckedUpdateInput>
  }

  /**
   * TemperatureData delete
   */
  export type TemperatureDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
    /**
     * Filter which TemperatureData to delete.
     */
    where: TemperatureDataWhereUniqueInput
  }

  /**
   * TemperatureData deleteMany
   */
  export type TemperatureDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemperatureData to delete
     */
    where?: TemperatureDataWhereInput
  }

  /**
   * TemperatureData without action
   */
  export type TemperatureDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemperatureData
     */
    select?: TemperatureDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemperatureData
     */
    omit?: TemperatureDataOmit<ExtArgs> | null
  }


  /**
   * Model GsrData
   */

  export type AggregateGsrData = {
    _count: GsrDataCountAggregateOutputType | null
    _avg: GsrDataAvgAggregateOutputType | null
    _sum: GsrDataSumAggregateOutputType | null
    _min: GsrDataMinAggregateOutputType | null
    _max: GsrDataMaxAggregateOutputType | null
  }

  export type GsrDataAvgAggregateOutputType = {
    frequency: number | null
    gsr: number | null
  }

  export type GsrDataSumAggregateOutputType = {
    frequency: number | null
    gsr: number | null
  }

  export type GsrDataMinAggregateOutputType = {
    id: string | null
    vid: string | null
    config: string | null
    frequency: number | null
    gsr: number | null
    time: Date | null
  }

  export type GsrDataMaxAggregateOutputType = {
    id: string | null
    vid: string | null
    config: string | null
    frequency: number | null
    gsr: number | null
    time: Date | null
  }

  export type GsrDataCountAggregateOutputType = {
    id: number
    vid: number
    config: number
    frequency: number
    gsr: number
    time: number
    _all: number
  }


  export type GsrDataAvgAggregateInputType = {
    frequency?: true
    gsr?: true
  }

  export type GsrDataSumAggregateInputType = {
    frequency?: true
    gsr?: true
  }

  export type GsrDataMinAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    gsr?: true
    time?: true
  }

  export type GsrDataMaxAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    gsr?: true
    time?: true
  }

  export type GsrDataCountAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    gsr?: true
    time?: true
    _all?: true
  }

  export type GsrDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GsrData to aggregate.
     */
    where?: GsrDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GsrData to fetch.
     */
    orderBy?: GsrDataOrderByWithRelationInput | GsrDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GsrDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GsrData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GsrData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GsrData
    **/
    _count?: true | GsrDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GsrDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GsrDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GsrDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GsrDataMaxAggregateInputType
  }

  export type GetGsrDataAggregateType<T extends GsrDataAggregateArgs> = {
        [P in keyof T & keyof AggregateGsrData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGsrData[P]>
      : GetScalarType<T[P], AggregateGsrData[P]>
  }




  export type GsrDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GsrDataWhereInput
    orderBy?: GsrDataOrderByWithAggregationInput | GsrDataOrderByWithAggregationInput[]
    by: GsrDataScalarFieldEnum[] | GsrDataScalarFieldEnum
    having?: GsrDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GsrDataCountAggregateInputType | true
    _avg?: GsrDataAvgAggregateInputType
    _sum?: GsrDataSumAggregateInputType
    _min?: GsrDataMinAggregateInputType
    _max?: GsrDataMaxAggregateInputType
  }

  export type GsrDataGroupByOutputType = {
    id: string
    vid: string
    config: string
    frequency: number
    gsr: number
    time: Date
    _count: GsrDataCountAggregateOutputType | null
    _avg: GsrDataAvgAggregateOutputType | null
    _sum: GsrDataSumAggregateOutputType | null
    _min: GsrDataMinAggregateOutputType | null
    _max: GsrDataMaxAggregateOutputType | null
  }

  type GetGsrDataGroupByPayload<T extends GsrDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GsrDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GsrDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GsrDataGroupByOutputType[P]>
            : GetScalarType<T[P], GsrDataGroupByOutputType[P]>
        }
      >
    >


  export type GsrDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    gsr?: boolean
    time?: boolean
  }, ExtArgs["result"]["gsrData"]>

  export type GsrDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    gsr?: boolean
    time?: boolean
  }, ExtArgs["result"]["gsrData"]>

  export type GsrDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    gsr?: boolean
    time?: boolean
  }, ExtArgs["result"]["gsrData"]>

  export type GsrDataSelectScalar = {
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    gsr?: boolean
    time?: boolean
  }

  export type GsrDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vid" | "config" | "frequency" | "gsr" | "time", ExtArgs["result"]["gsrData"]>

  export type $GsrDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GsrData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vid: string
      config: string
      frequency: number
      gsr: number
      time: Date
    }, ExtArgs["result"]["gsrData"]>
    composites: {}
  }

  type GsrDataGetPayload<S extends boolean | null | undefined | GsrDataDefaultArgs> = $Result.GetResult<Prisma.$GsrDataPayload, S>

  type GsrDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GsrDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GsrDataCountAggregateInputType | true
    }

  export interface GsrDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GsrData'], meta: { name: 'GsrData' } }
    /**
     * Find zero or one GsrData that matches the filter.
     * @param {GsrDataFindUniqueArgs} args - Arguments to find a GsrData
     * @example
     * // Get one GsrData
     * const gsrData = await prisma.gsrData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GsrDataFindUniqueArgs>(args: SelectSubset<T, GsrDataFindUniqueArgs<ExtArgs>>): Prisma__GsrDataClient<$Result.GetResult<Prisma.$GsrDataPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one GsrData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GsrDataFindUniqueOrThrowArgs} args - Arguments to find a GsrData
     * @example
     * // Get one GsrData
     * const gsrData = await prisma.gsrData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GsrDataFindUniqueOrThrowArgs>(args: SelectSubset<T, GsrDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GsrDataClient<$Result.GetResult<Prisma.$GsrDataPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first GsrData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GsrDataFindFirstArgs} args - Arguments to find a GsrData
     * @example
     * // Get one GsrData
     * const gsrData = await prisma.gsrData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GsrDataFindFirstArgs>(args?: SelectSubset<T, GsrDataFindFirstArgs<ExtArgs>>): Prisma__GsrDataClient<$Result.GetResult<Prisma.$GsrDataPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first GsrData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GsrDataFindFirstOrThrowArgs} args - Arguments to find a GsrData
     * @example
     * // Get one GsrData
     * const gsrData = await prisma.gsrData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GsrDataFindFirstOrThrowArgs>(args?: SelectSubset<T, GsrDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__GsrDataClient<$Result.GetResult<Prisma.$GsrDataPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more GsrData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GsrDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GsrData
     * const gsrData = await prisma.gsrData.findMany()
     * 
     * // Get first 10 GsrData
     * const gsrData = await prisma.gsrData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gsrDataWithIdOnly = await prisma.gsrData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GsrDataFindManyArgs>(args?: SelectSubset<T, GsrDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GsrDataPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a GsrData.
     * @param {GsrDataCreateArgs} args - Arguments to create a GsrData.
     * @example
     * // Create one GsrData
     * const GsrData = await prisma.gsrData.create({
     *   data: {
     *     // ... data to create a GsrData
     *   }
     * })
     * 
     */
    create<T extends GsrDataCreateArgs>(args: SelectSubset<T, GsrDataCreateArgs<ExtArgs>>): Prisma__GsrDataClient<$Result.GetResult<Prisma.$GsrDataPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many GsrData.
     * @param {GsrDataCreateManyArgs} args - Arguments to create many GsrData.
     * @example
     * // Create many GsrData
     * const gsrData = await prisma.gsrData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GsrDataCreateManyArgs>(args?: SelectSubset<T, GsrDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GsrData and returns the data saved in the database.
     * @param {GsrDataCreateManyAndReturnArgs} args - Arguments to create many GsrData.
     * @example
     * // Create many GsrData
     * const gsrData = await prisma.gsrData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GsrData and only return the `id`
     * const gsrDataWithIdOnly = await prisma.gsrData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GsrDataCreateManyAndReturnArgs>(args?: SelectSubset<T, GsrDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GsrDataPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a GsrData.
     * @param {GsrDataDeleteArgs} args - Arguments to delete one GsrData.
     * @example
     * // Delete one GsrData
     * const GsrData = await prisma.gsrData.delete({
     *   where: {
     *     // ... filter to delete one GsrData
     *   }
     * })
     * 
     */
    delete<T extends GsrDataDeleteArgs>(args: SelectSubset<T, GsrDataDeleteArgs<ExtArgs>>): Prisma__GsrDataClient<$Result.GetResult<Prisma.$GsrDataPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one GsrData.
     * @param {GsrDataUpdateArgs} args - Arguments to update one GsrData.
     * @example
     * // Update one GsrData
     * const gsrData = await prisma.gsrData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GsrDataUpdateArgs>(args: SelectSubset<T, GsrDataUpdateArgs<ExtArgs>>): Prisma__GsrDataClient<$Result.GetResult<Prisma.$GsrDataPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more GsrData.
     * @param {GsrDataDeleteManyArgs} args - Arguments to filter GsrData to delete.
     * @example
     * // Delete a few GsrData
     * const { count } = await prisma.gsrData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GsrDataDeleteManyArgs>(args?: SelectSubset<T, GsrDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GsrData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GsrDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GsrData
     * const gsrData = await prisma.gsrData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GsrDataUpdateManyArgs>(args: SelectSubset<T, GsrDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GsrData and returns the data updated in the database.
     * @param {GsrDataUpdateManyAndReturnArgs} args - Arguments to update many GsrData.
     * @example
     * // Update many GsrData
     * const gsrData = await prisma.gsrData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GsrData and only return the `id`
     * const gsrDataWithIdOnly = await prisma.gsrData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GsrDataUpdateManyAndReturnArgs>(args: SelectSubset<T, GsrDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GsrDataPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one GsrData.
     * @param {GsrDataUpsertArgs} args - Arguments to update or create a GsrData.
     * @example
     * // Update or create a GsrData
     * const gsrData = await prisma.gsrData.upsert({
     *   create: {
     *     // ... data to create a GsrData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GsrData we want to update
     *   }
     * })
     */
    upsert<T extends GsrDataUpsertArgs>(args: SelectSubset<T, GsrDataUpsertArgs<ExtArgs>>): Prisma__GsrDataClient<$Result.GetResult<Prisma.$GsrDataPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of GsrData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GsrDataCountArgs} args - Arguments to filter GsrData to count.
     * @example
     * // Count the number of GsrData
     * const count = await prisma.gsrData.count({
     *   where: {
     *     // ... the filter for the GsrData we want to count
     *   }
     * })
    **/
    count<T extends GsrDataCountArgs>(
      args?: Subset<T, GsrDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GsrDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GsrData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GsrDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GsrDataAggregateArgs>(args: Subset<T, GsrDataAggregateArgs>): Prisma.PrismaPromise<GetGsrDataAggregateType<T>>

    /**
     * Group by GsrData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GsrDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GsrDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GsrDataGroupByArgs['orderBy'] }
        : { orderBy?: GsrDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GsrDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGsrDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GsrData model
   */
  readonly fields: GsrDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GsrData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GsrDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GsrData model
   */ 
  interface GsrDataFieldRefs {
    readonly id: FieldRef<"GsrData", 'String'>
    readonly vid: FieldRef<"GsrData", 'String'>
    readonly config: FieldRef<"GsrData", 'String'>
    readonly frequency: FieldRef<"GsrData", 'Int'>
    readonly gsr: FieldRef<"GsrData", 'Float'>
    readonly time: FieldRef<"GsrData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GsrData findUnique
   */
  export type GsrDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
    /**
     * Filter, which GsrData to fetch.
     */
    where: GsrDataWhereUniqueInput
  }

  /**
   * GsrData findUniqueOrThrow
   */
  export type GsrDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
    /**
     * Filter, which GsrData to fetch.
     */
    where: GsrDataWhereUniqueInput
  }

  /**
   * GsrData findFirst
   */
  export type GsrDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
    /**
     * Filter, which GsrData to fetch.
     */
    where?: GsrDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GsrData to fetch.
     */
    orderBy?: GsrDataOrderByWithRelationInput | GsrDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GsrData.
     */
    cursor?: GsrDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GsrData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GsrData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GsrData.
     */
    distinct?: GsrDataScalarFieldEnum | GsrDataScalarFieldEnum[]
  }

  /**
   * GsrData findFirstOrThrow
   */
  export type GsrDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
    /**
     * Filter, which GsrData to fetch.
     */
    where?: GsrDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GsrData to fetch.
     */
    orderBy?: GsrDataOrderByWithRelationInput | GsrDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GsrData.
     */
    cursor?: GsrDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GsrData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GsrData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GsrData.
     */
    distinct?: GsrDataScalarFieldEnum | GsrDataScalarFieldEnum[]
  }

  /**
   * GsrData findMany
   */
  export type GsrDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
    /**
     * Filter, which GsrData to fetch.
     */
    where?: GsrDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GsrData to fetch.
     */
    orderBy?: GsrDataOrderByWithRelationInput | GsrDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GsrData.
     */
    cursor?: GsrDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GsrData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GsrData.
     */
    skip?: number
    distinct?: GsrDataScalarFieldEnum | GsrDataScalarFieldEnum[]
  }

  /**
   * GsrData create
   */
  export type GsrDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
    /**
     * The data needed to create a GsrData.
     */
    data: XOR<GsrDataCreateInput, GsrDataUncheckedCreateInput>
  }

  /**
   * GsrData createMany
   */
  export type GsrDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GsrData.
     */
    data: GsrDataCreateManyInput | GsrDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GsrData createManyAndReturn
   */
  export type GsrDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
    /**
     * The data used to create many GsrData.
     */
    data: GsrDataCreateManyInput | GsrDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GsrData update
   */
  export type GsrDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
    /**
     * The data needed to update a GsrData.
     */
    data: XOR<GsrDataUpdateInput, GsrDataUncheckedUpdateInput>
    /**
     * Choose, which GsrData to update.
     */
    where: GsrDataWhereUniqueInput
  }

  /**
   * GsrData updateMany
   */
  export type GsrDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GsrData.
     */
    data: XOR<GsrDataUpdateManyMutationInput, GsrDataUncheckedUpdateManyInput>
    /**
     * Filter which GsrData to update
     */
    where?: GsrDataWhereInput
  }

  /**
   * GsrData updateManyAndReturn
   */
  export type GsrDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
    /**
     * The data used to update GsrData.
     */
    data: XOR<GsrDataUpdateManyMutationInput, GsrDataUncheckedUpdateManyInput>
    /**
     * Filter which GsrData to update
     */
    where?: GsrDataWhereInput
  }

  /**
   * GsrData upsert
   */
  export type GsrDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
    /**
     * The filter to search for the GsrData to update in case it exists.
     */
    where: GsrDataWhereUniqueInput
    /**
     * In case the GsrData found by the `where` argument doesn't exist, create a new GsrData with this data.
     */
    create: XOR<GsrDataCreateInput, GsrDataUncheckedCreateInput>
    /**
     * In case the GsrData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GsrDataUpdateInput, GsrDataUncheckedUpdateInput>
  }

  /**
   * GsrData delete
   */
  export type GsrDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
    /**
     * Filter which GsrData to delete.
     */
    where: GsrDataWhereUniqueInput
  }

  /**
   * GsrData deleteMany
   */
  export type GsrDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GsrData to delete
     */
    where?: GsrDataWhereInput
  }

  /**
   * GsrData without action
   */
  export type GsrDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GsrData
     */
    select?: GsrDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GsrData
     */
    omit?: GsrDataOmit<ExtArgs> | null
  }


  /**
   * Model GlucoseData
   */

  export type AggregateGlucoseData = {
    _count: GlucoseDataCountAggregateOutputType | null
    _avg: GlucoseDataAvgAggregateOutputType | null
    _sum: GlucoseDataSumAggregateOutputType | null
    _min: GlucoseDataMinAggregateOutputType | null
    _max: GlucoseDataMaxAggregateOutputType | null
  }

  export type GlucoseDataAvgAggregateOutputType = {
    frequency: number | null
    glucose: number | null
  }

  export type GlucoseDataSumAggregateOutputType = {
    frequency: number | null
    glucose: number | null
  }

  export type GlucoseDataMinAggregateOutputType = {
    id: string | null
    vid: string | null
    config: string | null
    frequency: number | null
    glucose: number | null
    time: Date | null
  }

  export type GlucoseDataMaxAggregateOutputType = {
    id: string | null
    vid: string | null
    config: string | null
    frequency: number | null
    glucose: number | null
    time: Date | null
  }

  export type GlucoseDataCountAggregateOutputType = {
    id: number
    vid: number
    config: number
    frequency: number
    glucose: number
    time: number
    _all: number
  }


  export type GlucoseDataAvgAggregateInputType = {
    frequency?: true
    glucose?: true
  }

  export type GlucoseDataSumAggregateInputType = {
    frequency?: true
    glucose?: true
  }

  export type GlucoseDataMinAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    glucose?: true
    time?: true
  }

  export type GlucoseDataMaxAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    glucose?: true
    time?: true
  }

  export type GlucoseDataCountAggregateInputType = {
    id?: true
    vid?: true
    config?: true
    frequency?: true
    glucose?: true
    time?: true
    _all?: true
  }

  export type GlucoseDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlucoseData to aggregate.
     */
    where?: GlucoseDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseData to fetch.
     */
    orderBy?: GlucoseDataOrderByWithRelationInput | GlucoseDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlucoseDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlucoseData
    **/
    _count?: true | GlucoseDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlucoseDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlucoseDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlucoseDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlucoseDataMaxAggregateInputType
  }

  export type GetGlucoseDataAggregateType<T extends GlucoseDataAggregateArgs> = {
        [P in keyof T & keyof AggregateGlucoseData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlucoseData[P]>
      : GetScalarType<T[P], AggregateGlucoseData[P]>
  }




  export type GlucoseDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlucoseDataWhereInput
    orderBy?: GlucoseDataOrderByWithAggregationInput | GlucoseDataOrderByWithAggregationInput[]
    by: GlucoseDataScalarFieldEnum[] | GlucoseDataScalarFieldEnum
    having?: GlucoseDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlucoseDataCountAggregateInputType | true
    _avg?: GlucoseDataAvgAggregateInputType
    _sum?: GlucoseDataSumAggregateInputType
    _min?: GlucoseDataMinAggregateInputType
    _max?: GlucoseDataMaxAggregateInputType
  }

  export type GlucoseDataGroupByOutputType = {
    id: string
    vid: string
    config: string
    frequency: number
    glucose: number
    time: Date
    _count: GlucoseDataCountAggregateOutputType | null
    _avg: GlucoseDataAvgAggregateOutputType | null
    _sum: GlucoseDataSumAggregateOutputType | null
    _min: GlucoseDataMinAggregateOutputType | null
    _max: GlucoseDataMaxAggregateOutputType | null
  }

  type GetGlucoseDataGroupByPayload<T extends GlucoseDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlucoseDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlucoseDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlucoseDataGroupByOutputType[P]>
            : GetScalarType<T[P], GlucoseDataGroupByOutputType[P]>
        }
      >
    >


  export type GlucoseDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    glucose?: boolean
    time?: boolean
  }, ExtArgs["result"]["glucoseData"]>

  export type GlucoseDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    glucose?: boolean
    time?: boolean
  }, ExtArgs["result"]["glucoseData"]>

  export type GlucoseDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    glucose?: boolean
    time?: boolean
  }, ExtArgs["result"]["glucoseData"]>

  export type GlucoseDataSelectScalar = {
    id?: boolean
    vid?: boolean
    config?: boolean
    frequency?: boolean
    glucose?: boolean
    time?: boolean
  }

  export type GlucoseDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vid" | "config" | "frequency" | "glucose" | "time", ExtArgs["result"]["glucoseData"]>

  export type $GlucoseDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlucoseData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vid: string
      config: string
      frequency: number
      glucose: number
      time: Date
    }, ExtArgs["result"]["glucoseData"]>
    composites: {}
  }

  type GlucoseDataGetPayload<S extends boolean | null | undefined | GlucoseDataDefaultArgs> = $Result.GetResult<Prisma.$GlucoseDataPayload, S>

  type GlucoseDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlucoseDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlucoseDataCountAggregateInputType | true
    }

  export interface GlucoseDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlucoseData'], meta: { name: 'GlucoseData' } }
    /**
     * Find zero or one GlucoseData that matches the filter.
     * @param {GlucoseDataFindUniqueArgs} args - Arguments to find a GlucoseData
     * @example
     * // Get one GlucoseData
     * const glucoseData = await prisma.glucoseData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlucoseDataFindUniqueArgs>(args: SelectSubset<T, GlucoseDataFindUniqueArgs<ExtArgs>>): Prisma__GlucoseDataClient<$Result.GetResult<Prisma.$GlucoseDataPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one GlucoseData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlucoseDataFindUniqueOrThrowArgs} args - Arguments to find a GlucoseData
     * @example
     * // Get one GlucoseData
     * const glucoseData = await prisma.glucoseData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlucoseDataFindUniqueOrThrowArgs>(args: SelectSubset<T, GlucoseDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlucoseDataClient<$Result.GetResult<Prisma.$GlucoseDataPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first GlucoseData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseDataFindFirstArgs} args - Arguments to find a GlucoseData
     * @example
     * // Get one GlucoseData
     * const glucoseData = await prisma.glucoseData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlucoseDataFindFirstArgs>(args?: SelectSubset<T, GlucoseDataFindFirstArgs<ExtArgs>>): Prisma__GlucoseDataClient<$Result.GetResult<Prisma.$GlucoseDataPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first GlucoseData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseDataFindFirstOrThrowArgs} args - Arguments to find a GlucoseData
     * @example
     * // Get one GlucoseData
     * const glucoseData = await prisma.glucoseData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlucoseDataFindFirstOrThrowArgs>(args?: SelectSubset<T, GlucoseDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlucoseDataClient<$Result.GetResult<Prisma.$GlucoseDataPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more GlucoseData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlucoseData
     * const glucoseData = await prisma.glucoseData.findMany()
     * 
     * // Get first 10 GlucoseData
     * const glucoseData = await prisma.glucoseData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const glucoseDataWithIdOnly = await prisma.glucoseData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlucoseDataFindManyArgs>(args?: SelectSubset<T, GlucoseDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseDataPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a GlucoseData.
     * @param {GlucoseDataCreateArgs} args - Arguments to create a GlucoseData.
     * @example
     * // Create one GlucoseData
     * const GlucoseData = await prisma.glucoseData.create({
     *   data: {
     *     // ... data to create a GlucoseData
     *   }
     * })
     * 
     */
    create<T extends GlucoseDataCreateArgs>(args: SelectSubset<T, GlucoseDataCreateArgs<ExtArgs>>): Prisma__GlucoseDataClient<$Result.GetResult<Prisma.$GlucoseDataPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many GlucoseData.
     * @param {GlucoseDataCreateManyArgs} args - Arguments to create many GlucoseData.
     * @example
     * // Create many GlucoseData
     * const glucoseData = await prisma.glucoseData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlucoseDataCreateManyArgs>(args?: SelectSubset<T, GlucoseDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlucoseData and returns the data saved in the database.
     * @param {GlucoseDataCreateManyAndReturnArgs} args - Arguments to create many GlucoseData.
     * @example
     * // Create many GlucoseData
     * const glucoseData = await prisma.glucoseData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlucoseData and only return the `id`
     * const glucoseDataWithIdOnly = await prisma.glucoseData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlucoseDataCreateManyAndReturnArgs>(args?: SelectSubset<T, GlucoseDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseDataPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a GlucoseData.
     * @param {GlucoseDataDeleteArgs} args - Arguments to delete one GlucoseData.
     * @example
     * // Delete one GlucoseData
     * const GlucoseData = await prisma.glucoseData.delete({
     *   where: {
     *     // ... filter to delete one GlucoseData
     *   }
     * })
     * 
     */
    delete<T extends GlucoseDataDeleteArgs>(args: SelectSubset<T, GlucoseDataDeleteArgs<ExtArgs>>): Prisma__GlucoseDataClient<$Result.GetResult<Prisma.$GlucoseDataPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one GlucoseData.
     * @param {GlucoseDataUpdateArgs} args - Arguments to update one GlucoseData.
     * @example
     * // Update one GlucoseData
     * const glucoseData = await prisma.glucoseData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlucoseDataUpdateArgs>(args: SelectSubset<T, GlucoseDataUpdateArgs<ExtArgs>>): Prisma__GlucoseDataClient<$Result.GetResult<Prisma.$GlucoseDataPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more GlucoseData.
     * @param {GlucoseDataDeleteManyArgs} args - Arguments to filter GlucoseData to delete.
     * @example
     * // Delete a few GlucoseData
     * const { count } = await prisma.glucoseData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlucoseDataDeleteManyArgs>(args?: SelectSubset<T, GlucoseDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlucoseData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlucoseData
     * const glucoseData = await prisma.glucoseData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlucoseDataUpdateManyArgs>(args: SelectSubset<T, GlucoseDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlucoseData and returns the data updated in the database.
     * @param {GlucoseDataUpdateManyAndReturnArgs} args - Arguments to update many GlucoseData.
     * @example
     * // Update many GlucoseData
     * const glucoseData = await prisma.glucoseData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlucoseData and only return the `id`
     * const glucoseDataWithIdOnly = await prisma.glucoseData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GlucoseDataUpdateManyAndReturnArgs>(args: SelectSubset<T, GlucoseDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlucoseDataPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one GlucoseData.
     * @param {GlucoseDataUpsertArgs} args - Arguments to update or create a GlucoseData.
     * @example
     * // Update or create a GlucoseData
     * const glucoseData = await prisma.glucoseData.upsert({
     *   create: {
     *     // ... data to create a GlucoseData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlucoseData we want to update
     *   }
     * })
     */
    upsert<T extends GlucoseDataUpsertArgs>(args: SelectSubset<T, GlucoseDataUpsertArgs<ExtArgs>>): Prisma__GlucoseDataClient<$Result.GetResult<Prisma.$GlucoseDataPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of GlucoseData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseDataCountArgs} args - Arguments to filter GlucoseData to count.
     * @example
     * // Count the number of GlucoseData
     * const count = await prisma.glucoseData.count({
     *   where: {
     *     // ... the filter for the GlucoseData we want to count
     *   }
     * })
    **/
    count<T extends GlucoseDataCountArgs>(
      args?: Subset<T, GlucoseDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlucoseDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlucoseData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlucoseDataAggregateArgs>(args: Subset<T, GlucoseDataAggregateArgs>): Prisma.PrismaPromise<GetGlucoseDataAggregateType<T>>

    /**
     * Group by GlucoseData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlucoseDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlucoseDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlucoseDataGroupByArgs['orderBy'] }
        : { orderBy?: GlucoseDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlucoseDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlucoseDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlucoseData model
   */
  readonly fields: GlucoseDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlucoseData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlucoseDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlucoseData model
   */ 
  interface GlucoseDataFieldRefs {
    readonly id: FieldRef<"GlucoseData", 'String'>
    readonly vid: FieldRef<"GlucoseData", 'String'>
    readonly config: FieldRef<"GlucoseData", 'String'>
    readonly frequency: FieldRef<"GlucoseData", 'Int'>
    readonly glucose: FieldRef<"GlucoseData", 'Float'>
    readonly time: FieldRef<"GlucoseData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlucoseData findUnique
   */
  export type GlucoseDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
    /**
     * Filter, which GlucoseData to fetch.
     */
    where: GlucoseDataWhereUniqueInput
  }

  /**
   * GlucoseData findUniqueOrThrow
   */
  export type GlucoseDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
    /**
     * Filter, which GlucoseData to fetch.
     */
    where: GlucoseDataWhereUniqueInput
  }

  /**
   * GlucoseData findFirst
   */
  export type GlucoseDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
    /**
     * Filter, which GlucoseData to fetch.
     */
    where?: GlucoseDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseData to fetch.
     */
    orderBy?: GlucoseDataOrderByWithRelationInput | GlucoseDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlucoseData.
     */
    cursor?: GlucoseDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlucoseData.
     */
    distinct?: GlucoseDataScalarFieldEnum | GlucoseDataScalarFieldEnum[]
  }

  /**
   * GlucoseData findFirstOrThrow
   */
  export type GlucoseDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
    /**
     * Filter, which GlucoseData to fetch.
     */
    where?: GlucoseDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseData to fetch.
     */
    orderBy?: GlucoseDataOrderByWithRelationInput | GlucoseDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlucoseData.
     */
    cursor?: GlucoseDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlucoseData.
     */
    distinct?: GlucoseDataScalarFieldEnum | GlucoseDataScalarFieldEnum[]
  }

  /**
   * GlucoseData findMany
   */
  export type GlucoseDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
    /**
     * Filter, which GlucoseData to fetch.
     */
    where?: GlucoseDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlucoseData to fetch.
     */
    orderBy?: GlucoseDataOrderByWithRelationInput | GlucoseDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlucoseData.
     */
    cursor?: GlucoseDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlucoseData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlucoseData.
     */
    skip?: number
    distinct?: GlucoseDataScalarFieldEnum | GlucoseDataScalarFieldEnum[]
  }

  /**
   * GlucoseData create
   */
  export type GlucoseDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
    /**
     * The data needed to create a GlucoseData.
     */
    data: XOR<GlucoseDataCreateInput, GlucoseDataUncheckedCreateInput>
  }

  /**
   * GlucoseData createMany
   */
  export type GlucoseDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlucoseData.
     */
    data: GlucoseDataCreateManyInput | GlucoseDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlucoseData createManyAndReturn
   */
  export type GlucoseDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
    /**
     * The data used to create many GlucoseData.
     */
    data: GlucoseDataCreateManyInput | GlucoseDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlucoseData update
   */
  export type GlucoseDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
    /**
     * The data needed to update a GlucoseData.
     */
    data: XOR<GlucoseDataUpdateInput, GlucoseDataUncheckedUpdateInput>
    /**
     * Choose, which GlucoseData to update.
     */
    where: GlucoseDataWhereUniqueInput
  }

  /**
   * GlucoseData updateMany
   */
  export type GlucoseDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlucoseData.
     */
    data: XOR<GlucoseDataUpdateManyMutationInput, GlucoseDataUncheckedUpdateManyInput>
    /**
     * Filter which GlucoseData to update
     */
    where?: GlucoseDataWhereInput
  }

  /**
   * GlucoseData updateManyAndReturn
   */
  export type GlucoseDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
    /**
     * The data used to update GlucoseData.
     */
    data: XOR<GlucoseDataUpdateManyMutationInput, GlucoseDataUncheckedUpdateManyInput>
    /**
     * Filter which GlucoseData to update
     */
    where?: GlucoseDataWhereInput
  }

  /**
   * GlucoseData upsert
   */
  export type GlucoseDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
    /**
     * The filter to search for the GlucoseData to update in case it exists.
     */
    where: GlucoseDataWhereUniqueInput
    /**
     * In case the GlucoseData found by the `where` argument doesn't exist, create a new GlucoseData with this data.
     */
    create: XOR<GlucoseDataCreateInput, GlucoseDataUncheckedCreateInput>
    /**
     * In case the GlucoseData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlucoseDataUpdateInput, GlucoseDataUncheckedUpdateInput>
  }

  /**
   * GlucoseData delete
   */
  export type GlucoseDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
    /**
     * Filter which GlucoseData to delete.
     */
    where: GlucoseDataWhereUniqueInput
  }

  /**
   * GlucoseData deleteMany
   */
  export type GlucoseDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlucoseData to delete
     */
    where?: GlucoseDataWhereInput
  }

  /**
   * GlucoseData without action
   */
  export type GlucoseDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlucoseData
     */
    select?: GlucoseDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlucoseData
     */
    omit?: GlucoseDataOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BiosensorDataScalarFieldEnum: {
    id: 'id',
    vid: 'vid',
    config: 'config',
    frequency: 'frequency',
    bioImpedance: 'bioImpedance',
    phaseAngle: 'phaseAngle',
    time: 'time'
  };

  export type BiosensorDataScalarFieldEnum = (typeof BiosensorDataScalarFieldEnum)[keyof typeof BiosensorDataScalarFieldEnum]


  export const TemperatureDataScalarFieldEnum: {
    id: 'id',
    vid: 'vid',
    config: 'config',
    frequency: 'frequency',
    temperature: 'temperature',
    time: 'time'
  };

  export type TemperatureDataScalarFieldEnum = (typeof TemperatureDataScalarFieldEnum)[keyof typeof TemperatureDataScalarFieldEnum]


  export const GsrDataScalarFieldEnum: {
    id: 'id',
    vid: 'vid',
    config: 'config',
    frequency: 'frequency',
    gsr: 'gsr',
    time: 'time'
  };

  export type GsrDataScalarFieldEnum = (typeof GsrDataScalarFieldEnum)[keyof typeof GsrDataScalarFieldEnum]


  export const GlucoseDataScalarFieldEnum: {
    id: 'id',
    vid: 'vid',
    config: 'config',
    frequency: 'frequency',
    glucose: 'glucose',
    time: 'time'
  };

  export type GlucoseDataScalarFieldEnum = (typeof GlucoseDataScalarFieldEnum)[keyof typeof GlucoseDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type BiosensorDataWhereInput = {
    AND?: BiosensorDataWhereInput | BiosensorDataWhereInput[]
    OR?: BiosensorDataWhereInput[]
    NOT?: BiosensorDataWhereInput | BiosensorDataWhereInput[]
    id?: StringFilter<"BiosensorData"> | string
    vid?: StringFilter<"BiosensorData"> | string
    config?: StringFilter<"BiosensorData"> | string
    frequency?: IntFilter<"BiosensorData"> | number
    bioImpedance?: FloatFilter<"BiosensorData"> | number
    phaseAngle?: FloatFilter<"BiosensorData"> | number
    time?: DateTimeFilter<"BiosensorData"> | Date | string
  }

  export type BiosensorDataOrderByWithRelationInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    bioImpedance?: SortOrder
    phaseAngle?: SortOrder
    time?: SortOrder
  }

  export type BiosensorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BiosensorDataWhereInput | BiosensorDataWhereInput[]
    OR?: BiosensorDataWhereInput[]
    NOT?: BiosensorDataWhereInput | BiosensorDataWhereInput[]
    vid?: StringFilter<"BiosensorData"> | string
    config?: StringFilter<"BiosensorData"> | string
    frequency?: IntFilter<"BiosensorData"> | number
    bioImpedance?: FloatFilter<"BiosensorData"> | number
    phaseAngle?: FloatFilter<"BiosensorData"> | number
    time?: DateTimeFilter<"BiosensorData"> | Date | string
  }, "id">

  export type BiosensorDataOrderByWithAggregationInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    bioImpedance?: SortOrder
    phaseAngle?: SortOrder
    time?: SortOrder
    _count?: BiosensorDataCountOrderByAggregateInput
    _avg?: BiosensorDataAvgOrderByAggregateInput
    _max?: BiosensorDataMaxOrderByAggregateInput
    _min?: BiosensorDataMinOrderByAggregateInput
    _sum?: BiosensorDataSumOrderByAggregateInput
  }

  export type BiosensorDataScalarWhereWithAggregatesInput = {
    AND?: BiosensorDataScalarWhereWithAggregatesInput | BiosensorDataScalarWhereWithAggregatesInput[]
    OR?: BiosensorDataScalarWhereWithAggregatesInput[]
    NOT?: BiosensorDataScalarWhereWithAggregatesInput | BiosensorDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BiosensorData"> | string
    vid?: StringWithAggregatesFilter<"BiosensorData"> | string
    config?: StringWithAggregatesFilter<"BiosensorData"> | string
    frequency?: IntWithAggregatesFilter<"BiosensorData"> | number
    bioImpedance?: FloatWithAggregatesFilter<"BiosensorData"> | number
    phaseAngle?: FloatWithAggregatesFilter<"BiosensorData"> | number
    time?: DateTimeWithAggregatesFilter<"BiosensorData"> | Date | string
  }

  export type TemperatureDataWhereInput = {
    AND?: TemperatureDataWhereInput | TemperatureDataWhereInput[]
    OR?: TemperatureDataWhereInput[]
    NOT?: TemperatureDataWhereInput | TemperatureDataWhereInput[]
    id?: StringFilter<"TemperatureData"> | string
    vid?: StringFilter<"TemperatureData"> | string
    config?: StringFilter<"TemperatureData"> | string
    frequency?: IntFilter<"TemperatureData"> | number
    temperature?: FloatFilter<"TemperatureData"> | number
    time?: DateTimeFilter<"TemperatureData"> | Date | string
  }

  export type TemperatureDataOrderByWithRelationInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    temperature?: SortOrder
    time?: SortOrder
  }

  export type TemperatureDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemperatureDataWhereInput | TemperatureDataWhereInput[]
    OR?: TemperatureDataWhereInput[]
    NOT?: TemperatureDataWhereInput | TemperatureDataWhereInput[]
    vid?: StringFilter<"TemperatureData"> | string
    config?: StringFilter<"TemperatureData"> | string
    frequency?: IntFilter<"TemperatureData"> | number
    temperature?: FloatFilter<"TemperatureData"> | number
    time?: DateTimeFilter<"TemperatureData"> | Date | string
  }, "id">

  export type TemperatureDataOrderByWithAggregationInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    temperature?: SortOrder
    time?: SortOrder
    _count?: TemperatureDataCountOrderByAggregateInput
    _avg?: TemperatureDataAvgOrderByAggregateInput
    _max?: TemperatureDataMaxOrderByAggregateInput
    _min?: TemperatureDataMinOrderByAggregateInput
    _sum?: TemperatureDataSumOrderByAggregateInput
  }

  export type TemperatureDataScalarWhereWithAggregatesInput = {
    AND?: TemperatureDataScalarWhereWithAggregatesInput | TemperatureDataScalarWhereWithAggregatesInput[]
    OR?: TemperatureDataScalarWhereWithAggregatesInput[]
    NOT?: TemperatureDataScalarWhereWithAggregatesInput | TemperatureDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemperatureData"> | string
    vid?: StringWithAggregatesFilter<"TemperatureData"> | string
    config?: StringWithAggregatesFilter<"TemperatureData"> | string
    frequency?: IntWithAggregatesFilter<"TemperatureData"> | number
    temperature?: FloatWithAggregatesFilter<"TemperatureData"> | number
    time?: DateTimeWithAggregatesFilter<"TemperatureData"> | Date | string
  }

  export type GsrDataWhereInput = {
    AND?: GsrDataWhereInput | GsrDataWhereInput[]
    OR?: GsrDataWhereInput[]
    NOT?: GsrDataWhereInput | GsrDataWhereInput[]
    id?: StringFilter<"GsrData"> | string
    vid?: StringFilter<"GsrData"> | string
    config?: StringFilter<"GsrData"> | string
    frequency?: IntFilter<"GsrData"> | number
    gsr?: FloatFilter<"GsrData"> | number
    time?: DateTimeFilter<"GsrData"> | Date | string
  }

  export type GsrDataOrderByWithRelationInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    gsr?: SortOrder
    time?: SortOrder
  }

  export type GsrDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GsrDataWhereInput | GsrDataWhereInput[]
    OR?: GsrDataWhereInput[]
    NOT?: GsrDataWhereInput | GsrDataWhereInput[]
    vid?: StringFilter<"GsrData"> | string
    config?: StringFilter<"GsrData"> | string
    frequency?: IntFilter<"GsrData"> | number
    gsr?: FloatFilter<"GsrData"> | number
    time?: DateTimeFilter<"GsrData"> | Date | string
  }, "id">

  export type GsrDataOrderByWithAggregationInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    gsr?: SortOrder
    time?: SortOrder
    _count?: GsrDataCountOrderByAggregateInput
    _avg?: GsrDataAvgOrderByAggregateInput
    _max?: GsrDataMaxOrderByAggregateInput
    _min?: GsrDataMinOrderByAggregateInput
    _sum?: GsrDataSumOrderByAggregateInput
  }

  export type GsrDataScalarWhereWithAggregatesInput = {
    AND?: GsrDataScalarWhereWithAggregatesInput | GsrDataScalarWhereWithAggregatesInput[]
    OR?: GsrDataScalarWhereWithAggregatesInput[]
    NOT?: GsrDataScalarWhereWithAggregatesInput | GsrDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GsrData"> | string
    vid?: StringWithAggregatesFilter<"GsrData"> | string
    config?: StringWithAggregatesFilter<"GsrData"> | string
    frequency?: IntWithAggregatesFilter<"GsrData"> | number
    gsr?: FloatWithAggregatesFilter<"GsrData"> | number
    time?: DateTimeWithAggregatesFilter<"GsrData"> | Date | string
  }

  export type GlucoseDataWhereInput = {
    AND?: GlucoseDataWhereInput | GlucoseDataWhereInput[]
    OR?: GlucoseDataWhereInput[]
    NOT?: GlucoseDataWhereInput | GlucoseDataWhereInput[]
    id?: StringFilter<"GlucoseData"> | string
    vid?: StringFilter<"GlucoseData"> | string
    config?: StringFilter<"GlucoseData"> | string
    frequency?: IntFilter<"GlucoseData"> | number
    glucose?: FloatFilter<"GlucoseData"> | number
    time?: DateTimeFilter<"GlucoseData"> | Date | string
  }

  export type GlucoseDataOrderByWithRelationInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    glucose?: SortOrder
    time?: SortOrder
  }

  export type GlucoseDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlucoseDataWhereInput | GlucoseDataWhereInput[]
    OR?: GlucoseDataWhereInput[]
    NOT?: GlucoseDataWhereInput | GlucoseDataWhereInput[]
    vid?: StringFilter<"GlucoseData"> | string
    config?: StringFilter<"GlucoseData"> | string
    frequency?: IntFilter<"GlucoseData"> | number
    glucose?: FloatFilter<"GlucoseData"> | number
    time?: DateTimeFilter<"GlucoseData"> | Date | string
  }, "id">

  export type GlucoseDataOrderByWithAggregationInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    glucose?: SortOrder
    time?: SortOrder
    _count?: GlucoseDataCountOrderByAggregateInput
    _avg?: GlucoseDataAvgOrderByAggregateInput
    _max?: GlucoseDataMaxOrderByAggregateInput
    _min?: GlucoseDataMinOrderByAggregateInput
    _sum?: GlucoseDataSumOrderByAggregateInput
  }

  export type GlucoseDataScalarWhereWithAggregatesInput = {
    AND?: GlucoseDataScalarWhereWithAggregatesInput | GlucoseDataScalarWhereWithAggregatesInput[]
    OR?: GlucoseDataScalarWhereWithAggregatesInput[]
    NOT?: GlucoseDataScalarWhereWithAggregatesInput | GlucoseDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlucoseData"> | string
    vid?: StringWithAggregatesFilter<"GlucoseData"> | string
    config?: StringWithAggregatesFilter<"GlucoseData"> | string
    frequency?: IntWithAggregatesFilter<"GlucoseData"> | number
    glucose?: FloatWithAggregatesFilter<"GlucoseData"> | number
    time?: DateTimeWithAggregatesFilter<"GlucoseData"> | Date | string
  }

  export type BiosensorDataCreateInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    bioImpedance: number
    phaseAngle: number
    time: Date | string
  }

  export type BiosensorDataUncheckedCreateInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    bioImpedance: number
    phaseAngle: number
    time: Date | string
  }

  export type BiosensorDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    bioImpedance?: FloatFieldUpdateOperationsInput | number
    phaseAngle?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiosensorDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    bioImpedance?: FloatFieldUpdateOperationsInput | number
    phaseAngle?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiosensorDataCreateManyInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    bioImpedance: number
    phaseAngle: number
    time: Date | string
  }

  export type BiosensorDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    bioImpedance?: FloatFieldUpdateOperationsInput | number
    phaseAngle?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiosensorDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    bioImpedance?: FloatFieldUpdateOperationsInput | number
    phaseAngle?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemperatureDataCreateInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    temperature: number
    time: Date | string
  }

  export type TemperatureDataUncheckedCreateInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    temperature: number
    time: Date | string
  }

  export type TemperatureDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemperatureDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemperatureDataCreateManyInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    temperature: number
    time: Date | string
  }

  export type TemperatureDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemperatureDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GsrDataCreateInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    gsr: number
    time: Date | string
  }

  export type GsrDataUncheckedCreateInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    gsr: number
    time: Date | string
  }

  export type GsrDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    gsr?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GsrDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    gsr?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GsrDataCreateManyInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    gsr: number
    time: Date | string
  }

  export type GsrDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    gsr?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GsrDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    gsr?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseDataCreateInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    glucose: number
    time: Date | string
  }

  export type GlucoseDataUncheckedCreateInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    glucose: number
    time: Date | string
  }

  export type GlucoseDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    glucose?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    glucose?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseDataCreateManyInput = {
    id?: string
    vid: string
    config: string
    frequency: number
    glucose: number
    time: Date | string
  }

  export type GlucoseDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    glucose?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlucoseDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vid?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    glucose?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BiosensorDataCountOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    bioImpedance?: SortOrder
    phaseAngle?: SortOrder
    time?: SortOrder
  }

  export type BiosensorDataAvgOrderByAggregateInput = {
    frequency?: SortOrder
    bioImpedance?: SortOrder
    phaseAngle?: SortOrder
  }

  export type BiosensorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    bioImpedance?: SortOrder
    phaseAngle?: SortOrder
    time?: SortOrder
  }

  export type BiosensorDataMinOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    bioImpedance?: SortOrder
    phaseAngle?: SortOrder
    time?: SortOrder
  }

  export type BiosensorDataSumOrderByAggregateInput = {
    frequency?: SortOrder
    bioImpedance?: SortOrder
    phaseAngle?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TemperatureDataCountOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    temperature?: SortOrder
    time?: SortOrder
  }

  export type TemperatureDataAvgOrderByAggregateInput = {
    frequency?: SortOrder
    temperature?: SortOrder
  }

  export type TemperatureDataMaxOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    temperature?: SortOrder
    time?: SortOrder
  }

  export type TemperatureDataMinOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    temperature?: SortOrder
    time?: SortOrder
  }

  export type TemperatureDataSumOrderByAggregateInput = {
    frequency?: SortOrder
    temperature?: SortOrder
  }

  export type GsrDataCountOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    gsr?: SortOrder
    time?: SortOrder
  }

  export type GsrDataAvgOrderByAggregateInput = {
    frequency?: SortOrder
    gsr?: SortOrder
  }

  export type GsrDataMaxOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    gsr?: SortOrder
    time?: SortOrder
  }

  export type GsrDataMinOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    gsr?: SortOrder
    time?: SortOrder
  }

  export type GsrDataSumOrderByAggregateInput = {
    frequency?: SortOrder
    gsr?: SortOrder
  }

  export type GlucoseDataCountOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    glucose?: SortOrder
    time?: SortOrder
  }

  export type GlucoseDataAvgOrderByAggregateInput = {
    frequency?: SortOrder
    glucose?: SortOrder
  }

  export type GlucoseDataMaxOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    glucose?: SortOrder
    time?: SortOrder
  }

  export type GlucoseDataMinOrderByAggregateInput = {
    id?: SortOrder
    vid?: SortOrder
    config?: SortOrder
    frequency?: SortOrder
    glucose?: SortOrder
    time?: SortOrder
  }

  export type GlucoseDataSumOrderByAggregateInput = {
    frequency?: SortOrder
    glucose?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}