let calc = (a, b, operator) => {
    return eval(`${a} ${operator} ${b}`);
}

let resultado = calc(5, 10, "-");

console.log(resultado);