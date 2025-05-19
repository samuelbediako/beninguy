<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>QR Registration - SI QR</title>
        <script src="https://unpkg.com/html5-qrcode" type="text/javascript"></script>
        <link rel="stylesheet" href="assets/css/qr.css">
    </head>
    <body class="qr-page">
        <header class="qr-header">
            <h1>QR Registration</h1>
        </header>
        <main class="qr-container">
            <div id="formSection" style="display: none;">
                <form id="registrationForm">
                    <label for="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" required>
                    <label for="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" required>
                    <label for="nationality">Nationality</label>
                    <input type="text" name="nationality" id="nationality" required>
                    <label for="gender">Gender</label>
                    <select name="gender" id="gender" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <label for="passport">Passport Number</label>
                    <input type="text" id="passport" name="passport" required>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                    <label for="phone">Telephone</label>
                    <input type="tel" id="phone" name="phone" required>
                    <button type="submit">Submit Form</button>
                </form>
            </div>
            <div class="mobile-only">
                <button id="startScanner">Scan Passport</button>
                <div id="qr-reader" style="width: 100%;max-width: 400px; margin-top: 10px;"></div>
            </div>
        </main>
        <script src="assets/js/qr_registration.js"></script>
    </body>
</html>