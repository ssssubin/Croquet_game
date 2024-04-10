const headeraTag = document.querySelectorAll("header a");
for (let i = 0; i < headeraTag.length; i++) {
  headeraTag[i].onclick = function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  };
}
