[**oauth4webapi**](../README.md) • **Docs**

***

# Function: processDiscoveryResponse()

> **processDiscoveryResponse**(`expectedIssuerIdentifier`, `response`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AuthorizationServer`](../interfaces/AuthorizationServer.md)\>

Validates Response instance to be one coming from the authorization server's well-known discovery
endpoint.

## Parameters

• **expectedIssuerIdentifier**: [`URL`](https://developer.mozilla.org/docs/Web/API/URL)

Expected Issuer Identifier value.

• **response**: [`Response`](https://developer.mozilla.org/docs/Web/API/Response)

Resolved value from [discoveryRequest](discoveryRequest-1.md).

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AuthorizationServer`](../interfaces/AuthorizationServer.md)\>

Resolves with the discovered Authorization Server Metadata.

## See

 - [RFC 8414 - OAuth 2.0 Authorization Server Metadata](https://www.rfc-editor.org/rfc/rfc8414.html#section-3)
 - [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig)
