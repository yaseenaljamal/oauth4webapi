[**oauth4webapi**](../README.md) • **Docs**

***

# Variable: expectNoNonce

> `const` **expectNoNonce**: unique `symbol`

Use this as a value to [processAuthorizationCodeOpenIDResponse](../functions/processAuthorizationCodeOpenIDResponse.md) `expectedNonce` parameter to
indicate no `nonce` ID Token claim value is expected, i.e. no `nonce` parameter value was sent
with the authorization request.
