const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'Que opcion desea hacer',
    choices: [
        {
            value: '1',
            name: `${'1.'} Crear tarea`
        },
        {
            value: '2',
            name: `${'2.'} Listar tarea`
        },
        {
            value: '3',
            name: `${'3.'} Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4.'} Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5.'} Completar tarea`
        },
        {
            value: '6',
            name: `${'6.'} Borrar  tarea`
        },
        {
            value: '0',
            name: `${'0.'} Salir \n`
        }
             ]
    }
];

const inquirerMenu = async() => {
    //console.clear();
    console.log('======================');
    console.log(' Seleccione una opcion');
    console.log('======================');

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if( value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;    
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}