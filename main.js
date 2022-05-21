const questionsData = [
    {
        question: 'Kako se zoves?',
        options: ['Valentina', 'Mia', 'Bora'],
        answer: 'Valentina'
    },
    {
        question: 'Kako se prezivas?',
        options: ['Otocan', 'Mianovic', 'Boric'],
        answer: 'Otocan'
    }
]

questionsData.forEach((q) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'question');
    document.body.append(div);
    const h2 = document.createElement('h2');
    h2.innerHTML = q.question;
    div.append(h2);

    q.options.forEach((option) => {
        const button = document.createElement('button');
        button.setAttribute('class', 'option');
        button.innerHTML = option;
        div.append(button);
    })
})