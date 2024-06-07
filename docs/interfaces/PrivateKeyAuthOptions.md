# Interface: PrivateKeyAuthOptions

[💗 Help the project](https://github.com/sponsors/panva)

Interface to pass an asymmetric private key and, optionally, its associated JWK Key ID to be
added as a `kid` JOSE Header Parameter.

## Table of contents

### Properties

- [key](PrivateKeyAuthOptions.md#key)
- [aud](PrivateKeyAuthOptions.md#aud)
- [kid](PrivateKeyAuthOptions.md#kid)

## Properties

### key

• **key**: [`CryptoKey`]( https://developer.mozilla.org/docs/Web/API/CryptoKey )

An asymmetric private CryptoKey.

Its algorithm must be compatible with a supported [JWS `alg` Algorithm](../types/JWSAlgorithm.md).

___

### aud

• `Optional` **aud**: `string` \| `string`[]

The value to use as `aud` (JWT Audience) for the Private Key JWT assertion.

___

### kid

• `Optional` **kid**: `string`

JWK Key ID to add to JOSE headers when this key is used. When not provided no `kid` (JWK Key
ID) will be added to the JOSE Header.

## Hierarchy

- [`PrivateKey`](PrivateKey.md)

  ↳ **`PrivateKeyAuthOptions`**
