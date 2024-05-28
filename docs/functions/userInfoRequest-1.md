[**oauth4webapi**](../README.md) • **Docs**

***

# Function: userInfoRequest()

> **userInfoRequest**(`as`, `client`, `accessToken`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Performs a UserInfo Request at the
[`as.userinfo_endpoint`](../interfaces/AuthorizationServer.md#userinfo_endpoint).

Authorization Header is used to transmit the Access Token value.

## Parameters

• **as**: [`AuthorizationServer`](../interfaces/AuthorizationServer.md)

Authorization Server Metadata.

• **client**: [`Client`](../interfaces/Client.md)

Client Metadata.

• **accessToken**: `string`

Access Token value.

• **options?**: [`UserInfoRequestOptions`](../interfaces/UserInfoRequestOptions.md)

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

## See

 - [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo)
 - [RFC 9449 - OAuth 2.0 Demonstrating Proof-of-Possession at the Application Layer (DPoP)](https://www.rfc-editor.org/rfc/rfc9449.html#name-protected-resource-access)
