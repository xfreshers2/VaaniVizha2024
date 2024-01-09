// script.js

// Function to generate QR code for a given URL
function generateQRCode(url) {
    var qrCodeDiv = document.getElementById('qrcode');
    
    // Clear any previous QR codes
    qrCodeDiv.innerHTML = '';
    
    // Generate QR code
    var qr = new QRCode(qrCodeDiv, {
      text: url,
      width: 200,
      height: 200
    });
  }
  
  // Call the generateQRCode function with the URL you want to encode
  generateQRCode('http://bit.ly/VaaniVizha2024');
  
  function openCard() {
    var cardContent = document.getElementById('card-content');
    var cardImg = document.getElementById('card-img');
  
    cardContent.style.display = 'block';
    // Perform animation using CSS classes, transitions, or libraries like GSAP
    // For example, you can use GSAP for animations:
    gsap.fromTo(cardContent, { scale: 0 }, { scale: 1, duration: 1 });
    // You'll need to include GSAP library in your project for this
  
    // Optionally, you can hide the image or do any other animations
    cardImg.style.display = 'none';
  }
  