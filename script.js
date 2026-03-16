document.addEventListener('DOMContentLoaded', () => {
    // add hamburger button and menu links
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
   // add click event to toggle the menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // NASA APOD elements
    const apodImage = document.querySelector('#apod-image');
    const apodTitle = document.querySelector('#apod-title');
    const apodExplanation = document.querySelector('#apod-explanation');
    const apodDate = document.querySelector('#apod-date');
    const apodCredit = document.querySelector('#apod-credit');

    const API_KEY = 'DEMO_KEY';
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

    fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch NASA APOD data.');
            }
            return response.json();
        })
        .then((data) => {
            apodTitle.textContent = data.title;
            apodExplanation.textContent = data.explanation;
            apodDate.innerHTML = `<strong>Date:</strong> ${data.date}`;
            apodCredit.innerHTML = `<strong>Credit:</strong> ${data.copyright || 'NASA / APOD'}`;

            if (data.media_type === 'image') {
                apodImage.src = data.url;
                apodImage.alt = data.title;
            } else {
                apodImage.alt = 'Today’s APOD is not an image.';
            }
        })
        .catch((error) => {
            apodTitle.textContent = 'Unable to load today’s image';
            apodExplanation.textContent = error.message;
            apodDate.innerHTML = '<strong>Date:</strong> Not available';
            apodCredit.innerHTML = '<strong>Credit:</strong> Not available';
        });
});