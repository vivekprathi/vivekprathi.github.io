# VWO per-page smartcodes

Each mini-site can have its **own** VWO account ID (and optional edge mode) without duplicating the giant snippet.

## How it works

On a page, add:

```html
<script id="vwo-config" type="application/json">
  {"accountId": 1055484, "useEdge": false}
</script>
<script src="/vwo/vwo-smartcode.js"></script>
```

- `accountId`: your VWO account ID for that specific page
- `useEdge`: set `true` to load from `edge.visualwebsiteoptimizer.com`

## Disable VWO for debugging

Add `__vwo_disable__` anywhere in the URL, for example:

`/?__vwo_disable__=1`

