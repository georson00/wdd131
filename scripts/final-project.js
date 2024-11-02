

// document.addEventListener("DOMContentLoaded", () => {
//   const contentArea = document.getElementById("content-area");

//   // Object to store dynamic content for each section
//   const content = {
//       home: `
//           <div id="home-page-container">
//           <h2>Welcome to Haiti's Heritage</h2>
//           <img src="images/banner-large.webp" alt="A ship in the sea of Haiti" class="home-image">
//           <p>Welcome to Haiti's Heritage, a journey into the vibrant soul of Haiti. Here, we invite you to explore the rich history, captivating landscapes, and dynamic culture that define this beautiful island. From our lush mountains and pristine beaches to the rhythm of our art and traditions, Haiti is a land of warmth, resilience, and endless discovery. Whether you're drawn by our history, fascinated by our traditions, or seeking a memorable travel experience, let this site be your guide to everything that makes Haiti unique. Embark on an adventure to uncover the hidden gems and stories of Haiti—your journey starts here!</p>
//           <img src="images/second-image.webp" alt="A little fishing boat" class="home-image">
//           </div>
           
//       `,
//       explore: `
//           <h2>Explore Haiti</h2>
//           <div class="image-gallery">
//               <img src="images/ocean.webp" alt="A man on a fishing boat">
//               <p>Discover the breathtaking natural scenery that Haiti has to offer. From lush green mountains to deep valleys, the country’s landscapes are a sight to behold, showcasing the untouched beauty and rugged charm of the Caribbean.</p>
//               <img src="images/bassin-bleu.webp" alt="Haitian water fall">
//               <p>Haiti’s coastlines are famous for their pristine beaches with crystal-clear waters and white sands. This image captures the serene atmosphere where visitors can relax, swim, and immerse themselves in the Caribbean’s tranquil vibes.</p>
//               <img src="images/bassin-zim.webp" alt="A waterfall in the south of Haiti">
//               <p>The majestic mountains of Haiti provide spectacular views and are a testament to the island’s unique geography. Hiking through these landscapes reveals panoramic vistas and connects visitors with nature's tranquility.</p>
//           </div>
//       `,
//       culture: `
//           <h2>Haitian Culture</h2>
//           <div class="image-gallery">
//               <img src="images/art.webp" alt="A hatian artwork gallery">
//               <p>Art in Haiti is a vibrant expression of its people’s spirit and stories. This image showcases local artwork that uses bold colors, intricate details, and themes of resilience and beauty, portraying the life and history of Haiti.</p>
//               <img src="images/dance.webp" alt="A traditional Haitian dancer">
//               <p>Dance is deeply rooted in Haitian culture, blending African, French, and indigenous influences. This image highlights the joy, rhythm, and passion in traditional dances that celebrate life, unity, and heritage.</p>
//               <img src="images/carnivals.webp" alt="Carnivals in Haiti">
//               <p>Festivals are an essential part of Haitian life, filled with music, dance, and colorful costumes. This photo captures the energy and pride of these gatherings, where communities come together to honor their traditions and enjoy the spirit of festivity.</p>
//           </div>
//       `,
//       history: `
//           <h2>Haitian History</h2>
//           <div class="image-gallery">
//               <img src="images/citadel.webp" alt="The Citadel of Haiti">
//               <p>Haiti is home to remarkable historical sites that reflect its long journey toward freedom. This image features a landmark that stands as a proud reminder of Haiti’s past and its resilience as the first independent Black nation.</p>
//               <img src="images/hatian-revolution.webp" alt="A picture depicting the Haitian Revolution">
//               <p>The Haitian Revolution is a significant chapter in the country’s history. This image of a monument honors those who fought bravely for Haiti’s independence and the legacy that continues to inspire.</p>
//               <img src="images/sansouci.webp" alt="Mountain view in Haiti">
//               <p>Haiti’s monuments are symbols of strength, courage, and hope. This particular monument stands as a tribute to the country’s forefathers and a place where Haitians and visitors alike can pay their respects and reflect on Haiti’s rich heritage.</p>
//           </div>
//       `,
//       contact: `
//           <h2>Contact Us</h2>
//           <div id="contact-page-container">
//           <p>Ready to experience Haiti up close and personal? We’d love to help you embark on a journey through the heart of this vibrant nation! Whether you’re drawn to our historic landmarks, eager to explore our stunning natural landscapes, or excited to immerse yourself in local culture, we’re here to make your experience unforgettable. Fill out the form below to schedule a personalized tour with us. Let us guide you through Haiti’s hidden gems and iconic sites, ensuring a memorable adventure tailored just for you. We look forward to sharing Haiti’s beauty and stories with you—let’s start planning your trip today</p>
//           <img src="images/taptap.webp" alt="A tradition Taptap in Haiti">
//           <form id="contact-form">
//               <label for="name">Name:</label>
//               <input type="text" id="name" name="name" placeholder="Your name" required>
              
//               <label for="email">Email:</label>
//               <input type="email" id="email" name="email" placeholder="Your email" required>
              
//               <button type="submit">Schedule a Tour</button>
//           </form>
//           </div>
//       `
//   };

//   // Function to display the selected content
//   function displayContent(section) {
//       contentArea.innerHTML = content[section];
//   }
//   displayContent("home");
//   // Add event listeners to navigation links
//   document.getElementById("home").addEventListener("click", () => displayContent("home"));
//   document.getElementById("explore").addEventListener("click", () => displayContent("explore"));
//   document.getElementById("culture").addEventListener("click", () => displayContent("culture"));
//   document.getElementById("history").addEventListener("click", () => displayContent("history"));
//   document.getElementById("contact").addEventListener("click", () => displayContent("contact"));
// });


// // Toggle navigation for mobile view
// const menuButton = document.querySelector('#menu-button');
// const navigation = document.querySelector('.navigation');
// menuButton.addEventListener('click', () => {
//     navigation.classList.toggle('open');
//     menuButton.classList.toggle('open');
// });


// //Footer
// const copyrightSymbol = '&copy;';
 
// const currentDate = new Date();
// const year = currentDate.getFullYear();

// const day = currentDate.getDate();
// const month = currentDate.getMonth() + 1
// const fullDate = `${month}/${day}/${year}`;


// document.querySelector('#currentYear').textContent =  year;
// document.querySelector('#copyright').innerHTML = copyrightSymbol;
// document.querySelector('#lastModified').textContent = `Last Modified: ${fullDate}`;



document.addEventListener("DOMContentLoaded", () => {
  const contentArea = document.getElementById("content-area");

  // Object to store dynamic content for each section
  const content = {
      home: `
          <div id="home-page-container">
              <h2>Welcome to Haiti's Heritage</h2>
              <img src="images/banner-large.webp" alt="A ship in the sea of Haiti" class="home-image">
              <p>Welcome to Haiti's Heritage, a journey into the vibrant soul of Haiti. Here, we invite you to explore the rich history, captivating landscapes, and dynamic culture that define this beautiful island. From our lush mountains and pristine beaches to the rhythm of our art and traditions, Haiti is a land of warmth, resilience, and endless discovery. Whether you're drawn by our history, fascinated by our traditions, or seeking a memorable travel experience, let this site be your guide to everything that makes Haiti unique. Embark on an adventure to uncover the hidden gems and stories of Haiti—your journey starts here!</p>
              <img src="images/second-image.webp" alt="A little fishing boat" class="home-image">
          </div>
      `,
      explore: `
          <h2>Explore Haiti</h2>
          <div class="image-gallery">
              <img src="images/ocean.webp" alt="A man on a fishing boat">
              <p>Discover the breathtaking natural scenery that Haiti has to offer. From lush green mountains to deep valleys, the country’s landscapes are a sight to behold, showcasing the untouched beauty and rugged charm of the Caribbean.</p>
              <img src="images/bassin-bleu.webp" alt="Haitian water fall">
              <p>Haiti’s coastlines are famous for their pristine beaches with crystal-clear waters and white sands. This image captures the serene atmosphere where visitors can relax, swim, and immerse themselves in the Caribbean’s tranquil vibes.</p>
              <img src="images/bassin-zim.webp" alt="A waterfall in the south of Haiti">
              <p>The majestic mountains of Haiti provide spectacular views and are a testament to the island’s unique geography. Hiking through these landscapes reveals panoramic vistas and connects visitors with nature's tranquility.</p>
          </div>
      `,
      culture: `
          <h2>Haitian Culture</h2>
          <div class="image-gallery">
              <img src="images/art.webp" alt="A Haitian artwork gallery">
              <p>Art in Haiti is a vibrant expression of its people’s spirit and stories. This image showcases local artwork that uses bold colors, intricate details, and themes of resilience and beauty, portraying the life and history of Haiti.</p>
              <img src="images/dance.webp" alt="A traditional Haitian dancer">
              <p>Dance is deeply rooted in Haitian culture, blending African, French, and indigenous influences. This image highlights the joy, rhythm, and passion in traditional dances that celebrate life, unity, and heritage.</p>
              <img src="images/carnivals.webp" alt="Carnivals in Haiti">
              <p>Festivals are an essential part of Haitian life, filled with music, dance, and colorful costumes. This photo captures the energy and pride of these gatherings, where communities come together to honor their traditions and enjoy the spirit of festivity.</p>
          </div>
      `,
      history: `
          <h2>Haitian History</h2>
          <div class="image-gallery">
              <img src="images/citadel.webp" alt="The Citadel of Haiti">
              <p>Haiti is home to remarkable historical sites that reflect its long journey toward freedom. This image features a landmark that stands as a proud reminder of Haiti’s past and its resilience as the first independent Black nation.</p>
              <img src="images/hatian-revolution.webp" alt="A picture depicting the Haitian Revolution">
              <p>The Haitian Revolution is a significant chapter in the country’s history. This image of a monument honors those who fought bravely for Haiti’s independence and the legacy that continues to inspire.</p>
              <img src="images/sansouci.webp" alt="Mountain view in Haiti">
              <p>Haiti’s monuments are symbols of strength, courage, and hope. This particular monument stands as a tribute to the country’s forefathers and a place where Haitians and visitors alike can pay their respects and reflect on Haiti’s rich heritage.</p>
          </div>
      `,
      contact: `
          <h2>Contact Us</h2>
          <div id="contact-page-container">
              <p>Ready to experience Haiti up close and personal? We’d love to help you embark on a journey through the heart of this vibrant nation! Whether you’re drawn to our historic landmarks, eager to explore our stunning natural landscapes, or excited to immerse yourself in local culture, we’re here to make your experience unforgettable. Fill out the form below to schedule a personalized tour with us. Let us guide you through Haiti’s hidden gems and iconic sites, ensuring a memorable adventure tailored just for you. We look forward to sharing Haiti’s beauty and stories with you—let’s start planning your trip today!</p>
              <img src="images/taptap.webp" alt="A traditional Taptap in Haiti">
              <form id="contact-form">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required>
                  
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required>
                  
                  <button type="submit">Schedule a Tour</button>
              </form>
          </div>
      `,
      thankYou: `
          <div id="thank-you-container">
              <h2>Thank You!</h2>
              <p>We appreciate your interest in exploring Haiti with us. Your tour request has been received, and our team will contact you shortly to confirm the details and answer any questions you may have.</p>
              <p>We look forward to helping you discover the beauty, history, and culture of Haiti. Thank you for choosing us, and get ready for an unforgettable experience!</p>
              <button id="back-to-home">Return to Home</button>
          </div>
      `
  };

  // Function to display the selected content
  function displayContent(section) {
      contentArea.innerHTML = content[section];

      // Add event listener to the "Return to Home" button if on thank-you page
      if (section === 'thankYou') {
          document.getElementById("back-to-home").addEventListener("click", () => displayContent("home"));
      }
  }

  // Display home page by default
  displayContent("home");

  // Add event listeners to navigation links
  document.getElementById("home").addEventListener("click", () => displayContent("home"));
  document.getElementById("explore").addEventListener("click", () => displayContent("explore"));
  document.getElementById("culture").addEventListener("click", () => displayContent("culture"));
  document.getElementById("history").addEventListener("click", () => displayContent("history"));
  document.getElementById("contact").addEventListener("click", () => displayContent("contact"));

  // Form submission handling
  document.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
      displayContent("thankYou"); // Display the thank-you message
  });
});

// Toggle navigation for mobile view
const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuButton.classList.toggle('open');
});

// Footer
const copyrightSymbol = '&copy;';
const currentDate = new Date();
const year = currentDate.getFullYear();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const fullDate = `${month}/${day}/${year}`;

document.querySelector('#currentYear').textContent = year;
document.querySelector('#copyright').innerHTML = copyrightSymbol;
document.querySelector('#lastModified').textContent = `Last Modified: ${fullDate}`;
