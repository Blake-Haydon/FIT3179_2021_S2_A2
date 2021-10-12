function setRetroCSS() {
    // Create custom style object
    const style = document.createElement('style');

    // Add CSS styles
    style.innerHTML = `
        html, body {
            background-color: blue;
            cursor: url(red_cursor.cur), default;        
        }
        
        h1 {
            color: yellow;
        }
      
        h2 {
            color: orange;
        }
    
        p {
            color: white;
        }
        
        .title {
            border: 10px solid red;
        }
    `;

    // Append to DOM
    document.head.appendChild(style);
}
