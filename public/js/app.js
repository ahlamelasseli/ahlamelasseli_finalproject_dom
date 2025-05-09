

const headerJs = () => {
  let menuBtn = document.querySelector("#open")
  let closeBtn = document.querySelector("#close")
  let navBar = document.querySelector(".navLinks")
  let dropDown = document.querySelector(".dropDownDiv");
  let dropDownSelect = document.querySelector(".dropDownSelect");
  let openModal = document.querySelector(".openModal")
  let closeModal = document.querySelector(".closeModal")
  let modalDiv = document.querySelector(".modalDiv");
  menuBtn.addEventListener("click", () => {
    navBar.style.top = "50%";
  });
  closeBtn.addEventListener("click", () => {
    navBar.style.top = "-200%";
  });

  dropDown.addEventListener("mouseover", () => {
    dropDownSelect.classList.remove("hidden");
  });
  dropDownSelect.addEventListener("mouseout", () => {
    dropDownSelect.classList.add("hidden");
  });
  openModal.addEventListener("click", () => {
    modalDiv.style.top = "2vh";
  });
  closeModal.addEventListener("click", () => {
    modalDiv.style.top = "-200%";
  });
};
headerJs();





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

// 