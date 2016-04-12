# 🤖:speech_balloon: the rise of the serverless bot 
```
                                                                                 
                                                                               🔀 @brianleroux
                                                                               💌 brian@begin.com



























```
---
## 📞 significant communication technologies of our lifetimes ⚓️
```bash
#!💻 personal computing 
#!🕸 the interwebs     
#!📱 mobile             
#!💬 messaging? (at least we think so!)
























                                                                                             📟 📠 📺 📻
```
---
# 🤓 a swath of terms
```
- chatbots 
- agents
- assistants
- conversational ui/ux
- conversation as a platform


😍 Everyone is talking about the same thing:
```
```bash

```
```bash

```
```bash
         
```
```bash
                                          #!🤖 bots 
```
```bash
                         
```
```bash

```
```bash
                                
```
```bash
                                         
```
---
```    
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
```
---
## Bots aren't super new
```
But this manifestation is. These Bots are not here just to chat. 

      🐧  "This Bot is a superagent acting on your behalf 
          and it better for some things than using an App"

      🐮  "Similar to web tech a Bot can exist simultaneously 
          across different platforms and adapt seamlessly through 
          contexts they are in. The interfaces is conversation 
          and the conversation can move between platforms 
          transparently."

      🐧  "Right!"

      🐮  "👊🏾"
```
##### Oldschool Bot platforms
```
- irc
- email
- sms
```
##### Nuschool Bot platforms
```
- Slack
- Hipchat
- Messenger 
- Telegram
- Kik
- Whatsapp
```
---
```









```
####  :two_women_holding_hands::two_men_holding_hands: simultaneously the smallest unit of compute has become a function
- <kbd>2010</kbd> [Iron.io](https://www.iron.io/)
- <kbd>2014</kbd> [AWS Lambda](https://aws.amazon.com/lambda/)
- <kbd>2015</kbd> [Webtask](https://webtask.io) [Rad preso](https://speakerdeck.com/benschwarz/webtask-all-you-need-is-code) by [@benschwarz](https://twitter.com/benschwarz)
- <kbd>2015</kbd> [TonicDev](https://tonicdev.com)
- <kbd>2016</kbd> [Google Cloud Functions](https://cloud.google.com/functions/docs)
- <kbd>2016</kbd> [Microsoft Azure Functions](https://azure.microsoft.com/en-us/services/functions/)
- <kbd>2016</kbd> [now.sh](https://zeit.co/now/)
```

                                                                                              Kinda rad.


                                                                                              
                                                                                              
                                                                                              
                                                                                              
```
---
## 💰 function pricing
- 🙉 **AWS** `First 1 million requests per month are free. $0.20 per 1 million requests thereafter ($0.0000002 per request)`
- 🙊 **Google** `pricing remains unannounced`
- 🙈 **Azure** `Function requests are charged per million requests, with the first 1 million requests free. [Then ambigous] pay for what you use with compute metered to the nearest 100ms at Per/GB` 
```





















                                       I find Azure pricing nebulous and confusing. Maybe thats just me.
```
---
# For begin.com we chose AWS Lambda
```
However, I believe any of these solutions is a fine choice. 

- The lockin risk at the function level is trivial to avoid
- Vendors increasing exponentially while compute continues to get cheaper
- Accelerant (time to deploy and ease of maintenance)
- AWS services surrounding Lambda are amazing and by far industry leading























```
---
# 💸 The real cost 
<blockquote>
"Lisp programmers know the value of everything and the cost of nothing."
- Alan Perlis ripping off Oscar Wilde
</blockquote>
```
The real price you'll pay is the cost of a adopting a new microservice style architecture.

👉 A new way of thinking for your dev team
👉 Also the tools for container techniques are still new(ish) and often raw
👉 Many repos that produce even smaller deployment artifacts makes dep mgmt tricky
👉 Many repos can also make deployment tricky (to mitigate automate everything from day zero)





















(Truly it is cheap enough to experiment with all them and I totally reccomend you do.)
```
---
```
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ
                                          ΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛΛ

                                          Let's dig into Lambdas

                                          λλλλλλλλλλλλλλλλλλλλλλ 
                                          λλλλλλλλλλλλλλλλλλλλλλ 
                                          λλλλλλλλλλλλλλλλλλλλλλ 
                                          λλλλλλλλλλλλλλλλλλλλλλ 
                                          λλλλλλλλλλλλλλλλλλλλλλ 
                                          λλλλλλλλλλλλλλλλλλλλλλ 
                                          λλλλλλλλλλλλλλλλλλλλλλ 
                                          λλλλλλλλλλλλλλλλλλλλλλ 
                                          λλλλλλλλλλλλλλλλλλλλλλ 
                                          λλλλλλλλλλλλλλλλλλλλλλ 
                                          λλλλλλλλλλλλλλλλλλλλλλ 
                                          λλλλλλλλλλλλλλλλλλλλλλ 


```
---
## 📚 There are three types of Lambda function
```
 
 🗣 .-------------------------------------------------------------------------------------.
   | 1. 📗 Lambdas that return a value (Typically, but not exclusively, thru API Gateway) |
   | 2. 📘 Lambdas as an event source (S3 events, SNS topics and DynamoDB triggers)       |
   | 3. 📙 Lambdas that run on a schedule                                                 |
   '-------------------------------------------------------------------------------------'
                                        .--------------------===========--------------------------------.
                                        ( AWS doesn't make a distinction with 2 & 3                     )
                                        ( 'CloudWatch Events - Schedule' is an event source             )   
                                        ( However it is a good idea to seperate these types of function ) 
                                        '-----------------=========-------------------------------------' 
                                                                                                       🗿  
```
```javascript
/**
 * a typical Lambda signature
 */
exports.handler = function(event, context) {
  // event is an arbitrary payload of data from whatever source invoked the Lambda
  // context is an object with information about the execution environment
  //   AND it has function members for asynchronous: `succeed`, `fail` or shorthand err first `done`
  //   alternately you can pass third param of a node style callback (aka an errback)
  context.done(null, {ok:true})
}
```
<blockquote>&nbsp;</blockquote>
<blockquote>&nbsp;</blockquote>
---
```javascript




/**
 * So lets see how we can combine those ideas: and build ourselves a serverless Bot
 * specifically, lets build an SMS bot
 * then we will port it to Slack
 *
 */























```
<blockquote>&nbsp;</blockquote>
<blockquote>&nbsp;</blockquote>
<blockquote>&nbsp;</blockquote>
---
## the pick axes ⛏ the shovels 🕳 the building blocks 🔩

| Lets write some code                             |                       |
|:------------------------------------------------ | --------------------- |
| 💎 Hello world Lambda function                    |💎|
| 💎 Expose endopint to the web with API Gateway    |💎💎|
| 💎 Wire up SMS with Twilio                        |💎💎💎|
| 💎 Port to Slack                                  |💎💎💎💎|

```




















```
---
### :satellite::satellite: a lambda that returns a value :mailbox:
Here is a vanilla AWS Lambda example for performing a sum. Given `event.query.x = 1` it will return `{count:2}`.
```javascript

exports.handler = function sum(event, context) {
  var errors = []
  if (typeof event.query === 'undefined') {
    errors.push(ReferenceError('missing event.query'))
  }
  if (event.query && typeof event.query != 'object') {
    errors.push(TypeError('event.query not an object'))
  }
  if (typeof event.query.x === 'undefined') {
    errors.push(ReferenceError('event.query not an object'))
  }
  if (event.query.x && typeof event.query.x != 'number') {
    errors.push(TypeError('event.query not an object'))
  }
  if (errors.length) {
    // otherwise Error would return [{}, {}, {}, {}]
    var err = errors.map(function(e) {return e.message})
    context.fail(err) 
  }
  else {
    context.succeed({count:event.query.x + 1})
  }
}
```
<blockquote>Validating a _single variable_ `event.query.x`!! </blockquote>
---
### 😅 Huge amount of vanilla AWS Lambda code is quirky parameter validation
```
AWS API Gateway gives you control but this still means one or more of: 

- headers
- querystring
- form body
- url parameters



Take this simple url for example: 



                     https://fake.com/posts/3/comments/5?success=true



- event.params.post_id
- event.params.comment_id
- event.query.success




                                          ¯\_(ツ)_/¯ 




```
---
## Postels Law: maybe not such a good idea 🤔
- It isn't heresy to acknowledge `HTTP` is a weird protocol 
- In the example above we are validating one querystring parameter `x`... just imagine a big payload! 😮
- Worse still, `Error` requires manual serialization: remember [a string is not an error](http://www.devthought.com/2011/12/22/a-string-is-not-an-error)
- The latter part of this vanilla code uses the funky AWS context object
```












                                             We can do better!









```
---
## 😻🎀 microlibraries for microservices
```javascript



var validate = require('@smallwins/validate')
var lambda = require('@smallwins/lambda')

function sum(event, callback) {
  var schema = {
    'query':   {required:true, type:Object},
    'query.x': {required:true, type:Number}
  }
  var errors = validate(event, schema)
  if (errors) {
    callback(errors)
  }
  else {
    var result = {count:event.query.x + 1}
    callback(null, result)
  }
}

exports.handler = lambda(sum)









```
---
### 👯👯👯 run in series
```javascript


var validate = require('@smallwins/validate')
var lambda = require('@smallwins/lambda')

function valid(event, callback) {
  var schema = {
    'body':          {required:true, type:Object},
    'body.username': {required:true, type:String},
    'body.password': {required:true, type:String}
  }
  validate(event, schema, callback)
}

function authorized(event, callback) {
  var loggedIn = event.body.username === 'sutro' && event.body.password === 'cat'
  if (!loggedIn) {
    // err first
    callback(Error('not found'))
  }
  else {
    // successful login
    event.account = {
      loggedIn: loggedIn,
      name: 'sutro furry pants'
    }
    callback(null, event)
  }
}

function safe(event, callback) {
  callback(null, {account:event.account})
}

exports.handler = lambda(valid, authorized, safe)
```
---
#### :floppy_disk: save a record from a dynamodb trigger :boom::gun:

AWS DynamoDB triggers invoke a Lambda function if anything happens to a table. The payload is usually a big array of records. `@smallwins/lambda` allows you to focus on processing a single record but executes the function in parallel on all the results in the Dynamo invocation. For convenience the same middleware chaining is supported.

```javascript
var lambda = require('@smallwins/lambda')

function save(record, callback) {
  console.log('save a version ', record)
  callback(null, record)
}

exports.handler = lambda.sources.dynamo.save(save)










```
---
## :love_letter: api :thought_balloon::sparkles:

- `lambda(...fns)` create a Lambda that returns a serialized json result `{ok:true|false}`
- `lambda([fns], callback)` create a Lambda and handle result with your own errback formatter
- `lambda.local(fn, fakeEvent, (err, result)=>)` run a Lambda locally offline by faking the event obj
- `lambda.sources.dynamo.all(...fns)` run on INSERT, MODIFY and REMOVE
- `lambda.sources.dynamo.save(...fns)` run on INSERT and MODIFY
- `lambda.sources.dynamo.insert(...fns)` run on INSERT only
- `lambda.sources.dynamo.modify(...fns)` run on MODIFY only
- `lambda.sources.dynamo.remove(...fns)` run on REMOVE only
```

















```
---
## <kbd>#! automatations</kbd> :memo:

`@smallwins/lambda` includes some helpful automation code perfect for npm scripts. If you have a project that looks like this:

```
project-of-lambdas/
 |-test/
 |-src/
 |  '-lambdas/
 |     |-signup/
 |     |  |-index.js
 |     |  |-test.js
 |     |  '-package.json <--- name property should equal the deployed lambda name
 |     |-login/
 |     '-logout/
 '-package.json

```

And a `package.json` like this:

```javascript
{
  "name":"project-of-lambdas",
  "scripts": {
    "create":"AWS_PROFILE=smallwins lambda-create",
    "list":"AWS_PROFILE=smallwins lambda-list",
    "deploy":"AWS_PROFILE=smallwins lambda-deploy",
    "invoke":"AWS_PROFILE=smallwins lambda-invoke",
    "local":"AWS_PROFILE=smallwins lambda-local",
    "deps":"AWS_PROFILE=smallwins lambda-deps",
    "log":"AWS_PROFILE=smallwins lambda-log"
  }
}
```

You get:

### :fast_forward: npm run scripts :running::dash:

This is :key:! Staying in the flow with your terminal by reducing hunts for information in the AWS Console. :shipit::chart_with_upwards_trend:

- :point_right: <kbd>npm run <b>create</b> src/lambdas/forgot</kbd> creates a new lambda named `forgot` at `src/lambdas/forgot` 
- :point_right: <kbd>npm run <b>list</b></kbd> lists all deployed lambdas and all their alias@versions
- :point_right: <kbd>npm run <b>deploy</b> src/lambdas/signup brian</kbd> deploys the lambda with the alias `brian`
- :point_right: <kbd>npm run <b>invoke</b> src/lambdas/login brian '{"email":"b@brian.io", "pswd":"..."}'</kbd> to remote invoke a deployed lambda
- :point_right: <kbd>npm run <b>local</b> src/lambdas/login brian '{"email":"b@brian.io", "pswd":"..."}'</kbd> to locally invoke a lambda
- :point_right: <kbd>npm run <b>deps</b> src/lambdas/*</kbd> for a report of all your lambda deps
- :point_right: <kbd>npm run <b>log</b> src/lambdas/logout</kbd> to view the cloudwatch invocation logs for that lambda (remote `console.log` statements show up here)

_Note: these scripts assume each lambda has it's own nested `package.json` file with a `name` property that matches the lambda name._
```



















```
### create a lambda function in the aws console

- `@smallwins/lambda` is deliberately a data flow control library with some convienance scripts 
- `@smallwins/lambda` is not a confiuration utility (aka a framework)
- Do your config business in the AWS console: it is a best tool for that job (except when it isn't)

---

    mkdir lambdabot
    cd lambdabot/ && npm init -y
    npm i @smallwins/lambda --save

---

Then add the following to your `package.json`:

```javascript
{
  "name": "bots",
  "version": "1.0.0",
  "scripts": {
    "create": "lambda-create",
    "list": "lambda-list",
    "invoke": "lambda-invoke",
    "deploy": "lambda-deploy",
    "deps": "lambda-deps"
  },
  "dependencies": {
    "@smallwins/lambda": "^4.8.0"
  }
}
```

---

    # create a lambda!
    npm run create lambdabot
    npm i
    npm run deploy lambdabot brian
    npm run invoke lambdabot brian ""

---

# lets validate an outgoing webhook payload

<script src="https://gist.github.com/brianleroux/da469ce9ef1cb1723b3cd25ad715fb9f.js"></script>

---

    # tests and lambda.local

---
    
# all good bots respond to

- help
- status
- blank input

---
    gateway velocity tempaltes
    https://gist.github.com/brianleroux/11d14307ef1be57fe154429cc43c9a22
---
---
---
---

## part 1: call and response (alphabots)

1. a look at data formats for knowledgebases
2. regular expressions
3. alice, superscript, rive, chatscript

---

## part 2: scripting (betabots)

1. payload and reply
2. the middleware pattern

---
 
## part 3: stateful (bots)

1. aws storage options
2. finite state machines

