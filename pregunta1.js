const fs = require('fs');

class Calculate {

    data = null;
    filePath = './expression/expresionNumerica.txt';

    constructor(){

        this.readFile();

    }

    get evaluate(){
        try {

            if (this.data === null) {
                throw new Error('Invalid expression: Not found data ');
            }
            return new Function(`return ${ this.data.replace(/\{|\[/gm, '(').replace(/\}|\]/gm, ')') }`)
            
        } catch (error) {
            console.log(error, 'Invalid expression: Syntax error');
        }
    }

    readFile(){
        try {

            if ( !fs.existsSync( this.filePath ) ) {
                throw new Error('The file cannot be found');
            }
            const data = fs.readFileSync( this.filePath , { encoding: 'utf-8' });
            this.data = data;

        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = Calculate;