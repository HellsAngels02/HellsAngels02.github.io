const cookieNotification = document.querySelector('.cookie-notification');
const acceptButton = document.querySelector('.accept-cookies');
const rejectButton = document.querySelector('.reject-cookies');

acceptButton.addEventListener('click', () => {
  // Set cookie to accept cookies
  document.cookie = 'cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT;';
  cookieNotification.classList.remove('visible');
});

rejectButton.addEventListener('click', () => {
  // Set cookie to reject cookies
  document.cookie = 'cookies_accepted=false; expires=Fri, 31 Dec 9999 23:59:59 GMT;';
  cookieNotification.classList.remove('visible');
});

// Show the cookie notification after 5 seconds
setTimeout(() => {
  cookieNotification.classList.add('visible');
}, 5000);