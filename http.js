let nameElements = document.querySelector('.name');
let surnameElements = document.querySelector('.surname')

const getMyName = async () => {
    let res = await fetch('http://127.0.0.1:3000')
    console.log(res);
    if (!res.ok) {
        alert('failed to get name');
        return;
    }
    let name = await res.text();
    nameElement.textContent = name;
}
const postsurname = async () => {
    let res = await fetch('http://127.0.0.1:3000/', {
        method: 'POST',
        header: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify({ surname: 'kumar' })
    })


    console.log(res);
    if (!res.ok) {
        alert('failed to post Surname');
        return;
    }
    let { surname } = await res.json();
    surnameElement.textContent = surname;
}
