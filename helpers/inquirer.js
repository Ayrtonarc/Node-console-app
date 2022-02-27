const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'Que opcion desea hacer',
    choices: ['opt1','opt2','opt3']
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('======================');
    console.log(' Seleccione una opcion');
    console.log('======================');

    const opt = await inquirer.prompt([])
}