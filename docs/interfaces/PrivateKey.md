[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: PrivateKey

Interface to pass an asymmetric private key and, optionally, its associated JWK Key ID to be
added as a `kid` JOSE Header Parameter.

## Properties

### key

> **key**: [`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey)

An asymmetric private CryptoKey.

Its algorithm must be compatible with a supported [JWS `alg` Algorithm](../type-aliases/JWSAlgorithm.md).

***

### kid?

> `optional` **kid**: `string`

JWK Key ID to add to JOSE headers when this key is used. When not provided no `kid` (JWK Key
ID) will be added to the JOSE Header.
