//1
function absoluteValue(number){
    if(typeof number === "number"){
        if(number < 0){
            return (number *= -1)
        }else {
            return number
        }
    }else {
        return null
    }
        }
    

console.log(absoluteValue(-10))



