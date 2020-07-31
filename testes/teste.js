
    let sum = (a,b) =>{ 
        if((typeof(a) !== "number") || (typeof(b)!== "number" ) ){
            return undefined
        }else {return a + b}
    }
    let sub = (a,b) =>{ return a - b}
    let mult = (a,b) =>{ return a * b}
    let div = (a,b) =>{ return a / b}

    let sumTri = (a,b,c)=>{
        let result = a + b + c
        return result
    }

module.exports = {
    sum,sub,div,mult,sumTri
}