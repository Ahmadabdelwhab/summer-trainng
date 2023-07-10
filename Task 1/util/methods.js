function add(...args) {
    return args.reduce((accumulator , currentValue)=>accumulator+currentValue , 0)
    
}
function sub(...args) {
    return args.reduce((accumulator , currentValue)=>accumulator-currentValue , 0)
    
}
function mult(...args) {
    return args.reduce((accumulator , currentValue)=>accumulator*currentValue , 1)
    
}
function div(...args) {
    if(args.includes(0))
    {
        return "zero division isn't allowed";
    }
    return args.reduce((accumulator , currentValue)=>accumulator/currentValue ,args[0] *args[0])
    
}

module.exports ={add , sub , mult  , div}
