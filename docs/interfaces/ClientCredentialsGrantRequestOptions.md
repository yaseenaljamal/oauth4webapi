[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: ClientCredentialsGrantRequestOptions

## Extends

- [`HttpRequestOptions`](HttpRequestOptions.md).[`AuthenticatedRequestOptions`](AuthenticatedRequestOptions.md).[`DPoPRequestOptions`](DPoPRequestOptions.md)

## Properties

### DPoP?

> `optional` **DPoP**: [`DPoPOptions`](DPoPOptions.md)

DPoP-related options.

#### Inherited from

[`DPoPRequestOptions`](DPoPRequestOptions.md).[`DPoP`](DPoPRequestOptions.md#dpop)

***

### \[customFetch\]()?

> `optional` **\[customFetch\]**: (`input`, `init`?) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

See [customFetch](../variables/customFetch.md).

#### Parameters

• **input**: `RequestInfo` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL)

• **init?**: `RequestInit`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

#### Inherited from

[`HttpRequestOptions`](HttpRequestOptions.md).[`[customFetch]`](HttpRequestOptions.md#%5Bcustomfetch%5D)

***

### \[useMtlsAlias\]?

> `optional` **\[useMtlsAlias\]**: `boolean`

See [useMtlsAlias](../variables/useMtlsAlias.md).

#### Inherited from

[`AuthenticatedRequestOptions`](AuthenticatedRequestOptions.md).[`[useMtlsAlias]`](AuthenticatedRequestOptions.md#%5Busemtlsalias%5D)

***

### clientPrivateKey?

> `optional` **clientPrivateKey**: [`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey) \| [`PrivateKey`](PrivateKey.md)

Private key to use for `private_key_jwt`
[client authentication](../type-aliases/ClientAuthenticationMethod.md). Its algorithm must be compatible with
a supported [JWS `alg` Algorithm](../type-aliases/JWSAlgorithm.md).

#### Inherited from

[`AuthenticatedRequestOptions`](AuthenticatedRequestOptions.md).[`clientPrivateKey`](AuthenticatedRequestOptions.md#clientprivatekey)

***

### headers?

> `optional` **headers**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`string`, `string`][] \| [`Headers`](https://developer.mozilla.org/docs/Web/API/Headers)

Headers to additionally send with the HTTP Request(s) triggered by this function's invocation.

#### Inherited from

[`HttpRequestOptions`](HttpRequestOptions.md).[`headers`](HttpRequestOptions.md#headers)

***

### signal?

> `optional` **signal**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal) \| () => [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

An AbortSignal instance, or a factory returning one, to abort the HTTP Request(s) triggered by
this function's invocation.

#### Example

A 5000ms timeout AbortSignal for every request

```js
const signal = () => AbortSignal.timeout(5_000) // Note: AbortSignal.timeout may not yet be available in all runtimes.
```

#### Inherited from

[`HttpRequestOptions`](HttpRequestOptions.md).[`signal`](HttpRequestOptions.md#signal)
