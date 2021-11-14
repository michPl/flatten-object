# Flattens object to a single level deep.

![example workflow](https://github.com/michPl/flatten-object/actions/workflows/ci_test.yml/badge.svg)

Simple function to flattens object to a single level deep object without dependencies. Can be useful for getting a request to MongoDB from an object.

## Install
`npm i -S @michpl/flatten-object`

## Example
```JavaScript
flattenObject({
  test: 1,
  deep: {
    level1: [{item1: 1}, {item1: 2}],
    deep: {
      level2: 2
    }
  }
})
/* returns {
  test: 1,
  'deep.level1.0.item1': 1,
  'deep.level1.1.item1': 2,
  'deep.deep.level2': 2
} */
```

## Options
| name              | type       | default    | description                   |
|-------------------|------------|------------|-------------------------------|
| flattenArray      | boolean    | true       | Set flatten array or not      |
| delimiter         | string     | '.'        | Delimiter for object keys     |
