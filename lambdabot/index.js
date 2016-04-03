var validate = require('@smallwins/validate')
var lambda = require('@smallwins/lambda')

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
  validate(event, schema, callback)
}

function fn(event, callback) {
  // callback(Error('name failed'))
  callback(null, {ok:true})
}

exports.handler = lambda(valid, fn)
    
