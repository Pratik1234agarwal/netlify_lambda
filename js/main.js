
const fetchUsers = async()=> await (await fetch('/.netlify/functions/getUsers')).json();

fetchUsers().then((data)=>{
    const list = document.querySelector("#users");

    data.forEach(user => {
        const li = document.createElement('li');
        li.className = "list-group-item";
        const link = document.createElement('a');
        link.appendChild(document.createTextNode(user.login));
        link.href = user.html_url;
        link.target = '_blanck';
        li.appendChild(link);
        list.appendChild(li);
    });
})