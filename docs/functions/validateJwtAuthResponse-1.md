[**oauth4webapi**](../README.md) • **Docs**

***

# Function: validateJwtAuthResponse()

> **validateJwtAuthResponse**(`as`, `client`, `parameters`, `expectedState`?, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) \| [`OAuth2Error`](../interfaces/OAuth2Error.md)\>

Same as [validateAuthResponse](validateAuthResponse-1.md) but for signed JARM responses.

## Parameters

• **as**: [`AuthorizationServer`](../interfaces/AuthorizationServer.md)

Authorization Server Metadata.

• **client**: [`Client`](../interfaces/Client.md)

Client Metadata.

• **parameters**: [`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL)

JARM authorization response.

• **expectedState?**: `string` \| *typeof* [`expectNoState`](../variables/expectNoState.md) \| *typeof* [`skipStateCheck`](../variables/skipStateCheck.md)

Expected `state` parameter value. Default is [expectNoState](../variables/expectNoState.md).

• **options?**: [`HttpRequestOptions`](../interfaces/HttpRequestOptions.md)

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`URLSearchParams`](https://developer.mozilla.org/docs/Web/API/URLSearchParams) \| [`OAuth2Error`](../interfaces/OAuth2Error.md)\>

Validated Authorization Response parameters or Authorization Error Response.

## See

[JWT Secured Authorization Response Mode for OAuth 2.0 (JARM)](https://openid.net/specs/openid-financial-api-jarm.html)
