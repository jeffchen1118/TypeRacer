document.addEventListener('DOMContentLoaded', () => {
    const texts = {
        easy: [
            "The quick brown fox jumps over the lazy dog.",
            "A journey of a thousand miles begins with a single step.",
            "To be or not to be, that is the question.",
            "I think, therefore I am.",
            "The early bird catches the worm."
        ],
        medium: [
            "All that glitters is not gold. A picture is worth a thousand words. Actions speak louder than words.",
            "Beauty is in the eye of the beholder. Better late than never. Birds of a feather flock together.",
            "Cleanliness is next to godliness. Don't count your chickens before they hatch. Every cloud has a silver lining."
        ],
        hard: [
            "The only thing we have to fear is fear itself. In the beginning God created the heavens and the earth. To infinity and beyond! The quick brown fox jumps over the lazy dog. A journey of a thousand miles begins with a single step.",
            "To be or not to be, that is the question. I think, therefore I am. The early bird catches the worm. All that glitters is not gold. A picture is worth a thousand words.",
            "Actions speak louder than words. Beauty is in the eye of the beholder. Better late than never. Birds of a feather flock together. Cleanliness is next to godliness."
        ]
    };

    let startTime, endTime, testStarted = false;

    function updateSampleText() {
        const difficulty = document.getElementById('difficultySelect').value;
        const sampleText = texts[difficulty][Math.floor(Math.random() * texts[difficulty].length)];
        document.getElementById('sampleText').innerText = sampleText;
    }

    function startTest() {
        startTime = new Date();
        document.getElementById('startButton').disabled = true;
        document.getElementById('stopButton').disabled = false;
        document.getElementById('typingInput').value = '';
        document.getElementById('typingInput').focus();
        testStarted = true;
    }

    function stopTest() {
        endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        const typedText = document.getElementById('typingInput').value.trim();
        const sampleText = document.getElementById('sampleText').innerText.trim();
        const wpm = calculateWpm(typedText, sampleText, timeTaken);

        document.getElementById('resultTime').innerText = `${timeTaken.toFixed(2)}s`;
        document.getElementById('resultWpm').innerText = wpm;
        document.getElementById('resultLevel').innerText = document.getElementById('difficultySelect').value.charAt(0).toUpperCase() + document.getElementById('difficultySelect').value.slice(1);
        document.getElementById('startButton').disabled = false;
        document.getElementById('stopButton').disabled = true;
        testStarted = false;
    }

    function calculateWpm(typedText, sampleText, timeTaken) {
        const typedWords = typedText.split(' ');
        const sampleWords = sampleText.split(' ');
        const correctWords = typedWords.filter(word => sampleWords.includes(word)).length;
        return Math.round((correctWords / timeTaken) * 60);
    }

    function handleTypingInput(event) {
        if (!testStarted) {
            startTest();
        }
        if (event.key === 'Enter') {
            stopTest();
        }
    }

    document.getElementById('difficultySelect').addEventListener('change', updateSampleText);
    document.getElementById('startButton').addEventListener('click', startTest);
    document.getElementById('stopButton').addEventListener('click', stopTest);
    document.getElementById('typingInput').addEventListener('keydown', handleTypingInput);
});
