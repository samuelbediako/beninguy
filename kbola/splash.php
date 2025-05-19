<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SI QR</title>
    <link rel="stylesheet" href="assets/css/splash.css">
</head>
<body>
    <!-- Splash content -->
    <div class="splash-container hidden">
  <div class="splash-card">
  <h1 class="splash-title">Choose Your Language</h1>
  <div class="language-picker">
    <div class="dropdown-label" id="dropdownLabel">
      <img id="dropdownFlag" src="https://flagcdn.com/20x15/gb.png" alt="Flag">
      <span id="dropdownText">English</span>
      <span class="arrow">▼</span>
    </div>
    <div class="dropdown-list">
      <input type="text" id="languageSearch" placeholder="Search language...">
      <ul id="languageList"></ul>
    </div>
  </div>
  <button id="continueBtn" disabled>Continue</button>
</div>

</div>
    <script src="assets/js/splash.js"></script>
</body>
</html>
