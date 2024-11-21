- [Original Documentation](https://tsdav.vercel.app/)
- [Original Repo](https://github.com/natelindev/tsdav/)

# Differences

This fork includes a way to send a `homeUrl` to `createDAVClient` and skip discovering that, which can take an additional 1-1.5s, unnecessarily if you already have that information stored.

## Development

- `npm ci --legacy-peer-deps` (originally this used `yarn`, but we prefer `npm`)
- `npm test` (runs `build`, `prettier`, `lint`, and `tsc`)

## Updating

When making a change, make sure to update the `package.json:version`, incrementing the number after `-sunsama-`.
