const xhr = new XMLHttpRequest();
const source =
    "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
xhr.open("GET", source, true);
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        let output = "";
        for (let i = 0; i < response.length; i++) {
            output += `
        <div class="card">
            <div class="team">
                <p class="name"> - ${response[i].name}</p>
                <p class="title">${response[i].username}</p>
                <p class="body">${response[i].email}</p>
            </div>
        </div>`;
        }
        document.querySelector(".output").innerHTML = output;
    }
};
xhr.send();
