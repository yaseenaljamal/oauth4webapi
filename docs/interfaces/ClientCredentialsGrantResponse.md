[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: ClientCredentialsGrantResponse

## Indexable

 \[`parameter`: `string`\]: [`JsonValue`](../type-aliases/JsonValue.md) \| `undefined`

## Properties

### access\_token

> `readonly` **access\_token**: `string`

***

### token\_type

> `readonly` **token\_type**: [`Lowercase`](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#lowercasestringtype)\<`string`\>

NOTE: because the value is case insensitive it is always returned lowercased

***

### authorization\_details?

> `optional` `readonly` **authorization\_details**: [`AuthorizationDetails`](AuthorizationDetails.md)[]

***

### expires\_in?

> `optional` `readonly` **expires\_in**: `number`

***

### scope?

> `optional` `readonly` **scope**: `string`
