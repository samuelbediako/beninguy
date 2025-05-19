<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SI QR</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- Splash loader -->
    <div class="loader-wrapper">
        <img src="https://flagcdn.com/w80/de.png" alt="Loading..." class="loader-flag" id="loaderFlag">
        <p class="loading-text">Loading</p>
    </div>

    <!-- Splash content -->
    <div class="splash-container hidden">
        <div class="language-picker">
            <button id="dropdownLabel">
                <img src="" id="dropdownFlag"> <span id="dropdownText">Select Language</span>
            </button>
            <div class="dropdown">
                <input type="text" id="languageSearch" placeholder="Search language...">
                <ul id="languageList"></ul>
            </div>
        </div>
    </div>

    <script src="assets/js/splash.js"></script>
</body>
</html>
