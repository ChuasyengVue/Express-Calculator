const { findAvg, findMiddle, findMostFrq } = require("./backing");


describe("#findAvg", function(){
    it('finds the average of a even list',function(){
        expect(findAvg([1,2,3,-4])).toEqual(0.5)
    })
    it('Finds the average of a odd list', function(){
        expect(findAvg([1,2,3])).toEqual(2)
    })
    it('Finds the avgerage of an empty list', function(){
        expect(findAvg([])).toEqual(0)
    })
})

describe("#findMiddle", function(){
    
    it('Finds the median of an even list', function(){
        expect(findMiddle([1,2,3,4])).toEqual(3.5)
    })
    it('Finds the median of an odd list',function(){
        expect(findMiddle([-1,0,1,2,3])).toEqual(1)
    })
})

describe("#findMostFrq",function(){
    it('Finds the most frequent number in a even list', function(){
        expect(findMostFrq([1,2,3,4,5,5])).toEqual(5)
    })
    it('Finds the most frequent number in a odd list',function(){
        expect(findMostFrq([1,1,2,2,1])).toEqual(1)
    })
})