# Dev Books Store

A simple book store app where you can add developer books to a basket and get discounts for buying different titles.

## Prerequisites

Before running the application, ensure the following are installed:

- Node.js v24.16.0
- npm 11.13.0

## Installation

npm install

## Run Application

```
npm run dev
```

## Testing

```
npm test
```
## Generate test coverage report

npm run coverage

## Test coverage report
docs/coverage-report

## Run mutation testing

npm run mutation

## Mutation Testing report
docs/mutation-report

## Discount rules

| Different books in one order | Discount |
|---|---|
| 2 | 5% |
| 3 | 10% |
| 4 | 20% |
| 5 | 25% |

Each book costs €50. The app automatically finds the best grouping to give you the biggest discount.