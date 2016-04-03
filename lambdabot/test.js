
var test = require('tape')
var fn = require('./')

test('sanity', t=> {
  t.plan(1)
  t.ok(fn, 'lambda function exists')
})
    