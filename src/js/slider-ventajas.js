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
  var defaultTab = document.querySelector('.tablink');
  if (defaultTab) {
    openTab('todos', {
      currentTarget: defaultTab
    });
  } else {
    console.error("Default tablink not found.");
  }
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
  
  var tab = document.getElementById(tabName);
  if (tab) {
    tab.style.display = "block";
  } else {
    console.error("Element with id '" + tabName + "' not found.");
  }
  
  if (event) {
    event.currentTarget.classList.add("active");
    var underline = document.getElementById("underline");
    if (underline) {
      underline.style.width = event.currentTarget.offsetWidth + "px";
      underline.style.left = event.currentTarget.offsetLeft + "px";
    } else {
      console.error("Element with id 'underline' not found.");
    }
  }
}

// Reseñas Usuario Función

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-resenas");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let scrollAmount = 0;

  nextBtn.addEventListener("click", function () {
    scrollAmount += slider.offsetWidth / 1;
    if (scrollAmount > slider.scrollWidth - slider.offsetWidth) {
      scrollAmount = slider.scrollWidth - slider.offsetWidth;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prevBtn.addEventListener("click", function () {
    scrollAmount -= slider.offsetWidth / 1;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });
});

