
const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_countrs = document.querySelectorAll(".countrs span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", () => {
  activeLink();
  skillsCountrs(first_skill); // Pass the element to check if it has reached the viewport
});

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});
sr.reveal('.showcase-info', { origin: "top",delay: 600 });
sr.reveal('.shwocase-image', { origin: "bottom", delay: 700 });
sr.reveal('.about-grid',{ origin: "left",delay: 500 });
sr.reveal('.about-info',{  origin: "bottom",delay: 400 });
sr.reveal('.box-heading');
sr.reveal('.skills-wrap');
sr.reveal('.service-info',{  origin:"left",delay: 400 });
sr.reveal('.service-grid',{  origin:"top",delay: 500 });
sr.reveal('.portfolio-header',{  origin:"left",delay: 400 });
sr.reveal('.filter-btns',{  origin:"top",delay: 500 });
sr.reveal('.portfolio-gallery',{delay: 600 });
sr.reveal('.section-background',{delay: 600 });
sr.reveal('.testimoials-title',{  origin:"top",delay: 500 });
sr.reveal('.swiper',{  origin:"left",delay: 400 });
sr.reveal('.contact-info',{  origin:"top",delay: 500 });
sr.reveal('.contact-from',{  origin:"bottom",delay: 400 });
sr.reveal('.sub-box');
sr.reveal('.sub-info',{  origin:"top",delay: 500 });
sr.reveal('.contact-from',{  origin:"bottom",delay: 400 });



function hasReached(el) {
  let toPosition = el.getBoundingClientRect().top;
  return window.innerHeight >= toPosition + el.offsetHeight;
}



function skillsCountrs(el) {
  if (!hasReached(el)) return;

  sk_countrs.forEach((counter, i) => {
    let target = +counter.dataset.target;
    let strokeValue = 427 - 427 * (target / 100); // Assuming 47 is the maximum value for stroke-dashoffset
    console.log(strokeValue);
    progress_bars[i].style.setProperty("--target", strokeValue + "px"); // Add "px" unit
  });

  progress_bars.forEach((p) => {
    p.style.animation = "progress 2s ease-in-out forwards"; // Apply animation using style property
  });
}
//-------------------------------------------------


window.addEventListener("DOMContentLoaded", () => {
  const milestones = document.querySelectorAll(".milestones .number span");

  // Intersection Observer options
  const options = {
    threshold: 0.5 // Trigger when 50% of the element is visible
  };

  // Callback function for Intersection Observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.dataset.target;
        const span = entry.target;
        let currentCount = +span.innerText;
        const increment = Math.ceil(target / 50); // Increase the increment for quicker animation

        // Set an interval to update the count
        const intervalId = setInterval(() => {
          // Increase the current count
          currentCount += increment;

          // Check if the current count exceeds the target
          if (currentCount >= target) {
            clearInterval(intervalId); // Stop the interval
            currentCount = target; // Ensure the final count matches the target exactly
          }

          // Update the span with the new count
          span.innerText = currentCount;

        }, 20); // Decrease the update interval for quicker animation

        // Unobserve the target once the animation is completed
        observer.unobserve(entry.target);
      }
    });
  };

  // Create a new Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, options);

  // Observe each milestone element
  milestones.forEach(milestone => {
    observer.observe(milestone);
  });
});


window.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll('.skill .counter span');

  const options = {
    threshold: 0.5
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.dataset.target;
        const span = entry.target;
        let currentCount = 0;
        const increment = Math.ceil(target / 50); // Increase the increment for quicker animation

        const intervalId = setInterval(() => {
          // Increase the current count
          currentCount += increment;

          // Check if the current count exceeds the target
          if (currentCount >= target) {
            clearInterval(intervalId); // Stop the interval
            currentCount = target; // Ensure the final count matches the target exactly
          }

          // Update the span with the new count
          span.innerText = currentCount;

        }, 25); // Decrease the update interval for quicker animation

        // Unobserve the target once the animation is completed
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  skills.forEach(skill => {
    observer.observe(skill);
  });
});


// let mixer = mixitup('.portfolio-gallery',{
//   selectors: {
//       target: '.ptr-card'
//   },
//   animation: {
//       duration: 500,
//   }
// });
let mixer = mixitup('.portfolio-gallery', {
  selectors: {
    target: '.prt-card'
  },
  animation: {
    duration: 500
  }
});

const prt_section = document.querySelector('.portfolio');
const zoom_icons = document.querySelectorAll('.zoom-icon');
const modal_overlay = document.querySelector('.model-overlay');
const images = document.querySelectorAll('.images img');
const prev_btn = document.querySelector('.prev-btn');
const next_btn = document.querySelector('.next-btn');

let currentIndex = 0;

zoom_icons.forEach((icn , i)=> icn.addEventListener('click',
  () => {
    prt_section.classList.add('open');
    document.body.classList.add('stopScrolling');
    currentIndex = i;
    changeImage(currentIndex);
  })

);

modal_overlay.addEventListener('click',() => {
  prt_section.classList.remove(('open'));
  document.body.classList.add('stopScrolling');
}
);

prev_btn.addEventListener('click',() => {
  if (currentIndex === 0) {
currentIndex = 5
  }
  else(
    currentIndex--
  )

changeImage(currentIndex);

});

next_btn.addEventListener('click',() => {
  if (currentIndex === 5) {
currentIndex = 0
  }
  else(
    currentIndex++
  )

changeImage(currentIndex);

});

function changeImage(index){
 images.forEach((img) => img.classList.remove('showimage'));
 images[index].classList.add('showimage');
}

const swiper = new Swiper('.swiper', {
  loop: true,
  speed:500,
  autoplay:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

});

const links =document.querySelectorAll('.nav-link');


function activeLink(){
  let sections = document.querySelectorAll('section[id]');
  let passedSections = Array.from(sections).map((sct,i)=> {
    return {
      y:sct.getBoundingClientRect().top - header.offsetHeight,
      id: i,
    };
  }).filter(sct=> sct.y <=0);
if(passedSections.length > 0){
  let currentSectionID = passedSections.at(-1).id;
  links.forEach((l) => l.classList.remove('active'));
  links[currentSectionID].classList.add('active');
}
}
activeLink();



const toggle_btn = document.querySelector('.toggle-btn');
let firstTheme = localStorage.getItem('dark');
changeTheme(+firstTheme);

function changeTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark');
        toggle_btn.classList.replace("uil-sun","uil-moon");
        localStorage.setItem("dark",1);
    } else {
        document.body.classList.remove('dark');
        toggle_btn.classList.replace("uil-moon","uil-sun");
        localStorage.setItem("dark",0);
    }
}

toggle_btn.addEventListener('click', () => {
    changeTheme(!document.body.classList.contains('dark'));
});

const hamburger=document.querySelector('.hamburger');
hamburger.addEventListener('click', ()=>{
document.body.classList.toggle('open');
document.body.classList.toggle('stopScrolling');
});


links.forEach(link => link.addEventListener('click', ()=>{
  document.body.classList.remove('open');
  document.body.classList.remove('stopScrolling');
}));

