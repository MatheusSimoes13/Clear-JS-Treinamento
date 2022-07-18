let carros = ["palio 98" ,"toro" ,"omega" ,10 ,true ,new Date() ,function(){}];

console.log(carros);

carros.forEach(function(index, value){
    console.log(index,value);
})