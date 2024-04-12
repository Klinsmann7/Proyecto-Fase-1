function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            document.getElementById('codeEditor').value = contents;
            updateLineNumbers();
        };
        reader.readAsText(file);
    }
}

function updateLineNumbers() {
    const text = document.getElementById('codeEditor').value;
    const lines = text.split('\n').length;
    const lineNumberContainer = document.getElementById('lineNumbers');
    lineNumberContainer.innerHTML = '';
    for (let i = 1; i <= lines; i++) {
        lineNumberContainer.innerHTML += i + '<br>';
    }
}
