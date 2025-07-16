function add(a , b)  //parameter 
{
    console.log(a+b)
}

add(5,5)  //Arguments

function addd(a , b)  //parameter 
{
    return (a+b)
}

console.log(addd(5,5))  //Arguments

function print(...num){
    return num;
}

console.log(print(12,323,343,4343,434))