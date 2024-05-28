[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: JWTAccessTokenClaims

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

### client\_id

> `readonly` **client\_id**: `string`

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

### jti

> `readonly` **jti**: `string`

#### Overrides

`JWTPayload.jti`

***

### sub

> `readonly` **sub**: `string`

#### Overrides

`JWTPayload.sub`

***

### authorization\_details?

> `optional` `readonly` **authorization\_details**: [`AuthorizationDetails`](AuthorizationDetails.md)[]

***

### cnf?

> `optional` `readonly` **cnf**: [`ConfirmationClaims`](ConfirmationClaims.md)

#### Inherited from

`JWTPayload.cnf`

***

### nbf?

> `optional` `readonly` **nbf**: `number`

#### Inherited from

`JWTPayload.nbf`

***

### scope?

> `optional` `readonly` **scope**: `string`
