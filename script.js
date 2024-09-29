// Select all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Add event listener to each gallery item
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Show the lightbox and set the image source
    lightbox.style.display = 'flex';
    lightboxImg.src = item.src;
  });
});

// Add event listener to the close button
closeBtn.addEventListener('click', () => {
  // Hide the lightbox
  lightbox.style.display = 'none';
});

// Add event listener to the lightbox
lightbox.addEventListener('click', e => {
  // If the click is not on the image, hide the lightbox
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});
// Add event listeners to each gallery item
document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', (e) => {
    // Get the clicked image's src and alt attributes
    const src = e.target.src;
    const alt = e.target.alt;

    // Show the lightbox and set the lightbox image
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-img').alt = alt;
  });
});

// Add an event listener to the close button
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});