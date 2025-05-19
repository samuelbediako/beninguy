document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader-wrapper');
    const splash = document.querySelector('.splash-container');
    const languageList = document.getElementById('languageList');
    const languageSearch = document.getElementById('languageSearch');
    const dropdownLabel = document.getElementById('dropdownLabel');
    const dropdownText = document.getElementById('dropdownText');
    const dropdownFlag = document.getElementById('dropdownFlag');
    const picker = document.querySelector('.language-picker');
    const loaderFlag = document.getElementById('loaderFlag');

    const languages = {
    "af": ["Afrikaans", "za", ["#007847", "#FFFFFF", "#000000"]],
    "am": ["አማርኛ", "et", ["#078930", "#FCD116", "#E8112D"]],
    "ar": ["العربية", "sa", ["#006C35", "#FFFFFF"]],
    "az": ["Azərbaycan dili", "az", ["#00B1EB", "#FF0000", "#009F4D"]],
    "be": ["Беларуская", "by", ["#D22730", "#FFFFFF", "#4AA657"]],
    "bg": ["Български", "bg", ["#FFFFFF", "#00966E", "#D62612"]],
    "bn": ["বাংলা", "bd", ["#006A4E", "#F42A41"]],
    "bs": ["Bosanski", "ba", ["#002395", "#FFFFFF", "#FECB00"]],
    "ca": ["Català", "es", ["#FFCD00", "#DA121A", "#000000"]],
    "cs": ["Čeština", "cz", ["#11457E", "#FFFFFF", "#D7141A"]],
    "cy": ["Cymraeg", "gb", ["#FFFFFF", "#D00C33", "#006B3F"]],
    "da": ["Dansk", "dk", ["#C60C30", "#FFFFFF"]],
    "de": ["Deutsch", "de", ["#000000", "#DD0000", "#FFCE00"]],
    "el": ["Ελληνικά", "gr", ["#0D5EAF", "#FFFFFF"]],
    "en": ["English", "gb", ["#00247D", "#FFFFFF", "#CF142B"]],
    "eo": ["Esperanto", "eu", ["#009D57", "#FFFFFF"]],
    "es": ["Español", "es", ["#AA151B", "#F1BF00", "#AA151B"]],
    "et": ["Eesti", "ee", ["#0072CE", "#000000", "#FFFFFF"]],
    "eu": ["Euskara", "es", ["#009636", "#FFFFFF", "#CE1126"]],
    "fa": ["فارسی", "ir", ["#239F40", "#FFFFFF", "#DA0000"]],
    "fi": ["Suomi", "fi", ["#002F6C", "#FFFFFF"]],
    "fr": ["Français", "fr", ["#0055A4", "#FFFFFF", "#EF4135"]],
    "ga": ["Gaeilge", "ie", ["#169B62", "#FFFFFF", "#FF883E"]],
    "gl": ["Galego", "es", ["#FFFFFF", "#0039A6"]],
    "gu": ["ગુજરાતી", "in", ["#FF9933", "#FFFFFF", "#138808"]],
    "he": ["עברית", "il", ["#0038B8", "#FFFFFF"]],
    "hi": ["हिन्दी", "in", ["#FF9933", "#FFFFFF", "#138808"]],
    "hr": ["Hrvatski", "hr", ["#171796", "#FFFFFF", "#FF0000"]],
    "ht": ["Kreyòl", "ht", ["#00209F", "#FFFFFF", "#D21034"]],
    "hu": ["Magyar", "hu", ["#CD2A3E", "#FFFFFF", "#436F4D"]],
    "hy": ["Հայերեն", "am", ["#D90012", "#0033A0", "#FF7D00"]],
    "id": ["Bahasa Indonesia", "id", ["#FF0000", "#FFFFFF"]],
    "is": ["Íslenska", "is", ["#003897", "#FFFFFF", "#D72828"]],
    "it": ["Italiano", "it", ["#008C45", "#F4F5F0", "#CD212A"]],
    "ja": ["日本語", "jp", ["#FFFFFF", "#BC002D"]],
    "jv": ["Basa Jawa", "id", ["#FF0000", "#FFFFFF"]],
    "ka": ["ქართული", "ge", ["#FFFFFF", "#FF0000"]],
    "kk": ["Қазақ тілі", "kz", ["#00AFCA", "#FFD700"]],
    "km": ["ខ្មែរ", "kh", ["#032EA1", "#FFFFFF", "#E70013"]],
    "kn": ["ಕನ್ನಡ", "in", ["#FF9933", "#FFFFFF", "#138808"]],
    "ko": ["한국어", "kr", ["#FFFFFF", "#003478", "#C60C30"]],
    "ku": ["Kurdî", "iq", ["#FF0000", "#FFFFFF", "#00A550"]],
    "ky": ["Кыргызча", "kg", ["#E8112D", "#FFFF00"]],
    "lo": ["ລາວ", "la", ["#CE1126", "#002868", "#FFFFFF"]],
    "lt": ["Lietuvių", "lt", ["#FDB913", "#006A44", "#C1272D"]],
    "lv": ["Latviešu", "lv", ["#9E3039", "#FFFFFF"]],
    "mk": ["Македонски", "mk", ["#D82126", "#FFE600"]],
    "ml": ["മലയാളം", "in", ["#FF9933", "#FFFFFF", "#138808"]],
    "mn": ["Монгол", "mn", ["#C4272F", "#015197", "#FFD900"]],
    "mr": ["मराठी", "in", ["#FF9933", "#FFFFFF", "#138808"]],
    "ms": ["Bahasa Melayu", "my", ["#010066", "#FFCC00", "#CC0001"]],
    "mt": ["Malti", "mt", ["#FFFFFF", "#D62929"]],
    "my": ["မြန်မာ", "mm", ["#FF0000", "#FFFF00", "#008000"]],
    "ne": ["नेपाली", "np", ["#DC143C", "#FFFFFF", "#000080"]],
    "nl": ["Nederlands", "nl", ["#21468B", "#FFFFFF", "#AE1C28"]],
    "no": ["Norsk", "no", ["#00205B", "#FFFFFF", "#BA0C2F"]],
    "pa": ["ਪੰਜਾਬੀ", "in", ["#FF9933", "#FFFFFF", "#138808"]],
    "pl": ["Polski", "pl", ["#FFFFFF", "#DC143C"]],
    "ps": ["پښتو", "af", ["#007A3D", "#FFFFFF", "#CE1126"]],
    "pt": ["Português", "pt", ["#006600", "#FF0000", "#FFFF00"]],
    "ro": ["Română", "ro", ["#002B7F", "#FCD116", "#CE1126"]],
    "ru": ["Русский", "ru", ["#FFFFFF", "#0000FF", "#FF0000"]],
    "si": ["සිංහල", "lk", ["#8D153A", "#FFB400"]],
    "sk": ["Slovenčina", "sk", ["#FFFFFF", "#0B4EA2", "#D7141A"]],
    "sl": ["Slovenščina", "si", ["#005BBB", "#FFFFFF", "#EF3340"]],
    "so": ["Soomaali", "so", ["#4189DD", "#FFFFFF"]],
    "sq": ["Shqip", "al", ["#E41E20", "#000000"]],
    "sr": ["Српски", "rs", ["#C6363C", "#0C4076", "#FFFFFF"]],
    "sv": ["Svenska", "se", ["#006AA7", "#FECC00"]],
    "sw": ["Kiswahili", "ke", ["#000000", "#FFFFFF", "#FFCD00"]],
    "ta": ["தமிழ்", "lk", ["#FF9933", "#FFFFFF", "#138808"]],
    "te": ["తెలుగు", "in", ["#FF9933", "#FFFFFF", "#138808"]],
    "th": ["ไทย", "th", ["#A51931", "#F4F5F8", "#2D2A4A"]],
    "tr": ["Türkçe", "tr", ["#E30A17", "#FFFFFF"]],
    "uk": ["Українська", "ua", ["#0057B7", "#FFD700"]],
    "ur": ["اردو", "pk", ["#01411C", "#FFFFFF"]],
    "uz": ["Oʻzbekcha", "uz", ["#1EB53A", "#FFFFFF", "#0099B5"]],
    "vi": ["Tiếng Việt", "vn", ["#DA251D", "#FFFF00"]],
    "xh": ["isiXhosa", "za", ["#007847", "#FFFFFF", "#000000"]],
    "yo": ["Yorùbá", "ng", ["#008751", "#FFFFFF", "#FCD116"]],
    "zh": ["中文", "cn", ["#DE2910", "#FFDE00"]],
    "zu": ["isiZulu", "za", ["#007847", "#FFFFFF", "#000000"]]
};


    // Helper function to convert HEX to RGBA with low opacity
    function hexToRgba(hex, alpha = 0.1) {
        const bigint = parseInt(hex.replace("#", ""), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Apply background gradient based on flag colors
    function applyCountryBackground(colors) {
        if (colors && colors.length > 0) {
            const rgbaColors = colors.map(color => hexToRgba(color));
            document.body.style.background = `linear-gradient(135deg, ${rgbaColors.join(', ')})`;
        }
    }

    // Populate language list based on search filter
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

    populateList();

    // Search filter event
    languageSearch.addEventListener('input', (e) => {
        populateList(e.target.value);
    });

    // Toggle dropdown visibility
    dropdownLabel.addEventListener('click', () => {
        picker.classList.toggle('open');
        languageSearch.focus();
    });

    // Language selection event
    languageList.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (li) {
            const lang = li.dataset.lang;
            const flag = li.dataset.flag;
            const name = li.textContent.trim();
            const colors = languages[lang][2];

            // Update display
            dropdownText.textContent = name;
            dropdownFlag.src = `https://flagcdn.com/20x15/${flag}.png`;
            loaderFlag.src = `https://flagcdn.com/w80/${flag}.png`;

            picker.classList.remove('open');

            // Store selection
            localStorage.setItem('lang', lang);

            // Apply background
            applyCountryBackground(colors);
        }
    });

    // Splash loader timeout
    setTimeout(() => {
        loader.style.display = 'none';
        splash.classList.add('show');
    }, 1500);

    // Load last selected language
    const savedLang = localStorage.getItem('lang');
    if (savedLang && languages[savedLang]) {
        const [name, flag, colors] = languages[savedLang];
        dropdownText.textContent = name;
        dropdownFlag.src = `https://flagcdn.com/20x15/${flag}.png`;
        loaderFlag.src = `https://flagcdn.com/w80/${flag}.png`;
        applyCountryBackground(colors);
    }
});
