// document.addEventListener('DOMContentLoaded', () => {
//   const scannerButton = document.getElementById('startScanner');
//   const qrReader = document.getElementById('qr-reader');
//   const form = document.getElementById('registrationForm');
//   const formSection = document.getElementById('formSection');

//   let html5Qrcode;
//   let scanning = false;

//   // Detect mobile device
//   const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

//   if (!isMobile) {
//     // Desktop: hide scanner button and QR reader, show form only
//     scannerButton.style.display = 'none';
//     qrReader.style.display = 'none';
//     formSection.style.display = 'block';
//     return;
//   }

//   // Mobile behavior
//   scannerButton.style.display = 'inline-block';
//   formSection.style.display = 'none';

//   scannerButton.addEventListener('click', () => {
//     if (!scanning) {
//       html5Qrcode = new Html5Qrcode("qr-reader");
//       Html5Qrcode.getCameras().then(cameras => {
//         if (cameras && cameras.length) {
//           html5Qrcode.start(
//             cameras[0].id,
//             { fps: 10, qrbox: 250 },
//             qrCodeMessage => {
//               try {
//                 const data = JSON.parse(qrCodeMessage);
//                 form.fullName.value = data.fullName;
//                 form.dob.value = data.dob;
//                 form.passport.value = data.passport;
//                 form.email.value = data.email;
//                 ['fullName', 'dob', 'passport', 'email'].forEach(field => {
//                   form[field].readOnly = true;
//                 });
//                 html5Qrcode.stop();
//                 qrReader.innerHTML = '';
//                 formSection.style.display = 'block';
//                 scanning = false;
//               } catch (e) {
//                 alert("Invalid QR format. Fill the form manually.");
//                 html5Qrcode.stop();
//                 qrReader.innerHTML = '';
//                 formSection.style.display = 'block';
//                 scanning = false;
//               }
//             },
//             error => {
//               console.warn(`QR Scan Error: ${error}`);
//             }
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



document.addEventListener('DOMContentLoaded', () => {
  const scannerButton = document.getElementById('startScanner');
  const qrReader = document.getElementById('qr-reader');
  const form = document.getElementById('registrationForm');
  const formSection = document.getElementById('formSection');

  let html5Qrcode;
  let scanning = false;

  // Detect small screens (mobile)
  const isMobileScreen = window.innerWidth <= 768;

  if (!isMobileScreen) {
    // Desktop: hide scanner, show form only
    scannerButton.style.display = 'none';
    qrReader.style.display = 'none';
    formSection.style.display = 'block';
    return;
  }

  // Mobile screen behavior
  scannerButton.style.display = 'inline-block';
  formSection.style.display = 'none';

  scannerButton.addEventListener('click', () => {
    if (!scanning) {
      html5Qrcode = new Html5Qrcode("qr-reader");
      Html5Qrcode.getCameras().then(cameras => {
        if (cameras && cameras.length) {
          html5Qrcode.start(
            cameras[0].id,
            { fps: 10, qrbox: 250 },
            qrCodeMessage => {
              try {
                const data = JSON.parse(qrCodeMessage);
                form.fullName.value = data.fullName;
                form.dob.value = data.dob;
                form.passport.value = data.passport;
                form.email.value = data.email;
                ['fullName', 'dob', 'passport', 'email'].forEach(field => {
                  form[field].readOnly = true;
                });
                html5Qrcode.stop();
                qrReader.innerHTML = '';
                formSection.style.display = 'block';
                scanning = false;
              } catch (e) {
                alert("Invalid QR format. Please fill the form manually.");
                html5Qrcode.stop();
                qrReader.innerHTML = '';
                formSection.style.display = 'block';
                scanning = false;
              }
            },
            error => {
              console.warn(`QR Scan Error: ${error}`);
            }
          );
          scanning = true;
          scannerButton.textContent = 'Stop Scanning';
        }
      }).catch(err => {
        console.error(err);
        formSection.style.display = 'block';
      });
    } else {
      html5Qrcode.stop().then(() => {
        qrReader.innerHTML = '';
        scanning = false;
        scannerButton.textContent = 'Scan Passport';
      });
    }
  });
});
