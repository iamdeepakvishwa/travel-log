const {Router} = require('express');
const LogEntry = require('../models/logEntry');

const router = Router();

router.get('/',async(req,res,next)=>{
    try{
        const Entries = await LogEntry.find();
        res.json(Entries);
    }catch(error){
        next(error);
    }
})

router.post('/',async (req,res,next)=>{
    try{
        const logEntry = new LogEntry(req.body);
        const createEntry = await logEntry.save();
        res.json(createEntry);
    }catch(error){
        if(error.name = 'ValidationError'){
            res.status(422);
        }
        next(error);
    }
});

module.exports = router; 