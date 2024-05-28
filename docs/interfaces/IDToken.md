[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: IDToken

## Extends

- `JWTPayload`

## Indexable

 \[`claim`: `string`\]: [`JsonValue`](../type-aliases/JsonValue.md) \| `undefined`

## Properties

### aud

> `readonly` **aud**: `string` \| `string`[]

#### Overrides

`JWTPayload.aud`

***

### exp

> `readonly` **exp**: `number`

#### Overrides

`JWTPayload.exp`

***

### iat

> `readonly` **iat**: `number`

#### Overrides

`JWTPayload.iat`

***

### iss

> `readonly` **iss**: `string`

#### Overrides

`JWTPayload.iss`

***

### sub

> `readonly` **sub**: `string`

#### Overrides

`JWTPayload.sub`

***

### auth\_time?

> `optional` `readonly` **auth\_time**: `number`

***

### azp?

> `optional` `readonly` **azp**: `string`

***

### cnf?

> `optional` `readonly` **cnf**: [`ConfirmationClaims`](ConfirmationClaims.md)

#### Inherited from

`JWTPayload.cnf`

***

### jti?

> `optional` `readonly` **jti**: `string`

#### Inherited from

`JWTPayload.jti`

***

### nbf?

> `optional` `readonly` **nbf**: `number`

#### Inherited from

`JWTPayload.nbf`

***

### nonce?

> `optional` `readonly` **nonce**: `string`
