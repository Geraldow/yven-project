// Slider Cards Section Ventajas

let swiperCards = new Swiper('.card-content', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
  
  });


// Función Ventajas

document.addEventListener("DOMContentLoaded", function(event) {
  // Mostrar la pestaña "Todos los eventos" por defecto
  openTab('todos', {
    currentTarget: document.querySelector('.tablink')
  });
});

function openTab(tabName, event) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  if (event) {
    event.currentTarget.classList.add("active");
    var underline = document.getElementById("underline");
    underline.style.width = event.currentTarget.offsetWidth + "px";
    underline.style.left = event.currentTarget.offsetLeft + "px";
  }
}