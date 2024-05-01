```bash
npx create-next-app@latest . --typescript --tailwind --eslint

npx shadcn-ui@latest init
```

create `.prettier.json`

```json
{
  "tabWidth": 2,
  "singleQuote": false
}
```

install eslint config packages

```bash
npm i -D
```

configure `.eslintrc.json`

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsdoc/recommended-typescript-error",
    "plugin:@typescript-eslint/recommended",
    "love",
    "prettier"
  ],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json"]
  },
  "plugins": ["react", "react-hooks"],
  "rules": {
    "@typescript-eslint/strict-boolean-expressions": 0,
    "jsdoc/no-types": 0
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

install `husky`, `lint-staged` and `commitlint`

```bash
npm i -D husky lint-staged @commitlint/{cli,config-conventional,cz-commitlint}
```

add this to package.json

```json
{
  "scripts": {
    "prepare": "husky",
    "lint": "eslint . --ext js,jsx,ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext js,jsx,ts,tsx --fix",
    "format": "prettier --config .prettierrc.json --write --ignore-unknown \"**/*.{ts,tsx}\"",
    "commit": "npx git-cz"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm run lint && npm run format"
    }
  },
  "lint-staged": {
    "./**/*.{ts,tsx,js,jsx}": ["npm run lint", "npm run format"]
  },
  "config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint"
    }
  }
}
```

run `husky` prepare

```bash
npm run prepare
```

configure `.husky`

```bash
echo 'npx lint-staged' > .husky/pre-commit
echo 'npx --no-install commitlint --edit "$1"' > .husky/commit-msg
```
