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

    function updateSampleText() {
        const difficulty = document.getElementById('difficultySelect').value;
        const sampleText = texts[difficulty][Math.floor(Math.random() * texts[difficulty].length)];
        document.getElementById('sampleText').innerText = sampleText;
    }

    document.getElementById('difficultySelect').addEventListener('change', updateSampleText);
});
