[**oauth4webapi**](../README.md) • **Docs**

***

# Function: deviceCodeGrantRequest()

> **deviceCodeGrantRequest**(`as`, `client`, `deviceCode`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Performs a Device Authorization Grant request at the
[`as.token_endpoint`](../interfaces/AuthorizationServer.md#token_endpoint).

## Parameters

• **as**: [`AuthorizationServer`](../interfaces/AuthorizationServer.md)

Authorization Server Metadata.

• **client**: [`Client`](../interfaces/Client.md)

Client Metadata.

• **deviceCode**: `string`

Device Code.

• **options?**: [`TokenEndpointRequestOptions`](../interfaces/TokenEndpointRequestOptions.md)

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

## See

 - [RFC 8628 - OAuth 2.0 Device Authorization Grant](https://www.rfc-editor.org/rfc/rfc8628.html#section-3.4)
 - [RFC 9449 - OAuth 2.0 Demonstrating Proof-of-Possession at the Application Layer (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html#name-dpop-access-token-request)
