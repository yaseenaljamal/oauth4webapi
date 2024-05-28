[**oauth4webapi**](../README.md) • **Docs**

***

# Function: deviceAuthorizationRequest()

> **deviceAuthorizationRequest**(`as`, `client`, `parameters`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Performs a Device Authorization Request at the
[`as.device_authorization_endpoint`](../interfaces/AuthorizationServer.md#device_authorization_endpoint).

## Parameters

• **as**: [`AuthorizationServer`](../interfaces/AuthorizationServer.md)

Authorization Server Metadata.

• **client**: [`Client`](../interfaces/Client.md)

Client Metadata.

• **parameters**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> \| [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) \| `string`[][]

Device Authorization Request parameters.

• **options?**: [`DeviceAuthorizationRequestOptions`](../interfaces/DeviceAuthorizationRequestOptions.md)

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

## See

[RFC 8628 - OAuth 2.0 Device Authorization Grant](https://www.rfc-editor.org/rfc/rfc8628.html#section-3.1)
