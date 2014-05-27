# JSender +

Adds Express `res` helper methods to assist in sending appropriate HTTP Status codes for [JSender](https://github.com/samora/jsender) methods.

## Installation 

```
npm install --save jsender-plus
```

## Usage

```javascript
var express = require('express')
  , jsender = require('jsender')
  , jsenderPlus = require('jsender-plus')

var app = express()

app.use(jsender())
app.use(jsenderPlus())

app.post('/users', function (req, res) {
 
  // some logic here
  // ...
  // fails validation
  if (errors)
    return res.failValidation(errors)

  // on success
  res.successCreated(data)
})
```

## API

### res.successCreate(data)

* __data__: _Optional_ object to send in JSON response.

HTTP Status: `200`

### res.failValidation(data)

* __data__: _Required_ object of validation errors to send in JSON response.

HTTP Status: `400`

### res.errorNotFound(item, data, code)

* __item__: _Optional_ string name of item that cannot be found.
* __data__: _Optional_ object
* __code__: _Optional_ number

HTTP Status: `404`

## License

MIT