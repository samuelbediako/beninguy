document.addEventListener('DOMContentLoaded', () => {
  const scannerButton = document.getElementById('startScanner');
  const qrReader = document.getElementById('qr-reader');
  const form = document.getElementById('registrationForm');
  const formSection = document.getElementById('formSection');

  let html5Qrcode;
  let scanning = false;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (!isMobile) {
    scannerButton.style.display = 'none';
    qrReader.style.display = 'none';
    formSection.style.display = 'block';
    return;
  }

  scannerButton.style.display = 'inline-block';
  formSection.style.display = 'none';

  function handleQrScanSuccess(qrCodeMessage) {
    try {
      const data = JSON.parse(qrCodeMessage);

      // Fill input fields
      ['fullName', 'dob', 'passport', 'email', 'nationality'].forEach(field => {
        if (data[field]) {
          form[field].value = data[field];
          form[field].readOnly = true;
        }
      });

      // Handle select (gender)
      if (data.gender && form.gender) {
        form.gender.value = data.gender;
        form.gender.disabled = true;
      }

      html5Qrcode.stop().then(() => {
        qrReader.innerHTML = '';
        scannerButton.textContent = 'Scan Passport';
        scanning = false;
        formSection.style.display = 'block';
      });
    } catch (e) {
      alert("Invalid QR format. Please fill the form manually.");
      html5Qrcode.stop();
      qrReader.innerHTML = '';
      formSection.style.display = 'block';
      scannerButton.textContent = 'Scan Passport';
      scanning = false;
    }
  }

  function handleQrScanError(error) {
    console.warn(`QR Scan Error: ${error}`);
  }

  scannerButton.addEventListener('click', () => {
    if (!scanning) {
      html5Qrcode = new Html5Qrcode("qr-reader");
      Html5Qrcode.getCameras()
        .then(cameras => {
          if (cameras?.length) {
            html5Qrcode.start(
              cameras[0].id,
              { fps: 10, qrbox: 250 },
              handleQrScanSuccess,
              handleQrScanError
            );
            scanning = true;
            scannerButton.textContent = 'Stop Scanning';
          } else {
            alert("No camera found on this device.");
          }
        })
        .catch(err => {
          console.error("Camera error:", err);
          alert("Unable to access camera.");
          formSection.style.display = 'block';
          scannerButton.textContent = 'Scan Passport';
        });
    } else {
      html5Qrcode.stop()
        .then(() => {
          qrReader.innerHTML = '';
          scanning = false;
          scannerButton.textContent = 'Scan Passport';
        })
        .catch(err => {
          console.error("Failed to stop scanner:", err);
        });
    }
  });
});




// document.addEventListener('DOMContentLoaded', () => {
//   const scannerButton = document.getElementById('startScanner');
//   const qrReader = document.getElementById('qr-reader');
//   const form = document.getElementById('registrationForm');
//   const formSection = document.getElementById('formSection');

//   let html5Qrcode;
//   let scanning = false;

//   // Detect small screens (mobile)
//   const isMobileScreen = window.innerWidth <= 768;

//   if (!isMobileScreen) {
//     // Desktop: hide scanner, show form only
//     scannerButton.style.display = 'none';
//     qrReader.style.display = 'none';
//     formSection.style.display = 'block';
//     return;
//   }

//   // Mobile screen behavior
//   scannerButton.style.display = 'inline-block';
//   formSection.style.display = 'none';

//   // Extracted handler for QR scan success
//   function handleQrScanSuccess(qrCodeMessage, html5Qrcode, form, qrReader, scannerButton, formSection) {
//     try {
//       const data = JSON.parse(qrCodeMessage);
//       form.fullName.value = data.fullName;
//       form.dob.value = data.dob;
//       form.passport.value = data.passport;
//       form.email.value = data.email;
//       ['fullName', 'dob', 'passport', 'email'].forEach(field => {
//         form[field].readOnly = true;
//       });
//       html5Qrcode.stop().then(() => {
//         qrReader.innerHTML = '';
//         scannerButton.textContent = 'Scan Passport';
//         scanning = false;
//         formSection.style.display = 'block';
//       });
//     } catch (e) {
//       alert("Invalid QR format. Please fill the form manually.");
//       html5Qrcode.stop();
//       qrReader.innerHTML = '';
//       formSection.style.display = 'block';
//       scanning = false;
//     }
//   }
  
//   // Extracted handler for QR scan error
//   function handleQrScanError(error) {
//     console.warn(`QR Scan Error: ${error}`);
//   }
  
//   scannerButton.addEventListener('click', () => {
//     if (!scanning) {
//       html5Qrcode = new Html5Qrcode("qr-reader");
//       Html5Qrcode.getCameras().then(cameras => {
//         if (cameras?.length) {
//           const qrSuccess = qrCodeMessage => handleQrScanSuccess(qrCodeMessage, html5Qrcode, form, qrReader, scannerButton, formSection);
//           html5Qrcode.start(
//             cameras[0].id,
//             { fps: 10, qrbox: 250 },
//             qrSuccess,
//             handleQrScanError
//           );
//           scanning = true;
//           scannerButton.textContent = 'Stop Scanning';
//         }
//       }).catch(err => {
//         console.error(err);
//         formSection.style.display = 'block';
//       });
//     } else {
//       html5Qrcode.stop().then(() => {
//         qrReader.innerHTML = '';
//         scanning = false;
//         scannerButton.textContent = 'Scan Passport';
//       });
//     }
//   });
// });
