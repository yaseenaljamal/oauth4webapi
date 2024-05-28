[**oauth4webapi**](../README.md) • **Docs**

***

# Function: revocationRequest()

> **revocationRequest**(`as`, `client`, `token`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Performs a Revocation Request at the
[`as.revocation_endpoint`](../interfaces/AuthorizationServer.md#revocation_endpoint).

## Parameters

• **as**: [`AuthorizationServer`](../interfaces/AuthorizationServer.md)

Authorization Server Metadata.

• **client**: [`Client`](../interfaces/Client.md)

Client Metadata.

• **token**: `string`

Token to revoke. You can provide the `token_type_hint` parameter via
  [options](../interfaces/RevocationRequestOptions.md#additionalparameters).

• **options?**: [`RevocationRequestOptions`](../interfaces/RevocationRequestOptions.md)

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

## See

[RFC 7009 - OAuth 2.0 Token Revocation](https://www.rfc-editor.org/rfc/rfc7009.html#section-2)
