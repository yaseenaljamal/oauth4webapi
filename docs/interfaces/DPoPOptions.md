[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: DPoPOptions

## Extends

- `CryptoKeyPair`

## Properties

### privateKey

> **privateKey**: [`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey)

Private CryptoKey instance to sign the DPoP Proof JWT with.

Its algorithm must be compatible with a supported [JWS `alg` Algorithm](../type-aliases/JWSAlgorithm.md).

#### Overrides

`CryptoKeyPair.privateKey`

***

### publicKey

> **publicKey**: [`CryptoKey`](https://developer.mozilla.org/docs/Web/API/CryptoKey)

The public key corresponding to [DPoPOptions.privateKey](DPoPOptions.md#privatekey).

#### Overrides

`CryptoKeyPair.publicKey`

***

### nonce?

> `optional` **nonce**: `string`

Server-Provided Nonce to use in the request. This option serves as an override in case the
self-correcting mechanism does not work with a particular server. Previously received nonces
will be used automatically.
