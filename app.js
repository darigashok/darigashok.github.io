// Get a reference to the video element
const video = document.getElementById('myVideo');

// Add an event listener to wait for the video to be loaded
video.addEventListener('loadedmetadata', function() {
  // Once the video is loaded, play it
  video.play();
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
    var educationTab = document.getElementById('education');
    var experienceTab = document.getElementById('experience');
    var eduContent = document.getElementById('edu_content');
    var expContent = document.getElementById('exp_content');

    if (tabName === 'education') {
        educationTab.classList.add('active-link');
        experienceTab.classList.remove('active-link');
        eduContent.classList.add('active-tab');
        expContent.classList.remove('active-tab');
    } else if (tabName === 'experience') {
        educationTab.classList.remove('active-link');
        experienceTab.classList.add('active-link');
        eduContent.classList.remove('active-tab');
        expContent.classList.add('active-tab');
    }
}

var sidemeu = document.getElementById("sidemenu");
var fullname = document.getElementById("logo");
var background_video = document.getElementById("myVideo");
const nextSection = document.querySelector('#about');
const background_image = document.querySelector('.background-image');

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}

const header = document.querySelector('.header-nav');
document.addEventListener('scroll', () => {
var scroll_position = window.scrollY;
if (scroll_position > 100) { /*change background color of nav bar/ header when scroll_position goes below first opened website frame*/
    header.style.backgroundColor = '#7371CB';
    // header.style.backgroundColor = '#262626';
    fullname.style.color = '#EBDAD7';
    background_video.style.opacity = "0";
    background_video.currentTime = 5;
    background_video.pause();
    background_image.style.opacity = "1";
} else {
    header.style.backgroundColor = '#7371CB'; /*header is transparent (same as background image) at first when the website is opened*/
    // header.style.backgroundColor = 'transparent'; 
    fullname.style.color = "#EBDAD7";
    background_video.style.opacity = "1";
    background_video.currentTime = 0;
    background_video.play();
}
if (window.pageYOffset > background_video.clientHeight) {
    background_video.style.opacity = "0";
    // nextSection.scrollIntoView({ behavior: 'smooth' });
    background_image.style.opacity = "1";
}
}); 


// Get a reference to the header text element
// const fadeText = document.querySelectorAll('.header-text p');
const headerText = document.querySelector('.header-text');
headerText.style.opacity = "0";
// Define a function that adds the text to the page
function showHeaderText() {
background_video.style.zIndex = "-1";
headerText.style.zIndex = "10";
// for (let i = 0; i < fadeText.length; i++) {
//       fadeText[i].classList.add('fade-in');
// }
headerText.style.opacity = "1";
}
// Call the showHeaderText function after a delay of 6 seconds (6000 milliseconds)
setTimeout(showHeaderText, 4000);


function showExtraProjects() {
    const workItems = document.querySelectorAll('.extra-project');
    const seeMoreButton = document.getElementById('seemore');

    seeMoreButton.style.display = 'none';
    workItems.forEach(workItem => {
    console.log('here');
      const layer = workItem.querySelector('.layer');
      workItem.style.display = 'flex';
      layer.style.width = '100%';
    });
  }
  
const scriptURL = 'https://script.google.com/macros/s/AKfycbywsKXq-38C4KP5ooMoWWiVEWC-Tctq1Nn4rjDZCRAvlggTiMTaK6tsSw9g_9RUFzM/exec' // add your own app script link here
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// Get references to the images and the original source
var images = [{src: 'images/user1.jpeg', timeout: 5000}, {src:'images/user.jpg',timeout:5000}, {src:'images/user2.jpeg',timeout:5000}];
var img = document.getElementById('clickable');
var origSrc = img.src;

var index = 0;
var timeout = setTimeout(changeImage, images[index].timeout);
// Add a click event listener to the image
img.addEventListener('click', function(){
    if (isSectionVisible()) {
        clearTimeout(timeout);
        index = (index + 1) % images.length; // Increment the index and wrap around
        img.src = images[index].src;
        timeout = setTimeout(changeImage, images[index].timeout); // Set the next timeout
    }
});

// Function to change the image and set the next timeout
function changeImage() {
  if (isSectionVisible()) {
    index = (index + 1) % images.length; // Increment the index and wrap around
    img.src = images[index].src;
  }
  timeout = setTimeout(changeImage, images[index].timeout); // Set the next timeout
}

// Function to check if the section is visible on the screen
function isSectionVisible() {
  var section = document.getElementById('skills-section');
  var rect = section.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < windowHeight && rect.bottom >= 0;
}


// Get a reference to the section
const aboutSection = document.querySelector('#about-section');

// Check if the section is visible on the screen
function isSectionVisible() {
  const sectionRect = aboutSection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return !(sectionRect.bottom < 0 || sectionRect.top - windowHeight >= 0);
}

// Show the list items one by one if the section is visible
function showListItems() {
  const listItems = document.querySelectorAll('.about-col-2 li');
  let delay = 0;
  for (let i = 0; i < listItems.length; i++) {
    setTimeout(() => {
      listItems[i].classList.add('show');
    }, delay);
    delay += 500;
  }
}

// Check if the section is visible when the page loads
if (isSectionVisible()) {
  showListItems();
} else {
  // Show the list items if the section becomes visible later
  window.addEventListener('scroll', () => {
    if (isSectionVisible()) {
      showListItems();
      // Remove the event listener once the animation has run
      window.removeEventListener('scroll', showListItems);
    }
  });
}



