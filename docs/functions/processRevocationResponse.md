[**oauth4webapi**](../README.md) • **Docs**

***

# Function: processRevocationResponse()

> **processRevocationResponse**(`response`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| [`OAuth2Error`](../interfaces/OAuth2Error.md)\>

Validates Response instance to be one coming from the
[`as.revocation_endpoint`](../interfaces/AuthorizationServer.md#revocation_endpoint).

## Parameters

• **response**: [`Response`](https://developer.mozilla.org/docs/Web/API/Response)

Resolved value from [revocationRequest](revocationRequest.md).

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| [`OAuth2Error`](../interfaces/OAuth2Error.md)\>

Resolves with `undefined` when the request was successful, or an object representing an
  OAuth 2.0 protocol style error.

## See

[RFC 7009 - OAuth 2.0 Token Revocation](https://www.rfc-editor.org/rfc/rfc7009.html#section-2)
