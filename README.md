# Recipe app
First run `npm install` to install dependencies for the project. You need to supply your own MongoDB url, make a file `/config/db.js` and add the url:

```javascript
module.exports = {
  url: "mongodb://<dbuser>:<dbpassword>@ab1234.mlab.com:36617/recipesjs"
}
```

To use `NODE_ENV=production` within Windows install the  `win-node-env` module: `npm install -g win-node-env`

## Useful links
- [Keeping API Routing Clean Using Express Routers](https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers)
- [plainjs: Send Ajax GET and POST requests](https://plainjs.com/javascript/ajax/send-ajax-get-and-post-requests-47/)