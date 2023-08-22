const express = require("express");
const app = express();
require("dotenv").config();
const ip = "localhost";
const Port = process.env.PORT || 3000 ;
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const session = require('express-session')
const helmet = require('helmet')
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser')
const rateLimit = require('express-rate-limit')
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
var fs = require('fs')

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const authRoutes = require('./routes/private/authRoutes')

//const User = require('./models/UserSchema')

//app.use(express.static("public"));
// const corsOptions = {
//   origin: [
//     'http://localhost:3001',

//     // your origins here
//   ],
//   credentials: true,
//   exposedHeaders: ['set-cookie'],
// };

// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// 	// store: ... , // Use an external store for more precise rate limiting
// })

// app.use(limiter)


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
      description: " A simple Express library api"
    },
    servers: [
      {
        url: "https://treasured-backend.onrender.com/api"
      }
    ],
    //apis: ["./routes/*.js"]

  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsDoc(options);

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(express.json()) //can remove
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(helmet());

app.use(cors())
app.use(bodyParser.json())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use("/api-docs" , swaggerUI.serve , swaggerUI.setup(openapiSpecification));

app.get('/', (req, res, next) => {
  // Imagine you're serving a secret treasure map to your users!
  const treasureMap = {
    message: "🗺️ Welcome to the Treasure Hunt API! 🏴‍☠️",
    clues: [
      "🌴 Follow the path of 'api/' to start the journey.",
      "🦜 Look out for the 'X marks the spot' at each endpoint!",
      "⚓ More treasures await as you navigate the API seas!",
    ],
    disclaimer: "Remember, only true adventurers can unlock the secrets...",
    documentation: "/api-docs"
  };

  res.status(200).json(treasureMap);
});
app.use('/api' , authRoutes)


// app.get("/" , (req,res) => {
//   res.send("hello world")
// }
// )


// app.use(express.static(path.join(__dirname , '../client/build')))
// app.get("*" , function (req,res) {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'))
  
// }
// )


app.use(notFound);
app.use(errorHandler);


mongoose
  .connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(Port, () => {
      console.log(`App listening at http://${ip}:${Port}`);
      console.log("Database Connected : " , result.connection.host,result.connection.name)
        let val = "Amr006" ;
    });
  })
  .catch((err) => {
    console.log(err);
  });


//last to catch any wrong url ( needs cool 404 page :) ) 
