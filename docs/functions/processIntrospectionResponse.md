[**oauth4webapi**](../README.md) • **Docs**

***

# Function: processIntrospectionResponse()

> **processIntrospectionResponse**(`as`, `client`, `response`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`IntrospectionResponse`](../interfaces/IntrospectionResponse.md) \| [`OAuth2Error`](../interfaces/OAuth2Error.md)\>

Validates Response instance to be one coming from the
[`as.introspection_endpoint`](../interfaces/AuthorizationServer.md#introspection_endpoint).

## Parameters

• **as**: [`AuthorizationServer`](../interfaces/AuthorizationServer.md)

Authorization Server Metadata.

• **client**: [`Client`](../interfaces/Client.md)

Client Metadata.

• **response**: [`Response`](https://developer.mozilla.org/docs/Web/API/Response)

Resolved value from [introspectionRequest](introspectionRequest.md).

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`IntrospectionResponse`](../interfaces/IntrospectionResponse.md) \| [`OAuth2Error`](../interfaces/OAuth2Error.md)\>

Resolves with an object representing the parsed successful response, or an object
  representing an OAuth 2.0 protocol style error. Use [isOAuth2Error](isOAuth2Error-1.md) to determine if an
  OAuth 2.0 error was returned.

## See

 - [RFC 7662 - OAuth 2.0 Token Introspection](https://www.rfc-editor.org/rfc/rfc7662.html#section-2)
 - [draft-ietf-oauth-jwt-introspection-response-12 - JWT Response for OAuth Token Introspection](https://www.ietf.org/archive/id/draft-ietf-oauth-jwt-introspection-response-12.html#section-5)
