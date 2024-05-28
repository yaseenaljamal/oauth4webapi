[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: Client

Recognized Client Metadata that have an effect on the exposed functionality.

## See

[IANA OAuth Client Registration Metadata registry](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#client-metadata)

## Indexable

 \[`metadata`: `string`\]: [`JsonValue`](../type-aliases/JsonValue.md) \| `undefined`

## Properties

### client\_id

> **client\_id**: `string`

Client identifier.

***

### \[clockSkew\]?

> `optional` **\[clockSkew\]**: `number`

Use to adjust the client's assumed current time. Positive and negative finite values
representing seconds are allowed. Default is `0` (Date.now() + 0 seconds is used).

#### Examples

When the client's local clock is mistakenly 1 hour in the past

```ts
const client: oauth.Client = {
  client_id: 'abc4ba37-4ab8-49b5-99d4-9441ba35d428',
  // ... other metadata
  [oauth.clockSkew]: +(60 * 60),
}
```

When the client's local clock is mistakenly 1 hour in the future

```ts
const client: oauth.Client = {
  client_id: 'abc4ba37-4ab8-49b5-99d4-9441ba35d428',
  // ... other metadata
  [oauth.clockSkew]: -(60 * 60),
}
```

***

### \[clockTolerance\]?

> `optional` **\[clockTolerance\]**: `number`

Use to set allowed client's clock tolerance when checking DateTime JWT Claims. Only positive
finite values representing seconds are allowed. Default is `30` (30 seconds).

#### Example

Tolerate 30 seconds clock skew when validating JWT claims like exp or nbf.

```ts
const client: oauth.Client = {
  client_id: 'abc4ba37-4ab8-49b5-99d4-9441ba35d428',
  // ... other metadata
  [oauth.clockTolerance]: 30,
}
```

***

### authorization\_signed\_response\_alg?

> `optional` **authorization\_signed\_response\_alg**: [`JWSAlgorithm`](../type-aliases/JWSAlgorithm.md)

JWS `alg` algorithm required for signing authorization responses. When not configured the
default is to allow only [supported algorithms](../type-aliases/JWSAlgorithm.md) listed in
[`as.authorization_signing_alg_values_supported`](AuthorizationServer.md#authorization_signing_alg_values_supported)
and fall back to `RS256` when the authorization server metadata is not set.

***

### client\_secret?

> `optional` **client\_secret**: `string`

Client secret.

***

### default\_max\_age?

> `optional` **default\_max\_age**: `number`

Default Maximum Authentication Age.

***

### id\_token\_signed\_response\_alg?

> `optional` **id\_token\_signed\_response\_alg**: `string`

JWS `alg` algorithm required for signing the ID Token issued to this Client. When not
configured the default is to allow only algorithms listed in
[`as.id_token_signing_alg_values_supported`](AuthorizationServer.md#id_token_signing_alg_values_supported)
and fall back to `RS256` when the authorization server metadata is not set.

***

### introspection\_signed\_response\_alg?

> `optional` **introspection\_signed\_response\_alg**: `string`

JWS `alg` algorithm REQUIRED for signed introspection responses. When not configured the
default is to allow only algorithms listed in
[`as.introspection_signing_alg_values_supported`](AuthorizationServer.md#introspection_signing_alg_values_supported)
and fall back to `RS256` when the authorization server metadata is not set.

***

### require\_auth\_time?

> `optional` **require\_auth\_time**: `boolean`

Boolean value specifying whether the [`auth_time`](IDToken.md#auth_time) Claim in the ID Token
is REQUIRED. Default is `false`.

***

### token\_endpoint\_auth\_method?

> `optional` **token\_endpoint\_auth\_method**: [`ClientAuthenticationMethod`](../type-aliases/ClientAuthenticationMethod.md)

Client [authentication method](../type-aliases/ClientAuthenticationMethod.md) for the client's authenticated
requests. Default is `client_secret_basic`.

***

### userinfo\_signed\_response\_alg?

> `optional` **userinfo\_signed\_response\_alg**: `string`

JWS `alg` algorithm REQUIRED for signing UserInfo Responses. When not configured the default is
to allow only algorithms listed in
[`as.userinfo_signing_alg_values_supported`](AuthorizationServer.md#userinfo_signing_alg_values_supported)
and fall back to `RS256` when the authorization server metadata is not set.
