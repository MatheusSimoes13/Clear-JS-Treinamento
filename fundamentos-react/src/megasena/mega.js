function generateNumber(min, max){

    return Math.floor(
        Math.random() * (max + 1 - min) + min
    )

}

function getMegasena(){

    const result = []
    for(let i = 0; i < 6; i++){

        let newNumber = generateNumber(1, 60)
        if(!result.includes(newNumber)){
            result.push(newNumber)
        }
        console.log(newNumber)
        console.log(result)

    }

    return result.sort((n1, n2) => n1 - n2)
}

console.log(getMegasena())
