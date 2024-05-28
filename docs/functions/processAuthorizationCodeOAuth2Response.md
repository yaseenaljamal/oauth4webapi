[**oauth4webapi**](../README.md) • **Docs**

***

# Function: processAuthorizationCodeOAuth2Response()

> **processAuthorizationCodeOAuth2Response**(`as`, `client`, `response`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OAuth2TokenEndpointResponse`](../interfaces/OAuth2TokenEndpointResponse.md) \| [`OAuth2Error`](../interfaces/OAuth2Error.md)\>

(OAuth 2.0 without OpenID Connect only) Validates Authorization Code Grant Response instance to
be one coming from the [`as.token_endpoint`](../interfaces/AuthorizationServer.md#token_endpoint).

## Parameters

• **as**: [`AuthorizationServer`](../interfaces/AuthorizationServer.md)

Authorization Server Metadata.

• **client**: [`Client`](../interfaces/Client.md)

Client Metadata.

• **response**: [`Response`](https://developer.mozilla.org/docs/Web/API/Response)

Resolved value from [authorizationCodeGrantRequest](authorizationCodeGrantRequest-1.md).

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OAuth2TokenEndpointResponse`](../interfaces/OAuth2TokenEndpointResponse.md) \| [`OAuth2Error`](../interfaces/OAuth2Error.md)\>

Resolves with an object representing the parsed successful response, or an object
  representing an OAuth 2.0 protocol style error. Use [isOAuth2Error](isOAuth2Error-1.md) to determine if an
  OAuth 2.0 error was returned.

## See

[RFC 6749 - The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/rfc/rfc6749.html#section-4.1)
