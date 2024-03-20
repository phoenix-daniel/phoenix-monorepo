const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const nJwt = require('njwt')

server.use(middlewares)

server.use(jsonServer.rewriter({
  "/fake-api/*": '/$1'
}))

server.get('/echo', function(req, res) {
  res.jsonp(req.query)
})

server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'Authorization')
  next()
})

server.use(function (req, res, next) {
  if (req.method === 'POST') {
    req.method = 'GET'
    req.query = req.body
  }
  next()
})

server.get('/login', function (req, res, next) {
  const params = req.body;
  if( params.username === "daniel" &&
    params.password === "password"
  ) {
    const jwtData = {
      "sub": "daniel",
      "audience": "web",
      "created": 1710433768808,
      "fullname": "Daniel",
      "exp": 1710437368,
      "userGroups": "ADMIN",
      "issuer": "ALLIANZ-LIFE"
    }

    const jwt = nJwt.create(jwtData, "HS256")
    const token = jwt.compact()
    res.header('Authorization', 'Bearer ' + token)
  }
  next()
})

server.use(router)
server.listen(3000, function() {
  console.log('JSON Server is running')
})
