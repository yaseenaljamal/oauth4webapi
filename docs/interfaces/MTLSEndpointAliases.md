[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: MTLSEndpointAliases

## Extends

- [`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)\<[`AuthorizationServer`](AuthorizationServer.md), `"token_endpoint"` \| `"revocation_endpoint"` \| `"introspection_endpoint"` \| `"device_authorization_endpoint"` \| `"userinfo_endpoint"` \| `"pushed_authorization_request_endpoint"`\>

## Indexable

 \[`metadata`: `string`\]: [`JsonValue`](../type-aliases/JsonValue.md) \| `undefined`

## Properties

### device\_authorization\_endpoint?

> `optional` `readonly` **device\_authorization\_endpoint**: `string`

URL of the authorization server's device authorization endpoint.

#### Inherited from

`Pick.device_authorization_endpoint`

***

### introspection\_endpoint?

> `optional` `readonly` **introspection\_endpoint**: `string`

URL of the authorization server's introspection endpoint.

#### Inherited from

`Pick.introspection_endpoint`

***

### pushed\_authorization\_request\_endpoint?

> `optional` `readonly` **pushed\_authorization\_request\_endpoint**: `string`

URL of the authorization server's pushed authorization request endpoint.

#### Inherited from

`Pick.pushed_authorization_request_endpoint`

***

### revocation\_endpoint?

> `optional` `readonly` **revocation\_endpoint**: `string`

URL of the authorization server's revocation endpoint.

#### Inherited from

`Pick.revocation_endpoint`

***

### token\_endpoint?

> `optional` `readonly` **token\_endpoint**: `string`

URL of the authorization server's token endpoint.

#### Inherited from

`Pick.token_endpoint`

***

### userinfo\_endpoint?

> `optional` `readonly` **userinfo\_endpoint**: `string`

URL of the authorization server's UserInfo Endpoint.

#### Inherited from

`Pick.userinfo_endpoint`
