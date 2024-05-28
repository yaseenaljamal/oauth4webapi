[**oauth4webapi**](../README.md) • **Docs**

***

# Function: processUserInfoResponse()

> **processUserInfoResponse**(`as`, `client`, `expectedSubject`, `response`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`UserInfoResponse`](../interfaces/UserInfoResponse.md)\>

Validates Response instance to be one coming from the
[`as.userinfo_endpoint`](../interfaces/AuthorizationServer.md#userinfo_endpoint).

## Parameters

• **as**: [`AuthorizationServer`](../interfaces/AuthorizationServer.md)

Authorization Server Metadata.

• **client**: [`Client`](../interfaces/Client.md)

Client Metadata.

• **expectedSubject**: `string` \| *typeof* [`skipSubjectCheck`](../variables/skipSubjectCheck.md)

Expected `sub` claim value. In response to OpenID Connect authentication
  requests, the expected subject is the one from the ID Token claims retrieved from
  [getValidatedIdTokenClaims](getValidatedIdTokenClaims.md).

• **response**: [`Response`](https://developer.mozilla.org/docs/Web/API/Response)

Resolved value from [userInfoRequest](userInfoRequest-1.md).

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`UserInfoResponse`](../interfaces/UserInfoResponse.md)\>

Resolves with an object representing the parsed successful response, or an object
  representing an OAuth 2.0 protocol style error. Use [isOAuth2Error](isOAuth2Error-1.md) to determine if an
  OAuth 2.0 error was returned.

## See

[OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo)
