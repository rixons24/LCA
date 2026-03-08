"use strict";

// Open & Close Aside Navigation

const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const responsiveNav = document.querySelector(".responsive-nav-container");

openNav.addEventListener("click", function(){
	responsiveNav.classList.add("active");
})

closeNav.addEventListener("click", function(){
	responsiveNav.classList.remove("active");
})



let previews = {};
document.querySelectorAll(".entry-thumbs > div").forEach(
	function(element) {
		previews[element.getAttribute('data-entry-thumb')] = element;
	}
)
document.querySelectorAll('.entries-list div h1').forEach(
	function(element) {
		element.addEventListener('mouseover', function(e) {
			let selectedIndex = element.getAttribute("data-entry-link");

			document.querySelector('.entries-list .active').classList.remove("active");
			element.childNodes[0].classList.add("active");

			document.querySelector('.entry-thumbs .active').classList.remove("active");
			previews[selectedIndex].classList.add("active");
		})
	}
)

// Lightbox functionality
var modal = document.getElementById('lightbox-modal');
var modalImg = document.getElementById('lightbox-img');
var closeBtn = document.getElementsByClassName('lightbox-close')[0];
var prevBtn = document.getElementsByClassName('lightbox-prev')[0];
var nextBtn = document.getElementsByClassName('lightbox-next')[0];

// Get all image sources
var images = document.querySelectorAll('.featured-works-item img');
var imageSources = [];
for (var i = 0; i < images.length; i++) {
  imageSources.push(images[i].src);
}
var currentIndex = 0;

// Get all featured-works items and attach to their parent a
var items = document.querySelectorAll('.featured-works-item');

for (var i = 0; i < items.length; i++) {
  items[i].parentElement.onclick = function(e){
    e.preventDefault();
    currentIndex = Array.from(items).indexOf(this.querySelector('.featured-works-item'));
    modal.style.display = 'block';
    modalImg.src = imageSources[currentIndex];
  }
}

// Close the modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Previous image
prevBtn.onclick = function() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageSources.length - 1;
  modalImg.src = imageSources[currentIndex];
}

// Next image
nextBtn.onclick = function() {
  currentIndex = (currentIndex < imageSources.length - 1) ? currentIndex + 1 : 0;
  modalImg.src = imageSources[currentIndex];
}

// Close when clicking outside
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
