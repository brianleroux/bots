# :speech_balloon: the rise of the bot 
```






























```
---
# 📞📟📠📺📻 significant communication technologies of our lifetimes
```
- personal computing 💻
- internet ⚓️🕸
- mobile 📱
- messaging? 🙈🙊🙉 

























```
---
# 🤓 a swath of terms
```
- chatbots 
- agents
- assistants
- conversational ui/ux
- conversation as a platform


Everyone is talking about the same thing:

## bots 🤖😍




















```
---


---
    
## simultaneously, recently and quite suddenly
# the smallest unit of compute has become a function

- Iron.io <kbd>2010!</kbd>
- AWS Lambda <kbd>2014</kbd>
- Webtask <kbd>2015</kbd> https://speakerdeck.com/benschwarz/webtask-all-you-need-is-code
- TonicDev <kbd>2015</kbd>
- Google Cloud Functions <kbd>2016</kbd>
- Microsoft Azure Functions <kbd>2016</kbd>
- now.sh <kbd>2016</kbd>

    Kinda rad.

---

### smallest poassible unit of compute is a function

- *AWS* First 1 million requests per month are free. $0.20 per 1 million requests thereafter ($0.0000002 per request)
- *Google* pricing remains unannounced
- *Azure* Function requests are charged per million requests, with the first 1 million requests free. Then an ambigous:  pay for what you use with compute metered to the nearest 100ms at Per/GB. I find Azure pricing nebulous and confusing. Maybe thats just me.

---

We chose AWS Lambda. I really think any of them would be a fine choice though. 

- The lock in risk at the function level is trivial to avoid
- Vendors increasing exponentially while compute continues to get cheaper
- The real price you'll pay is the cost of a adopting a new microservices architecture
- A new way of thinking for your dev team
- Also the tools for container techniques are still new(ish) and often raw

(Truly it is cheap enough to experiment with all them and I totally reccomend you do.)

---

There are three types of Lambda function:

1. Lambdas that return a value (Typically, but not exclusively, thru API Gateway)
2. Lambdas as an event source (S3 events, SNS topics and DynamoDB triggers for example)
3. Lambdas that run on a schedule 

_AWS doesn't make a big distinction with 2 & 3 it adds "CloudWatch Events - Schedule" as an event source._

---
```javascript
/**
 * so lets see how we can combine those ideas: serverless servers and chatless bots
 * lets build a bot, specifically, lets build an sms bot
 * then we'll port it to slack
 */
```
---
```javascript
/**
 * our bot needs a purpose
 * a reason to exist
 */
```
---

    // but first, lets say hello

---

## part 0: the pick axes, the shovels, the building blocks

1. create a hello world lambda and get it deploying/invoking
2. expose a bot endpoint to the web with api gateway
3. wire it up with twilio for sms and slack from an outgoing webhook

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
