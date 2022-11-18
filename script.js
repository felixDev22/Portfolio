const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

menu.onclick = function showMenu() {
  mobileMenu.style.display = 'block';
};
closeBtn.onclick = function closeMenu() {
  mobileMenu.style.display = 'none';
};
mobileMenu.onclick = function close() {
  mobileMenu.style.display = 'none';
};

// create popup card//**

const portfolioData = [
  {
    title: 'Tonic',
    workDetails: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/pop-img1.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    details2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },

  {
    title: 'Tonic',
    workDetails: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/Portfolio 1.png',
    image2: './images/dsk Portfolio1.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },

  {
    title: 'Multi-Post<br /> Stories',
    workDetails: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/Portfolio 2.png',
    image2: './images/dsk Portfolio2.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },

  {
    title: 'Multi-Post<br /> Stories',
    workDetails: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/Portfolio 3.png',
    image2: './images/dsk Portfolio3.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },

  {
    title: 'Multi-Post<br /> Stories',
    workDetails: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/Portfolio 4.png',
    image2: '../images/dsk Portfolio.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },

  {
    title: 'Multi-Post Stories',
    workDetails: ['FACEBOOK', 'Back End Dev', '2015'],
    image: './images/Portfolio 2.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },
  {
    title: 'Facebook 360',
    workDetails: ['FACEBOOK', 'Back End Dev', '2015'],
    image: './images/Portfolio 3.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },
  {
    title: 'Uber Navigation',
    workDetails: ['FACEBOOK', 'Back End Dev', '2015'],
    image: './images/Portfolio 4.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    details2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],

    liveIcon: './images/live-Icon.svg',
    liveLink: 'https://felixdev22.github.io/Mobile-first-D3/',

    sourceLink: 'https://github.com/felixDev22/Mobile-first-D3',
    sourceIcon: './images/bluegithub.svg',
  },
];

// ------------------------- Projects section --------------------//

const project = document.querySelector('.grid-container');
project.innerHTML = `<div class="card">
              <div class="row">
                <div class="col-1 work-1">
                <a href="#"
                  ><img src="${portfolioData[1].image}" class="mobile-only" alt="portfolio-1"
                /></a>
  
                   <a href="#"
                  ><img src="${portfolioData[1].image2}" class="desktop-only" alt="portfolio-1"
                /></a>
                
                </div>

                <div class="col-2">
                <a href="#"><h2>${portfolioData[0].title}</h2></a>
                <div class="work-details flex2">
                  <a href="#"><h3>${portfolioData[0].workDetails[0]}</h3></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[1]}</h4></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[2]}</h4></a>
                </div>
                <p>
                  ${portfolioData[0].description}
                </p>
                <ul>
                  <li class="work-tools">
                    <button type="button" class="tools">${portfolioData[0].workTools[0]}</button>
                    <button type="button" class="tools">${portfolioData[0].workTools[1]}</button>
                    <button type="button" class="tools">${portfolioData[0].workTools[2]}</button>
                  </li>
                </ul>
                <div>
                  <button type="button" class="primary-btn">See Project</button>
                </div>
              </div>
              </div>
            </div>
            
            <!-- portfolio - 2 -->
            <div class="card">
              <div class="row reverse">
                <div class="col-1">
                <a href="#"
                  ><img src="${portfolioData[2].image}" class="mobile-only" alt="portfolio-2"
                /></a>

                     <a href="#"
                  ><img src="${portfolioData[2].image2}" class="desktop-only" alt="portfolio-2"
                /></a>

                </div>

                <div class="col-2">
                <a href="#"
                  ><h2>${portfolioData[2].title}</h2></a>

                  
                <div class="work-details flex2">
                  <a href="#"><h3>${portfolioData[0].workDetails[0]}</h3></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[1]}</h4></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[2]}</h4></a>
                </div>
                <p>
                  ${portfolioData[0].description}
                </p>
                <ul>
                  <li class="work-tools">
                    <button type="button" class="tools">${portfolioData[0].workTools[0]}</button>
                    <button type="button" class="tools">${portfolioData[0].workTools[1]}</button>
                    <button type="button" class="tools">${portfolioData[0].workTools[2]}</button>
                  </li>
                </ul>
                <div>
                  <button type="button" class="primary-btn">See Project</button>
                </div>
              </div>
              </div>
                </div>


                 <!-- portfolio - 3 -->
            <div class="card selected-card">
              <div class="row">
                <div class="col-1">
                <a href="#"
                  ><img src="${portfolioData[3].image}" class="mobile-only" alt="portfolio-3"
                /></a>

                    <a href="#"
                  ><img src="${portfolioData[3].image2}" class="desktop-only" alt="portfolio-3"
                /></a>


                </div>

                <div class="col-2" >
                <a href="#"><h2>${portfolioData[0].title}</h2></a>
                <div class="work-details flex2">
                  <a href="#"><h3>${portfolioData[0].workDetails[0]}</h3></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[1]}</h4></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[2]}</h4></a>
                </div>
                <p>
                  ${portfolioData[0].description}
                </p>
                <ul>
                  <li class="work-tools">
                    <button type="button" class="tools">${portfolioData[0].workTools[0]}</button>
                    <button type="button" class="tools">${portfolioData[0].workTools[1]}</button>
                    <button type="button" class="tools">${portfolioData[0].workTools[2]}</button>
                  </li>
                </ul>
                <div>
                  <button type="button"class='primary-btn active'>See Project</button>
                </div>
              </div>
              </div>
            </div>

            <!-- portfolio - 4 -->
            <div class="card">
              <div class="row reverse">
                <div class="col-1">
                <a href="#"
                  ><img src="${portfolioData[4].image}" class="mobile-only" alt="portfolio-4"
                /></a>

                    <a href="#"
                  ><img src="${portfolioData[4].image2}" class="desktop-only" alt="portfolio-4"
                /></a>

                </div>

                <div class="col-2">
                <a href="#"
                  ><h2>${portfolioData[2].title}</h2></a>

                  
                <div class="work-details flex2">
                  <a href="#"><h3>${portfolioData[0].workDetails[0]}</h3></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[1]}</h4></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[2]}</h4></a>
                </div>

                <p>
                    ${portfolioData[0].description}
                </p>
                <ul>
                  <li class="work-tools">
                     <button type="button" class="tools">${portfolioData[0].workTools[0]}</button>
                    <button type="button" class="tools">${portfolioData[0].workTools[1]}</button>
                    <button type="button" class="tools">${portfolioData[0].workTools[2]}</button>
                  </li>
                </ul>
                <div>
                  <button type="button" class="primary-btn">See Project</button>
                </div>
              </div>
              </div>
                </div>`;

// ------------------------- Projects section --------------------//

// ------------------------- Pop-up section --------------------//

const dynamic = document.querySelector('.popup');
dynamic.innerHTML = `<div class="row">
                <div class="right-col work-1">
                  <a href="#"><h2>${portfolioData[0].title}</h2></a>
                <div class="work-details flex2">
                  <a href="#"><h3>${portfolioData[0].workDetails[0]}</h3></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[1]}</h4></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>${portfolioData[0].workDetails[2]}</h4></a>
                  
                </div>
                <div class='close'>
          <img src="./images/greyX.svg" alt="close" class='x-icon'
            id="close"/>
        </div>
                  
                <a href="#"
                  ><img src="${portfolioData[1].image}" class="mobile-only" alt="portfolio-1"
                /></a>
  
                   <a href="#"
                  ><img src="${portfolioData[0].image}" class="desktop-only" alt="portfolio-1"
                /></a>
                
                </div>
                <div class="left-col">
                <div class="text-side">
                <p class="desktop-only" >
                  ${portfolioData[0].details}
                </p>
                <p class="mobile-only" >
                  ${portfolioData[7].details2}
                </p>
                </div>
                <div class="links-side">
                <ul>
                  <li class="work-tools">
                    <button type="button" class="tools desktop-only"> ${portfolioData[0].workTools[0]}</button>
                    <button type="button" class="tools desktop-only">${portfolioData[0].workTools[1]}</button>
                    <button type="button" class="tools desktop-only">${portfolioData[0].workTools[2]}</button>
                    <button type="button" class="tools desktop-only">${portfolioData[0].workTools[3]}</button>
                    <button type="button" class="tools desktop-only">${portfolioData[0].workTools[4]}</button>
                    <button type="button" class="tools desktop-only">${portfolioData[0].workTools[5]}</button>
                    <button type="button" class="tools mobile-only">${portfolioData[0].workTools[0]}</button>
                    <button type="button" class="tools mobile-only">${portfolioData[0].workTools[1]}</button>
                    <button type="button" class="tools mobile-only">${portfolioData[0].workTools[2]}</button>
                  </li>
                </ul>
               <div class='live-btn'>
                  <div class= "btn-1">
                  <button type="button" class="pop-btn">
                    <a href="${portfolioData[7].liveLink}" target="_blank">See Live</a>
                    <span><img src="${portfolioData[7].liveIcon}" alt='live'>
                  </button>
                </div>
                  
                  <div class= "btn-2">
                  <button type="button" class="pop-btn">
                  <a href="${portfolioData[7].sourceLink}" target="_blank">See Source</a>
                  <span><img src="${portfolioData[7].sourceIcon}" alt='gitHub'>
                  </button>
                  </div>
                </div>
              </div>
              </div>
              </div>`;

const overlay = document.querySelector('.back-pop');
function popDisplay() {
  dynamic.style.display = 'block';
  overlay.style.display = 'flex';
}

const display = document.querySelectorAll('.primary-btn');
Array.from(display).forEach((element) => {
  element.addEventListener('click', popDisplay);
});

const closeModal = document.querySelector('.x-icon');

const popup = document.querySelector('.popup');

function closePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

closeModal.addEventListener('click', closePopup);

// ------------------------- Pop-up section ends --------------------//

// --------- implement the validation form ---------------

const form = document.getElementById('form');
const emailData = document.getElementById('email');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  const emailData = email.value;

  for (let i = 0; i < emailData.length; i += 1) {
    if (emailData[i] !== emailData[i].toLowerCase()) {
      e.preventDefault();
      error.innerText = 'Please enter email in lowercase!';
    }
  }
});
