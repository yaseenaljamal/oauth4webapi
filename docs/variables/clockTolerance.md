# Variable: clockTolerance

[💗 Help the project](https://github.com/sponsors/panva)

• `Const` **clockTolerance**: unique `symbol`

Use to set allowed clock tolerance when checking DateTime JWT Claims. Only positive finite values
representing seconds are allowed. Default is `30` (30 seconds).

**`Example`**

Tolerate 30 seconds clock skew when validating JWT claims like exp or nbf.

```ts
const client: oauth.Client = {
  client_id: 'abc4ba37-4ab8-49b5-99d4-9441ba35d428',
  // ... other metadata
  [oauth.clockTolerance]: 30,
}
```
