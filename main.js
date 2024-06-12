document.getElementById('convert-button').addEventListener('click', function () {
    const markdownText = document.getElementById('markdown-input').value;
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

document.getElementById('copy-button').addEventListener('click', function () {
    const htmlOutput = document.getElementById('html-output').textContent;
    navigator.clipboard.writeText(htmlOutput).then(function () {
        alert('HTML copied to clipboard!');
    }, function (err) {
        alert('Could not copy text: ', err);
    });
});