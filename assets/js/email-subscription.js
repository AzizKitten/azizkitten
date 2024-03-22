require('dotenv').config();
function saveEmail() {
    var email = document.getElementById('email-input').value;

    if (email.trim() !== "") {
        var newEmail = { "email": email };
        fetch('emails.json')
            .then(response => response.json())
            .then(data => {
                data.push(newEmail);
                var updatedData = JSON.stringify(data);
                fetch('https://api.github.com/repos/AzizKitten/azizkitten.github.io/contents/assets/js/emails.json', {
                    method: 'PUT',
                    headers: {
                        'Authorization': process.env.TOKEN,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: 'Add new email',
                        content: btoa(updatedData),
                        sha: '9e26dfeeb6e641a33dae4961196235bdb965b21b'
                    })
                })
                .then(response => {
                    if (response.ok) {
                        alert('Email saved successfully!');
                    } else {
                        alert('Failed to save email.');
                    }
                })
                .catch(error => console.error('Error:', error));
            })
            .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter your email.');
    }
}

