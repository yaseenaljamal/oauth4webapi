# Variable: clockSkew

[💗 Help the project](https://github.com/sponsors/panva)

• `Const` **clockSkew**: unique `symbol`

Use to adjust the assumed current time. Positive and negative finite values representing seconds
are allowed. Default is `0` (Date.now() + 0 seconds is used).

**`Example`**

When the local clock is mistakenly 1 hour in the past

```ts
const client: oauth.Client = {
  client_id: 'abc4ba37-4ab8-49b5-99d4-9441ba35d428',
  // ... other metadata
  [oauth.clockSkew]: +(60 * 60),
}
```

**`Example`**

When the local clock is mistakenly 1 hour in the future

```ts
const client: oauth.Client = {
  client_id: 'abc4ba37-4ab8-49b5-99d4-9441ba35d428',
  // ... other metadata
  [oauth.clockSkew]: -(60 * 60),
}
```
