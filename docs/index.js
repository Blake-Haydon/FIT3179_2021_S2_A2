// Create custom style object
const style = document.createElement('style');

// Add CSS styles
style.innerHTML = `
    html, body {
        background-color: blue;
        cursor: url(3DArrow.cur), default;        
    }
    
    h1 {
        color: yellow;
    }
  
    h2 {
        color: orange;
        font-style: italic;
    }

    p {
        color: white;
    }
    
    .title {
        border: 10px solid red;
    }

    .info-block {
        border: 5px dashed red;
    }
`;


let retroMode = false;
function switchRetroCSS() {
    if (retroMode) {
        // Remove style from DOM
        document.head.removeChild(style);
        retroMode = false;
    } else {
        // Append style to DOM
        document.head.appendChild(style);
        retroMode = true;
    }
}
