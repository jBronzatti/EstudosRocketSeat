const questions = [
    "Vai dar certo?",
    "O que o futuro nos reserva?",
    "Vamos conseguir!",
    "Sei lá blá"
];

const ask = (i=0) => process.stdout.write(questions[i]+'\n')
ask()

const answers = [];

process.stdin.on('data', data => {answers.push(questions[answers.length]+' '+data.toString().trim())
    if (answers.length<questions.length){
        ask(answers.length)
    } else {
    console.log('Respostas: \n'+answers.join('\n'));
    process.exit();
    }
});

process.on('exit', () => {
    console.log(`
    blá
    `)
})

//setTimeout - clearTimeout
//setInterval - clearInterval