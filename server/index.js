const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const { ApolloServer,gql, PubSub, ApolloError } = require('apollo-server-express');
const  User= require("./models/User");
const app = express()
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const expressjwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const http = require('http');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/ecofoodbank', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).catch(e => console.log(e)
)

const typeDefs = gql`
    type User{
    email:String
    password:String
    usertype:String
    }

  input UserInput{
      email:String
      password:String
      usertype:String
  }


  type Query {
  user(email:String,password:String):User
  #  user(id:String):User

  },

  type Mutation{
  addUser(userInput:UserInput):User,
  }
  
`

  const resolvers = {
    Query: {
      
     
      user: (_, { email, password }) =>
      User.findOne({ 'email': email, 'password': password })
        .then((data) => {
          return data
        }).catch((error) => {
          return error
        })
    },

    Mutation: {
      addUser(_, payload) {
        return User.create(payload)
          .then((data) => {
            return data
          }).catch((error) => {
            return error
          })
      }
    }

  }


  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context:({req,res})=>{req,res},

    playground: true,

  });

  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);







// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

const refreshTokens = {}

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server



  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }


  app.get('/graph', (req, res) => {

    res.send('hello boos');
  })

  const jwtCheck = expressjwt({    
    secret: "mykey",
    
  });

  app.use(expressjwt(
      {secret: "mykey",
         credentialsRequired: false
        }), function (err, req, res, next) {
        if (err.code === 'invalid_token') return next();
        return next(err);
        });

app.get('/api/auth/user', jwtCheck, (req, res) => {


    console.log(req.body);
    
    res.json({user: req.user })

})

  app.post('/api/login',(req,res)=>{
   
    const expiresIn = 86419
    const refreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1

        if(req.body.usertype == 'user'){
            User.findOne({$and:[
                {'email':req.body.email},
                {'password':req.body.password},
                {'usertype':req.body.usertype}
            ]}).then((data)=>{
        
                console.log(`Empty Skull : ${data}`);
                // check object is empty
                // lodash.isEmpty({});//true 
                
                if(data == null){
                    res.status(403).send({err:"Invalid email and password combination",
                    message:"Invalid email and password combination"})
                }
                else{
                    const accessToken = jwt.sign({
                        user:data
                      }, "mykey", {expiresIn});

                      refreshTokens[refreshToken] = {
                        accessToken,
                        user: data
                      }
        
                      res.send({token:{
                        accessToken,
                        refreshToken,
                        clientId:data._id
                        }
                    })
                }
               
        
            }).catch((err)=>{
                console.log(`Error Skull {err}`);
                res.status(422).send(err)
                  
            })

        }
    
     

})

app.post('/refresh', (req, res, next) => {
    const { refreshToken } = req.body
  
    console.log("wanna referesh token");
    
    if ((refreshToken in refreshTokens)) {
      const user = refreshTokens[refreshToken].user
    //   const expiresIn = 15
       const expiresIn =86098
      const newRefreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
      delete refreshTokens[refreshToken]
      const accessToken = jsonwebtoken.sign(
        {
          user: user
        }, 'mykey', {
          expiresIn
        }
      )
  
      refreshTokens[newRefreshToken] = {
        accessToken,
        user: user,
        clientId:user._id
       
      }
  
      res.send({
        token: {
          accessToken,
          refreshToken: newRefreshToken
        }
      })
      
      console.log("new Token Sent");
      
    } else {
      res.sendStatus(401)
    }
  })

  app.post('/api/register', (req, res) => {

    // res.send({token:"5e74d43ee99d532a7cde46be"});
//    console.log( req.body)
    
    if (req.body.usertype == "user") {
        User.create(req.body).then((data)=>{
            res.send(data)
        }).catch((err)=>{  
            // console.log(err);
     
            res.status(403).send(err)
           
            })
        
    }


   
    else {
        res.send("no user type set");
    }





});
  


  // set up server


  server.applyMiddleware({ app })
  // app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
  // app.use(bodyParser.json());

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  httpServer.listen({ port },()=>{
    console.log(`🚀 Server ready at http://localhost:me}`)
  })
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
