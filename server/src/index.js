const express = require('express'); 
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const middlewares = require('./middleware');
const logs = require('./api/logs');
require('dotenv').config();

const app = express();


mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})


app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,

}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        message: "hello World",
    });
});

app.use('/api/logs',logs);

app.use(middlewares.errorHandler);

app.use(middlewares.notFound);

const port = process.env.PORT || 5000;
app.listen(port ,()=>{
    console.log(`listening at http://localhost:${port}`);
});


