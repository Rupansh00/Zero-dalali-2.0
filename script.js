const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  box.style.setProperty("--x", `${x}px`);
  box.style.setProperty("--y", `${y}px`);
  box.classList.add("hover-effect");
});

box.addEventListener("mouseleave", () => {
  box.classList.remove("hover-effect");
});

// Hover Light Effect For Navbar
let navbarCursorHoverElements = document.querySelectorAll(".hover-effect-navbar");

navbarCursorHoverElements.forEach(navbarCursorHover => {
  navbarCursorHover.addEventListener("mousemove", function(e){
    let x2 = e.pageX - navbarCursorHover.offsetLeft;
    let y2 = e.pageY - navbarCursorHover.offsetTop;

    navbarCursorHover.style.setProperty("--x2", `${x2}px`);
    navbarCursorHover.style.setProperty("--y2", `${y2}px`);
  });
});


// Hover Light Effect For Navbar
let courseCursorHoverElements = document.querySelectorAll(".hover-effect-course");

courseCursorHoverElements.forEach(courseCursorHover => {
  courseCursorHover.addEventListener("mousemove", function(e){
    let x3 = e.pageX - courseCursorHover.offsetLeft;
    let y3 = e.pageY - courseCursorHover.offsetTop;

    courseCursorHover.style.setProperty("--x3", `${x3}px`);
    courseCursorHover.style.setProperty("--y3", `${y3}px`);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "/Images/collage-finance-banner-concept.jpg",
    "/Images/beautiful-cryptocurrwncy-concept.jpg",
  ];

  let currentImageIndex = 0;
  const paymentElement = document.querySelector(".payment");

  function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    paymentElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  }

  setInterval(changeBackgroundImage, 3000); // Change image every 3 seconds

  gsap.registerPlugin(ScrollTrigger);

  const animationBox = document.querySelector(".animation-box");

  gsap.to(animationBox, {
    //   position:"relative",
    scale: 1,
    fill: "#0000ff",
    scrollTrigger: {
      trigger: animationBox,
      start: "top 50%",
      end: "bottom 60%",
      scrub: 1,
      // markers: true,
      toggleActions: "play reset reverse none",
      onUpdate: () => {
        animationBox.style.width = proxy.width + "vw";
        animationBox.style.height = proxy.height + "vh";
      },
    },
    duration: 2,
  });

  // const { innerHeight } = window;

  // gsap.from(".animated-heading h1", {
  //     scale: 1, duration: 0.8,
  //     scrollTrigger: {
  //         trigger: ".animated-heading",
  //         pin: true,
  //         start:"top 30%",
  //         end: `+=${innerHeight * 0.1}`,
  //         scrub: 0.5,
  //         markers: true,
  //     }
  // })

  const animationBoxTop = document.querySelector(".animation-box-top");

  gsap.to(animationBoxTop, {
    // transform: "scale(0.6)",
    // transition: "transform 0.3s ease",
    // position:"relative",
    scale: 0.5,
    y: -100,
    //   width:"100vw",
    //   height:"100vh",
    scrollTrigger: {
      trigger: ".image-row",
      start: "top 80%",
      end: "+=30",
      // markers: true,
      scrub: 3,
      toggleActions: "play pause reverse pause",
      onUpdate: () => {
        animationBoxTop.style.width = proxy.width + "vw";
        animationBoxTop.style.height = proxy.height + "vh";
      },
    },
    duration: 1.2,
    //   ease:"in",
  });
});


const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});