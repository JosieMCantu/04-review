

const form = document.getElementById('file-form');
const ul = document.getElementById('screen-shots');

form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const fd = new FormData(event.target);
    const input = document.getElementById('myfile');
    
    fetch('/api/v1/files', {
        method: 'POST',
        body: fd
    })
    .then((res) => res.json())
    .then((file) => {
        const img = document.createElement('img');
        img.src = `${file.fileName}`;
        ul.appendChild(img);
    });
});



fetch('/api/v1/files')
.then((res) => res.json())
.then((files) => {
    files.forEach((file) => {
    const img = document.createElement('img');
    img.src = `${file.fileName}`;
    ul.appendChild(img);
    });
});