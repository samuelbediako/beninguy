document.addEventListener('DOMContentLoaded', () => {
    const languageList = document.getElementById('languageList');
    const languageSearch = document.getElementById('languageSearch');
    const dropdownLabel = document.getElementById('dropdownLabel');
    const dropdownText = document.getElementById('dropdownText');
    const dropdownFlag = document.getElementById('dropdownFlag');
    const picker = document.querySelector('.language-picker');
    const continueBtn = document.getElementById('continueBtn');

    const languages = {
         "af": ["Afrikaans", "za"],
        "am": ["አማርኛ", "et"],
        "ar": ["العربية", "sa"],
        "az": ["Azərbaycan dili", "az"],
        "be": ["Беларуская", "by"],
        "bg": ["Български", "bg"],
        "bn": ["বাংলা", "bd"],
        "bs": ["Bosanski", "ba"],
        "ca": ["Català", "es"],
        "cs": ["Čeština", "cz"],
        "cy": ["Cymraeg", "gb"],
        "da": ["Dansk", "dk"],
        "de": ["Deutsch", "de"],
        "el": ["Ελληνικά", "gr"],
        "en": ["English", "gb"],
        "eo": ["Esperanto", "eu"],
        "es": ["Español", "es"],
        "et": ["Eesti", "ee"],
        "eu": ["Euskara", "es"],
        "fa": ["فارسی", "ir"],
        "fi": ["Suomi", "fi"],
        "fr": ["Français", "fr"],
        "ga": ["Gaeilge", "ie"],
        "gl": ["Galego", "es"],
        "gu": ["ગુજરાતી", "in"],
        "he": ["עברית", "il"],
        "hi": ["हिन्दी", "in"],
        "hr": ["Hrvatski", "hr"],
        "ht": ["Kreyòl", "ht"],
        "hu": ["Magyar", "hu"],
        "hy": ["Հայերեն", "am"],
        "id": ["Bahasa Indonesia", "id"],
        "is": ["Íslenska", "is"],
        "it": ["Italiano", "it"],
        "ja": ["日本語", "jp"],
        "jv": ["Basa Jawa", "id"],
        "ka": ["ქართული", "ge"],
        "kk": ["Қазақ тілі", "kz"],
        "km": ["ខ្មែរ", "kh"],
        "kn": ["ಕನ್ನಡ", "in"],
        "ko": ["한국어", "kr"],
        "ku": ["Kurdî", "iq"],
        "ky": ["Кыргызча", "kg"],
        "lo": ["ລາວ", "la"],
        "lt": ["Lietuvių", "lt"],
        "lv": ["Latviešu", "lv"],
        "mk": ["Македонски", "mk"],
        "ml": ["മലയാളം", "in"],
        "mn": ["Монгол", "mn"],
        "mr": ["मराठी", "in"],
        "ms": ["Bahasa Melayu", "my"],
        "mt": ["Malti", "mt"],
        "my": ["မြန်မာ", "mm"],
        "ne": ["नेपाली", "np"],
        "nl": ["Nederlands", "nl"],
        "no": ["Norsk", "no"],
        "pa": ["ਪੰਜਾਬੀ", "in"],
        "pl": ["Polski", "pl"],
        "ps": ["پښتو", "af"],
        "pt": ["Português", "pt"],
        "ro": ["Română", "ro"],
        "ru": ["Русский", "ru"],
        "si": ["සිංහල", "lk"],
        "sk": ["Slovenčina", "sk"],
        "sl": ["Slovenščina", "si"],
        "so": ["Soomaali", "so"],
        "sq": ["Shqip", "al"],
        "sr": ["Српски", "rs"],
        "sv": ["Svenska", "se"],
        "sw": ["Kiswahili", "ke"],
        "ta": ["தமிழ்", "lk"],
        "te": ["తెలుగు", "in"],
        "th": ["ไทย", "th"],
        "tr": ["Türkçe", "tr"],
        "uk": ["Українська", "ua"],
        "ur": ["اردو", "pk"],
        "uz": ["Oʻzbekcha", "uz"],
        "vi": ["Tiếng Việt", "vn"],
        "xh": ["isiXhosa", "za"],
        "yo": ["Yorùbá", "ng"],
        "zh": ["中文", "cn"],
        "zu": ["isiZulu", "za"]
    };

    function populateList(filter = '') {
        languageList.innerHTML = '';
        Object.entries(languages).forEach(([code, [name, flag]]) => {
            if (name.toLowerCase().includes(filter.toLowerCase())) {
                const li = document.createElement('li');
                li.setAttribute('data-lang', code);
                li.setAttribute('data-flag', flag);
                li.innerHTML = `<img src="https://flagcdn.com/20x15/${flag}.png" alt="${name}"> ${name}`;
                languageList.appendChild(li);
            }
        });
    }

    function updateContinueButtonState() {
        const selectedLang = localStorage.getItem('lang');
        continueBtn.disabled = !selectedLang;
    }

    populateList();
    // Calling the function once on load to reflect saved language
    updateContinueButtonState();

    languageSearch.addEventListener('input', (e) => {
        populateList(e.target.value);
    });

    dropdownLabel.addEventListener('click', () => {
        picker.classList.toggle('open');
        languageSearch.focus();
    });

    languageList.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (li) {
            const lang = li.dataset.lang;
            const flag = li.dataset.flag;
            const name = li.textContent.trim();

            dropdownText.textContent = name;
            dropdownFlag.src = `https://flagcdn.com/20x15/${flag}.png`;

            picker.classList.remove('open');

            localStorage.setItem('lang', lang);
            // Enable the continue button when language is selected
            updateContinueButtonState();
        }
    });

    const savedLang = localStorage.getItem('lang');
    if (savedLang && languages[savedLang]) {
        const [name, flag] = languages[savedLang];
        dropdownText.textContent = name;
        dropdownFlag.src = `https://flagcdn.com/20x15/${flag}.png`;
    }

    continueBtn.addEventListener('click', () => {
        const selectedLang = localStorage.getItem('lang');
        if (selectedLang) {
            window.location.href = "QR_Registration";
        }
});

    // Unhide splash container
    document.querySelector('.splash-container').classList.remove('hidden');

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInside = picker.contains(e.target) || dropdownLabel.contains(e.target);
        if (!isClickInside) {
            picker.classList.remove('open');
        }
    });
});
