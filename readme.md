# :speech_balloon: the rise of the bot 
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
- twitter
```
##### Nuschool Bot platforms
```
- Slack
- Hipchat
- Messenger 
- Telegram
- Kik
- Whatsapp
- Wechat
- Line
```
---
```









```
####  :two_women_holding_hands::two_men_holding_hands: simultaneously the smallest unit of compute has become a function
- <kbd>2010</kbd> Iron.io 
- <kbd>2014</kbd> AWS Lambda 
- <kbd>2015</kbd> Webtask  https://speakerdeck.com/benschwarz/webtask-all-you-need-is-code
- <kbd>2015</kbd> TonicDev 
- <kbd>2016</kbd> Google Cloud Functions 
- <kbd>2016</kbd> Microsoft Azure Functions 
- <kbd>2016</kbd> now.sh 
```

                                                                                              Kinda rad.


                                                                                              
                                                                                              
                                                                                              
                                                                                              
```
---
## 💰 function pricing
- 🙊 **AWS** `First 1 million requests per month are free. $0.20 per 1 million requests thereafter ($0.0000002 per request)`
- 🙉 **Google** `pricing remains unannounced`
- 🙈 **Azure** `Function requests are charged per million requests, with the first 1 million requests free. [Then ambigous] pay for what you use with compute metered to the nearest 100ms at Per/GB` 
```





















                                       I find Azure pricing nebulous and confusing. Maybe thats just me.
```
---
# For begin.com we chose AWS Lambda
```
I really think any of these solutions could be a fine choice though. 

- The lockin risk at the function level is trivial to avoid
- Vendors increasing exponentially while compute continues to get cheaper
























```
---
# 💸 The real cost 
<blockquote>
"Lisp programmers know the value of everything and the cost of nothing."
- Alan Perlis ripping off Oscar Wilde
</blockquote>
```
The real price you'll pay is the cost of a adopting a new microservices architecture.

👉 A new way of thinking for your dev team
👉 Also the tools for container techniques are still new(ish) and often raw























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
  context.done(null, {ok:true})
}
```
<blockquote>&nbsp;</blockquote>
<blockquote>&nbsp;</blockquote>
<blockquote>&nbsp;</blockquote>
---
```javascript




/**
 * so lets see how we can combine those ideas: serverless servers and build a Bots
 * lets build a bot, specifically, lets build an sms bot
 * then we'll port it to Slack
 *
 */























```
<blockquote>&nbsp;</blockquote>
<blockquote>&nbsp;</blockquote>
<blockquote>&nbsp;</blockquote>
```javascript



/**
 * our bot needs a purpose
 *
 * a reason to exist
 */





















```
<blockquote>&nbsp;</blockquote>
<blockquote>&nbsp;</blockquote>
<blockquote>&nbsp;</blockquote>
```javascript
/**
 * but first, lets say hello
 */

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
console.log('hello bot')

```
---
## part 0: the pick axes, the shovels, the building blocks


|N|Botmaker phase                                 |      |
|-|:----------------------------------------------|-----:|
|1| Hello world Lambda function                   |      |
|2| Expose endopint to the web with API Gateway   |      |
|3| Wire up SMS with Twilio and then port to Slack|      |
| |                                               |      |

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

---

# create a lambda function in the aws console

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
