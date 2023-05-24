let slideIndex = 1;
showSlides(slideIndex);

function MoveSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length)
   {
    slideIndex = 1
    }
  if (n < 1)
   {
    slideIndex = slides.length
    }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function choosenColor(id)
{
    let color = document.getElementById(id).value;
    let slides = document.getElementsByClassName("slide");
    let header = document.getElementById("colorChange");
    header.style.display = 'block';
    header.innerText += color;
    slides[slideIndex-1].style.background = color;
}

