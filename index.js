const headeraTag = document.querySelectorAll("header a");
for (let i = 0; i < headeraTag.length; i++) {
  headeraTag[i].onclick = function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  };
}

let slider = document.querySelector("#slider");
let slides = slider.querySelector(".slides");
let slide = slides.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(function () {
  let from = -(1024 * currentSlide);
  let to = from - 1024;
  slides.animate(
    [
      {
        marginLeft: from + "px",
      },
      {
        marginLeft: to + "px",
      },
    ],
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
  currentSlide++;
  if (currentSlide === slide.length - 1) {
    currentSlide++;
  }
}, 3000);

let listaTag = document.querySelectorAll(".tabs-list li a");
let listliTag = document.querySelectorAll(".tabs-list li");
for (let i = 0; i < listaTag.length; i++) {
  listaTag[i].onclick = function (e) {
    e.preventDefault();
  };
}

for (let i = 0; i < listliTag.length; i++) {
  listliTag[i].onclick = function () {
    let href = this.querySelector("a").getAttribute("href");
    document.querySelectorAll(".tabs-list li").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelectorAll(".tabs div.tab").forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");
    document.querySelector(href).classList.add("active");
  };
}

let rightBtn = document.querySelector(".right-arrow");
rightBtn.onclick = function () {
  let currentImg = document.querySelector("#photo .slide.active");
  let nextImg = currentImg.nextElementSibling;
  if (nextImg === null) {
    nextImg = currentImg.parentElement.firstElementChild;
  }
  currentImg.animate(
    [
      {
        opacity: [1, 0],
      },
    ],
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
  currentImg.classList.remove("active");
  nextImg.animate(
    [
      {
        opacity: [0, 1],
      },
    ],
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
  nextImg.classList.add("active");
};

let leftBtn = document.querySelector(".left-arrow");
leftBtn.onclick = function () {
  let currentImg = document.querySelector("#photo .slide.active");
  let previousImg = currentImg.previousElementSibling;
  if (previousImg === null) {
    previousImg = currentImg.parentElement.lastElementChild;
  }
  currentImg.animate(
    [
      {
        opacity: [1, 0],
      },
    ],
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
  currentImg.classList.remove("active");
  previousImg.animate(
    [
      {
        opacity: [0, 1],
      },
    ],
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
  previousImg.classList.add("active");
};
