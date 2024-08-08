// Inject CSS styles
const styles = `
.circle-container {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 50px auto;
}
.circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    top: 0;
    left: 0;
    transition: border-color 0.5s ease;
}
.highlight-circumference {
    border-color: blue;
}
.diameter-line {
    width: 0;
    height: 2px;
    background-color: blue;
    position: absolute;
    top: 50%;
    left: 0;
    transition: width 2s ease;
}
.highlight-diameter .diameter-line {
    width: 100%;
}
#circumference, #diameter {
    color: blue;
    cursor: pointer;
}
#circumference:hover, #diameter:hover {
    background-color: blue;
    color: white;
}
`;

// Append the styles to the head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

function triggerInteractive(action) {
    const interactiveElement = document.getElementById('interactiveElement');
    interactiveElement.dispatchEvent(new CustomEvent(action));
}

document.addEventListener('DOMContentLoaded', function() {
    const interactiveElement = document.getElementById('interactiveElement');
    
    interactiveElement.addEventListener('showCircumference', function() {
        document.getElementById('circle').classList.add('highlight-circumference');
    });
    
    interactiveElement.addEventListener('hideCircumference', function() {
        document.getElementById('circle').classList.remove('highlight-circumference');
    });

    interactiveElement.addEventListener('showDiameter', function() {
        document.getElementById('diameter-line').style.width = '100%';
    });

    interactiveElement.addEventListener('hideDiameter', function() {
        document.getElementById('diameter-line').style.width = '0';
    });

    // Optional: Remove or modify this function if you do not need to load interactive content
    function loadInteractiveContent() {
        // const embedData = JSON.parse(atob(interactiveElement.getAttribute('data-embed')));
        // interactiveElement.innerHTML = `<div>Interactive Content Loaded: ${embedData.name}</div>`;
    }

    loadInteractiveContent();
});
