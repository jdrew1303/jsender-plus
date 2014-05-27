module.exports = function () {
  return function (req, res, next) {

    /*
     * Success responses.
     */

    // created
    res.successCreated = function (data) {
      res.status(201)
      return res.success(data)
    }

    /*
     * Fail responses
     */

    // validation errors
    res.failValidation = function (data) {
      res.status(400)
      return res.fail(data)
    }

    /*
     * Error responses
     */

    // not found
    res.errorNotFound = function (itemName, data, code) {
      itemName = itemName || 'Item'
      res.status(404)
      return res.error(itemName + ' not found.', data, code)
    }

    next()
  }
}