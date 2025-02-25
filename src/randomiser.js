 let intervalId;

        function loadRandomCSS() {
            const styles = ["./css/1.css", "./css/2.css", "./css/3.css"];
            const randomStyle = styles[Math.floor(Math.random() * styles.length)];
            
            // Remove existing stylesheet if present
            const existingLink = document.querySelector("link[rel='stylesheet']");
            if (existingLink) {
                existingLink.remove();
            }
            
            // Create a link element for the stylesheet
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = randomStyle;
            document.head.appendChild(link);
        }

        function setRandomInterval() {
            if (intervalId) {
                clearInterval(intervalId);
            }
            
            const randomTime = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000; // Random interval between 3s and 10s
            intervalId = setInterval(() => {
                loadRandomCSS();
                setRandomInterval();
            }, randomTime);
        }

            // Load the random CSS when the script runs and set the first interval
             loadRandomCSS();
            setRandomInterval();
    
