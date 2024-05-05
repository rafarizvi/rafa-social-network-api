const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: (v) => {
            return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
          },
          message: props => `${props.value} is not a valid email`
        }
      },

      thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }],

      friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],
    },
  );

  const User = model('user', userSchema);

  module.exports = User;
