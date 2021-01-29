// @see https://github.com/ryank1m/json-schema-to-typescript/issues/357
export const input = {
  oneOf: [
    {
      type: 'string'
    },
    {
      enum: [false]
    }
  ],
  default: 'foo'
}
