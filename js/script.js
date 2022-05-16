var first = document.getElementById("title-1");
var second = document.getElementById("title-2");
var thrid = document.getElementById("title-3");


first.forEach(accordianTitle1 => {
  accordianTitle1.addEventListener("click", () => {
    accordianTitle1.classList.toggle("is-open")
  })
})