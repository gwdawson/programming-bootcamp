const _ = require('lodash');
const yup = require('yup');

exports.noAdditionalKeys = function (value) {
  const providedKeys = Object.keys(value);
  const knownKeys = Object.keys(this.schema.fields);
  const unknownKeys = _.without(providedKeys, ...knownKeys); // lodash

  if (unknownKeys.length) {
    const err = new yup.ValidationError(
      `Unexpected additional key${
        unknownKeys.length > 1 ? 's' : ''
      }: ${unknownKeys.join(', ')}`
    );
    throw err;
  }
  return true;
};

exports.bothLimitAndPage = function (value) {
  const providedKeys = Object.keys(value);
  const hasLimit = providedKeys.includes('limit');
  const hasPage = providedKeys.includes('p');
  if (hasLimit || hasPage) {
    if (!hasPage || !hasLimit) {
      const err = new yup.ValidationError(
        `limit and p queries must be provided in conjunction`
      );
      throw err;
    }
  }
  return true;
};
