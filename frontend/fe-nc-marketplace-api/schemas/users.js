const yup = require('yup');
const { noAdditionalKeys } = require('./utils/objects');

exports.newUser = yup
  .object()
  .shape({
    username: yup
      .string()
      .max(255)
      .matches(/^\S+$/, 'usernames cannot contain spaces')
      .required(),
    avatar_url: yup.string(),
  })
  .test('no-unknown', 'Unknown keys', noAdditionalKeys);

exports.userUpdates = yup
  .object()
  .shape({
    username: yup
      .string()
      .max(255)
      .matches(/^\S+$/, 'usernames cannot contain spaces'),
    avatar_url: yup.string(),
    kudos_inc: yup.number().integer(),
  })
  .test('no-unknown', 'Unknown keys', noAdditionalKeys);
