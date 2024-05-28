[**oauth4webapi**](../README.md) • **Docs**

***

# Interface: AuthorizationServer

Authorization Server Metadata

## See

[IANA OAuth Authorization Server Metadata registry](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml#authorization-server-metadata)

## Indexable

 \[`metadata`: `string`\]: [`JsonValue`](../type-aliases/JsonValue.md) \| `undefined`

## Properties

### issuer

> `readonly` **issuer**: `string`

Authorization server's Issuer Identifier URL.

***

### acr\_values\_supported?

> `optional` `readonly` **acr\_values\_supported**: `string`[]

JSON array containing a list of the Authentication Context Class References that this
authorization server supports.

***

### authorization\_encryption\_alg\_values\_supported?

> `optional` `readonly` **authorization\_encryption\_alg\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response encryption (`alg` value).

***

### authorization\_encryption\_enc\_values\_supported?

> `optional` `readonly` **authorization\_encryption\_enc\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response encryption (`enc` value).

***

### authorization\_endpoint?

> `optional` `readonly` **authorization\_endpoint**: `string`

URL of the authorization server's authorization endpoint.

***

### authorization\_response\_iss\_parameter\_supported?

> `optional` `readonly` **authorization\_response\_iss\_parameter\_supported**: `boolean`

Boolean value indicating whether the authorization server provides the `iss` parameter in the
authorization response.

***

### authorization\_signing\_alg\_values\_supported?

> `optional` `readonly` **authorization\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response signing.

***

### backchannel\_authentication\_endpoint?

> `optional` `readonly` **backchannel\_authentication\_endpoint**: `string`

CIBA Backchannel Authentication Endpoint.

***

### backchannel\_authentication\_request\_signing\_alg\_values\_supported?

> `optional` `readonly` **backchannel\_authentication\_request\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS signing algorithms supported for validation of signed
CIBA authentication requests.

***

### backchannel\_logout\_session\_supported?

> `optional` `readonly` **backchannel\_logout\_session\_supported**: `boolean`

Boolean value specifying whether the authorization server can pass a `sid` (session ID) Claim
in the Logout Token to identify the RP session with the OP.

***

### backchannel\_logout\_supported?

> `optional` `readonly` **backchannel\_logout\_supported**: `boolean`

Boolean value specifying whether the authorization server supports back-channel logout.

***

### backchannel\_token\_delivery\_modes\_supported?

> `optional` `readonly` **backchannel\_token\_delivery\_modes\_supported**: `string`[]

Supported CIBA authentication result delivery modes.

***

### backchannel\_user\_code\_parameter\_supported?

> `optional` `readonly` **backchannel\_user\_code\_parameter\_supported**: `boolean`

Indicates whether the authorization server supports the use of the CIBA `user_code` parameter.

***

### check\_session\_iframe?

> `optional` `readonly` **check\_session\_iframe**: `string`

URL of an authorization server iframe that supports cross-origin communications for session
state information with the RP Client, using the HTML5 postMessage API.

***

### claim\_types\_supported?

> `optional` `readonly` **claim\_types\_supported**: `string`[]

JSON array containing a list of the Claim Types that the authorization server supports.

***

### claims\_locales\_supported?

> `optional` `readonly` **claims\_locales\_supported**: `string`[]

Languages and scripts supported for values in Claims being returned, represented as a JSON
array of RFC 5646 language tag values.

***

### claims\_parameter\_supported?

> `optional` `readonly` **claims\_parameter\_supported**: `boolean`

Boolean value specifying whether the authorization server supports use of the `claims`
parameter.

***

### claims\_supported?

> `optional` `readonly` **claims\_supported**: `string`[]

JSON array containing a list of the Claim Names of the Claims that the authorization server MAY
be able to supply values for.

***

### code\_challenge\_methods\_supported?

> `optional` `readonly` **code\_challenge\_methods\_supported**: `string`[]

PKCE code challenge methods supported by this authorization server.

***

### device\_authorization\_endpoint?

> `optional` `readonly` **device\_authorization\_endpoint**: `string`

URL of the authorization server's device authorization endpoint.

***

### display\_values\_supported?

> `optional` `readonly` **display\_values\_supported**: `string`[]

JSON array containing a list of the `display` parameter values that the authorization server
supports.

***

### dpop\_signing\_alg\_values\_supported?

> `optional` `readonly` **dpop\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS algorithms supported for DPoP proof JWTs.

***

### end\_session\_endpoint?

> `optional` `readonly` **end\_session\_endpoint**: `string`

URL at the authorization server to which an RP can perform a redirect to request that the
End-User be logged out at the authorization server.

***

### frontchannel\_logout\_session\_supported?

> `optional` `readonly` **frontchannel\_logout\_session\_supported**: `boolean`

Boolean value specifying whether the authorization server can pass `iss` (issuer) and `sid`
(session ID) query parameters to identify the RP session with the authorization server when the
`frontchannel_logout_uri` is used.

***

### frontchannel\_logout\_supported?

> `optional` `readonly` **frontchannel\_logout\_supported**: `boolean`

Boolean value specifying whether the authorization server supports HTTP-based logout.

***

### grant\_types\_supported?

> `optional` `readonly` **grant\_types\_supported**: `string`[]

JSON array containing a list of the `grant_type` values that this authorization server
supports.

***

### id\_token\_encryption\_alg\_values\_supported?

> `optional` `readonly` **id\_token\_encryption\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWE `alg` values supported by the authorization server for
the ID Token.

***

### id\_token\_encryption\_enc\_values\_supported?

> `optional` `readonly` **id\_token\_encryption\_enc\_values\_supported**: `string`[]

JSON array containing a list of the JWE `enc` values supported by the authorization server for
the ID Token.

***

### id\_token\_signing\_alg\_values\_supported?

> `optional` `readonly` **id\_token\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS `alg` values supported by the authorization server for
the ID Token.

***

### introspection\_encryption\_alg\_values\_supported?

> `optional` `readonly` **introspection\_encryption\_alg\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response content key encryption (`alg` value).

***

### introspection\_encryption\_enc\_values\_supported?

> `optional` `readonly` **introspection\_encryption\_enc\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response content encryption (`enc` value).

***

### introspection\_endpoint?

> `optional` `readonly` **introspection\_endpoint**: `string`

URL of the authorization server's introspection endpoint.

***

### introspection\_endpoint\_auth\_methods\_supported?

> `optional` `readonly` **introspection\_endpoint\_auth\_methods\_supported**: `string`[]

JSON array containing a list of client authentication methods supported by this introspection
endpoint.

***

### introspection\_endpoint\_auth\_signing\_alg\_values\_supported?

> `optional` `readonly` **introspection\_endpoint\_auth\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS signing algorithms supported by the introspection
endpoint for the signature on the JWT used to authenticate the client at the introspection
endpoint.

***

### introspection\_signing\_alg\_values\_supported?

> `optional` `readonly` **introspection\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of algorithms supported by the authorization server for
introspection response signing.

***

### jwks\_uri?

> `optional` `readonly` **jwks\_uri**: `string`

URL of the authorization server's JWK Set document.

***

### mtls\_endpoint\_aliases?

> `optional` `readonly` **mtls\_endpoint\_aliases**: [`MTLSEndpointAliases`](MTLSEndpointAliases.md)

JSON object containing alternative authorization server endpoints, which a client intending to
do mutual TLS will use in preference to the conventional endpoints.

***

### op\_policy\_uri?

> `optional` `readonly` **op\_policy\_uri**: `string`

URL that the authorization server provides to the person registering the client to read about
the authorization server's requirements on how the client can use the data provided by the
authorization server.

***

### op\_tos\_uri?

> `optional` `readonly` **op\_tos\_uri**: `string`

URL that the authorization server provides to the person registering the client to read about
the authorization server's terms of service.

***

### pushed\_authorization\_request\_endpoint?

> `optional` `readonly` **pushed\_authorization\_request\_endpoint**: `string`

URL of the authorization server's pushed authorization request endpoint.

***

### registration\_endpoint?

> `optional` `readonly` **registration\_endpoint**: `string`

URL of the authorization server's Dynamic Client Registration Endpoint.

***

### request\_object\_encryption\_alg\_values\_supported?

> `optional` `readonly` **request\_object\_encryption\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWE `alg` values supported by the authorization server for
Request Objects.

***

### request\_object\_encryption\_enc\_values\_supported?

> `optional` `readonly` **request\_object\_encryption\_enc\_values\_supported**: `string`[]

JSON array containing a list of the JWE `enc` values supported by the authorization server for
Request Objects.

***

### request\_object\_signing\_alg\_values\_supported?

> `optional` `readonly` **request\_object\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS `alg` values supported by the authorization server for
Request Objects.

***

### request\_parameter\_supported?

> `optional` `readonly` **request\_parameter\_supported**: `boolean`

Boolean value specifying whether the authorization server supports use of the `request`
parameter.

***

### request\_uri\_parameter\_supported?

> `optional` `readonly` **request\_uri\_parameter\_supported**: `boolean`

Boolean value specifying whether the authorization server supports use of the `request_uri`
parameter.

***

### require\_pushed\_authorization\_requests?

> `optional` `readonly` **require\_pushed\_authorization\_requests**: `boolean`

Indicates whether the authorization server accepts authorization requests only via PAR.

***

### require\_request\_uri\_registration?

> `optional` `readonly` **require\_request\_uri\_registration**: `boolean`

Boolean value specifying whether the authorization server requires any `request_uri` values
used to be pre-registered.

***

### require\_signed\_request\_object?

> `optional` `readonly` **require\_signed\_request\_object**: `boolean`

Indicates where authorization request needs to be protected as Request Object and provided
through either `request` or `request_uri` parameter.

***

### response\_modes\_supported?

> `optional` `readonly` **response\_modes\_supported**: `string`[]

JSON array containing a list of the `response_mode` values that this authorization server
supports.

***

### response\_types\_supported?

> `optional` `readonly` **response\_types\_supported**: `string`[]

JSON array containing a list of the `response_type` values that this authorization server
supports.

***

### revocation\_endpoint?

> `optional` `readonly` **revocation\_endpoint**: `string`

URL of the authorization server's revocation endpoint.

***

### revocation\_endpoint\_auth\_methods\_supported?

> `optional` `readonly` **revocation\_endpoint\_auth\_methods\_supported**: `string`[]

JSON array containing a list of client authentication methods supported by this revocation
endpoint.

***

### revocation\_endpoint\_auth\_signing\_alg\_values\_supported?

> `optional` `readonly` **revocation\_endpoint\_auth\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS signing algorithms supported by the revocation endpoint
for the signature on the JWT used to authenticate the client at the revocation endpoint.

***

### scopes\_supported?

> `optional` `readonly` **scopes\_supported**: `string`[]

JSON array containing a list of the `scope` values that this authorization server supports.

***

### service\_documentation?

> `optional` `readonly` **service\_documentation**: `string`

URL of a page containing human-readable information that developers might want or need to know
when using the authorization server.

***

### signed\_metadata?

> `optional` `readonly` **signed\_metadata**: `string`

Signed JWT containing metadata values about the authorization server as claims.

***

### subject\_types\_supported?

> `optional` `readonly` **subject\_types\_supported**: `string`[]

JSON array containing a list of the Subject Identifier types that this authorization server
supports.

***

### tls\_client\_certificate\_bound\_access\_tokens?

> `optional` `readonly` **tls\_client\_certificate\_bound\_access\_tokens**: `boolean`

Indicates authorization server support for mutual-TLS client certificate-bound access tokens.

***

### token\_endpoint?

> `optional` `readonly` **token\_endpoint**: `string`

URL of the authorization server's token endpoint.

***

### token\_endpoint\_auth\_methods\_supported?

> `optional` `readonly` **token\_endpoint\_auth\_methods\_supported**: `string`[]

JSON array containing a list of client authentication methods supported by this token endpoint.

***

### token\_endpoint\_auth\_signing\_alg\_values\_supported?

> `optional` `readonly` **token\_endpoint\_auth\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS signing algorithms supported by the token endpoint for
the signature on the JWT used to authenticate the client at the token endpoint.

***

### ui\_locales\_supported?

> `optional` `readonly` **ui\_locales\_supported**: `string`[]

Languages and scripts supported for the user interface, represented as a JSON array of language
tag values from RFC 5646.

***

### userinfo\_encryption\_alg\_values\_supported?

> `optional` `readonly` **userinfo\_encryption\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWE `alg` values supported by the UserInfo Endpoint.

***

### userinfo\_encryption\_enc\_values\_supported?

> `optional` `readonly` **userinfo\_encryption\_enc\_values\_supported**: `string`[]

JSON array containing a list of the JWE `enc` values supported by the UserInfo Endpoint.

***

### userinfo\_endpoint?

> `optional` `readonly` **userinfo\_endpoint**: `string`

URL of the authorization server's UserInfo Endpoint.

***

### userinfo\_signing\_alg\_values\_supported?

> `optional` `readonly` **userinfo\_signing\_alg\_values\_supported**: `string`[]

JSON array containing a list of the JWS `alg` values supported by the UserInfo Endpoint.
