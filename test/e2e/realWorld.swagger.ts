export let exclude = true

/**
 * @see https://github.com/ryank1m/json-schema-to-typescript/issues/49
 */
export const input = {
  title: 'Referencing',
  type: 'object',
  properties: {
    foo: {
      $ref:
        'https://raw.githubusercontent.com/ryank1m/OpenAPI-Specification/ae9322eb2df1555acf3163e30cd84779d98afec5/schemas/v2.0/schema.json'
    }
  },
  required: ['foo'],
  additionalProperties: false
}
