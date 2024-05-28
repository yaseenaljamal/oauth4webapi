[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: ProtectedResourceRequestOptions

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`HttpRequestOptions`](HttpRequestOptions.md), `"headers"`\>.[`DPoPRequestOptions`](DPoPRequestOptions.md)

## Properties

### DPoP?

> `optional` **DPoP**: [`DPoPOptions`](DPoPOptions.md)

DPoP-related options.

#### Inherited from

[`DPoPRequestOptions`](DPoPRequestOptions.md).[`DPoP`](DPoPRequestOptions.md#dpop)

***

### \[clockSkew\]?

> `optional` **\[clockSkew\]**: `number`

Use to adjust the client's assumed current time. Positive and negative finite values
representing seconds are allowed. Default is `0` (Date.now() + 0 seconds is used).

This option only affects the request if the [DPoP](DPoPRequestOptions.md#dpop)
option is also used.

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

`Omit.[customFetch]`

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

`Omit.signal`
