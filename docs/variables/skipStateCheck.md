[**oauth4webapi**](../README.md) • **Docs**

***

# Variable: skipStateCheck

> `const` **skipStateCheck**: unique `symbol`

DANGER ZONE

Use this as a value to [validateAuthResponse](../functions/validateAuthResponse-1.md) `expectedState` parameter to skip the `state`
value check. This should only ever be done if you use a `state` parameter value that is integrity
protected and bound to the browsing session. One such mechanism to do so is described in an I-D
[draft-bradley-oauth-jwt-encoded-state-09](https://datatracker.ietf.org/doc/html/draft-bradley-oauth-jwt-encoded-state-09).
It is expected you'll validate such `state` value yourself.
