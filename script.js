/* const price = document.getElementById("price");
const card = document.getElementById("card");

function change(){
    card.addEventListener("mouseover", () => {
       price.style.backgroundColor = 'white';
       price.style.color = 'black';
       price.style.fontWeight = 800;

    })

    setTimeout(change(), 2000);
}
change();


const contactBox = document.getElementById("contact");
contactBox.addEventListener("mouseover", setInterval(() => {
  preventDefault();
  contactBox.style.backgroundColor = "yellow";
}, 1000)
);

*/



const card = document.getElementById('card');

card.addEventListener('mouseover', () => {
  card.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
});

card.addEventListener('mouseout', () => {
  card.style.backgroundColor = '#111111f6';
});

var video = document.querySelector('#how video');
var playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playBtn.style.display = 'none';
  } else {
    video.pause();
    playBtn.style.display = 'block';
  }
});

//video player
var video = document.getElementById('myVideo');
var playPauseBtn = document.getElementById('playPauseBtn');
var volumeRange = document.getElementById('volumeRange');
var progressBar = document.getElementById('progressBar');
var playBtn = document.getElementById('playBtn');

playPauseBtn.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = 'Pause';
  } else {
    video.pause();
    playPauseBtn.innerHTML = 'Play';
  }
});

volumeRange.addEventListener('input', function() {
  video.volume = volumeRange.value;
});

video.addEventListener('timeupdate', function() {
  var progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
});

progressBar.addEventListener('input', function() {
  var seekTime = (progressBar.value / progressBar.max) * video.duration;
  video.currentTime = seekTime;
});

video.addEventListener('ended', function() {
  video.pause();
  playPauseBtn.innerHTML = 'Play';
});

playBtn.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playBtn.style.display = 'none';
  } else {
    video.pause();
    playBtn.style.display = 'block';
  }
});


const observer = new IntersectionObserver(callback);
const elementToObserve = document.getElementById('shop');
observer.observe(elementToObserve);
function callback(entries, observer){
    entrie.forEach((entry) => {
        if(entry.isIntersecting) {
            animateElement(entry.target);
            entry.target.classList.add("appeared");
            observer.unobserve(entry.target);
        }
    });
}

//smooth scrolling to section on header button click
var menuLink = document.getElementById("menuLink");
var aboutUsLink = document.getElementById("aboutUsLink");
var shopLink = document.getElementById("shopLink");
var contactLink = document.getElementById("contactLink");
var faqLink = document.getElementById("faqLink");
var supportLink = document.getElementById("supportLink");

aboutUsLink.addEventListener('click', function(event) {
  event.preventDefault();
  var aboutUsSection = document.getElementById('aboutUs');
  
  if (aboutUsSection) {
    var offsetTop = aboutUsSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});

menuLink.addEventListener('click', function(event) {
  event.preventDefault();
  var menuSection = document.getElementById('menu');
  
  if (menuSection) {
    var offsetTop = menuSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});

shopLink.addEventListener('click', function(event) {
  event.preventDefault();
  var shopSection = document.getElementById('shop');
  
  if (shopSection) {
    var offsetTop = shopSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});

faqLink.addEventListener('click', function(event) {
  event.preventDefault();
  var faqSection = document.getElementById('how');
  
  if (faqSection) {
    var offsetTop = faqSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});

contactLink.addEventListener('click', function(event) {
  event.preventDefault();
  var contactSection = document.getElementById('base');
  
  if (contactSection) {
    var offsetTop = contactSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});

supportLink.addEventListener('click', function(event) {
  event.preventDefault();
  var supporttSection = document.getElementById('base');
  
  if (supporttSection) {
    var offsetTop = supportSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});

faqLink.addEventListener('click', function(event) {
  event.preventDefault();
  var faqSection = document.getElementById('how');
  
  if (faqSection) {
    var offsetTop = faqSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});
