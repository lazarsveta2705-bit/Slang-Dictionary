    const words = [
        { word: "Chicken", translation: "Трус", file: "chicken.html" },
        { word: "You bet", translation: "Пожалуйста", file: "you-bet.html" },
        { word: "Laid-back", translation: "Спокойный, раслабленный", file: "laid-back.html" },
        { word: "Jerk", translation: "Придурок", file: "jerk.html" },
        { word: "Larp", translation: "Притворщик", file: "larp.html" },
        { word: "Shady", translation: "Подозрительный", file: "shady.html" },
    ];

    const input = document.querySelector('.search-input');
    const box = document.querySelector('.box');
    const originalContent = box.innerHTML;

    input.addEventListener('input', function() {
        const query = input.value.toLowerCase().trim();

        if (query === '') {
            box.innerHTML = originalContent;
            return;
        }

        const results = words.filter(w => w.word.toLowerCase().includes(query));

        if (results.length === 0) {
            box.innerHTML = '<p>No results found</p>';
            return;
        }

        box.innerHTML = results.map(w => `
            <div class="trending-container">
                <a href="${w.file}">
                    <h3>${w.word}</h3>
                    <p>${w.translation}</p>
                </a>
            </div>
        `).join('');
    });
