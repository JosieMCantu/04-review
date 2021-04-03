

const form = document.getElementById('file-form');
const ul = document.getElementById('screen-shots');

form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const fd = new FormData;
    const input = document.getElementById('myfile');
    
    fetch('/api/v1/files', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            keyName: input.value,
        }),
    })
    .then((res) => res.json())
    .then((file) => {
        const li = document.createElement('li');
        li.textContent = `${file.keyName}`;
        ul.appendChild(li);
    });
    
});

fetch('/api/v1/files')
.then((res) => res.json())
.then((files) => {
    files.forEach((file) => {
    const li = document.createElement('li');
    li.textContent = `${file.name}`;
    ul.appendChild(li);
    });
});