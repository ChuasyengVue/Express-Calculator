const express = require('express');
const ExpressError = require("./expressError");

const {findAvg, checkValidateNumber, findMiddle, findMostFrq} = require('./backing')

const app = express();

app.use(express.json());

app.get('/', function homePage(req, res){
    const home = ('HOMEPAGE');
    res.send(home);
})



app.get('/mean', function getAverage(req, res, next){
    
    if(!req.query.nums){
        throw new ExpressError('You must enter a query key of (nums) which is a comma-separated list of numbers.',400);
    }
    
    const numsOfString = req.query.nums.split(',');
    let nums = checkValidateNumber(numsOfString);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        response:{
            operation:'mean',
            value:findAvg(nums)
        }
    }
    return res.send(result);
});


app.get('/median', function getMidpoint(req, res, next){

    if(!req.query.nums){
        throw new ExpressError('You must enter a query key of (nums) which is a comma-separated list of numbers.',400);
    }
    
    const numsOfString = req.query.nums.split(',');
    let nums = checkValidateNumber(numsOfString);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        response:{
            operation:'median',
            value: findMiddle(nums)
        }
    }
    return res.send(result);
});


app.get('/mode', function getMostFrequent(req, res, next){

    if(!req.query.nums){
        throw new ExpressError('You must enter a query key of (nums) which is a comma-separated list of numbers.',400);
    }
    
    const numsOfString = req.query.nums.split(',');
    let nums = checkValidateNumber(numsOfString);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        response:{
            operation:'mode',
            value: findMostFrq(nums)
        }
    }
    return res.send(result);
});


app.get('/all', function getAll(req,res,next){

    if(!req.query.nums){
        throw new ExpressError('You must enter a query key of (nums) which is a comma-separated list of numbers.',400);
    }
    
    const numsOfString = req.query.nums.split(',');
    let nums = checkValidateNumber(numsOfString);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result ={
        response:{
            operation:'all',
            mean: findAvg(nums),
            median: findMiddle(nums),
            mode: findMostFrq(nums)
        }
    }
    return res.send(result);
})




app.listen(5000, ()=>{
    console.log("SERVER RUNNING ON PORT 5000.")
})

