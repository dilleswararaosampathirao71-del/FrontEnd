// Get editor elements
const htmlEditor = document.getElementById("htmlEditor");
const cssEditor = document.getElementById("cssEditor");
const jsEditor = document.getElementById("jsEditor");
const outputFrame = document.getElementById("opPanel");

// RUN CODE
function runCode() {
    const html = htmlEditor.value;
    const css = cssEditor.value;
    const js = jsEditor.value;

    const documentContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}

            <script>
                ${js}
            <\/script>
        </body>
        </html>
    `;

    const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(documentContent);
    iframeDoc.close();
}

// CLEAR CODE
function clearCode() {
    htmlEditor.value = "";
    cssEditor.value = "";
    jsEditor.value = "";
  
    const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write("");
    iframeDoc.close();
}

// AUTO RUN (LIVE PREVIEW)
htmlEditor.addEventListener("input", runCode);
cssEditor.addEventListener("input", runCode);
jsEditor.addEventListener("input", runCode);

// INITIAL RUN (optional)
runCode();
