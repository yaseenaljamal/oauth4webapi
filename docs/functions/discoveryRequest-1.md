[**oauth4webapi**](../README.md) • **Docs**

***

# Function: discoveryRequest()

> **discoveryRequest**(`issuerIdentifier`, `options`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Performs an authorization server metadata discovery using one of two
[transformation algorithms](../interfaces/DiscoveryRequestOptions.md#algorithm) applied to the
`issuerIdentifier` argument.

- `oidc` (default) as defined by OpenID Connect Discovery 1.0.
- `oauth2` as defined by RFC 8414.

## Parameters

• **issuerIdentifier**: [`URL`](https://developer.mozilla.org/docs/Web/API/URL)

Issuer Identifier to resolve the well-known discovery URI for.

• **options?**: [`DiscoveryRequestOptions`](../interfaces/DiscoveryRequestOptions.md)

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

## See

 - [RFC 8414 - OAuth 2.0 Authorization Server Metadata](https://www.rfc-editor.org/rfc/rfc8414.html#section-3)
 - [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig)
