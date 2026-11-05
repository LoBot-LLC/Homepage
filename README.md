# LoBot Homepage

## Development

Use Node.js 22 and install the locked dependencies:

```sh
npm ci
```

Set `DATABASE_URL` to a PostgreSQL connection string before running the app or building it. For example, with a local PostgreSQL database:

```sh
export DATABASE_URL='postgresql://postgres:postgres@localhost:5432/app_db'
npm run dev
```

At runtime, a working database is needed for persisted blog posts and a healthy health endpoint. If the database is unreachable, the blog falls back to its seed posts. CI builds use a non-secret placeholder URL because Next.js imports the database module while building, but the dynamic database-backed routes do not connect during the build.

## Checks

```sh
npm run typecheck
npm run lint
npm run build
```

`typecheck` generates the Next.js route types first, so it also works on a fresh checkout. CI uses `npm ci` and the committed `package-lock.json` for reproducible dependency installation. There is currently no `test` script; the CI test step is skipped until one is added.
