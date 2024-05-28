[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: AuthenticatedRequestOptions

## Extends

- [`UseMTLSAliasOptions`](UseMTLSAliasOptions.md)

## Extended by

- [`PushedAuthorizationRequestOptions`](PushedAuthorizationRequestOptions.md)
- [`TokenEndpointRequestOptions`](TokenEndpointRequestOptions.md)
- [`ClientCredentialsGrantRequestOptions`](ClientCredentialsGrantRequestOptions.md)
- [`RevocationRequestOptions`](RevocationRequestOptions.md)
- [`IntrospectionRequestOptions`](IntrospectionRequestOptions.md)
- [`DeviceAuthorizationRequestOptions`](DeviceAuthorizationRequestOptions.md)

## Properties

### \[useMtlsAlias\]?

> `optional` **\[useMtlsAlias\]**: `boolean`

See [useMtlsAlias](../variables/useMtlsAlias.md).

#### Inherited from

[`UseMTLSAliasOptions`](UseMTLSAliasOptions.md).[`[useMtlsAlias]`](UseMTLSAliasOptions.md#%5Busemtlsalias%5D)

***

### clientPrivateKey?

> `optional` **clientPrivateKey**: [`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey) \| [`PrivateKey`](PrivateKey.md)

Private key to use for `private_key_jwt`
[client authentication](../type-aliases/ClientAuthenticationMethod.md). Its algorithm must be compatible with
a supported [JWS `alg` Algorithm](../type-aliases/JWSAlgorithm.md).
