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
`;

// Append the styles to the head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Function to trigger interactive actions
window.triggerInteractive = function(action) {
    const interactiveElement = document.getElementById('interactiveElement');
    interactiveElement.dispatchEvent(new CustomEvent(action));
};

document.addEventListener('DOMContentLoaded', function() {
    const interactiveElement = document.createElement('div');
    interactiveElement.id = 'interactiveElement';
    document.body.appendChild(interactiveElement);

    // Listen for events and apply styles
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

    // Assuming the parent document has smartphrase elements with specific IDs
    // Example IDs: #circumference, #diameter

    window.parent.document.querySelectorAll('#circumference, #diameter').forEach(function(element) {
        if (element.id === 'circumference') {
            element.addEventListener('mouseover', function() {
                triggerInteractive('showCircumference');
            });
            element.addEventListener('mouseout', function() {
                triggerInteractive('hideCircumference');
            });
        } else if (element.id === 'diameter') {
            element.addEventListener('mouseover', function() {
                triggerInteractive('showDiameter');
            });
            element.addEventListener('mouseout', function() {
                triggerInteractive('hideDiameter');
            });
        }
    });
});
