const h2 = document.createElement('h2');
h2.textContent = 'Upload a Screenshot';
document.body.appendChild(h2);

const form = document.getElementById('file-form');

form.addEventListener('submit', (event) => {
    const fd = new FormData(form);
    fetch('/api/v1/files', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            filename: fd.get('file-name'),
        }),
    });
});