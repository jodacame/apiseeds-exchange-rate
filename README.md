# Apiseeds  | Exchange Rate

Is a simple module that provides exchange rates from https://apiseeds.com/ directly into your js file in JSON format.

## Requeriments
* FREE Api key from https://apiseeds.com/


## Installation
```Bash
# Local installation
npm install -s apiseeds-exchange-rate

# Global installation
npm install -g apiseeds-exchange-rate

```

## Method

**convert**

### Params 

* **apikey** (String) [Required]
* **from** (String) [Required] **Check currencies method**
* **to** (String) [Required] **Check currencies method**
* **callback** (response,headers) (Function) [Required]
* **amount** (Number) [Optional]


## Method

**currencies**

Return supported currencies

### Params 

* **apikey** (String) [Required]


## Example Convert 

```Javascript
'use strict';

var exchange = require("apiseeds-exchange-rate");

const apikey = 'YOUR-API-KEY'; // Get it here => https://apiseeds.com/

exchange.convert(apikey,"BTC","USD",function(response,headers){
    console.log("Header", headers);
    console.log("Response",response);
});
```

## Example currencies 

```Javascript
'use strict';

var exchange = require("apiseeds-exchange-rate");

const apikey = 'YOUR-API-KEY'; // Get it here => https://apiseeds.com/

exchange.currencies(apikey,function(response,headers){
    console.log("Header", headers);
    console.log("Response",response);
});
```


## Important 

Rate limit and credits are in the header response

## Api Documentation 

https://apiseeds.com/documentation/exchangerates
