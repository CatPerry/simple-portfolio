  let sections = document.querySelectorAll("section");
  let firstSection = sections[0];
  let secondSection = sections[1];
  let thirdSection = sections[2];
  let fourthSection = sections[3];

  window.addEventListener("scroll", event => {
    if (window.pageYOffset > 0) {
      firstSection.classList.add("fadeIn");
    }
    if (window.pageYOffset > 1800) {
      secondSection.classList.add("fadeIn");
    }
    if (window.pageYOffset > 2800) {
      thirdSection.classList.add("fadeIn");
    }
    if (window.pageYOffset > 3800) {
      fourthSection.classList.add("fadeIn");
    }
  });
