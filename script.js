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
    image: './images/Portfolio 1.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },
  {
    title: 'Multi-Post Stories',
    workDetails: ['FACEBOOK', 'Back End Dev', '2015'],
    image: './images/Portfolio 2.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },
  {
    title: 'Facebook 360',
    workDetails: ['FACEBOOK', 'Back End Dev', '2015'],
    image: './images/Portfolio 3.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },
  {
    title: 'Uber Navigation',
    workDetails: ['FACEBOOK', 'Back End Dev', '2015'],
    image: './images/Portfolio 4.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    workTools: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  },
];

const dynamic = document.querySelector('.popup');
dynamic.innerHTML = `<div class="row">
                <div class="right-col work-1">
                  <a href="#"><h2>TONIC</h2></a>
                <div class="work-details flex2">
                  <a href="#"><h3>CANOPY</h3></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>Back End Dev</h4></a>
                  <div class="bullet-point"></div>
                  <a href=""><h4>2015</h4></a>
                  
                </div>

                <div class='close'>
          <img src="./images/greyX.svg" alt="close" class='x-icon'
            id="close"/>
        </div>
                  
                <a href="#"
                  ><img src="./images/Portfolio 1.png" class="mobile-only" alt="portfolio-1"
                /></a>
  
                   <a href="#"
                  ><img src="./images/pop-img1.png" class="desktop-only" alt="portfolio-1"
                /></a>
                
                </div>

                <div class="left-col">
                <div class="text-side">

                <p class="desktop-only" >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
                </p>
                <p class="mobile-only" >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
                </p>
                </div>
                <div class="links-side">
                <ul>
                  <li class="work-tools">
                    <button type="button" class="tools desktop-only">html</button>
                    <button type="button" class="tools desktop-only">css</button>
                    <button type="button" class="tools desktop-only">javascript</button>
                    <button type="button" class="tools desktop-only">github</button>
                    <button type="button" class="tools desktop-only">ruby</button>
                    <button type="button" class="tools desktop-only">Bootstraps</button>
                    <button type="button" class="tools mobile-only">html</button>
                    <button type="button" class="tools mobile-only">css</button>
                    <button type="button" class="tools mobile-only">javascript</button>
                  </li>
                </ul>
                <div class='live-btn'>
                  <div class= "btn-1">
                  <button type="button" class="pop-btn">
                  <span>See live</span>
                  <span><img src="./images/live-icon.svg" alt='live'></span>
                  </button>
                  </div>
                  
                  <div class= "btn-2">
                  <button type="button" class="pop-btn">
                  <span>Source</span>
                  <span><img src="./images/bluegithub.svg" alt='live'></span>
                  </button>
                  </div>
                </div>
              </div>
              </div>
              </div>`;

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
const overlay = document.querySelector('.back-pop');

function closePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

closeModal.addEventListener('click', closePopup);
