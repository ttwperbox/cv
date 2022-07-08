var currentMode = 0;
        function changeMode() {
            if (currentMode) {
                document.querySelector('body').style.backgroundColor = 'black';
                document.querySelector('body').style.color = 'white';
                document.querySelector('p').style.borderColor = 'white';
                currentMode = 0;
            } else {
                document.querySelector('body').style.backgroundColor = 'white';
                document.querySelector('body').style.color = 'black';
                document.querySelector('p').style.borderColor = 'black';
                currentMode = 1;
            }
        }
