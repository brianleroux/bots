var validate = require('@smallwins/validate')
var lambda = require('@smallwins/lambda')
var lodash = require('lodash')

function valid(event, callback) {
  var schema = {
    'body.token':        {required:true, type:String},
    'body.team_id':      {required:true, type:String},
    'body.team_domain':  {required:true, type:String},
    'body.channel_id':   {required:true, type:String},
    'body.channel_name': {required:true, type:String},
    'body.timestamp':    {required:true, type:String},
    'body.user_id':      {required:true, type:String},
    'body.user_name':    {required:true, type:String},
    'body.text':         {required:true, type:String},
    'body.trigger_word': {required:true, type:String}
  }
  var errors = validate(event, schema)
  if (errors) {
    callback(null, {ok:false, text:'errs!'})
  }
  else {
    callback(null, event)
  }
}

function fn(event, callback) {
  if (!event.ok) {
    event.ok = true
    callback(null, event)
  }
  else {
    var msg = lodash.trim(event.body.text.replace(event.body.trigger_word, ''))
    var text = 'sorry eh'
    if (msg === 'help') {
      text = 'help: list of commands\n'
      text += '- help\n'
      text += '- status\n'
    }
    if (msg === 'status') {
      text = 'systems nominal'
    }
    if (msg === '') {
      text = '...'
    }
    callback(null, {ok:true, text:text})
  }
}

exports.handler = lambda(valid, fn)
    
