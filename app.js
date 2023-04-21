// ============================= toggle hamburger icon ===========================
const menuIcon = document.querySelector('#menuIcon');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('uil-multiply');
  navbar.classList.toggle('active');
  logo.classList.toggle('active');
};

// ========= remove toggle icon and navbar when user click navbar link (scroll) =========
window.onscroll = () => {
  menuIcon.classList.remove('uil-multiply');
  navbar.classList.remove('active');
  logo.classList.remove('active');
};
//= ===================page sections============
const body = document.querySelector('body');
const all = document.querySelector('#all');
const bar = document.querySelector('#bar');
const workSection = document.querySelector('#works');
const aboutMe = document.querySelector('about-me');
const contact = document.querySelector('#Contact');
const footer = document.querySelector('#Footer');

all.append(bar, aboutMe, contact, footer);
body.append(all);
// ======adding to work section========

//= =====Info-Arrays=================
const projectsArray = [
  {
    imageTop: 'images/Img Placeholder.png',
    titleTop: 'Multi-Post Stories',
    descTop: "A daily selection of privately personalized reads; no accounts or sign-ups required.<br> has been the industry's standard dummy <br> text ever since the 1500s, when an <br>unknown printer took a standard dummy<br> text.",
    techTop: ['css', 'Html', 'Bootstrap', 'Ruby'],
    liveTop: '',
    sourceTop: '',
    dataSet: 0,

  },
  {
    id: 1,
    image: '',
    title: 'Professional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '',
    sourceLink: '',
    dataSet: 1,

  },
  {
    id: 2,
    image: '',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '',
    sourceLink: '',
    dataSet: 2,

  },
  {
    id: 3,
    image: '',
    title: 'WebSite <br> Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '',
    sourceLink: '',
    dataSet: 3,

  },
  {
    id: 4,
    image: '',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '',
    sourceLink: '',
    dataSet: 4,

  },
  {
    id: 5,
    image: '',
    title: 'Professional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '',
    sourceLink: '',
    dataSet: 5,
  },
  {
    id: 6,
    image: '',
    title: 'WebSite <br> Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: '',
    sourceLink: '',
    dataSet: 6,
  },
];
//= ====================function add element with tag names & class name ===========
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
};
//= =========function create list=======
const createList = (items, className) => {
  const ul = createElement('ul', className);
  items.forEach((item) => {
    const li = createElement('li', `${className}-item`);
    li.innerHTML = item;
    ul.appendChild(li);
  });
  return ul;
};
//= ===========create work container==========

const project1 = document.createElement('section');
project1.classList.add('work1');
workSection.append(project1);
const otherProjects = document.createElement('section');
otherProjects.classList.add('otherWorks');
workSection.append(otherProjects);
//= ====== select info from array for project-1=============
for (let i = 0; i < projectsArray.length; i) {
  const projectMob1 = projectsArray[0];
  const {
    imageTop, titleTop, descTop, techTop,
  } = projectMob1;

  //= ==== create image project-1=================
  const imageCreate = document.createElement('img');
  imageCreate.src = imageTop;
  imageCreate.classList.add('work1Image');
  project1.append(imageCreate);

  // create div tag for  work1
  const work1Info = document.createElement('article');
  work1Info.classList.add('work1Info');
  project1.append(work1Info);

  // create the h3 element
  const h3Create = document.createElement('h3');
  h3Create.classList.add('work1Title');
  h3Create.innerHTML = titleTop;
  work1Info.append(h3Create);
  // create the description
  const descCreate = document.createElement('p');
  descCreate.classList.add('work1Description');
  descCreate.innerHTML = descTop;
  h3Create.append(descCreate);

  // create the list of technologies
  const listCreate = document.createElement('ul');
  listCreate.classList.add('work1Languages');
  (techTop).forEach((item) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'work1Button');
    li.textContent = item;
    listCreate.append(li);
  });
  // append element in order

  work1Info.append(listCreate);
  // create button for project 1
  const buttonLink = document.createElement('button');
  buttonLink.classList.add('work1Link');
  // const buttonLink = document.createElement('a');
  buttonLink.setAttribute('data-btn', projectsArray[0].dataSet);
  // buttonLink.classList.add('project-btn');
  buttonLink.textContent = 'see project';

  // buttonContainer.append(buttonLink);
  work1Info.append(buttonLink);
  break;
}

for (let i = 1; i < projectsArray.length; i) {
  const projectOther = projectsArray[i];
  const { title, description, technologies } = projectOther;
  //= ======================== =====create the container for otherWork=======
  const otherProjectsContainers = document.createElement('div');
  otherProjectsContainers.classList.add('work2');
  otherProjects.appendChild(otherProjectsContainers);
  //= ======image container work2Info====
  const work2Info = document.createElement('div');
  work2Info.classList.add('work2Info');
  otherProjectsContainers.appendChild(work2Info);
  // ======= create image for otherWorks====
  const imageCreateOtherProjects = document.createElement('img');
  imageCreateOtherProjects.setAttribute('class', 'background-work2');
  work2Info.appendChild(imageCreateOtherProjects);
  //= =====h3 text=============================
  const work2Title = document.createElement('h3');
  work2Title.classList.add('work2Title');
  work2Title.innerHTML = title;
  work2Info.append(work2Title);

  //= ===create description============================
  const otherWorkDescription = document.createElement('p');
  otherWorkDescription.classList.add('work2Description');
  otherWorkDescription.innerHTML = description;
  work2Info.appendChild(otherWorkDescription);
  // ============create otherWorks lists============
  const listOtherWork = document.createElement('ul');
  listOtherWork.classList.add('work2Languages');
  work2Info.appendChild(listOtherWork);
  // if

  (technologies).forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.classList.add('work2Button');
    listOtherWork.appendChild(li);
  });
  //= ============= create button for other projects======

  const buttonLink = document.createElement('button');
  buttonLink.classList.add('project-btn');
  // const buttonLink = document.createElement('a');
  buttonLink.setAttribute('data-btn', projectsArray[i].dataSet);
  // buttonLink.classList.add('project-btn');
  buttonLink.textContent = 'see project';

  // otherProjectsButton.append(buttonLink);
  otherProjectsContainers.append(buttonLink);
}
//= ==================pop-up windows=============
//= =array pop-up====
const modalProjects = [
  {
    title: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/1-image.png',
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://antoine1128.github.io/portfolio-setup/',
    sourceLink: 'https://github.com/ANTOINE1128/portfolio-setup',

  },
  {
    title: 's Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/2-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://antoine1128.github.io/portfolio-setup/',
    sourceLink: 'https://github.com/ANTOINE1128/portfolio-setup',

  },
  {
    title: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/3-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://antoine1128.github.io/portfolio-setup/',
    sourceLink: 'https://github.com/ANTOINE1128/portfolio-setup',

  },
  {
    title: 'WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/4-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://antoine1128.github.io/portfolio-setup/',
    sourceLink: 'https://github.com/ANTOINE1128/portfolio-setup',

  },
  {
    title: 'Professional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/2-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://antoine1128.github.io/portfolio-setup/',
    sourceLink: 'https://github.com/ANTOINE1128/portfolio-setup',

  },
  {
    title: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/3-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://antoine1128.github.io/portfolio-setup/',
    sourceLink: 'https://github.com/ANTOINE1128/portfolio-setup',

  },
  {
    title: 'WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: './images/4-image.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://antoine1128.github.io/portfolio-setup/',
    sourceLink: 'https://github.com/ANTOINE1128/portfolio-setup',

  },
];

// ===========createfuntion for projectmodal=========
function projectModal(e) {
  const docFragment = document.createDocumentFragment();
  const projectCardInfo = modalProjects[parseInt(e.target.dataset.btn, 10)];

  const popupContainer = createElement('div', 'popupContainer');

  const projectPopup = document.createElement('div');
  projectPopup.classList.add('projectPopup', 'project-card');

  const popupHeader = createElement('div', 'popupHeader');
  popupHeader.innerHTML = '<i class="uil uil-multiply" id="closeBtn"></i>';
  docFragment.appendChild(popupHeader);

  const popupTitle = createElement('h3', 'popupTitle');
  popupTitle.innerHTML = projectCardInfo.title;
  popupHeader.appendChild(popupTitle);

  const popupLanguages = createList(projectCardInfo.technologies, 'popupLanguages');
  popupHeader.appendChild(popupLanguages);

  const popupBody = createElement('div', 'popupBody');
  docFragment.appendChild(popupBody);

  const popupImgContainer = createElement('div', 'popupImgContainer');
  popupBody.appendChild(popupImgContainer);

  const popupImg = createElement('img', 'popupImg');
  popupImg.src = projectCardInfo.image;
  popupImgContainer.appendChild(popupImg);

  const popupTextContainer = createElement('div', 'popupTextContainer');
  popupBody.appendChild(popupTextContainer);

  const popupDescription = createElement('p', 'popupDescription');
  popupDescription.innerText = projectCardInfo.description;
  popupTextContainer.appendChild(popupDescription);

  const popupLinkContainer = createElement('div', 'popupLinkContainer');
  popupTextContainer.appendChild(popupLinkContainer);

  const liveLink = createElement('a', 'liveLink');
  liveLink.innerHTML = 'See live&nbsp;&nbsp;<i class="uil uil-export"></i>';
  liveLink.href = projectCardInfo.liveLink;
  popupLinkContainer.appendChild(liveLink);

  const sourceLink = createElement('a', 'sourceLink');
  sourceLink.innerHTML = 'See source&nbsp;&nbsp;<i class="uil uil-github"></i>';
  sourceLink.href = projectCardInfo.sourceLink;
  popupLinkContainer.appendChild(sourceLink);

  projectPopup.appendChild(docFragment);
  popupContainer.appendChild(projectPopup);
  body.appendChild(popupContainer);

  document.querySelector('#bar').style.filter = 'blur(10px)';

  document.querySelector('#firstsection').style.filter = 'blur(10px)';
  document.querySelector('#about-me').style.filter = 'blur(10px)';

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    body.removeChild(popupContainer);
    document.querySelector('#bar').style.filter = 'blur(0)';

    document.querySelector('#firstsection').style.filter = 'blur(0)';
    document.querySelector('#about-me').style.filter = 'blur(0)';
  });
}

const projectsBtn = document.querySelectorAll('.project-btn');
projectsBtn.forEach((btn) => btn.addEventListener('click', projectModal));
const projectsBtn2 = document.querySelectorAll('.work1Link');
projectsBtn2.forEach((btn) => btn.addEventListener('click', projectModal));

// if (projectsArray[i] === projectMob1 ){
//   constTop.classList.add('modalTopParent');
//   body.append(modalTop);

//   //=======get modal Info=======
//   const modalTopInfo = projectsArray [0];
//   const {
//     imageTop,titleTop ,descTop,techTop,liveTop,sourceTop
//   } = modalTopInfo;
//   //======= add the to modal
//  //====== top modal child section
//   const modalTopChild = document.createElement('section');
//   modalTopChild.classList.add('modalSection');
//   modalTop.appendChild(modalTopChild);

//   // top modal heading section
//   const modalHeading = document.createElement('article');
//   modalHeading.classList.add('heading-section');

//   //========== top modal heaad-text
// const heading = document.createElement('h2');
// heading.classList.add('modalH2');
// heading.innerHTML = titleTop;

// // ===top modal x button
// const Xbutton = document.createElement('span');
// Xbutton.classList.add("Xbutton");
// Xbutton.innerHTML = '&times;';
// //====  appending element heading button =>article =>topmodalchild
// modalHeading.append(heading, Xbutton);
// modalTopChild.append(modalHeading);

// console.log(modalHeading)
