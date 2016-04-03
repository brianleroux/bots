
# the rise of the bot
## &amp; adventures in serverlessish programming

https://github.com/brianleroux

---

# macro trends

- personal computing
- internet
- mobile
- messaging

---

# a swath of terms

- chatbots
- agents
- assistants
- conversational ui/ux
- conversation as a platform

---

#### whatever, everyone is talking about the same thing

## bots

---
    
## simultaneously, recently and quite suddenly
# the smallest unit of cloud compute has become a function

- AWS Lambda <kbd>2014</kbd>
- Webtask
- Iron.io
- TonicDev
- Google Cloud Functions <kbd>2016</kbd>
- Microsoft Azure Functions <kbd>2016</kbd>

---

### smallest poassible unit of compute is a function

- aws cost
- google cost
- azure cost

---

    # so lets see how we can combine those ideas
    # lets build a bot, specifically, lets build an sms bot
    # then we'll port it to slack

---

    # our bot needs a purpose
    # a reason to exist

---

    # but first, lets say hello

---

   ## part 0: the pick axes, the shovels, the building blocks

   1. create a hello world lambda and get it deploying/invoking
   2. expose a bot endpoint to the web with api gateway
   3. wire it up to slack from an outgoing webhook

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
---
---
---
---
---
---
