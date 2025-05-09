

let vd = document.getElementById("vd");
let i4la9e = document.getElementById("i4la9e");
let ffllex = document.getElementById("ffllex");


vd.addEventListener("click", (e) => {
    e.preventDefault(); 
    ffllex.style.display = "block"; 
    body.style.overflow = "hidden"; 
});

i4la9e.addEventListener("click", () => {
    ffllex.style.display = "none"; 
    body.style.overflow = "auto"; 
});



let modi = document.getElementById("modi")
let praesentium = document.getElementById("praesentium")
let pariatur = document.getElementById("pariatur")
let nostrum = document.getElementById("nostrum")
let lusti = document.getElementById("lusti")
let choose= document.getElementById("first")
let ChooseList = [
   
    document.getElementById("second"),
    document.getElementById("third"),
    document.getElementById("fourth"),
    document.getElementById("fifth")
];


function hideAll() {
    ChooseList.forEach(el => el.style.display = "none")
}
 choose.style.display = "flex"

modi.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    choose.style.display = "flex"
});

praesentium.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[0].style.display = "flex"
     choose.style.display = "none"
});

pariatur.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[1].style.display = "flex"
});

nostrum.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[2].style.display = "flex"
});

lusti.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[3].style.display = "flex"
});


//~ menu



const allTabsBtn = document.getElementById('all-tabs')
const startersBtn = document.getElementById('starters')
const saladesBtn = document.getElementById('salades')
const specialtyBtn = document.getElementById('specialty')


const allPlats = document.querySelectorAll('.plats')


allPlats.forEach(plat => {
  plat.style.display = 'flex'; 
})


allTabsBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    plat.style.display = 'flex';
  })
})


startersBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    if (plat.classList.contains('starters-plat')) {
      plat.style.display = 'flex';
    } else {
      plat.style.display = 'none';
    }
  })
})


saladesBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    if (plat.classList.contains('salades')) {
      plat.style.display = 'flex';
    } else {
      plat.style.display = 'none';
    }
  })
})


specialtyBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    if (plat.classList.contains('specialty')) {
      plat.style.display = 'flex';
    } else {
      plat.style.display = 'none';
    }
  })
})


//! reservation

document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const fields = [
      'name',
      'email',
      'phone',
      'date',
      'time',
      'people'
    ];
  
    const isEmpty = fields.some(id => {
      const el = document.getElementById(id);
      return !el.value.trim();
    });
  
    if (isEmpty) {
      alert('Please complete all required fields before booking.');
    } else {
      alert('Table booked successfully!');
    }
  });
  //^ events

  let nextBtns = document.querySelectorAll(".next-btn");
let previousBtns = document.querySelectorAll(".previous-btn");
let containers = document.querySelectorAll(".carousel-container");
let carouselIndexes = new Map();

nextBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let target = e.target.getAttribute("carousel-target");
        let targetID = carouselIndexes.get(target) || 0;
        slider(targetID + 1, target);
    });
});

previousBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let target = e.target.getAttribute("carousel-target");
        let targetID = carouselIndexes.get(target) || 0;
        slider(targetID - 1, target);
    });
});


setInterval(() => {
    containers.forEach(container => {
        if (container.getAttribute("autoslide") === "true") {
            let id = container.id;
            let currentIndex = carouselIndexes.get(id) || 0;
            slider(currentIndex + 1, id);
        }
    });
}, 3000); 


const slider = (index, target) => {
    containers.forEach(container => {
        if (container.id == target) {
            let camera = container.querySelector(".carousel");
            let slide = container.querySelectorAll(".slide");
            let slideWidth = slide[0].clientWidth;

            if (index < 0) {
                index = slide.length - 1;
            } else if (index >= slide.length) {
                index = 0;
            }

            camera.style.transform = `translateX(-${slideWidth * index}px)`;
            carouselIndexes.set(target, index);
        }
    });
};

//^ gallery
const imgContent = document.querySelectorAll('.gallery__image__caption');
var x, y;

function showImgContent(e) {
    for(var i = 0; i < imgContent.length; i++) {
        x = e.pageX;
        y = e.pageY;
        imgContent[i].style.transform = `translate(${x}px, ${y}px)`;
    }
}

document.addEventListener('mousemove', showImgContent);


const body = document.body;
const items = document.querySelectorAll(".gallery_item");
const modal = document.createElement("section");
const modalImg = document.createElement("img");
const modalPrev = createButton("prev");
const modalNext = createButton("next");
const modalClose = createButton("close");
let currentItem = 0;
let modalInstance;

modal.classList.add("gallery__modal");
modalPrev.classList.add("gallery__navigation--prev");
modalNext.classList.add("gallery__navigation--next");
modalClose.classList.add("gallery__navigation--close");

function createButton(type) {
    const button = document.createElement("button");
    
    if(type === "prev") {
        button.addEventListener("click", prevItem);
    } else if(type === "next") {
        button.addEventListener("click", nextItem);
    } else if(type === "close") {
        button.addEventListener("click", closeModal);
    }
    
    return button;
}

function prevItem() {
    currentItem = (currentItem - 1 + items.length) % items.length;
    updateModalImage();
}

function nextItem() {
    currentItem = (currentItem + 1) % items.length;
    updateModalImage();
} 

function closeModal() {
    modal.remove();
    body.classList.remove('noscroll');
}

function updateModalImage() {
    const img = items[currentItem].querySelector("img");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}

function showModal(index) {
    currentItem = index;
    updateModalImage();
    modal.innerHTML = '';
    modal.append(modalImg, modalPrev, modalNext, modalClose);
    document.body.appendChild(modal);
    body.classList.add('noscroll');
    modal.setAttribute('aria-hidden', 'false');
}

items.forEach(function(item, index) {
    item.addEventListener('click', function() {
        showModal(index);
    });
});

document.body.addEventListener('keyup', (ev) => {
    if (ev.key === "Escape" && modal.parentElement) {
        closeModal();
    }
});

//* testimonials
document.addEventListener('DOMContentLoaded', () => {
  let currentcaro = 0;
  let slides2 = document.querySelectorAll('.testimonial-card');
  let slidesToShow = 3;

  function showSlides(startIndex) {
    slides2.forEach((slide, i) => {
      slide.style.display = (i >= startIndex && i < startIndex + slidesToShow) ? 'block' : 'none';
    });
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentcaro = (currentcaro + 1) % slides2.length;
    if (currentcaro + slidesToShow > slides2.length) currentcaro = 0;
    showSlides(currentcaro);
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentcaro = (currentcaro - 1 + slides2.length) % slides2.length;
    if (currentcaro < 0) currentcaro = slides2.length - slidesToShow;
    showSlides(currentcaro);
  });

  setInterval(() => {
    currentcaro = (currentcaro + 1) % slides2.length;
    if (currentcaro + slidesToShow > slides2.length) currentcaro = 0;
    showSlides(currentcaro);
  }, 3000);

  showSlides(currentcaro);
});
