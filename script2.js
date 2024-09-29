// Select all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Add event listener to each gallery item
galleryItems.forEach(item => {
  item.addEventListener('click', (e) => {
    // Get the clicked image's src and alt attributes
    const src = e.target.src;
    const alt = e.target.alt;

    // Show the lightbox and set the lightbox image
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
    lightboxImg.alt = alt;
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
const gallery = document.querySelector('.gallery');
const imageUploadForm = document.querySelector('#image-upload-form');
const imageUploadInput = document.querySelector('#image-upload');
const uploadButton = document.querySelector('#upload-button');

imageUploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const file = imageUploadInput.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        const imageData = reader.result;
        const newImage = document.createElement('div');
        newImage.className = 'gallery-item';
        newImage.innerHTML = `<img src="${imageData}" alt="" id="imageText"> `;
        gallery.appendChild(newImage);
        // trying if it works
        newImage.querySelector('img').style.width = '100%';
        newImage.querySelector('img').style.height = '100%';
        newImage.querySelector('img').style.objectFit = 'fill';

        newImage.addEventListener('click', (e) => {
            // Get the clicked image's src and alt attributes
            const src = e.target.src;
            const alt = e.target.alt;

            // Show the lightbox and set the lightbox image
            lightbox.style.display = 'flex';
            lightboxImg.src = src;
            lightboxImg.alt = alt;
        });

    };
    reader.readAsDataURL(file);
});

// add event listener to gallery items to open lightbox
gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-item')) {
        const lightbox = document.querySelector('.lightbox');
        const lightboxContent = document.querySelector('.lightbox-content');
        const lightboxImg = document.querySelector('.lightbox-img');
        lightboxImg.src = e.target.querySelector('img').src;
        lightbox.style.display = 'flex';
    }
});

// add event listener to close button to close lightbox
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.lightbox').style.display = 'none';
});
