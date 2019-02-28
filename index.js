'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./signaldevs/formik.cjs.production.js');
} else {
  module.exports = require('./signaldevs/formik.cjs.development.js');
}