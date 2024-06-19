document.addEventListener('DOMContentLoaded', function() {
        const englishBtn = document.getElementById('englishBtn');
    const russianBtn = document.getElementById('russianBtn');
    const faqItems = document.querySelectorAll('.faq-item');

    englishBtn.addEventListener('click', function() {
        toggleLanguage('en');
        englishBtn.classList.add('active');
        russianBtn.classList.remove('active');
    });

    russianBtn.addEventListener('click', function() {
        toggleLanguage('ru');
        russianBtn.classList.add('active');
        englishBtn.classList.remove('active');
    });

    // Сохраняем индекс активного вопроса
    let activeIndex = -1;

    englishBtn.addEventListener('click', function() {
        toggleLanguage('en');
    });

    russianBtn.addEventListener('click', function() {
        toggleLanguage('ru');
    });

    function toggleLanguage(language) {
        // Сохраняем состояние активного вопроса
        faqItems.forEach((item, index) => {
            if (item.classList.contains('active')) {
                activeIndex = index;
            }
        });

        // Очищаем активный вопрос
        faqItems.forEach(item => {
            item.classList.remove('active');
            const answer = item.querySelector('.faq-answer');
            answer.style.maxHeight = '0';
        });

        // Восстанавливаем состояние активного вопроса после изменения языка
        if (activeIndex !== -1) {
            faqItems[activeIndex].classList.add('active');
            const answer = faqItems[activeIndex].querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }

        faqItems.forEach(item => {
            const questionEn = item.querySelector('.question-en');
            const answerEn = item.querySelector('.answer-en');
            const questionRu = item.querySelector('.question-ru');
            const answerRu = item.querySelector('.answer-ru');

            if (language === 'en') {
                questionEn.style.display = 'block';
                answerEn.style.display = 'block';
                questionRu.style.display = 'none';
                answerRu.style.display = 'none';
            } else {
                questionEn.style.display = 'none';
                answerEn.style.display = 'none';
                questionRu.style.display = 'block';
                answerRu.style.display = 'block';
            }
        });
    }

    // Добавляем обработчики клика на вопросы
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = '0';
            } else {
                faqItems.forEach(i => {
                    i.classList.remove('active');
                    const ans = i.querySelector('.faq-answer');
                    ans.style.maxHeight = '0';
                });
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
