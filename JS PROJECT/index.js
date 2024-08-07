document.addEventListener('DOMContentLoaded', () => {
    const displayEl = document.getElementById('display-el');

    window.addToDisplay = function(value) {
        if (displayEl.placeholder === '0') {
            displayEl.placeholder = value;
        } else {
            displayEl.placeholder += value;
        }
    };

    window.toClearAll = function() {
        displayEl.placeholder = '0';
    };

    window.toDelete = function() {
        if (displayEl.placeholder.length > 1) {
            displayEl.placeholder = displayEl.placeholder.slice(0, -1);
        } else {
            displayEl.placeholder = '0';
        }
    };

    window.calculateResult = function() {
        try {
            displayEl.placeholder = eval(displayEl.placeholder.replace('x', '*').replace('%', '/100')).toString();
        } catch (error) {
            displayEl.placeholder = 'Error';
        }
    };
});
