const Calculate = require("./pregunta1");

const main = () => {
    const calculate = new Calculate();
    const result = calculate.evaluate();
    console.log(result);
};

main ();