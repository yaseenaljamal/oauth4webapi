[**oauth4webapi**](../README.md) • **Docs**

***

# Function: clientCredentialsGrantRequest()

> **clientCredentialsGrantRequest**(`as`, `client`, `parameters`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Performs a Client Credentials Grant request at the
[`as.token_endpoint`](../interfaces/AuthorizationServer.md#token_endpoint).

## Parameters

• **as**: [`AuthorizationServer`](../interfaces/AuthorizationServer.md)

Authorization Server Metadata.

• **client**: [`Client`](../interfaces/Client.md)

Client Metadata.

• **parameters**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) \| `string`[][]

• **options?**: [`ClientCredentialsGrantRequestOptions`](../interfaces/ClientCredentialsGrantRequestOptions.md)

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

## See

 - [RFC 6749 - The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/rfc/rfc6749.html#section-4.4)
 - [RFC 9449 - OAuth 2.0 Demonstrating Proof-of-Possession at the Application Layer (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html#name-dpop-access-token-request)
