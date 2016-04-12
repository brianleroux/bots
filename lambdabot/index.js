var validate = require('@smallwins/validate')
var lambda = require('@smallwins/lambda')
var lodash = require('lodash')
var twilio = require('twilio')

function valid(event, callback) {
  var schema = {
    'stage':                   {required:true, type:Object}, 
    'stage.TWILIO_ACCOUNT_ID': {required:true, type:String},
    'stage.TWILIO_TOKEN':      {required:true, type:String},
    'query':                   {required:true, type:Object},
    'query.Body':              {required:true, type:String},
    'query.From':              {required:true, type:String},
    'query.To':                {required:true, type:String}
  }
  validate(event, schema, callback)
}

function reply(event, callback) {
  var msg = lodash.trim(event.query.Body || '')
  var txt = 'sorry, eh'
  if (msg === 'hi') {
    txt = 'hello world'
  }
  if (msg === 'status') {
    txt = 'systems nominal'
  }
  if (msg === '') {
    txt = '...'
  }
  event.reply = {
    to: event.query.From,
    from: event.query.To,
    body: txt
  }
  callback(null, event)
}

function sms(event, callback) {
  var client = twilio(event.stage.TWILIO_ACCOUNT_ID, event.stage.TWILIO_TOKEN)
  client.sendMessage(event.reply, function(err, resp) {
    console.log('sent twilio msg!', event.reply, err, resp)
  }) 
}

exports.handler = lambda(valid, reply, sms)    
