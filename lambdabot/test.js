var test = require('tape')
var fn = require('./').handler
var lambda = require('@smallwins/lambda')

test('sanity', t=> {
  t.plan(1)
  t.ok(fn, 'lambda function exists')
})

test('fake event', t=> {
  t.plan(1)
  lambda.local(fn, {}, (err, result)=> {
    if (err) {
      t.ok(err, 'got error')
      console.log(err)
    }
    else {
      t.fail(result, 'got result')
      console.log(result)
    }
  })
})

test('good event', t=> {
  t.plan(1)
  lambda.local(fn, {
    body: {
      token: 'PUPCjHM8G9zTHcB1e0a',
      team_id: 'T0001',
      team_domain: 'smallwins',
      channel_id: 'C2147483705',
      channel_name: 'test',
      timestamp: '1355517523.000005',
      user_id: 'U2147483697',
      user_name: 'brian',
      text: '@lambdabot help',
      trigger_word: '@lambdabot'
    }
  }, 
  function done(err, result) {
    if (err) {
      t.fail(err, 'got error')
      console.log(err)
    }
    else {
      t.ok(result, 'got result')
      console.log(result)
    }
  })
})

