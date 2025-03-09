
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
 * Model primeUser
 * 
 */
export type primeUser = $Result.DefaultSelection<Prisma.$primeUserPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Visit
 * 
 */
export type Visit = $Result.DefaultSelection<Prisma.$VisitPayload>
/**
 * Model Interval
 * 
 */
export type Interval = $Result.DefaultSelection<Prisma.$IntervalPayload>
/**
 * Model Clinic
 * 
 */
export type Clinic = $Result.DefaultSelection<Prisma.$ClinicPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PrimeUsers
 * const primeUsers = await prisma.primeUser.findMany()
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
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PrimeUsers
   * const primeUsers = await prisma.primeUser.findMany()
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
   * `prisma.primeUser`: Exposes CRUD operations for the **primeUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrimeUsers
    * const primeUsers = await prisma.primeUser.findMany()
    * ```
    */
  get primeUser(): Prisma.primeUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visit`: Exposes CRUD operations for the **Visit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visits
    * const visits = await prisma.visit.findMany()
    * ```
    */
  get visit(): Prisma.VisitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interval`: Exposes CRUD operations for the **Interval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Intervals
    * const intervals = await prisma.interval.findMany()
    * ```
    */
  get interval(): Prisma.IntervalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clinic`: Exposes CRUD operations for the **Clinic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinics
    * const clinics = await prisma.clinic.findMany()
    * ```
    */
  get clinic(): Prisma.ClinicDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
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
    primeUser: 'primeUser',
    Patient: 'Patient',
    Visit: 'Visit',
    Interval: 'Interval',
    Clinic: 'Clinic'
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
      modelProps: "primeUser" | "patient" | "visit" | "interval" | "clinic"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      primeUser: {
        payload: Prisma.$primeUserPayload<ExtArgs>
        fields: Prisma.primeUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.primeUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$primeUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.primeUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$primeUserPayload>
          }
          findFirst: {
            args: Prisma.primeUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$primeUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.primeUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$primeUserPayload>
          }
          findMany: {
            args: Prisma.primeUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$primeUserPayload>[]
          }
          create: {
            args: Prisma.primeUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$primeUserPayload>
          }
          createMany: {
            args: Prisma.primeUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.primeUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$primeUserPayload>[]
          }
          delete: {
            args: Prisma.primeUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$primeUserPayload>
          }
          update: {
            args: Prisma.primeUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$primeUserPayload>
          }
          deleteMany: {
            args: Prisma.primeUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.primeUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.primeUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$primeUserPayload>[]
          }
          upsert: {
            args: Prisma.primeUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$primeUserPayload>
          }
          aggregate: {
            args: Prisma.PrimeUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrimeUser>
          }
          groupBy: {
            args: Prisma.primeUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrimeUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.primeUserCountArgs<ExtArgs>
            result: $Utils.Optional<PrimeUserCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Visit: {
        payload: Prisma.$VisitPayload<ExtArgs>
        fields: Prisma.VisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          findFirst: {
            args: Prisma.VisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          findMany: {
            args: Prisma.VisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[]
          }
          create: {
            args: Prisma.VisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          createMany: {
            args: Prisma.VisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[]
          }
          delete: {
            args: Prisma.VisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          update: {
            args: Prisma.VisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          deleteMany: {
            args: Prisma.VisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[]
          }
          upsert: {
            args: Prisma.VisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          aggregate: {
            args: Prisma.VisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisit>
          }
          groupBy: {
            args: Prisma.VisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitCountArgs<ExtArgs>
            result: $Utils.Optional<VisitCountAggregateOutputType> | number
          }
        }
      }
      Interval: {
        payload: Prisma.$IntervalPayload<ExtArgs>
        fields: Prisma.IntervalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntervalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntervalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervalPayload>
          }
          findFirst: {
            args: Prisma.IntervalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntervalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervalPayload>
          }
          findMany: {
            args: Prisma.IntervalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervalPayload>[]
          }
          create: {
            args: Prisma.IntervalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervalPayload>
          }
          createMany: {
            args: Prisma.IntervalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntervalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervalPayload>[]
          }
          delete: {
            args: Prisma.IntervalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervalPayload>
          }
          update: {
            args: Prisma.IntervalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervalPayload>
          }
          deleteMany: {
            args: Prisma.IntervalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntervalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntervalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervalPayload>[]
          }
          upsert: {
            args: Prisma.IntervalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervalPayload>
          }
          aggregate: {
            args: Prisma.IntervalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterval>
          }
          groupBy: {
            args: Prisma.IntervalGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntervalGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntervalCountArgs<ExtArgs>
            result: $Utils.Optional<IntervalCountAggregateOutputType> | number
          }
        }
      }
      Clinic: {
        payload: Prisma.$ClinicPayload<ExtArgs>
        fields: Prisma.ClinicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          findFirst: {
            args: Prisma.ClinicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          findMany: {
            args: Prisma.ClinicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          create: {
            args: Prisma.ClinicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          createMany: {
            args: Prisma.ClinicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          delete: {
            args: Prisma.ClinicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          update: {
            args: Prisma.ClinicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          deleteMany: {
            args: Prisma.ClinicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClinicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>[]
          }
          upsert: {
            args: Prisma.ClinicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicPayload>
          }
          aggregate: {
            args: Prisma.ClinicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinic>
          }
          groupBy: {
            args: Prisma.ClinicGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicCountAggregateOutputType> | number
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
    primeUser?: primeUserOmit
    patient?: PatientOmit
    visit?: VisitOmit
    interval?: IntervalOmit
    clinic?: ClinicOmit
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
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    visits: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | PatientCountOutputTypeCountVisitsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model primeUser
   */

  export type AggregatePrimeUser = {
    _count: PrimeUserCountAggregateOutputType | null
    _min: PrimeUserMinAggregateOutputType | null
    _max: PrimeUserMaxAggregateOutputType | null
  }

  export type PrimeUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type PrimeUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type PrimeUserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type PrimeUserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type PrimeUserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type PrimeUserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type PrimeUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which primeUser to aggregate.
     */
    where?: primeUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of primeUsers to fetch.
     */
    orderBy?: primeUserOrderByWithRelationInput | primeUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: primeUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` primeUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` primeUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned primeUsers
    **/
    _count?: true | PrimeUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrimeUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrimeUserMaxAggregateInputType
  }

  export type GetPrimeUserAggregateType<T extends PrimeUserAggregateArgs> = {
        [P in keyof T & keyof AggregatePrimeUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrimeUser[P]>
      : GetScalarType<T[P], AggregatePrimeUser[P]>
  }




  export type primeUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: primeUserWhereInput
    orderBy?: primeUserOrderByWithAggregationInput | primeUserOrderByWithAggregationInput[]
    by: PrimeUserScalarFieldEnum[] | PrimeUserScalarFieldEnum
    having?: primeUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrimeUserCountAggregateInputType | true
    _min?: PrimeUserMinAggregateInputType
    _max?: PrimeUserMaxAggregateInputType
  }

  export type PrimeUserGroupByOutputType = {
    id: string
    email: string
    password: string
    _count: PrimeUserCountAggregateOutputType | null
    _min: PrimeUserMinAggregateOutputType | null
    _max: PrimeUserMaxAggregateOutputType | null
  }

  type GetPrimeUserGroupByPayload<T extends primeUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrimeUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrimeUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrimeUserGroupByOutputType[P]>
            : GetScalarType<T[P], PrimeUserGroupByOutputType[P]>
        }
      >
    >


  export type primeUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["primeUser"]>

  export type primeUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["primeUser"]>

  export type primeUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["primeUser"]>

  export type primeUserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type primeUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["primeUser"]>

  export type $primeUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "primeUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
    }, ExtArgs["result"]["primeUser"]>
    composites: {}
  }

  type primeUserGetPayload<S extends boolean | null | undefined | primeUserDefaultArgs> = $Result.GetResult<Prisma.$primeUserPayload, S>

  type primeUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<primeUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrimeUserCountAggregateInputType | true
    }

  export interface primeUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['primeUser'], meta: { name: 'primeUser' } }
    /**
     * Find zero or one PrimeUser that matches the filter.
     * @param {primeUserFindUniqueArgs} args - Arguments to find a PrimeUser
     * @example
     * // Get one PrimeUser
     * const primeUser = await prisma.primeUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends primeUserFindUniqueArgs>(args: SelectSubset<T, primeUserFindUniqueArgs<ExtArgs>>): Prisma__primeUserClient<$Result.GetResult<Prisma.$primeUserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PrimeUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {primeUserFindUniqueOrThrowArgs} args - Arguments to find a PrimeUser
     * @example
     * // Get one PrimeUser
     * const primeUser = await prisma.primeUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends primeUserFindUniqueOrThrowArgs>(args: SelectSubset<T, primeUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__primeUserClient<$Result.GetResult<Prisma.$primeUserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PrimeUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primeUserFindFirstArgs} args - Arguments to find a PrimeUser
     * @example
     * // Get one PrimeUser
     * const primeUser = await prisma.primeUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends primeUserFindFirstArgs>(args?: SelectSubset<T, primeUserFindFirstArgs<ExtArgs>>): Prisma__primeUserClient<$Result.GetResult<Prisma.$primeUserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PrimeUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primeUserFindFirstOrThrowArgs} args - Arguments to find a PrimeUser
     * @example
     * // Get one PrimeUser
     * const primeUser = await prisma.primeUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends primeUserFindFirstOrThrowArgs>(args?: SelectSubset<T, primeUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__primeUserClient<$Result.GetResult<Prisma.$primeUserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PrimeUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primeUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrimeUsers
     * const primeUsers = await prisma.primeUser.findMany()
     * 
     * // Get first 10 PrimeUsers
     * const primeUsers = await prisma.primeUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const primeUserWithIdOnly = await prisma.primeUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends primeUserFindManyArgs>(args?: SelectSubset<T, primeUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$primeUserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PrimeUser.
     * @param {primeUserCreateArgs} args - Arguments to create a PrimeUser.
     * @example
     * // Create one PrimeUser
     * const PrimeUser = await prisma.primeUser.create({
     *   data: {
     *     // ... data to create a PrimeUser
     *   }
     * })
     * 
     */
    create<T extends primeUserCreateArgs>(args: SelectSubset<T, primeUserCreateArgs<ExtArgs>>): Prisma__primeUserClient<$Result.GetResult<Prisma.$primeUserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PrimeUsers.
     * @param {primeUserCreateManyArgs} args - Arguments to create many PrimeUsers.
     * @example
     * // Create many PrimeUsers
     * const primeUser = await prisma.primeUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends primeUserCreateManyArgs>(args?: SelectSubset<T, primeUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrimeUsers and returns the data saved in the database.
     * @param {primeUserCreateManyAndReturnArgs} args - Arguments to create many PrimeUsers.
     * @example
     * // Create many PrimeUsers
     * const primeUser = await prisma.primeUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrimeUsers and only return the `id`
     * const primeUserWithIdOnly = await prisma.primeUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends primeUserCreateManyAndReturnArgs>(args?: SelectSubset<T, primeUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$primeUserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PrimeUser.
     * @param {primeUserDeleteArgs} args - Arguments to delete one PrimeUser.
     * @example
     * // Delete one PrimeUser
     * const PrimeUser = await prisma.primeUser.delete({
     *   where: {
     *     // ... filter to delete one PrimeUser
     *   }
     * })
     * 
     */
    delete<T extends primeUserDeleteArgs>(args: SelectSubset<T, primeUserDeleteArgs<ExtArgs>>): Prisma__primeUserClient<$Result.GetResult<Prisma.$primeUserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PrimeUser.
     * @param {primeUserUpdateArgs} args - Arguments to update one PrimeUser.
     * @example
     * // Update one PrimeUser
     * const primeUser = await prisma.primeUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends primeUserUpdateArgs>(args: SelectSubset<T, primeUserUpdateArgs<ExtArgs>>): Prisma__primeUserClient<$Result.GetResult<Prisma.$primeUserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PrimeUsers.
     * @param {primeUserDeleteManyArgs} args - Arguments to filter PrimeUsers to delete.
     * @example
     * // Delete a few PrimeUsers
     * const { count } = await prisma.primeUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends primeUserDeleteManyArgs>(args?: SelectSubset<T, primeUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrimeUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primeUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrimeUsers
     * const primeUser = await prisma.primeUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends primeUserUpdateManyArgs>(args: SelectSubset<T, primeUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrimeUsers and returns the data updated in the database.
     * @param {primeUserUpdateManyAndReturnArgs} args - Arguments to update many PrimeUsers.
     * @example
     * // Update many PrimeUsers
     * const primeUser = await prisma.primeUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrimeUsers and only return the `id`
     * const primeUserWithIdOnly = await prisma.primeUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends primeUserUpdateManyAndReturnArgs>(args: SelectSubset<T, primeUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$primeUserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PrimeUser.
     * @param {primeUserUpsertArgs} args - Arguments to update or create a PrimeUser.
     * @example
     * // Update or create a PrimeUser
     * const primeUser = await prisma.primeUser.upsert({
     *   create: {
     *     // ... data to create a PrimeUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrimeUser we want to update
     *   }
     * })
     */
    upsert<T extends primeUserUpsertArgs>(args: SelectSubset<T, primeUserUpsertArgs<ExtArgs>>): Prisma__primeUserClient<$Result.GetResult<Prisma.$primeUserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PrimeUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primeUserCountArgs} args - Arguments to filter PrimeUsers to count.
     * @example
     * // Count the number of PrimeUsers
     * const count = await prisma.primeUser.count({
     *   where: {
     *     // ... the filter for the PrimeUsers we want to count
     *   }
     * })
    **/
    count<T extends primeUserCountArgs>(
      args?: Subset<T, primeUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrimeUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrimeUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrimeUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrimeUserAggregateArgs>(args: Subset<T, PrimeUserAggregateArgs>): Prisma.PrismaPromise<GetPrimeUserAggregateType<T>>

    /**
     * Group by PrimeUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {primeUserGroupByArgs} args - Group by arguments.
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
      T extends primeUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: primeUserGroupByArgs['orderBy'] }
        : { orderBy?: primeUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, primeUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrimeUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the primeUser model
   */
  readonly fields: primeUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for primeUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__primeUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the primeUser model
   */ 
  interface primeUserFieldRefs {
    readonly id: FieldRef<"primeUser", 'String'>
    readonly email: FieldRef<"primeUser", 'String'>
    readonly password: FieldRef<"primeUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * primeUser findUnique
   */
  export type primeUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
    /**
     * Filter, which primeUser to fetch.
     */
    where: primeUserWhereUniqueInput
  }

  /**
   * primeUser findUniqueOrThrow
   */
  export type primeUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
    /**
     * Filter, which primeUser to fetch.
     */
    where: primeUserWhereUniqueInput
  }

  /**
   * primeUser findFirst
   */
  export type primeUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
    /**
     * Filter, which primeUser to fetch.
     */
    where?: primeUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of primeUsers to fetch.
     */
    orderBy?: primeUserOrderByWithRelationInput | primeUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for primeUsers.
     */
    cursor?: primeUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` primeUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` primeUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of primeUsers.
     */
    distinct?: PrimeUserScalarFieldEnum | PrimeUserScalarFieldEnum[]
  }

  /**
   * primeUser findFirstOrThrow
   */
  export type primeUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
    /**
     * Filter, which primeUser to fetch.
     */
    where?: primeUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of primeUsers to fetch.
     */
    orderBy?: primeUserOrderByWithRelationInput | primeUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for primeUsers.
     */
    cursor?: primeUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` primeUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` primeUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of primeUsers.
     */
    distinct?: PrimeUserScalarFieldEnum | PrimeUserScalarFieldEnum[]
  }

  /**
   * primeUser findMany
   */
  export type primeUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
    /**
     * Filter, which primeUsers to fetch.
     */
    where?: primeUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of primeUsers to fetch.
     */
    orderBy?: primeUserOrderByWithRelationInput | primeUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing primeUsers.
     */
    cursor?: primeUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` primeUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` primeUsers.
     */
    skip?: number
    distinct?: PrimeUserScalarFieldEnum | PrimeUserScalarFieldEnum[]
  }

  /**
   * primeUser create
   */
  export type primeUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
    /**
     * The data needed to create a primeUser.
     */
    data: XOR<primeUserCreateInput, primeUserUncheckedCreateInput>
  }

  /**
   * primeUser createMany
   */
  export type primeUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many primeUsers.
     */
    data: primeUserCreateManyInput | primeUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * primeUser createManyAndReturn
   */
  export type primeUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
    /**
     * The data used to create many primeUsers.
     */
    data: primeUserCreateManyInput | primeUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * primeUser update
   */
  export type primeUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
    /**
     * The data needed to update a primeUser.
     */
    data: XOR<primeUserUpdateInput, primeUserUncheckedUpdateInput>
    /**
     * Choose, which primeUser to update.
     */
    where: primeUserWhereUniqueInput
  }

  /**
   * primeUser updateMany
   */
  export type primeUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update primeUsers.
     */
    data: XOR<primeUserUpdateManyMutationInput, primeUserUncheckedUpdateManyInput>
    /**
     * Filter which primeUsers to update
     */
    where?: primeUserWhereInput
    /**
     * Limit how many primeUsers to update.
     */
    limit?: number
  }

  /**
   * primeUser updateManyAndReturn
   */
  export type primeUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
    /**
     * The data used to update primeUsers.
     */
    data: XOR<primeUserUpdateManyMutationInput, primeUserUncheckedUpdateManyInput>
    /**
     * Filter which primeUsers to update
     */
    where?: primeUserWhereInput
    /**
     * Limit how many primeUsers to update.
     */
    limit?: number
  }

  /**
   * primeUser upsert
   */
  export type primeUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
    /**
     * The filter to search for the primeUser to update in case it exists.
     */
    where: primeUserWhereUniqueInput
    /**
     * In case the primeUser found by the `where` argument doesn't exist, create a new primeUser with this data.
     */
    create: XOR<primeUserCreateInput, primeUserUncheckedCreateInput>
    /**
     * In case the primeUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<primeUserUpdateInput, primeUserUncheckedUpdateInput>
  }

  /**
   * primeUser delete
   */
  export type primeUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
    /**
     * Filter which primeUser to delete.
     */
    where: primeUserWhereUniqueInput
  }

  /**
   * primeUser deleteMany
   */
  export type primeUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which primeUsers to delete
     */
    where?: primeUserWhereInput
    /**
     * Limit how many primeUsers to delete.
     */
    limit?: number
  }

  /**
   * primeUser without action
   */
  export type primeUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the primeUser
     */
    select?: primeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the primeUser
     */
    omit?: primeUserOmit<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    age: number | null
    height: number | null
    weight: number | null
  }

  export type PatientSumAggregateOutputType = {
    age: number | null
    height: number | null
    weight: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    dateOfBirth: string | null
    contactInformation: string | null
    age: number | null
    gender: string | null
    height: number | null
    weight: number | null
    fhirId: string | null
    abhaId: string | null
    server_createdAt: Date | null
    server_updatedAt: Date | null
    server_deletedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    dateOfBirth: string | null
    contactInformation: string | null
    age: number | null
    gender: string | null
    height: number | null
    weight: number | null
    fhirId: string | null
    abhaId: string | null
    server_createdAt: Date | null
    server_updatedAt: Date | null
    server_deletedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    dateOfBirth: number
    contactInformation: number
    age: number
    gender: number
    height: number
    weight: number
    fhirId: number
    abhaId: number
    server_createdAt: number
    server_updatedAt: number
    server_deletedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    age?: true
    height?: true
    weight?: true
  }

  export type PatientSumAggregateInputType = {
    age?: true
    height?: true
    weight?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    dateOfBirth?: true
    contactInformation?: true
    age?: true
    gender?: true
    height?: true
    weight?: true
    fhirId?: true
    abhaId?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    dateOfBirth?: true
    contactInformation?: true
    age?: true
    gender?: true
    height?: true
    weight?: true
    fhirId?: true
    abhaId?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    dateOfBirth?: true
    contactInformation?: true
    age?: true
    gender?: true
    height?: true
    weight?: true
    fhirId?: true
    abhaId?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    fullName: string
    email: string
    dateOfBirth: string
    contactInformation: string
    age: number
    gender: string
    height: number
    weight: number
    fhirId: string | null
    abhaId: string | null
    server_createdAt: Date
    server_updatedAt: Date
    server_deletedAt: Date | null
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    dateOfBirth?: boolean
    contactInformation?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
    fhirId?: boolean
    abhaId?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
    visits?: boolean | Patient$visitsArgs<ExtArgs>
    clinic?: boolean | Patient$clinicArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    dateOfBirth?: boolean
    contactInformation?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
    fhirId?: boolean
    abhaId?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    dateOfBirth?: boolean
    contactInformation?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
    fhirId?: boolean
    abhaId?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    dateOfBirth?: boolean
    contactInformation?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    weight?: boolean
    fhirId?: boolean
    abhaId?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "dateOfBirth" | "contactInformation" | "age" | "gender" | "height" | "weight" | "fhirId" | "abhaId" | "server_createdAt" | "server_updatedAt" | "server_deletedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | Patient$visitsArgs<ExtArgs>
    clinic?: boolean | Patient$clinicArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      visits: Prisma.$VisitPayload<ExtArgs>[]
      clinic: Prisma.$ClinicPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      dateOfBirth: string
      contactInformation: string
      age: number
      gender: string
      height: number
      weight: number
      fhirId: string | null
      abhaId: string | null
      server_createdAt: Date
      server_updatedAt: Date
      server_deletedAt: Date | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visits<T extends Patient$visitsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    clinic<T extends Patient$clinicArgs<ExtArgs> = {}>(args?: Subset<T, Patient$clinicArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Patient model
   */ 
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly fullName: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'String'>
    readonly contactInformation: FieldRef<"Patient", 'String'>
    readonly age: FieldRef<"Patient", 'Int'>
    readonly gender: FieldRef<"Patient", 'String'>
    readonly height: FieldRef<"Patient", 'Float'>
    readonly weight: FieldRef<"Patient", 'Float'>
    readonly fhirId: FieldRef<"Patient", 'String'>
    readonly abhaId: FieldRef<"Patient", 'String'>
    readonly server_createdAt: FieldRef<"Patient", 'DateTime'>
    readonly server_updatedAt: FieldRef<"Patient", 'DateTime'>
    readonly server_deletedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.visits
   */
  export type Patient$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    cursor?: VisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Patient.clinic
   */
  export type Patient$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    where?: ClinicWhereInput
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Visit
   */

  export type AggregateVisit = {
    _count: VisitCountAggregateOutputType | null
    _min: VisitMinAggregateOutputType | null
    _max: VisitMaxAggregateOutputType | null
  }

  export type VisitMinAggregateOutputType = {
    id: string | null
    patient_id: string | null
    visitDate: string | null
    visitNotes: string | null
    visitType: string | null
    encounterfhirid: string | null
    server_createdAt: Date | null
    server_updatedAt: Date | null
    server_deletedAt: Date | null
  }

  export type VisitMaxAggregateOutputType = {
    id: string | null
    patient_id: string | null
    visitDate: string | null
    visitNotes: string | null
    visitType: string | null
    encounterfhirid: string | null
    server_createdAt: Date | null
    server_updatedAt: Date | null
    server_deletedAt: Date | null
  }

  export type VisitCountAggregateOutputType = {
    id: number
    patient_id: number
    visitDate: number
    visitNotes: number
    visitType: number
    encounterfhirid: number
    server_createdAt: number
    server_updatedAt: number
    server_deletedAt: number
    _all: number
  }


  export type VisitMinAggregateInputType = {
    id?: true
    patient_id?: true
    visitDate?: true
    visitNotes?: true
    visitType?: true
    encounterfhirid?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
  }

  export type VisitMaxAggregateInputType = {
    id?: true
    patient_id?: true
    visitDate?: true
    visitNotes?: true
    visitType?: true
    encounterfhirid?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
  }

  export type VisitCountAggregateInputType = {
    id?: true
    patient_id?: true
    visitDate?: true
    visitNotes?: true
    visitType?: true
    encounterfhirid?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
    _all?: true
  }

  export type VisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visit to aggregate.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visits
    **/
    _count?: true | VisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitMaxAggregateInputType
  }

  export type GetVisitAggregateType<T extends VisitAggregateArgs> = {
        [P in keyof T & keyof AggregateVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisit[P]>
      : GetScalarType<T[P], AggregateVisit[P]>
  }




  export type VisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithAggregationInput | VisitOrderByWithAggregationInput[]
    by: VisitScalarFieldEnum[] | VisitScalarFieldEnum
    having?: VisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitCountAggregateInputType | true
    _min?: VisitMinAggregateInputType
    _max?: VisitMaxAggregateInputType
  }

  export type VisitGroupByOutputType = {
    id: string
    patient_id: string
    visitDate: string
    visitNotes: string | null
    visitType: string
    encounterfhirid: string | null
    server_createdAt: Date
    server_updatedAt: Date
    server_deletedAt: Date | null
    _count: VisitCountAggregateOutputType | null
    _min: VisitMinAggregateOutputType | null
    _max: VisitMaxAggregateOutputType | null
  }

  type GetVisitGroupByPayload<T extends VisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitGroupByOutputType[P]>
            : GetScalarType<T[P], VisitGroupByOutputType[P]>
        }
      >
    >


  export type VisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    visitDate?: boolean
    visitNotes?: boolean
    visitType?: boolean
    encounterfhirid?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visit"]>

  export type VisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    visitDate?: boolean
    visitNotes?: boolean
    visitType?: boolean
    encounterfhirid?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visit"]>

  export type VisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    visitDate?: boolean
    visitNotes?: boolean
    visitType?: boolean
    encounterfhirid?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visit"]>

  export type VisitSelectScalar = {
    id?: boolean
    patient_id?: boolean
    visitDate?: boolean
    visitNotes?: boolean
    visitType?: boolean
    encounterfhirid?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
  }

  export type VisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patient_id" | "visitDate" | "visitNotes" | "visitType" | "encounterfhirid" | "server_createdAt" | "server_updatedAt" | "server_deletedAt", ExtArgs["result"]["visit"]>
  export type VisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type VisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type VisitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $VisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visit"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patient_id: string
      visitDate: string
      visitNotes: string | null
      visitType: string
      encounterfhirid: string | null
      server_createdAt: Date
      server_updatedAt: Date
      server_deletedAt: Date | null
    }, ExtArgs["result"]["visit"]>
    composites: {}
  }

  type VisitGetPayload<S extends boolean | null | undefined | VisitDefaultArgs> = $Result.GetResult<Prisma.$VisitPayload, S>

  type VisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitCountAggregateInputType | true
    }

  export interface VisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visit'], meta: { name: 'Visit' } }
    /**
     * Find zero or one Visit that matches the filter.
     * @param {VisitFindUniqueArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitFindUniqueArgs>(args: SelectSubset<T, VisitFindUniqueArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Visit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitFindUniqueOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Visit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitFindFirstArgs>(args?: SelectSubset<T, VisitFindFirstArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Visit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visits
     * const visits = await prisma.visit.findMany()
     * 
     * // Get first 10 Visits
     * const visits = await prisma.visit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitWithIdOnly = await prisma.visit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitFindManyArgs>(args?: SelectSubset<T, VisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Visit.
     * @param {VisitCreateArgs} args - Arguments to create a Visit.
     * @example
     * // Create one Visit
     * const Visit = await prisma.visit.create({
     *   data: {
     *     // ... data to create a Visit
     *   }
     * })
     * 
     */
    create<T extends VisitCreateArgs>(args: SelectSubset<T, VisitCreateArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Visits.
     * @param {VisitCreateManyArgs} args - Arguments to create many Visits.
     * @example
     * // Create many Visits
     * const visit = await prisma.visit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitCreateManyArgs>(args?: SelectSubset<T, VisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visits and returns the data saved in the database.
     * @param {VisitCreateManyAndReturnArgs} args - Arguments to create many Visits.
     * @example
     * // Create many Visits
     * const visit = await prisma.visit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visits and only return the `id`
     * const visitWithIdOnly = await prisma.visit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Visit.
     * @param {VisitDeleteArgs} args - Arguments to delete one Visit.
     * @example
     * // Delete one Visit
     * const Visit = await prisma.visit.delete({
     *   where: {
     *     // ... filter to delete one Visit
     *   }
     * })
     * 
     */
    delete<T extends VisitDeleteArgs>(args: SelectSubset<T, VisitDeleteArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Visit.
     * @param {VisitUpdateArgs} args - Arguments to update one Visit.
     * @example
     * // Update one Visit
     * const visit = await prisma.visit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitUpdateArgs>(args: SelectSubset<T, VisitUpdateArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Visits.
     * @param {VisitDeleteManyArgs} args - Arguments to filter Visits to delete.
     * @example
     * // Delete a few Visits
     * const { count } = await prisma.visit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitDeleteManyArgs>(args?: SelectSubset<T, VisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visits
     * const visit = await prisma.visit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitUpdateManyArgs>(args: SelectSubset<T, VisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visits and returns the data updated in the database.
     * @param {VisitUpdateManyAndReturnArgs} args - Arguments to update many Visits.
     * @example
     * // Update many Visits
     * const visit = await prisma.visit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visits and only return the `id`
     * const visitWithIdOnly = await prisma.visit.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisitUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Visit.
     * @param {VisitUpsertArgs} args - Arguments to update or create a Visit.
     * @example
     * // Update or create a Visit
     * const visit = await prisma.visit.upsert({
     *   create: {
     *     // ... data to create a Visit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visit we want to update
     *   }
     * })
     */
    upsert<T extends VisitUpsertArgs>(args: SelectSubset<T, VisitUpsertArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitCountArgs} args - Arguments to filter Visits to count.
     * @example
     * // Count the number of Visits
     * const count = await prisma.visit.count({
     *   where: {
     *     // ... the filter for the Visits we want to count
     *   }
     * })
    **/
    count<T extends VisitCountArgs>(
      args?: Subset<T, VisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitAggregateArgs>(args: Subset<T, VisitAggregateArgs>): Prisma.PrismaPromise<GetVisitAggregateType<T>>

    /**
     * Group by Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitGroupByArgs} args - Group by arguments.
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
      T extends VisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitGroupByArgs['orderBy'] }
        : { orderBy?: VisitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visit model
   */
  readonly fields: VisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Visit model
   */ 
  interface VisitFieldRefs {
    readonly id: FieldRef<"Visit", 'String'>
    readonly patient_id: FieldRef<"Visit", 'String'>
    readonly visitDate: FieldRef<"Visit", 'String'>
    readonly visitNotes: FieldRef<"Visit", 'String'>
    readonly visitType: FieldRef<"Visit", 'String'>
    readonly encounterfhirid: FieldRef<"Visit", 'String'>
    readonly server_createdAt: FieldRef<"Visit", 'DateTime'>
    readonly server_updatedAt: FieldRef<"Visit", 'DateTime'>
    readonly server_deletedAt: FieldRef<"Visit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Visit findUnique
   */
  export type VisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit findUniqueOrThrow
   */
  export type VisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit findFirst
   */
  export type VisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit findFirstOrThrow
   */
  export type VisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit findMany
   */
  export type VisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visits to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit create
   */
  export type VisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The data needed to create a Visit.
     */
    data: XOR<VisitCreateInput, VisitUncheckedCreateInput>
  }

  /**
   * Visit createMany
   */
  export type VisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visits.
     */
    data: VisitCreateManyInput | VisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visit createManyAndReturn
   */
  export type VisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * The data used to create many Visits.
     */
    data: VisitCreateManyInput | VisitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visit update
   */
  export type VisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The data needed to update a Visit.
     */
    data: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>
    /**
     * Choose, which Visit to update.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit updateMany
   */
  export type VisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visits.
     */
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyInput>
    /**
     * Filter which Visits to update
     */
    where?: VisitWhereInput
    /**
     * Limit how many Visits to update.
     */
    limit?: number
  }

  /**
   * Visit updateManyAndReturn
   */
  export type VisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * The data used to update Visits.
     */
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyInput>
    /**
     * Filter which Visits to update
     */
    where?: VisitWhereInput
    /**
     * Limit how many Visits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visit upsert
   */
  export type VisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The filter to search for the Visit to update in case it exists.
     */
    where: VisitWhereUniqueInput
    /**
     * In case the Visit found by the `where` argument doesn't exist, create a new Visit with this data.
     */
    create: XOR<VisitCreateInput, VisitUncheckedCreateInput>
    /**
     * In case the Visit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>
  }

  /**
   * Visit delete
   */
  export type VisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter which Visit to delete.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit deleteMany
   */
  export type VisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visits to delete
     */
    where?: VisitWhereInput
    /**
     * Limit how many Visits to delete.
     */
    limit?: number
  }

  /**
   * Visit without action
   */
  export type VisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
  }


  /**
   * Model Interval
   */

  export type AggregateInterval = {
    _count: IntervalCountAggregateOutputType | null
    _avg: IntervalAvgAggregateOutputType | null
    _sum: IntervalSumAggregateOutputType | null
    _min: IntervalMinAggregateOutputType | null
    _max: IntervalMaxAggregateOutputType | null
  }

  export type IntervalAvgAggregateOutputType = {
    interval_tag: number | null
  }

  export type IntervalSumAggregateOutputType = {
    interval_tag: number | null
  }

  export type IntervalMinAggregateOutputType = {
    id: string | null
    visit_id: string | null
    intervalType: string | null
    interval_tag: number | null
    configuration: string | null
    frequencies: string | null
    dataPoints: string | null
    server_createdAt: Date | null
    server_updatedAt: Date | null
    server_deletedAt: Date | null
  }

  export type IntervalMaxAggregateOutputType = {
    id: string | null
    visit_id: string | null
    intervalType: string | null
    interval_tag: number | null
    configuration: string | null
    frequencies: string | null
    dataPoints: string | null
    server_createdAt: Date | null
    server_updatedAt: Date | null
    server_deletedAt: Date | null
  }

  export type IntervalCountAggregateOutputType = {
    id: number
    visit_id: number
    intervalType: number
    interval_tag: number
    configuration: number
    frequencies: number
    dataPoints: number
    server_createdAt: number
    server_updatedAt: number
    server_deletedAt: number
    _all: number
  }


  export type IntervalAvgAggregateInputType = {
    interval_tag?: true
  }

  export type IntervalSumAggregateInputType = {
    interval_tag?: true
  }

  export type IntervalMinAggregateInputType = {
    id?: true
    visit_id?: true
    intervalType?: true
    interval_tag?: true
    configuration?: true
    frequencies?: true
    dataPoints?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
  }

  export type IntervalMaxAggregateInputType = {
    id?: true
    visit_id?: true
    intervalType?: true
    interval_tag?: true
    configuration?: true
    frequencies?: true
    dataPoints?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
  }

  export type IntervalCountAggregateInputType = {
    id?: true
    visit_id?: true
    intervalType?: true
    interval_tag?: true
    configuration?: true
    frequencies?: true
    dataPoints?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
    _all?: true
  }

  export type IntervalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interval to aggregate.
     */
    where?: IntervalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intervals to fetch.
     */
    orderBy?: IntervalOrderByWithRelationInput | IntervalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntervalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intervals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intervals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Intervals
    **/
    _count?: true | IntervalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntervalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntervalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntervalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntervalMaxAggregateInputType
  }

  export type GetIntervalAggregateType<T extends IntervalAggregateArgs> = {
        [P in keyof T & keyof AggregateInterval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterval[P]>
      : GetScalarType<T[P], AggregateInterval[P]>
  }




  export type IntervalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntervalWhereInput
    orderBy?: IntervalOrderByWithAggregationInput | IntervalOrderByWithAggregationInput[]
    by: IntervalScalarFieldEnum[] | IntervalScalarFieldEnum
    having?: IntervalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntervalCountAggregateInputType | true
    _avg?: IntervalAvgAggregateInputType
    _sum?: IntervalSumAggregateInputType
    _min?: IntervalMinAggregateInputType
    _max?: IntervalMaxAggregateInputType
  }

  export type IntervalGroupByOutputType = {
    id: string
    visit_id: string
    intervalType: string
    interval_tag: number
    configuration: string
    frequencies: string
    dataPoints: string
    server_createdAt: Date
    server_updatedAt: Date
    server_deletedAt: Date | null
    _count: IntervalCountAggregateOutputType | null
    _avg: IntervalAvgAggregateOutputType | null
    _sum: IntervalSumAggregateOutputType | null
    _min: IntervalMinAggregateOutputType | null
    _max: IntervalMaxAggregateOutputType | null
  }

  type GetIntervalGroupByPayload<T extends IntervalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntervalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntervalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntervalGroupByOutputType[P]>
            : GetScalarType<T[P], IntervalGroupByOutputType[P]>
        }
      >
    >


  export type IntervalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visit_id?: boolean
    intervalType?: boolean
    interval_tag?: boolean
    configuration?: boolean
    frequencies?: boolean
    dataPoints?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
  }, ExtArgs["result"]["interval"]>

  export type IntervalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visit_id?: boolean
    intervalType?: boolean
    interval_tag?: boolean
    configuration?: boolean
    frequencies?: boolean
    dataPoints?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
  }, ExtArgs["result"]["interval"]>

  export type IntervalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visit_id?: boolean
    intervalType?: boolean
    interval_tag?: boolean
    configuration?: boolean
    frequencies?: boolean
    dataPoints?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
  }, ExtArgs["result"]["interval"]>

  export type IntervalSelectScalar = {
    id?: boolean
    visit_id?: boolean
    intervalType?: boolean
    interval_tag?: boolean
    configuration?: boolean
    frequencies?: boolean
    dataPoints?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
  }

  export type IntervalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visit_id" | "intervalType" | "interval_tag" | "configuration" | "frequencies" | "dataPoints" | "server_createdAt" | "server_updatedAt" | "server_deletedAt", ExtArgs["result"]["interval"]>

  export type $IntervalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interval"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      visit_id: string
      intervalType: string
      interval_tag: number
      configuration: string
      frequencies: string
      dataPoints: string
      server_createdAt: Date
      server_updatedAt: Date
      server_deletedAt: Date | null
    }, ExtArgs["result"]["interval"]>
    composites: {}
  }

  type IntervalGetPayload<S extends boolean | null | undefined | IntervalDefaultArgs> = $Result.GetResult<Prisma.$IntervalPayload, S>

  type IntervalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntervalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntervalCountAggregateInputType | true
    }

  export interface IntervalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interval'], meta: { name: 'Interval' } }
    /**
     * Find zero or one Interval that matches the filter.
     * @param {IntervalFindUniqueArgs} args - Arguments to find a Interval
     * @example
     * // Get one Interval
     * const interval = await prisma.interval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntervalFindUniqueArgs>(args: SelectSubset<T, IntervalFindUniqueArgs<ExtArgs>>): Prisma__IntervalClient<$Result.GetResult<Prisma.$IntervalPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Interval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntervalFindUniqueOrThrowArgs} args - Arguments to find a Interval
     * @example
     * // Get one Interval
     * const interval = await prisma.interval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntervalFindUniqueOrThrowArgs>(args: SelectSubset<T, IntervalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntervalClient<$Result.GetResult<Prisma.$IntervalPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Interval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervalFindFirstArgs} args - Arguments to find a Interval
     * @example
     * // Get one Interval
     * const interval = await prisma.interval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntervalFindFirstArgs>(args?: SelectSubset<T, IntervalFindFirstArgs<ExtArgs>>): Prisma__IntervalClient<$Result.GetResult<Prisma.$IntervalPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Interval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervalFindFirstOrThrowArgs} args - Arguments to find a Interval
     * @example
     * // Get one Interval
     * const interval = await prisma.interval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntervalFindFirstOrThrowArgs>(args?: SelectSubset<T, IntervalFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntervalClient<$Result.GetResult<Prisma.$IntervalPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Intervals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intervals
     * const intervals = await prisma.interval.findMany()
     * 
     * // Get first 10 Intervals
     * const intervals = await prisma.interval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intervalWithIdOnly = await prisma.interval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntervalFindManyArgs>(args?: SelectSubset<T, IntervalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntervalPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Interval.
     * @param {IntervalCreateArgs} args - Arguments to create a Interval.
     * @example
     * // Create one Interval
     * const Interval = await prisma.interval.create({
     *   data: {
     *     // ... data to create a Interval
     *   }
     * })
     * 
     */
    create<T extends IntervalCreateArgs>(args: SelectSubset<T, IntervalCreateArgs<ExtArgs>>): Prisma__IntervalClient<$Result.GetResult<Prisma.$IntervalPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Intervals.
     * @param {IntervalCreateManyArgs} args - Arguments to create many Intervals.
     * @example
     * // Create many Intervals
     * const interval = await prisma.interval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntervalCreateManyArgs>(args?: SelectSubset<T, IntervalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Intervals and returns the data saved in the database.
     * @param {IntervalCreateManyAndReturnArgs} args - Arguments to create many Intervals.
     * @example
     * // Create many Intervals
     * const interval = await prisma.interval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Intervals and only return the `id`
     * const intervalWithIdOnly = await prisma.interval.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntervalCreateManyAndReturnArgs>(args?: SelectSubset<T, IntervalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntervalPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Interval.
     * @param {IntervalDeleteArgs} args - Arguments to delete one Interval.
     * @example
     * // Delete one Interval
     * const Interval = await prisma.interval.delete({
     *   where: {
     *     // ... filter to delete one Interval
     *   }
     * })
     * 
     */
    delete<T extends IntervalDeleteArgs>(args: SelectSubset<T, IntervalDeleteArgs<ExtArgs>>): Prisma__IntervalClient<$Result.GetResult<Prisma.$IntervalPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Interval.
     * @param {IntervalUpdateArgs} args - Arguments to update one Interval.
     * @example
     * // Update one Interval
     * const interval = await prisma.interval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntervalUpdateArgs>(args: SelectSubset<T, IntervalUpdateArgs<ExtArgs>>): Prisma__IntervalClient<$Result.GetResult<Prisma.$IntervalPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Intervals.
     * @param {IntervalDeleteManyArgs} args - Arguments to filter Intervals to delete.
     * @example
     * // Delete a few Intervals
     * const { count } = await prisma.interval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntervalDeleteManyArgs>(args?: SelectSubset<T, IntervalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intervals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intervals
     * const interval = await prisma.interval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntervalUpdateManyArgs>(args: SelectSubset<T, IntervalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intervals and returns the data updated in the database.
     * @param {IntervalUpdateManyAndReturnArgs} args - Arguments to update many Intervals.
     * @example
     * // Update many Intervals
     * const interval = await prisma.interval.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Intervals and only return the `id`
     * const intervalWithIdOnly = await prisma.interval.updateManyAndReturn({
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
    updateManyAndReturn<T extends IntervalUpdateManyAndReturnArgs>(args: SelectSubset<T, IntervalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntervalPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Interval.
     * @param {IntervalUpsertArgs} args - Arguments to update or create a Interval.
     * @example
     * // Update or create a Interval
     * const interval = await prisma.interval.upsert({
     *   create: {
     *     // ... data to create a Interval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interval we want to update
     *   }
     * })
     */
    upsert<T extends IntervalUpsertArgs>(args: SelectSubset<T, IntervalUpsertArgs<ExtArgs>>): Prisma__IntervalClient<$Result.GetResult<Prisma.$IntervalPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Intervals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervalCountArgs} args - Arguments to filter Intervals to count.
     * @example
     * // Count the number of Intervals
     * const count = await prisma.interval.count({
     *   where: {
     *     // ... the filter for the Intervals we want to count
     *   }
     * })
    **/
    count<T extends IntervalCountArgs>(
      args?: Subset<T, IntervalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntervalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntervalAggregateArgs>(args: Subset<T, IntervalAggregateArgs>): Prisma.PrismaPromise<GetIntervalAggregateType<T>>

    /**
     * Group by Interval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervalGroupByArgs} args - Group by arguments.
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
      T extends IntervalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntervalGroupByArgs['orderBy'] }
        : { orderBy?: IntervalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntervalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntervalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interval model
   */
  readonly fields: IntervalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntervalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Interval model
   */ 
  interface IntervalFieldRefs {
    readonly id: FieldRef<"Interval", 'String'>
    readonly visit_id: FieldRef<"Interval", 'String'>
    readonly intervalType: FieldRef<"Interval", 'String'>
    readonly interval_tag: FieldRef<"Interval", 'Int'>
    readonly configuration: FieldRef<"Interval", 'String'>
    readonly frequencies: FieldRef<"Interval", 'String'>
    readonly dataPoints: FieldRef<"Interval", 'String'>
    readonly server_createdAt: FieldRef<"Interval", 'DateTime'>
    readonly server_updatedAt: FieldRef<"Interval", 'DateTime'>
    readonly server_deletedAt: FieldRef<"Interval", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Interval findUnique
   */
  export type IntervalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
    /**
     * Filter, which Interval to fetch.
     */
    where: IntervalWhereUniqueInput
  }

  /**
   * Interval findUniqueOrThrow
   */
  export type IntervalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
    /**
     * Filter, which Interval to fetch.
     */
    where: IntervalWhereUniqueInput
  }

  /**
   * Interval findFirst
   */
  export type IntervalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
    /**
     * Filter, which Interval to fetch.
     */
    where?: IntervalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intervals to fetch.
     */
    orderBy?: IntervalOrderByWithRelationInput | IntervalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Intervals.
     */
    cursor?: IntervalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intervals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intervals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intervals.
     */
    distinct?: IntervalScalarFieldEnum | IntervalScalarFieldEnum[]
  }

  /**
   * Interval findFirstOrThrow
   */
  export type IntervalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
    /**
     * Filter, which Interval to fetch.
     */
    where?: IntervalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intervals to fetch.
     */
    orderBy?: IntervalOrderByWithRelationInput | IntervalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Intervals.
     */
    cursor?: IntervalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intervals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intervals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intervals.
     */
    distinct?: IntervalScalarFieldEnum | IntervalScalarFieldEnum[]
  }

  /**
   * Interval findMany
   */
  export type IntervalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
    /**
     * Filter, which Intervals to fetch.
     */
    where?: IntervalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intervals to fetch.
     */
    orderBy?: IntervalOrderByWithRelationInput | IntervalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Intervals.
     */
    cursor?: IntervalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intervals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intervals.
     */
    skip?: number
    distinct?: IntervalScalarFieldEnum | IntervalScalarFieldEnum[]
  }

  /**
   * Interval create
   */
  export type IntervalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
    /**
     * The data needed to create a Interval.
     */
    data: XOR<IntervalCreateInput, IntervalUncheckedCreateInput>
  }

  /**
   * Interval createMany
   */
  export type IntervalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Intervals.
     */
    data: IntervalCreateManyInput | IntervalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interval createManyAndReturn
   */
  export type IntervalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
    /**
     * The data used to create many Intervals.
     */
    data: IntervalCreateManyInput | IntervalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interval update
   */
  export type IntervalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
    /**
     * The data needed to update a Interval.
     */
    data: XOR<IntervalUpdateInput, IntervalUncheckedUpdateInput>
    /**
     * Choose, which Interval to update.
     */
    where: IntervalWhereUniqueInput
  }

  /**
   * Interval updateMany
   */
  export type IntervalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Intervals.
     */
    data: XOR<IntervalUpdateManyMutationInput, IntervalUncheckedUpdateManyInput>
    /**
     * Filter which Intervals to update
     */
    where?: IntervalWhereInput
    /**
     * Limit how many Intervals to update.
     */
    limit?: number
  }

  /**
   * Interval updateManyAndReturn
   */
  export type IntervalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
    /**
     * The data used to update Intervals.
     */
    data: XOR<IntervalUpdateManyMutationInput, IntervalUncheckedUpdateManyInput>
    /**
     * Filter which Intervals to update
     */
    where?: IntervalWhereInput
    /**
     * Limit how many Intervals to update.
     */
    limit?: number
  }

  /**
   * Interval upsert
   */
  export type IntervalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
    /**
     * The filter to search for the Interval to update in case it exists.
     */
    where: IntervalWhereUniqueInput
    /**
     * In case the Interval found by the `where` argument doesn't exist, create a new Interval with this data.
     */
    create: XOR<IntervalCreateInput, IntervalUncheckedCreateInput>
    /**
     * In case the Interval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntervalUpdateInput, IntervalUncheckedUpdateInput>
  }

  /**
   * Interval delete
   */
  export type IntervalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
    /**
     * Filter which Interval to delete.
     */
    where: IntervalWhereUniqueInput
  }

  /**
   * Interval deleteMany
   */
  export type IntervalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Intervals to delete
     */
    where?: IntervalWhereInput
    /**
     * Limit how many Intervals to delete.
     */
    limit?: number
  }

  /**
   * Interval without action
   */
  export type IntervalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interval
     */
    select?: IntervalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interval
     */
    omit?: IntervalOmit<ExtArgs> | null
  }


  /**
   * Model Clinic
   */

  export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null
    _avg: ClinicAvgAggregateOutputType | null
    _sum: ClinicSumAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  export type ClinicAvgAggregateOutputType = {
    systolic: number | null
    diastolic: number | null
    temperature: number | null
    overAllYearOfSmoking: number | null
    dailyConsumption: number | null
    smokingIndex: number | null
    alcoholFreeDays: number | null
    alcoholConsumption: number | null
    hemoglobin: number | null
  }

  export type ClinicSumAggregateOutputType = {
    systolic: number | null
    diastolic: number | null
    temperature: number | null
    overAllYearOfSmoking: number | null
    dailyConsumption: number | null
    smokingIndex: number | null
    alcoholFreeDays: number | null
    alcoholConsumption: number | null
    hemoglobin: number | null
  }

  export type ClinicMinAggregateOutputType = {
    id: string | null
    patient_id: string | null
    bloodGroup: string | null
    antigenStatus: string | null
    systolic: number | null
    diastolic: number | null
    temperature: number | null
    smokingType: string | null
    overAllYearOfSmoking: number | null
    dailyConsumption: number | null
    smokingIndex: number | null
    alcoholFreeDays: number | null
    alcoholType: string | null
    alcoholConsumption: number | null
    hemoglobin: number | null
    reacentHealthIssue: string | null
    hereditaryHistory: string | null
    observationfhirid: string | null
    server_createdAt: Date | null
    server_updatedAt: Date | null
    server_deletedAt: Date | null
  }

  export type ClinicMaxAggregateOutputType = {
    id: string | null
    patient_id: string | null
    bloodGroup: string | null
    antigenStatus: string | null
    systolic: number | null
    diastolic: number | null
    temperature: number | null
    smokingType: string | null
    overAllYearOfSmoking: number | null
    dailyConsumption: number | null
    smokingIndex: number | null
    alcoholFreeDays: number | null
    alcoholType: string | null
    alcoholConsumption: number | null
    hemoglobin: number | null
    reacentHealthIssue: string | null
    hereditaryHistory: string | null
    observationfhirid: string | null
    server_createdAt: Date | null
    server_updatedAt: Date | null
    server_deletedAt: Date | null
  }

  export type ClinicCountAggregateOutputType = {
    id: number
    patient_id: number
    bloodGroup: number
    antigenStatus: number
    systolic: number
    diastolic: number
    temperature: number
    smokingType: number
    overAllYearOfSmoking: number
    dailyConsumption: number
    smokingIndex: number
    alcoholFreeDays: number
    alcoholType: number
    alcoholConsumption: number
    hemoglobin: number
    reacentHealthIssue: number
    hereditaryHistory: number
    observationfhirid: number
    server_createdAt: number
    server_updatedAt: number
    server_deletedAt: number
    _all: number
  }


  export type ClinicAvgAggregateInputType = {
    systolic?: true
    diastolic?: true
    temperature?: true
    overAllYearOfSmoking?: true
    dailyConsumption?: true
    smokingIndex?: true
    alcoholFreeDays?: true
    alcoholConsumption?: true
    hemoglobin?: true
  }

  export type ClinicSumAggregateInputType = {
    systolic?: true
    diastolic?: true
    temperature?: true
    overAllYearOfSmoking?: true
    dailyConsumption?: true
    smokingIndex?: true
    alcoholFreeDays?: true
    alcoholConsumption?: true
    hemoglobin?: true
  }

  export type ClinicMinAggregateInputType = {
    id?: true
    patient_id?: true
    bloodGroup?: true
    antigenStatus?: true
    systolic?: true
    diastolic?: true
    temperature?: true
    smokingType?: true
    overAllYearOfSmoking?: true
    dailyConsumption?: true
    smokingIndex?: true
    alcoholFreeDays?: true
    alcoholType?: true
    alcoholConsumption?: true
    hemoglobin?: true
    reacentHealthIssue?: true
    hereditaryHistory?: true
    observationfhirid?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
  }

  export type ClinicMaxAggregateInputType = {
    id?: true
    patient_id?: true
    bloodGroup?: true
    antigenStatus?: true
    systolic?: true
    diastolic?: true
    temperature?: true
    smokingType?: true
    overAllYearOfSmoking?: true
    dailyConsumption?: true
    smokingIndex?: true
    alcoholFreeDays?: true
    alcoholType?: true
    alcoholConsumption?: true
    hemoglobin?: true
    reacentHealthIssue?: true
    hereditaryHistory?: true
    observationfhirid?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
  }

  export type ClinicCountAggregateInputType = {
    id?: true
    patient_id?: true
    bloodGroup?: true
    antigenStatus?: true
    systolic?: true
    diastolic?: true
    temperature?: true
    smokingType?: true
    overAllYearOfSmoking?: true
    dailyConsumption?: true
    smokingIndex?: true
    alcoholFreeDays?: true
    alcoholType?: true
    alcoholConsumption?: true
    hemoglobin?: true
    reacentHealthIssue?: true
    hereditaryHistory?: true
    observationfhirid?: true
    server_createdAt?: true
    server_updatedAt?: true
    server_deletedAt?: true
    _all?: true
  }

  export type ClinicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinic to aggregate.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clinics
    **/
    _count?: true | ClinicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClinicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClinicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicMaxAggregateInputType
  }

  export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
        [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic[P]>
      : GetScalarType<T[P], AggregateClinic[P]>
  }




  export type ClinicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicWhereInput
    orderBy?: ClinicOrderByWithAggregationInput | ClinicOrderByWithAggregationInput[]
    by: ClinicScalarFieldEnum[] | ClinicScalarFieldEnum
    having?: ClinicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicCountAggregateInputType | true
    _avg?: ClinicAvgAggregateInputType
    _sum?: ClinicSumAggregateInputType
    _min?: ClinicMinAggregateInputType
    _max?: ClinicMaxAggregateInputType
  }

  export type ClinicGroupByOutputType = {
    id: string
    patient_id: string | null
    bloodGroup: string
    antigenStatus: string
    systolic: number
    diastolic: number
    temperature: number
    smokingType: string
    overAllYearOfSmoking: number
    dailyConsumption: number
    smokingIndex: number
    alcoholFreeDays: number
    alcoholType: string
    alcoholConsumption: number
    hemoglobin: number
    reacentHealthIssue: string
    hereditaryHistory: string
    observationfhirid: string | null
    server_createdAt: Date
    server_updatedAt: Date
    server_deletedAt: Date | null
    _count: ClinicCountAggregateOutputType | null
    _avg: ClinicAvgAggregateOutputType | null
    _sum: ClinicSumAggregateOutputType | null
    _min: ClinicMinAggregateOutputType | null
    _max: ClinicMaxAggregateOutputType | null
  }

  type GetClinicGroupByPayload<T extends ClinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicGroupByOutputType[P]>
        }
      >
    >


  export type ClinicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    bloodGroup?: boolean
    antigenStatus?: boolean
    systolic?: boolean
    diastolic?: boolean
    temperature?: boolean
    smokingType?: boolean
    overAllYearOfSmoking?: boolean
    dailyConsumption?: boolean
    smokingIndex?: boolean
    alcoholFreeDays?: boolean
    alcoholType?: boolean
    alcoholConsumption?: boolean
    hemoglobin?: boolean
    reacentHealthIssue?: boolean
    hereditaryHistory?: boolean
    observationfhirid?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
    patient?: boolean | Clinic$patientArgs<ExtArgs>
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    bloodGroup?: boolean
    antigenStatus?: boolean
    systolic?: boolean
    diastolic?: boolean
    temperature?: boolean
    smokingType?: boolean
    overAllYearOfSmoking?: boolean
    dailyConsumption?: boolean
    smokingIndex?: boolean
    alcoholFreeDays?: boolean
    alcoholType?: boolean
    alcoholConsumption?: boolean
    hemoglobin?: boolean
    reacentHealthIssue?: boolean
    hereditaryHistory?: boolean
    observationfhirid?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
    patient?: boolean | Clinic$patientArgs<ExtArgs>
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    bloodGroup?: boolean
    antigenStatus?: boolean
    systolic?: boolean
    diastolic?: boolean
    temperature?: boolean
    smokingType?: boolean
    overAllYearOfSmoking?: boolean
    dailyConsumption?: boolean
    smokingIndex?: boolean
    alcoholFreeDays?: boolean
    alcoholType?: boolean
    alcoholConsumption?: boolean
    hemoglobin?: boolean
    reacentHealthIssue?: boolean
    hereditaryHistory?: boolean
    observationfhirid?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
    patient?: boolean | Clinic$patientArgs<ExtArgs>
  }, ExtArgs["result"]["clinic"]>

  export type ClinicSelectScalar = {
    id?: boolean
    patient_id?: boolean
    bloodGroup?: boolean
    antigenStatus?: boolean
    systolic?: boolean
    diastolic?: boolean
    temperature?: boolean
    smokingType?: boolean
    overAllYearOfSmoking?: boolean
    dailyConsumption?: boolean
    smokingIndex?: boolean
    alcoholFreeDays?: boolean
    alcoholType?: boolean
    alcoholConsumption?: boolean
    hemoglobin?: boolean
    reacentHealthIssue?: boolean
    hereditaryHistory?: boolean
    observationfhirid?: boolean
    server_createdAt?: boolean
    server_updatedAt?: boolean
    server_deletedAt?: boolean
  }

  export type ClinicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patient_id" | "bloodGroup" | "antigenStatus" | "systolic" | "diastolic" | "temperature" | "smokingType" | "overAllYearOfSmoking" | "dailyConsumption" | "smokingIndex" | "alcoholFreeDays" | "alcoholType" | "alcoholConsumption" | "hemoglobin" | "reacentHealthIssue" | "hereditaryHistory" | "observationfhirid" | "server_createdAt" | "server_updatedAt" | "server_deletedAt", ExtArgs["result"]["clinic"]>
  export type ClinicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | Clinic$patientArgs<ExtArgs>
  }
  export type ClinicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | Clinic$patientArgs<ExtArgs>
  }
  export type ClinicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | Clinic$patientArgs<ExtArgs>
  }

  export type $ClinicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clinic"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patient_id: string | null
      bloodGroup: string
      antigenStatus: string
      systolic: number
      diastolic: number
      temperature: number
      smokingType: string
      overAllYearOfSmoking: number
      dailyConsumption: number
      smokingIndex: number
      alcoholFreeDays: number
      alcoholType: string
      alcoholConsumption: number
      hemoglobin: number
      reacentHealthIssue: string
      hereditaryHistory: string
      observationfhirid: string | null
      server_createdAt: Date
      server_updatedAt: Date
      server_deletedAt: Date | null
    }, ExtArgs["result"]["clinic"]>
    composites: {}
  }

  type ClinicGetPayload<S extends boolean | null | undefined | ClinicDefaultArgs> = $Result.GetResult<Prisma.$ClinicPayload, S>

  type ClinicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClinicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicCountAggregateInputType | true
    }

  export interface ClinicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clinic'], meta: { name: 'Clinic' } }
    /**
     * Find zero or one Clinic that matches the filter.
     * @param {ClinicFindUniqueArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicFindUniqueArgs>(args: SelectSubset<T, ClinicFindUniqueArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Clinic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClinicFindUniqueOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Clinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicFindFirstArgs>(args?: SelectSubset<T, ClinicFindFirstArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Clinic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindFirstOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinic.findMany()
     * 
     * // Get first 10 Clinics
     * const clinics = await prisma.clinic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicWithIdOnly = await prisma.clinic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicFindManyArgs>(args?: SelectSubset<T, ClinicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Clinic.
     * @param {ClinicCreateArgs} args - Arguments to create a Clinic.
     * @example
     * // Create one Clinic
     * const Clinic = await prisma.clinic.create({
     *   data: {
     *     // ... data to create a Clinic
     *   }
     * })
     * 
     */
    create<T extends ClinicCreateArgs>(args: SelectSubset<T, ClinicCreateArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Clinics.
     * @param {ClinicCreateManyArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinic = await prisma.clinic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicCreateManyArgs>(args?: SelectSubset<T, ClinicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clinics and returns the data saved in the database.
     * @param {ClinicCreateManyAndReturnArgs} args - Arguments to create many Clinics.
     * @example
     * // Create many Clinics
     * const clinic = await prisma.clinic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clinics and only return the `id`
     * const clinicWithIdOnly = await prisma.clinic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Clinic.
     * @param {ClinicDeleteArgs} args - Arguments to delete one Clinic.
     * @example
     * // Delete one Clinic
     * const Clinic = await prisma.clinic.delete({
     *   where: {
     *     // ... filter to delete one Clinic
     *   }
     * })
     * 
     */
    delete<T extends ClinicDeleteArgs>(args: SelectSubset<T, ClinicDeleteArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Clinic.
     * @param {ClinicUpdateArgs} args - Arguments to update one Clinic.
     * @example
     * // Update one Clinic
     * const clinic = await prisma.clinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicUpdateArgs>(args: SelectSubset<T, ClinicUpdateArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Clinics.
     * @param {ClinicDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicDeleteManyArgs>(args?: SelectSubset<T, ClinicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicUpdateManyArgs>(args: SelectSubset<T, ClinicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinics and returns the data updated in the database.
     * @param {ClinicUpdateManyAndReturnArgs} args - Arguments to update many Clinics.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clinics and only return the `id`
     * const clinicWithIdOnly = await prisma.clinic.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClinicUpdateManyAndReturnArgs>(args: SelectSubset<T, ClinicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Clinic.
     * @param {ClinicUpsertArgs} args - Arguments to update or create a Clinic.
     * @example
     * // Update or create a Clinic
     * const clinic = await prisma.clinic.upsert({
     *   create: {
     *     // ... data to create a Clinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic we want to update
     *   }
     * })
     */
    upsert<T extends ClinicUpsertArgs>(args: SelectSubset<T, ClinicUpsertArgs<ExtArgs>>): Prisma__ClinicClient<$Result.GetResult<Prisma.$ClinicPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinic.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
    **/
    count<T extends ClinicCountArgs>(
      args?: Subset<T, ClinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicAggregateArgs>(args: Subset<T, ClinicAggregateArgs>): Prisma.PrismaPromise<GetClinicAggregateType<T>>

    /**
     * Group by Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicGroupByArgs} args - Group by arguments.
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
      T extends ClinicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicGroupByArgs['orderBy'] }
        : { orderBy?: ClinicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClinicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clinic model
   */
  readonly fields: ClinicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends Clinic$patientArgs<ExtArgs> = {}>(args?: Subset<T, Clinic$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Clinic model
   */ 
  interface ClinicFieldRefs {
    readonly id: FieldRef<"Clinic", 'String'>
    readonly patient_id: FieldRef<"Clinic", 'String'>
    readonly bloodGroup: FieldRef<"Clinic", 'String'>
    readonly antigenStatus: FieldRef<"Clinic", 'String'>
    readonly systolic: FieldRef<"Clinic", 'Int'>
    readonly diastolic: FieldRef<"Clinic", 'Int'>
    readonly temperature: FieldRef<"Clinic", 'Float'>
    readonly smokingType: FieldRef<"Clinic", 'String'>
    readonly overAllYearOfSmoking: FieldRef<"Clinic", 'Int'>
    readonly dailyConsumption: FieldRef<"Clinic", 'Int'>
    readonly smokingIndex: FieldRef<"Clinic", 'Int'>
    readonly alcoholFreeDays: FieldRef<"Clinic", 'Int'>
    readonly alcoholType: FieldRef<"Clinic", 'String'>
    readonly alcoholConsumption: FieldRef<"Clinic", 'Int'>
    readonly hemoglobin: FieldRef<"Clinic", 'Int'>
    readonly reacentHealthIssue: FieldRef<"Clinic", 'String'>
    readonly hereditaryHistory: FieldRef<"Clinic", 'String'>
    readonly observationfhirid: FieldRef<"Clinic", 'String'>
    readonly server_createdAt: FieldRef<"Clinic", 'DateTime'>
    readonly server_updatedAt: FieldRef<"Clinic", 'DateTime'>
    readonly server_deletedAt: FieldRef<"Clinic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clinic findUnique
   */
  export type ClinicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic findUniqueOrThrow
   */
  export type ClinicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic findFirst
   */
  export type ClinicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic findFirstOrThrow
   */
  export type ClinicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinic to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic findMany
   */
  export type ClinicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter, which Clinics to fetch.
     */
    where?: ClinicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinics to fetch.
     */
    orderBy?: ClinicOrderByWithRelationInput | ClinicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clinics.
     */
    cursor?: ClinicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinics.
     */
    skip?: number
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[]
  }

  /**
   * Clinic create
   */
  export type ClinicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The data needed to create a Clinic.
     */
    data: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
  }

  /**
   * Clinic createMany
   */
  export type ClinicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clinics.
     */
    data: ClinicCreateManyInput | ClinicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinic createManyAndReturn
   */
  export type ClinicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * The data used to create many Clinics.
     */
    data: ClinicCreateManyInput | ClinicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clinic update
   */
  export type ClinicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The data needed to update a Clinic.
     */
    data: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
    /**
     * Choose, which Clinic to update.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic updateMany
   */
  export type ClinicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicUpdateManyMutationInput, ClinicUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to update.
     */
    limit?: number
  }

  /**
   * Clinic updateManyAndReturn
   */
  export type ClinicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * The data used to update Clinics.
     */
    data: XOR<ClinicUpdateManyMutationInput, ClinicUncheckedUpdateManyInput>
    /**
     * Filter which Clinics to update
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clinic upsert
   */
  export type ClinicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * The filter to search for the Clinic to update in case it exists.
     */
    where: ClinicWhereUniqueInput
    /**
     * In case the Clinic found by the `where` argument doesn't exist, create a new Clinic with this data.
     */
    create: XOR<ClinicCreateInput, ClinicUncheckedCreateInput>
    /**
     * In case the Clinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicUpdateInput, ClinicUncheckedUpdateInput>
  }

  /**
   * Clinic delete
   */
  export type ClinicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
    /**
     * Filter which Clinic to delete.
     */
    where: ClinicWhereUniqueInput
  }

  /**
   * Clinic deleteMany
   */
  export type ClinicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinics to delete
     */
    where?: ClinicWhereInput
    /**
     * Limit how many Clinics to delete.
     */
    limit?: number
  }

  /**
   * Clinic.patient
   */
  export type Clinic$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * Clinic without action
   */
  export type ClinicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinic
     */
    select?: ClinicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clinic
     */
    omit?: ClinicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicInclude<ExtArgs> | null
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


  export const PrimeUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type PrimeUserScalarFieldEnum = (typeof PrimeUserScalarFieldEnum)[keyof typeof PrimeUserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    dateOfBirth: 'dateOfBirth',
    contactInformation: 'contactInformation',
    age: 'age',
    gender: 'gender',
    height: 'height',
    weight: 'weight',
    fhirId: 'fhirId',
    abhaId: 'abhaId',
    server_createdAt: 'server_createdAt',
    server_updatedAt: 'server_updatedAt',
    server_deletedAt: 'server_deletedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const VisitScalarFieldEnum: {
    id: 'id',
    patient_id: 'patient_id',
    visitDate: 'visitDate',
    visitNotes: 'visitNotes',
    visitType: 'visitType',
    encounterfhirid: 'encounterfhirid',
    server_createdAt: 'server_createdAt',
    server_updatedAt: 'server_updatedAt',
    server_deletedAt: 'server_deletedAt'
  };

  export type VisitScalarFieldEnum = (typeof VisitScalarFieldEnum)[keyof typeof VisitScalarFieldEnum]


  export const IntervalScalarFieldEnum: {
    id: 'id',
    visit_id: 'visit_id',
    intervalType: 'intervalType',
    interval_tag: 'interval_tag',
    configuration: 'configuration',
    frequencies: 'frequencies',
    dataPoints: 'dataPoints',
    server_createdAt: 'server_createdAt',
    server_updatedAt: 'server_updatedAt',
    server_deletedAt: 'server_deletedAt'
  };

  export type IntervalScalarFieldEnum = (typeof IntervalScalarFieldEnum)[keyof typeof IntervalScalarFieldEnum]


  export const ClinicScalarFieldEnum: {
    id: 'id',
    patient_id: 'patient_id',
    bloodGroup: 'bloodGroup',
    antigenStatus: 'antigenStatus',
    systolic: 'systolic',
    diastolic: 'diastolic',
    temperature: 'temperature',
    smokingType: 'smokingType',
    overAllYearOfSmoking: 'overAllYearOfSmoking',
    dailyConsumption: 'dailyConsumption',
    smokingIndex: 'smokingIndex',
    alcoholFreeDays: 'alcoholFreeDays',
    alcoholType: 'alcoholType',
    alcoholConsumption: 'alcoholConsumption',
    hemoglobin: 'hemoglobin',
    reacentHealthIssue: 'reacentHealthIssue',
    hereditaryHistory: 'hereditaryHistory',
    observationfhirid: 'observationfhirid',
    server_createdAt: 'server_createdAt',
    server_updatedAt: 'server_updatedAt',
    server_deletedAt: 'server_deletedAt'
  };

  export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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


  export type primeUserWhereInput = {
    AND?: primeUserWhereInput | primeUserWhereInput[]
    OR?: primeUserWhereInput[]
    NOT?: primeUserWhereInput | primeUserWhereInput[]
    id?: StringFilter<"primeUser"> | string
    email?: StringFilter<"primeUser"> | string
    password?: StringFilter<"primeUser"> | string
  }

  export type primeUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type primeUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: primeUserWhereInput | primeUserWhereInput[]
    OR?: primeUserWhereInput[]
    NOT?: primeUserWhereInput | primeUserWhereInput[]
    password?: StringFilter<"primeUser"> | string
  }, "id" | "email">

  export type primeUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: primeUserCountOrderByAggregateInput
    _max?: primeUserMaxOrderByAggregateInput
    _min?: primeUserMinOrderByAggregateInput
  }

  export type primeUserScalarWhereWithAggregatesInput = {
    AND?: primeUserScalarWhereWithAggregatesInput | primeUserScalarWhereWithAggregatesInput[]
    OR?: primeUserScalarWhereWithAggregatesInput[]
    NOT?: primeUserScalarWhereWithAggregatesInput | primeUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"primeUser"> | string
    email?: StringWithAggregatesFilter<"primeUser"> | string
    password?: StringWithAggregatesFilter<"primeUser"> | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    fullName?: StringFilter<"Patient"> | string
    email?: StringFilter<"Patient"> | string
    dateOfBirth?: StringFilter<"Patient"> | string
    contactInformation?: StringFilter<"Patient"> | string
    age?: IntFilter<"Patient"> | number
    gender?: StringFilter<"Patient"> | string
    height?: FloatFilter<"Patient"> | number
    weight?: FloatFilter<"Patient"> | number
    fhirId?: StringNullableFilter<"Patient"> | string | null
    abhaId?: StringNullableFilter<"Patient"> | string | null
    server_createdAt?: DateTimeFilter<"Patient"> | Date | string
    server_updatedAt?: DateTimeFilter<"Patient"> | Date | string
    server_deletedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    visits?: VisitListRelationFilter
    clinic?: XOR<ClinicNullableScalarRelationFilter, ClinicWhereInput> | null
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    contactInformation?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    fhirId?: SortOrderInput | SortOrder
    abhaId?: SortOrderInput | SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrderInput | SortOrder
    visits?: VisitOrderByRelationAggregateInput
    clinic?: ClinicOrderByWithRelationInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    fullName?: StringFilter<"Patient"> | string
    dateOfBirth?: StringFilter<"Patient"> | string
    contactInformation?: StringFilter<"Patient"> | string
    age?: IntFilter<"Patient"> | number
    gender?: StringFilter<"Patient"> | string
    height?: FloatFilter<"Patient"> | number
    weight?: FloatFilter<"Patient"> | number
    fhirId?: StringNullableFilter<"Patient"> | string | null
    abhaId?: StringNullableFilter<"Patient"> | string | null
    server_createdAt?: DateTimeFilter<"Patient"> | Date | string
    server_updatedAt?: DateTimeFilter<"Patient"> | Date | string
    server_deletedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    visits?: VisitListRelationFilter
    clinic?: XOR<ClinicNullableScalarRelationFilter, ClinicWhereInput> | null
  }, "id" | "email">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    contactInformation?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    fhirId?: SortOrderInput | SortOrder
    abhaId?: SortOrderInput | SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrderInput | SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    fullName?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: StringWithAggregatesFilter<"Patient"> | string
    contactInformation?: StringWithAggregatesFilter<"Patient"> | string
    age?: IntWithAggregatesFilter<"Patient"> | number
    gender?: StringWithAggregatesFilter<"Patient"> | string
    height?: FloatWithAggregatesFilter<"Patient"> | number
    weight?: FloatWithAggregatesFilter<"Patient"> | number
    fhirId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    abhaId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    server_createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    server_updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    server_deletedAt?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
  }

  export type VisitWhereInput = {
    AND?: VisitWhereInput | VisitWhereInput[]
    OR?: VisitWhereInput[]
    NOT?: VisitWhereInput | VisitWhereInput[]
    id?: StringFilter<"Visit"> | string
    patient_id?: StringFilter<"Visit"> | string
    visitDate?: StringFilter<"Visit"> | string
    visitNotes?: StringNullableFilter<"Visit"> | string | null
    visitType?: StringFilter<"Visit"> | string
    encounterfhirid?: StringNullableFilter<"Visit"> | string | null
    server_createdAt?: DateTimeFilter<"Visit"> | Date | string
    server_updatedAt?: DateTimeFilter<"Visit"> | Date | string
    server_deletedAt?: DateTimeNullableFilter<"Visit"> | Date | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type VisitOrderByWithRelationInput = {
    id?: SortOrder
    patient_id?: SortOrder
    visitDate?: SortOrder
    visitNotes?: SortOrderInput | SortOrder
    visitType?: SortOrder
    encounterfhirid?: SortOrderInput | SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type VisitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VisitWhereInput | VisitWhereInput[]
    OR?: VisitWhereInput[]
    NOT?: VisitWhereInput | VisitWhereInput[]
    patient_id?: StringFilter<"Visit"> | string
    visitDate?: StringFilter<"Visit"> | string
    visitNotes?: StringNullableFilter<"Visit"> | string | null
    visitType?: StringFilter<"Visit"> | string
    encounterfhirid?: StringNullableFilter<"Visit"> | string | null
    server_createdAt?: DateTimeFilter<"Visit"> | Date | string
    server_updatedAt?: DateTimeFilter<"Visit"> | Date | string
    server_deletedAt?: DateTimeNullableFilter<"Visit"> | Date | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type VisitOrderByWithAggregationInput = {
    id?: SortOrder
    patient_id?: SortOrder
    visitDate?: SortOrder
    visitNotes?: SortOrderInput | SortOrder
    visitType?: SortOrder
    encounterfhirid?: SortOrderInput | SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrderInput | SortOrder
    _count?: VisitCountOrderByAggregateInput
    _max?: VisitMaxOrderByAggregateInput
    _min?: VisitMinOrderByAggregateInput
  }

  export type VisitScalarWhereWithAggregatesInput = {
    AND?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[]
    OR?: VisitScalarWhereWithAggregatesInput[]
    NOT?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Visit"> | string
    patient_id?: StringWithAggregatesFilter<"Visit"> | string
    visitDate?: StringWithAggregatesFilter<"Visit"> | string
    visitNotes?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    visitType?: StringWithAggregatesFilter<"Visit"> | string
    encounterfhirid?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    server_createdAt?: DateTimeWithAggregatesFilter<"Visit"> | Date | string
    server_updatedAt?: DateTimeWithAggregatesFilter<"Visit"> | Date | string
    server_deletedAt?: DateTimeNullableWithAggregatesFilter<"Visit"> | Date | string | null
  }

  export type IntervalWhereInput = {
    AND?: IntervalWhereInput | IntervalWhereInput[]
    OR?: IntervalWhereInput[]
    NOT?: IntervalWhereInput | IntervalWhereInput[]
    id?: StringFilter<"Interval"> | string
    visit_id?: StringFilter<"Interval"> | string
    intervalType?: StringFilter<"Interval"> | string
    interval_tag?: IntFilter<"Interval"> | number
    configuration?: StringFilter<"Interval"> | string
    frequencies?: StringFilter<"Interval"> | string
    dataPoints?: StringFilter<"Interval"> | string
    server_createdAt?: DateTimeFilter<"Interval"> | Date | string
    server_updatedAt?: DateTimeFilter<"Interval"> | Date | string
    server_deletedAt?: DateTimeNullableFilter<"Interval"> | Date | string | null
  }

  export type IntervalOrderByWithRelationInput = {
    id?: SortOrder
    visit_id?: SortOrder
    intervalType?: SortOrder
    interval_tag?: SortOrder
    configuration?: SortOrder
    frequencies?: SortOrder
    dataPoints?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrderInput | SortOrder
  }

  export type IntervalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IntervalWhereInput | IntervalWhereInput[]
    OR?: IntervalWhereInput[]
    NOT?: IntervalWhereInput | IntervalWhereInput[]
    visit_id?: StringFilter<"Interval"> | string
    intervalType?: StringFilter<"Interval"> | string
    interval_tag?: IntFilter<"Interval"> | number
    configuration?: StringFilter<"Interval"> | string
    frequencies?: StringFilter<"Interval"> | string
    dataPoints?: StringFilter<"Interval"> | string
    server_createdAt?: DateTimeFilter<"Interval"> | Date | string
    server_updatedAt?: DateTimeFilter<"Interval"> | Date | string
    server_deletedAt?: DateTimeNullableFilter<"Interval"> | Date | string | null
  }, "id">

  export type IntervalOrderByWithAggregationInput = {
    id?: SortOrder
    visit_id?: SortOrder
    intervalType?: SortOrder
    interval_tag?: SortOrder
    configuration?: SortOrder
    frequencies?: SortOrder
    dataPoints?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrderInput | SortOrder
    _count?: IntervalCountOrderByAggregateInput
    _avg?: IntervalAvgOrderByAggregateInput
    _max?: IntervalMaxOrderByAggregateInput
    _min?: IntervalMinOrderByAggregateInput
    _sum?: IntervalSumOrderByAggregateInput
  }

  export type IntervalScalarWhereWithAggregatesInput = {
    AND?: IntervalScalarWhereWithAggregatesInput | IntervalScalarWhereWithAggregatesInput[]
    OR?: IntervalScalarWhereWithAggregatesInput[]
    NOT?: IntervalScalarWhereWithAggregatesInput | IntervalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interval"> | string
    visit_id?: StringWithAggregatesFilter<"Interval"> | string
    intervalType?: StringWithAggregatesFilter<"Interval"> | string
    interval_tag?: IntWithAggregatesFilter<"Interval"> | number
    configuration?: StringWithAggregatesFilter<"Interval"> | string
    frequencies?: StringWithAggregatesFilter<"Interval"> | string
    dataPoints?: StringWithAggregatesFilter<"Interval"> | string
    server_createdAt?: DateTimeWithAggregatesFilter<"Interval"> | Date | string
    server_updatedAt?: DateTimeWithAggregatesFilter<"Interval"> | Date | string
    server_deletedAt?: DateTimeNullableWithAggregatesFilter<"Interval"> | Date | string | null
  }

  export type ClinicWhereInput = {
    AND?: ClinicWhereInput | ClinicWhereInput[]
    OR?: ClinicWhereInput[]
    NOT?: ClinicWhereInput | ClinicWhereInput[]
    id?: StringFilter<"Clinic"> | string
    patient_id?: StringNullableFilter<"Clinic"> | string | null
    bloodGroup?: StringFilter<"Clinic"> | string
    antigenStatus?: StringFilter<"Clinic"> | string
    systolic?: IntFilter<"Clinic"> | number
    diastolic?: IntFilter<"Clinic"> | number
    temperature?: FloatFilter<"Clinic"> | number
    smokingType?: StringFilter<"Clinic"> | string
    overAllYearOfSmoking?: IntFilter<"Clinic"> | number
    dailyConsumption?: IntFilter<"Clinic"> | number
    smokingIndex?: IntFilter<"Clinic"> | number
    alcoholFreeDays?: IntFilter<"Clinic"> | number
    alcoholType?: StringFilter<"Clinic"> | string
    alcoholConsumption?: IntFilter<"Clinic"> | number
    hemoglobin?: IntFilter<"Clinic"> | number
    reacentHealthIssue?: StringFilter<"Clinic"> | string
    hereditaryHistory?: StringFilter<"Clinic"> | string
    observationfhirid?: StringNullableFilter<"Clinic"> | string | null
    server_createdAt?: DateTimeFilter<"Clinic"> | Date | string
    server_updatedAt?: DateTimeFilter<"Clinic"> | Date | string
    server_deletedAt?: DateTimeNullableFilter<"Clinic"> | Date | string | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }

  export type ClinicOrderByWithRelationInput = {
    id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    bloodGroup?: SortOrder
    antigenStatus?: SortOrder
    systolic?: SortOrder
    diastolic?: SortOrder
    temperature?: SortOrder
    smokingType?: SortOrder
    overAllYearOfSmoking?: SortOrder
    dailyConsumption?: SortOrder
    smokingIndex?: SortOrder
    alcoholFreeDays?: SortOrder
    alcoholType?: SortOrder
    alcoholConsumption?: SortOrder
    hemoglobin?: SortOrder
    reacentHealthIssue?: SortOrder
    hereditaryHistory?: SortOrder
    observationfhirid?: SortOrderInput | SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type ClinicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patient_id?: string
    AND?: ClinicWhereInput | ClinicWhereInput[]
    OR?: ClinicWhereInput[]
    NOT?: ClinicWhereInput | ClinicWhereInput[]
    bloodGroup?: StringFilter<"Clinic"> | string
    antigenStatus?: StringFilter<"Clinic"> | string
    systolic?: IntFilter<"Clinic"> | number
    diastolic?: IntFilter<"Clinic"> | number
    temperature?: FloatFilter<"Clinic"> | number
    smokingType?: StringFilter<"Clinic"> | string
    overAllYearOfSmoking?: IntFilter<"Clinic"> | number
    dailyConsumption?: IntFilter<"Clinic"> | number
    smokingIndex?: IntFilter<"Clinic"> | number
    alcoholFreeDays?: IntFilter<"Clinic"> | number
    alcoholType?: StringFilter<"Clinic"> | string
    alcoholConsumption?: IntFilter<"Clinic"> | number
    hemoglobin?: IntFilter<"Clinic"> | number
    reacentHealthIssue?: StringFilter<"Clinic"> | string
    hereditaryHistory?: StringFilter<"Clinic"> | string
    observationfhirid?: StringNullableFilter<"Clinic"> | string | null
    server_createdAt?: DateTimeFilter<"Clinic"> | Date | string
    server_updatedAt?: DateTimeFilter<"Clinic"> | Date | string
    server_deletedAt?: DateTimeNullableFilter<"Clinic"> | Date | string | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }, "id" | "id" | "patient_id">

  export type ClinicOrderByWithAggregationInput = {
    id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    bloodGroup?: SortOrder
    antigenStatus?: SortOrder
    systolic?: SortOrder
    diastolic?: SortOrder
    temperature?: SortOrder
    smokingType?: SortOrder
    overAllYearOfSmoking?: SortOrder
    dailyConsumption?: SortOrder
    smokingIndex?: SortOrder
    alcoholFreeDays?: SortOrder
    alcoholType?: SortOrder
    alcoholConsumption?: SortOrder
    hemoglobin?: SortOrder
    reacentHealthIssue?: SortOrder
    hereditaryHistory?: SortOrder
    observationfhirid?: SortOrderInput | SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrderInput | SortOrder
    _count?: ClinicCountOrderByAggregateInput
    _avg?: ClinicAvgOrderByAggregateInput
    _max?: ClinicMaxOrderByAggregateInput
    _min?: ClinicMinOrderByAggregateInput
    _sum?: ClinicSumOrderByAggregateInput
  }

  export type ClinicScalarWhereWithAggregatesInput = {
    AND?: ClinicScalarWhereWithAggregatesInput | ClinicScalarWhereWithAggregatesInput[]
    OR?: ClinicScalarWhereWithAggregatesInput[]
    NOT?: ClinicScalarWhereWithAggregatesInput | ClinicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clinic"> | string
    patient_id?: StringNullableWithAggregatesFilter<"Clinic"> | string | null
    bloodGroup?: StringWithAggregatesFilter<"Clinic"> | string
    antigenStatus?: StringWithAggregatesFilter<"Clinic"> | string
    systolic?: IntWithAggregatesFilter<"Clinic"> | number
    diastolic?: IntWithAggregatesFilter<"Clinic"> | number
    temperature?: FloatWithAggregatesFilter<"Clinic"> | number
    smokingType?: StringWithAggregatesFilter<"Clinic"> | string
    overAllYearOfSmoking?: IntWithAggregatesFilter<"Clinic"> | number
    dailyConsumption?: IntWithAggregatesFilter<"Clinic"> | number
    smokingIndex?: IntWithAggregatesFilter<"Clinic"> | number
    alcoholFreeDays?: IntWithAggregatesFilter<"Clinic"> | number
    alcoholType?: StringWithAggregatesFilter<"Clinic"> | string
    alcoholConsumption?: IntWithAggregatesFilter<"Clinic"> | number
    hemoglobin?: IntWithAggregatesFilter<"Clinic"> | number
    reacentHealthIssue?: StringWithAggregatesFilter<"Clinic"> | string
    hereditaryHistory?: StringWithAggregatesFilter<"Clinic"> | string
    observationfhirid?: StringNullableWithAggregatesFilter<"Clinic"> | string | null
    server_createdAt?: DateTimeWithAggregatesFilter<"Clinic"> | Date | string
    server_updatedAt?: DateTimeWithAggregatesFilter<"Clinic"> | Date | string
    server_deletedAt?: DateTimeNullableWithAggregatesFilter<"Clinic"> | Date | string | null
  }

  export type primeUserCreateInput = {
    id?: string
    email: string
    password: string
  }

  export type primeUserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
  }

  export type primeUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type primeUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type primeUserCreateManyInput = {
    id?: string
    email: string
    password: string
  }

  export type primeUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type primeUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PatientCreateInput = {
    id: string
    fullName: string
    email: string
    dateOfBirth: string
    contactInformation: string
    age: number
    gender: string
    height: number
    weight: number
    fhirId?: string | null
    abhaId?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
    visits?: VisitCreateNestedManyWithoutPatientInput
    clinic?: ClinicCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id: string
    fullName: string
    email: string
    dateOfBirth: string
    contactInformation: string
    age: number
    gender: string
    height: number
    weight: number
    fhirId?: string | null
    abhaId?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
    visits?: VisitUncheckedCreateNestedManyWithoutPatientInput
    clinic?: ClinicUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    contactInformation?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    fhirId?: NullableStringFieldUpdateOperationsInput | string | null
    abhaId?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visits?: VisitUpdateManyWithoutPatientNestedInput
    clinic?: ClinicUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    contactInformation?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    fhirId?: NullableStringFieldUpdateOperationsInput | string | null
    abhaId?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visits?: VisitUncheckedUpdateManyWithoutPatientNestedInput
    clinic?: ClinicUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id: string
    fullName: string
    email: string
    dateOfBirth: string
    contactInformation: string
    age: number
    gender: string
    height: number
    weight: number
    fhirId?: string | null
    abhaId?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    contactInformation?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    fhirId?: NullableStringFieldUpdateOperationsInput | string | null
    abhaId?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    contactInformation?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    fhirId?: NullableStringFieldUpdateOperationsInput | string | null
    abhaId?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VisitCreateInput = {
    id: string
    visitDate: string
    visitNotes?: string | null
    visitType: string
    encounterfhirid?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutVisitsInput
  }

  export type VisitUncheckedCreateInput = {
    id: string
    patient_id: string
    visitDate: string
    visitNotes?: string | null
    visitType: string
    encounterfhirid?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type VisitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitDate?: StringFieldUpdateOperationsInput | string
    visitNotes?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: StringFieldUpdateOperationsInput | string
    encounterfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutVisitsNestedInput
  }

  export type VisitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    visitDate?: StringFieldUpdateOperationsInput | string
    visitNotes?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: StringFieldUpdateOperationsInput | string
    encounterfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VisitCreateManyInput = {
    id: string
    patient_id: string
    visitDate: string
    visitNotes?: string | null
    visitType: string
    encounterfhirid?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type VisitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitDate?: StringFieldUpdateOperationsInput | string
    visitNotes?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: StringFieldUpdateOperationsInput | string
    encounterfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VisitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    visitDate?: StringFieldUpdateOperationsInput | string
    visitNotes?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: StringFieldUpdateOperationsInput | string
    encounterfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntervalCreateInput = {
    id: string
    visit_id: string
    intervalType: string
    interval_tag: number
    configuration: string
    frequencies: string
    dataPoints: string
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type IntervalUncheckedCreateInput = {
    id: string
    visit_id: string
    intervalType: string
    interval_tag: number
    configuration: string
    frequencies: string
    dataPoints: string
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type IntervalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visit_id?: StringFieldUpdateOperationsInput | string
    intervalType?: StringFieldUpdateOperationsInput | string
    interval_tag?: IntFieldUpdateOperationsInput | number
    configuration?: StringFieldUpdateOperationsInput | string
    frequencies?: StringFieldUpdateOperationsInput | string
    dataPoints?: StringFieldUpdateOperationsInput | string
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntervalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visit_id?: StringFieldUpdateOperationsInput | string
    intervalType?: StringFieldUpdateOperationsInput | string
    interval_tag?: IntFieldUpdateOperationsInput | number
    configuration?: StringFieldUpdateOperationsInput | string
    frequencies?: StringFieldUpdateOperationsInput | string
    dataPoints?: StringFieldUpdateOperationsInput | string
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntervalCreateManyInput = {
    id: string
    visit_id: string
    intervalType: string
    interval_tag: number
    configuration: string
    frequencies: string
    dataPoints: string
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type IntervalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    visit_id?: StringFieldUpdateOperationsInput | string
    intervalType?: StringFieldUpdateOperationsInput | string
    interval_tag?: IntFieldUpdateOperationsInput | number
    configuration?: StringFieldUpdateOperationsInput | string
    frequencies?: StringFieldUpdateOperationsInput | string
    dataPoints?: StringFieldUpdateOperationsInput | string
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntervalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    visit_id?: StringFieldUpdateOperationsInput | string
    intervalType?: StringFieldUpdateOperationsInput | string
    interval_tag?: IntFieldUpdateOperationsInput | number
    configuration?: StringFieldUpdateOperationsInput | string
    frequencies?: StringFieldUpdateOperationsInput | string
    dataPoints?: StringFieldUpdateOperationsInput | string
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClinicCreateInput = {
    id: string
    bloodGroup: string
    antigenStatus: string
    systolic: number
    diastolic: number
    temperature: number
    smokingType: string
    overAllYearOfSmoking: number
    dailyConsumption: number
    smokingIndex: number
    alcoholFreeDays: number
    alcoholType: string
    alcoholConsumption: number
    hemoglobin: number
    reacentHealthIssue: string
    hereditaryHistory: string
    observationfhirid?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
    patient?: PatientCreateNestedOneWithoutClinicInput
  }

  export type ClinicUncheckedCreateInput = {
    id: string
    patient_id?: string | null
    bloodGroup: string
    antigenStatus: string
    systolic: number
    diastolic: number
    temperature: number
    smokingType: string
    overAllYearOfSmoking: number
    dailyConsumption: number
    smokingIndex: number
    alcoholFreeDays: number
    alcoholType: string
    alcoholConsumption: number
    hemoglobin: number
    reacentHealthIssue: string
    hereditaryHistory: string
    observationfhirid?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type ClinicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    antigenStatus?: StringFieldUpdateOperationsInput | string
    systolic?: IntFieldUpdateOperationsInput | number
    diastolic?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    smokingType?: StringFieldUpdateOperationsInput | string
    overAllYearOfSmoking?: IntFieldUpdateOperationsInput | number
    dailyConsumption?: IntFieldUpdateOperationsInput | number
    smokingIndex?: IntFieldUpdateOperationsInput | number
    alcoholFreeDays?: IntFieldUpdateOperationsInput | number
    alcoholType?: StringFieldUpdateOperationsInput | string
    alcoholConsumption?: IntFieldUpdateOperationsInput | number
    hemoglobin?: IntFieldUpdateOperationsInput | number
    reacentHealthIssue?: StringFieldUpdateOperationsInput | string
    hereditaryHistory?: StringFieldUpdateOperationsInput | string
    observationfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneWithoutClinicNestedInput
  }

  export type ClinicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: StringFieldUpdateOperationsInput | string
    antigenStatus?: StringFieldUpdateOperationsInput | string
    systolic?: IntFieldUpdateOperationsInput | number
    diastolic?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    smokingType?: StringFieldUpdateOperationsInput | string
    overAllYearOfSmoking?: IntFieldUpdateOperationsInput | number
    dailyConsumption?: IntFieldUpdateOperationsInput | number
    smokingIndex?: IntFieldUpdateOperationsInput | number
    alcoholFreeDays?: IntFieldUpdateOperationsInput | number
    alcoholType?: StringFieldUpdateOperationsInput | string
    alcoholConsumption?: IntFieldUpdateOperationsInput | number
    hemoglobin?: IntFieldUpdateOperationsInput | number
    reacentHealthIssue?: StringFieldUpdateOperationsInput | string
    hereditaryHistory?: StringFieldUpdateOperationsInput | string
    observationfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClinicCreateManyInput = {
    id: string
    patient_id?: string | null
    bloodGroup: string
    antigenStatus: string
    systolic: number
    diastolic: number
    temperature: number
    smokingType: string
    overAllYearOfSmoking: number
    dailyConsumption: number
    smokingIndex: number
    alcoholFreeDays: number
    alcoholType: string
    alcoholConsumption: number
    hemoglobin: number
    reacentHealthIssue: string
    hereditaryHistory: string
    observationfhirid?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type ClinicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    antigenStatus?: StringFieldUpdateOperationsInput | string
    systolic?: IntFieldUpdateOperationsInput | number
    diastolic?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    smokingType?: StringFieldUpdateOperationsInput | string
    overAllYearOfSmoking?: IntFieldUpdateOperationsInput | number
    dailyConsumption?: IntFieldUpdateOperationsInput | number
    smokingIndex?: IntFieldUpdateOperationsInput | number
    alcoholFreeDays?: IntFieldUpdateOperationsInput | number
    alcoholType?: StringFieldUpdateOperationsInput | string
    alcoholConsumption?: IntFieldUpdateOperationsInput | number
    hemoglobin?: IntFieldUpdateOperationsInput | number
    reacentHealthIssue?: StringFieldUpdateOperationsInput | string
    hereditaryHistory?: StringFieldUpdateOperationsInput | string
    observationfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClinicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: StringFieldUpdateOperationsInput | string
    antigenStatus?: StringFieldUpdateOperationsInput | string
    systolic?: IntFieldUpdateOperationsInput | number
    diastolic?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    smokingType?: StringFieldUpdateOperationsInput | string
    overAllYearOfSmoking?: IntFieldUpdateOperationsInput | number
    dailyConsumption?: IntFieldUpdateOperationsInput | number
    smokingIndex?: IntFieldUpdateOperationsInput | number
    alcoholFreeDays?: IntFieldUpdateOperationsInput | number
    alcoholType?: StringFieldUpdateOperationsInput | string
    alcoholConsumption?: IntFieldUpdateOperationsInput | number
    hemoglobin?: IntFieldUpdateOperationsInput | number
    reacentHealthIssue?: StringFieldUpdateOperationsInput | string
    hereditaryHistory?: StringFieldUpdateOperationsInput | string
    observationfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type primeUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type primeUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type primeUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VisitListRelationFilter = {
    every?: VisitWhereInput
    some?: VisitWhereInput
    none?: VisitWhereInput
  }

  export type ClinicNullableScalarRelationFilter = {
    is?: ClinicWhereInput | null
    isNot?: ClinicWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    contactInformation?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    fhirId?: SortOrder
    abhaId?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    contactInformation?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    fhirId?: SortOrder
    abhaId?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    contactInformation?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    fhirId?: SortOrder
    abhaId?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type VisitCountOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    visitDate?: SortOrder
    visitNotes?: SortOrder
    visitType?: SortOrder
    encounterfhirid?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type VisitMaxOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    visitDate?: SortOrder
    visitNotes?: SortOrder
    visitType?: SortOrder
    encounterfhirid?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type VisitMinOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    visitDate?: SortOrder
    visitNotes?: SortOrder
    visitType?: SortOrder
    encounterfhirid?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type IntervalCountOrderByAggregateInput = {
    id?: SortOrder
    visit_id?: SortOrder
    intervalType?: SortOrder
    interval_tag?: SortOrder
    configuration?: SortOrder
    frequencies?: SortOrder
    dataPoints?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type IntervalAvgOrderByAggregateInput = {
    interval_tag?: SortOrder
  }

  export type IntervalMaxOrderByAggregateInput = {
    id?: SortOrder
    visit_id?: SortOrder
    intervalType?: SortOrder
    interval_tag?: SortOrder
    configuration?: SortOrder
    frequencies?: SortOrder
    dataPoints?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type IntervalMinOrderByAggregateInput = {
    id?: SortOrder
    visit_id?: SortOrder
    intervalType?: SortOrder
    interval_tag?: SortOrder
    configuration?: SortOrder
    frequencies?: SortOrder
    dataPoints?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type IntervalSumOrderByAggregateInput = {
    interval_tag?: SortOrder
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type ClinicCountOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    bloodGroup?: SortOrder
    antigenStatus?: SortOrder
    systolic?: SortOrder
    diastolic?: SortOrder
    temperature?: SortOrder
    smokingType?: SortOrder
    overAllYearOfSmoking?: SortOrder
    dailyConsumption?: SortOrder
    smokingIndex?: SortOrder
    alcoholFreeDays?: SortOrder
    alcoholType?: SortOrder
    alcoholConsumption?: SortOrder
    hemoglobin?: SortOrder
    reacentHealthIssue?: SortOrder
    hereditaryHistory?: SortOrder
    observationfhirid?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type ClinicAvgOrderByAggregateInput = {
    systolic?: SortOrder
    diastolic?: SortOrder
    temperature?: SortOrder
    overAllYearOfSmoking?: SortOrder
    dailyConsumption?: SortOrder
    smokingIndex?: SortOrder
    alcoholFreeDays?: SortOrder
    alcoholConsumption?: SortOrder
    hemoglobin?: SortOrder
  }

  export type ClinicMaxOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    bloodGroup?: SortOrder
    antigenStatus?: SortOrder
    systolic?: SortOrder
    diastolic?: SortOrder
    temperature?: SortOrder
    smokingType?: SortOrder
    overAllYearOfSmoking?: SortOrder
    dailyConsumption?: SortOrder
    smokingIndex?: SortOrder
    alcoholFreeDays?: SortOrder
    alcoholType?: SortOrder
    alcoholConsumption?: SortOrder
    hemoglobin?: SortOrder
    reacentHealthIssue?: SortOrder
    hereditaryHistory?: SortOrder
    observationfhirid?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type ClinicMinOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    bloodGroup?: SortOrder
    antigenStatus?: SortOrder
    systolic?: SortOrder
    diastolic?: SortOrder
    temperature?: SortOrder
    smokingType?: SortOrder
    overAllYearOfSmoking?: SortOrder
    dailyConsumption?: SortOrder
    smokingIndex?: SortOrder
    alcoholFreeDays?: SortOrder
    alcoholType?: SortOrder
    alcoholConsumption?: SortOrder
    hemoglobin?: SortOrder
    reacentHealthIssue?: SortOrder
    hereditaryHistory?: SortOrder
    observationfhirid?: SortOrder
    server_createdAt?: SortOrder
    server_updatedAt?: SortOrder
    server_deletedAt?: SortOrder
  }

  export type ClinicSumOrderByAggregateInput = {
    systolic?: SortOrder
    diastolic?: SortOrder
    temperature?: SortOrder
    overAllYearOfSmoking?: SortOrder
    dailyConsumption?: SortOrder
    smokingIndex?: SortOrder
    alcoholFreeDays?: SortOrder
    alcoholConsumption?: SortOrder
    hemoglobin?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type VisitCreateNestedManyWithoutPatientInput = {
    create?: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput> | VisitCreateWithoutPatientInput[] | VisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutPatientInput | VisitCreateOrConnectWithoutPatientInput[]
    createMany?: VisitCreateManyPatientInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type ClinicCreateNestedOneWithoutPatientInput = {
    create?: XOR<ClinicCreateWithoutPatientInput, ClinicUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutPatientInput
    connect?: ClinicWhereUniqueInput
  }

  export type VisitUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput> | VisitCreateWithoutPatientInput[] | VisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutPatientInput | VisitCreateOrConnectWithoutPatientInput[]
    createMany?: VisitCreateManyPatientInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type ClinicUncheckedCreateNestedOneWithoutPatientInput = {
    create?: XOR<ClinicCreateWithoutPatientInput, ClinicUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutPatientInput
    connect?: ClinicWhereUniqueInput
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VisitUpdateManyWithoutPatientNestedInput = {
    create?: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput> | VisitCreateWithoutPatientInput[] | VisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutPatientInput | VisitCreateOrConnectWithoutPatientInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutPatientInput | VisitUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: VisitCreateManyPatientInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutPatientInput | VisitUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutPatientInput | VisitUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type ClinicUpdateOneWithoutPatientNestedInput = {
    create?: XOR<ClinicCreateWithoutPatientInput, ClinicUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutPatientInput
    upsert?: ClinicUpsertWithoutPatientInput
    disconnect?: ClinicWhereInput | boolean
    delete?: ClinicWhereInput | boolean
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutPatientInput, ClinicUpdateWithoutPatientInput>, ClinicUncheckedUpdateWithoutPatientInput>
  }

  export type VisitUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput> | VisitCreateWithoutPatientInput[] | VisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutPatientInput | VisitCreateOrConnectWithoutPatientInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutPatientInput | VisitUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: VisitCreateManyPatientInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutPatientInput | VisitUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutPatientInput | VisitUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type ClinicUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<ClinicCreateWithoutPatientInput, ClinicUncheckedCreateWithoutPatientInput>
    connectOrCreate?: ClinicCreateOrConnectWithoutPatientInput
    upsert?: ClinicUpsertWithoutPatientInput
    disconnect?: ClinicWhereInput | boolean
    delete?: ClinicWhereInput | boolean
    connect?: ClinicWhereUniqueInput
    update?: XOR<XOR<ClinicUpdateToOneWithWhereWithoutPatientInput, ClinicUpdateWithoutPatientInput>, ClinicUncheckedUpdateWithoutPatientInput>
  }

  export type PatientCreateNestedOneWithoutVisitsInput = {
    create?: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVisitsInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVisitsInput
    upsert?: PatientUpsertWithoutVisitsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutVisitsInput, PatientUpdateWithoutVisitsInput>, PatientUncheckedUpdateWithoutVisitsInput>
  }

  export type PatientCreateNestedOneWithoutClinicInput = {
    create?: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput>
    connectOrCreate?: PatientCreateOrConnectWithoutClinicInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneWithoutClinicNestedInput = {
    create?: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput>
    connectOrCreate?: PatientCreateOrConnectWithoutClinicInput
    upsert?: PatientUpsertWithoutClinicInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutClinicInput, PatientUpdateWithoutClinicInput>, PatientUncheckedUpdateWithoutClinicInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VisitCreateWithoutPatientInput = {
    id: string
    visitDate: string
    visitNotes?: string | null
    visitType: string
    encounterfhirid?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type VisitUncheckedCreateWithoutPatientInput = {
    id: string
    visitDate: string
    visitNotes?: string | null
    visitType: string
    encounterfhirid?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type VisitCreateOrConnectWithoutPatientInput = {
    where: VisitWhereUniqueInput
    create: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput>
  }

  export type VisitCreateManyPatientInputEnvelope = {
    data: VisitCreateManyPatientInput | VisitCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ClinicCreateWithoutPatientInput = {
    id: string
    bloodGroup: string
    antigenStatus: string
    systolic: number
    diastolic: number
    temperature: number
    smokingType: string
    overAllYearOfSmoking: number
    dailyConsumption: number
    smokingIndex: number
    alcoholFreeDays: number
    alcoholType: string
    alcoholConsumption: number
    hemoglobin: number
    reacentHealthIssue: string
    hereditaryHistory: string
    observationfhirid?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type ClinicUncheckedCreateWithoutPatientInput = {
    id: string
    bloodGroup: string
    antigenStatus: string
    systolic: number
    diastolic: number
    temperature: number
    smokingType: string
    overAllYearOfSmoking: number
    dailyConsumption: number
    smokingIndex: number
    alcoholFreeDays: number
    alcoholType: string
    alcoholConsumption: number
    hemoglobin: number
    reacentHealthIssue: string
    hereditaryHistory: string
    observationfhirid?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type ClinicCreateOrConnectWithoutPatientInput = {
    where: ClinicWhereUniqueInput
    create: XOR<ClinicCreateWithoutPatientInput, ClinicUncheckedCreateWithoutPatientInput>
  }

  export type VisitUpsertWithWhereUniqueWithoutPatientInput = {
    where: VisitWhereUniqueInput
    update: XOR<VisitUpdateWithoutPatientInput, VisitUncheckedUpdateWithoutPatientInput>
    create: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput>
  }

  export type VisitUpdateWithWhereUniqueWithoutPatientInput = {
    where: VisitWhereUniqueInput
    data: XOR<VisitUpdateWithoutPatientInput, VisitUncheckedUpdateWithoutPatientInput>
  }

  export type VisitUpdateManyWithWhereWithoutPatientInput = {
    where: VisitScalarWhereInput
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyWithoutPatientInput>
  }

  export type VisitScalarWhereInput = {
    AND?: VisitScalarWhereInput | VisitScalarWhereInput[]
    OR?: VisitScalarWhereInput[]
    NOT?: VisitScalarWhereInput | VisitScalarWhereInput[]
    id?: StringFilter<"Visit"> | string
    patient_id?: StringFilter<"Visit"> | string
    visitDate?: StringFilter<"Visit"> | string
    visitNotes?: StringNullableFilter<"Visit"> | string | null
    visitType?: StringFilter<"Visit"> | string
    encounterfhirid?: StringNullableFilter<"Visit"> | string | null
    server_createdAt?: DateTimeFilter<"Visit"> | Date | string
    server_updatedAt?: DateTimeFilter<"Visit"> | Date | string
    server_deletedAt?: DateTimeNullableFilter<"Visit"> | Date | string | null
  }

  export type ClinicUpsertWithoutPatientInput = {
    update: XOR<ClinicUpdateWithoutPatientInput, ClinicUncheckedUpdateWithoutPatientInput>
    create: XOR<ClinicCreateWithoutPatientInput, ClinicUncheckedCreateWithoutPatientInput>
    where?: ClinicWhereInput
  }

  export type ClinicUpdateToOneWithWhereWithoutPatientInput = {
    where?: ClinicWhereInput
    data: XOR<ClinicUpdateWithoutPatientInput, ClinicUncheckedUpdateWithoutPatientInput>
  }

  export type ClinicUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    antigenStatus?: StringFieldUpdateOperationsInput | string
    systolic?: IntFieldUpdateOperationsInput | number
    diastolic?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    smokingType?: StringFieldUpdateOperationsInput | string
    overAllYearOfSmoking?: IntFieldUpdateOperationsInput | number
    dailyConsumption?: IntFieldUpdateOperationsInput | number
    smokingIndex?: IntFieldUpdateOperationsInput | number
    alcoholFreeDays?: IntFieldUpdateOperationsInput | number
    alcoholType?: StringFieldUpdateOperationsInput | string
    alcoholConsumption?: IntFieldUpdateOperationsInput | number
    hemoglobin?: IntFieldUpdateOperationsInput | number
    reacentHealthIssue?: StringFieldUpdateOperationsInput | string
    hereditaryHistory?: StringFieldUpdateOperationsInput | string
    observationfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClinicUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    antigenStatus?: StringFieldUpdateOperationsInput | string
    systolic?: IntFieldUpdateOperationsInput | number
    diastolic?: IntFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    smokingType?: StringFieldUpdateOperationsInput | string
    overAllYearOfSmoking?: IntFieldUpdateOperationsInput | number
    dailyConsumption?: IntFieldUpdateOperationsInput | number
    smokingIndex?: IntFieldUpdateOperationsInput | number
    alcoholFreeDays?: IntFieldUpdateOperationsInput | number
    alcoholType?: StringFieldUpdateOperationsInput | string
    alcoholConsumption?: IntFieldUpdateOperationsInput | number
    hemoglobin?: IntFieldUpdateOperationsInput | number
    reacentHealthIssue?: StringFieldUpdateOperationsInput | string
    hereditaryHistory?: StringFieldUpdateOperationsInput | string
    observationfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientCreateWithoutVisitsInput = {
    id: string
    fullName: string
    email: string
    dateOfBirth: string
    contactInformation: string
    age: number
    gender: string
    height: number
    weight: number
    fhirId?: string | null
    abhaId?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
    clinic?: ClinicCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutVisitsInput = {
    id: string
    fullName: string
    email: string
    dateOfBirth: string
    contactInformation: string
    age: number
    gender: string
    height: number
    weight: number
    fhirId?: string | null
    abhaId?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
    clinic?: ClinicUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutVisitsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
  }

  export type PatientUpsertWithoutVisitsInput = {
    update: XOR<PatientUpdateWithoutVisitsInput, PatientUncheckedUpdateWithoutVisitsInput>
    create: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutVisitsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutVisitsInput, PatientUncheckedUpdateWithoutVisitsInput>
  }

  export type PatientUpdateWithoutVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    contactInformation?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    fhirId?: NullableStringFieldUpdateOperationsInput | string | null
    abhaId?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clinic?: ClinicUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    contactInformation?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    fhirId?: NullableStringFieldUpdateOperationsInput | string | null
    abhaId?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clinic?: ClinicUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type PatientCreateWithoutClinicInput = {
    id: string
    fullName: string
    email: string
    dateOfBirth: string
    contactInformation: string
    age: number
    gender: string
    height: number
    weight: number
    fhirId?: string | null
    abhaId?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
    visits?: VisitCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutClinicInput = {
    id: string
    fullName: string
    email: string
    dateOfBirth: string
    contactInformation: string
    age: number
    gender: string
    height: number
    weight: number
    fhirId?: string | null
    abhaId?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
    visits?: VisitUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutClinicInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput>
  }

  export type PatientUpsertWithoutClinicInput = {
    update: XOR<PatientUpdateWithoutClinicInput, PatientUncheckedUpdateWithoutClinicInput>
    create: XOR<PatientCreateWithoutClinicInput, PatientUncheckedCreateWithoutClinicInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutClinicInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutClinicInput, PatientUncheckedUpdateWithoutClinicInput>
  }

  export type PatientUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    contactInformation?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    fhirId?: NullableStringFieldUpdateOperationsInput | string | null
    abhaId?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visits?: VisitUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    contactInformation?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    fhirId?: NullableStringFieldUpdateOperationsInput | string | null
    abhaId?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visits?: VisitUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type VisitCreateManyPatientInput = {
    id: string
    visitDate: string
    visitNotes?: string | null
    visitType: string
    encounterfhirid?: string | null
    server_createdAt?: Date | string
    server_updatedAt?: Date | string
    server_deletedAt?: Date | string | null
  }

  export type VisitUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitDate?: StringFieldUpdateOperationsInput | string
    visitNotes?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: StringFieldUpdateOperationsInput | string
    encounterfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VisitUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitDate?: StringFieldUpdateOperationsInput | string
    visitNotes?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: StringFieldUpdateOperationsInput | string
    encounterfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VisitUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitDate?: StringFieldUpdateOperationsInput | string
    visitNotes?: NullableStringFieldUpdateOperationsInput | string | null
    visitType?: StringFieldUpdateOperationsInput | string
    encounterfhirid?: NullableStringFieldUpdateOperationsInput | string | null
    server_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server_deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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