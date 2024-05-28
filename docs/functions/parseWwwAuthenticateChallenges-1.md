[**oauth4webapi**](../README.md) • **Docs**

***

# Function: parseWwwAuthenticateChallenges()

> **parseWwwAuthenticateChallenges**(`response`): [`WWWAuthenticateChallenge`](../interfaces/WWWAuthenticateChallenge.md)[] \| `undefined`

Parses the `WWW-Authenticate` HTTP Header from a Response instance.

## Parameters

• **response**: [`Response`](https://developer.mozilla.org/docs/Web/API/Response)

## Returns

[`WWWAuthenticateChallenge`](../interfaces/WWWAuthenticateChallenge.md)[] \| `undefined`

Array of [WWWAuthenticateChallenge](../interfaces/WWWAuthenticateChallenge.md) objects. Their order from the response is
  preserved. `undefined` when there wasn't a `WWW-Authenticate` HTTP Header returned.
