document.getElementById('convert-button').addEventListener('click', function() {
    const markdownText = document.getElementById('markdown-input').value;
    if (markdownText.trim() === '') {
        alert('Please enter some Markdown text.');
        return;
    }
    
    const htmlContent = marked.parse(markdownText);
    const formattedHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated HTML</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>
    ${htmlContent}
</body>
</html>
    `;
    document.getElementById('html-output').textContent = formattedHtml;
});

document.getElementById('copy-html-button').addEventListener('click', function() {
    const htmlOutput = document.getElementById('html-output').textContent;
    navigator.clipboard.writeText(htmlOutput).then(function() {
        alert('HTML copied to clipboard!');
    }, function(err) {
        alert('Could not copy text: ', err);
    });
});

document.getElementById('copy-markdown-button').addEventListener('click', function() {
    const markdownInput = document.getElementById('markdown-input').value;
    navigator.clipboard.writeText(markdownInput).then(function() {
        alert('Markdown copied to clipboard!');
    }, function(err) {
        alert('Could not copy text: ', err);
    });
});

document.getElementById('preview-button').addEventListener('click', function() {
    const htmlContent = marked.parse(document.getElementById('markdown-input').value);
    document.getElementById('html-preview').innerHTML = htmlContent;
});
