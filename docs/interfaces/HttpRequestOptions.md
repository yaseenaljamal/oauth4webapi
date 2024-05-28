[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: HttpRequestOptions

## Extended by

- [`DiscoveryRequestOptions`](DiscoveryRequestOptions.md)
- [`PushedAuthorizationRequestOptions`](PushedAuthorizationRequestOptions.md)
- [`UserInfoRequestOptions`](UserInfoRequestOptions.md)
- [`TokenEndpointRequestOptions`](TokenEndpointRequestOptions.md)
- [`ClientCredentialsGrantRequestOptions`](ClientCredentialsGrantRequestOptions.md)
- [`RevocationRequestOptions`](RevocationRequestOptions.md)
- [`IntrospectionRequestOptions`](IntrospectionRequestOptions.md)
- [`DeviceAuthorizationRequestOptions`](DeviceAuthorizationRequestOptions.md)
- [`ValidateJWTAccessTokenOptions`](ValidateJWTAccessTokenOptions.md)

## Properties

### \[customFetch\]()?

> `optional` **\[customFetch\]**: (`input`, `init`?) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

See [customFetch](../variables/customFetch.md).

#### Parameters

• **input**: `RequestInfo` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL)

• **init?**: `RequestInit`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### headers?

> `optional` **headers**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`string`, `string`][] \| [`Headers`](https://developer.mozilla.org/docs/Web/API/Headers)

Headers to additionally send with the HTTP Request(s) triggered by this function's invocation.

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
