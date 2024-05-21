async function submitForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    try {
        let response = await fetch('http://127.0.0.1:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error('Failed to sign up');
        }

        alert('Sign up successful!');
        let {name} = await response.text();
        document.querySelector('.name').textContent = name;
    } catch (error) {
        console.error('Error during signup:', error.message);
        alert('Failed to sign up. Please try again.');
    }
}