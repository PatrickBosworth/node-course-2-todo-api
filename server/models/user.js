const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      minlength: 1,
      trim: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
        }
      },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    tokens: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }]
  });

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
}

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';

var userid = user._id.toHexString();
var data = { _id: userid, access };
  var token = jwt.sign({data, access}, 'abc123').toString();
  user.tokens = user.tokens.concat([{access, token}]);
  return user.save().then(() => {
    return token;
  }).catch((e) => {
    console.log('something failed here');
  })
};

UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

    try {
      decoded = jwt.verify(token, 'abc123');
  //    console.log(decoded.data._id);
} catch (e) {
      return Promise.reject('boohoo');
      }

    return User.findOne({
      '_id': decoded.data._id, //for some reason this is not what AM has in his code.
      'tokens.token': token, //need to reference data._id instead of just _id. version of mongoose maybe?
      'tokens.access': 'auth'
    });
};

var User = mongoose.model('Users', UserSchema);

module.exports = {User};
