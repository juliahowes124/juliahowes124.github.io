$projectsDiv = $(".projects-div");


function fillProjects() {
  for (let project of projects) {
    $projectsDiv.append(`

    <div class="card content shadow ${project.class}">
      <img class="static content-image card-img-top" src="./images/${project.staticFile}">
      <img class="active content-image card-img-top" src="./gifs/${project.fileName}" alt="${project.name} Demo Gif">
      <div class="card-body m-0 d-flex">
        <div class="card-body-content">
          <h3 class="card-title">${project.name}</h3>
          <div class="content-tools">${project.tools}</div>
          <div class="content-description card-text">${project.description}</div>
        </div>
        <div class="card-body-buttons">
            <a
            class="btn ${project.demoLink ? 'project-button' : 'hidden'}"
            href="${project.demoLink}"
            target="_blank"
          >
            Demos
          </a>
          <a
            class="btn ${project.site ? 'project-button' : 'hidden'}"
            href="${project.site}"
            target="_blank"
          >
            Site
          </a>
          <a
            class="btn project-button"
            href="${project.githubLink}"
            target="_blank"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
    `)
  }
}


const projects = [
  {
    name: 'Warbler',
    cols: '6',
    class: "big-1",
    fileName: 'warbler.gif',
    staticFile: 'warbler.jpg',
    description: `A microblogging web app. Users can post, like posts, and follow or block users. Users can have private accounts and admin privileges.`,
    githubLink: "https://github.com/juliahowes124/Warbler",
    site: "https://warbler-julia-r20.herokuapp.com/",
    tools: "Python / Flask / PostgreSQL"
  },
  {
    name: 'Pet Net',
    cols: '6',
    class: "big-2",
    fileName: 'petnet.gif',
    staticFile: 'petnet.jpeg',
    description: `A peer-to-peer platform where pet owners looking to rehome their
pet can connect with prospective adopters.`,
    demoLink: "https://github.com/juliahowes124/PetApp#feature-demos",
    githubLink: "https://github.com/juliahowes124/PetApp",
    tools: "Angular / ASP.NET / SQLite"
  },
  {
    name: 'Travel App',
    // class: 'big-3',
    cols: '6',
    fileName: 'travelapp.gif',
    staticFile: 'travelapp.jpeg',
    description: '',
    // description: `A social web app to share and like travel experiences and view places on a map.`,
    demoLink: "https://github.com/juliahowes124/TravelApp/#feature-demos",
    githubLink: "https://github.com/juliahowes124/TravelApp",
    tools: "React / Express / MongoDB"
  },
  {
    name: "Notes",
    cols: '4',
    fileName: 'notes.gif',
    staticFile: 'notes.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/FlaskNotes',
    tools: "Flask / PostreSQL / SQLAlchemy"
  },
  {
    name: "Blogly",
    cols: '4',
    fileName: 'blogly.gif',
    staticFile: 'blogly.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Blogly',
    tools: "Flask / PostreSQL / SQLAlchemy"
  },
  {
    name: "Lights Out",
    cols: '4',
    fileName: 'lights_out.gif',
    staticFile: 'lightsout.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Lights-Out',
    tools: "React"
  },
  {
    name: "Adopt",
    cols: '4',
    fileName: 'adoptly.gif',
    staticFile: 'adopt.jpg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Adoptly',
    tools: "Flask / WTForms / PostreSQL"
  },
  {
    name: "Cupcakes",
    cols: '4',
    fileName: 'cupcakes.gif',
    staticFile: 'cupcakes.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/FlaskCupcake',
    tools: "PostreSQL / Flask / jQuery"
  },
  {
    name: "Websocket Group Chat",
    cols: '4',
    fileName: 'websocket.gif',
    staticFile: 'websocket.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Websocket-GroupChat',
    tools: "Node.js / Express"
  },
  {
    name: "Lunch",
    cols: '4',
    fileName: 'lunch.gif',
    staticFile: 'lunch.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Lunch',
    tools: "Node.JS / Express / PostgreSQL"
  },
  {
    name: "Survey",
    cols: '4',
    fileName: 'survey.gif',
    staticFile: 'survey.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/FlaskSurvey',
    tools: "Flask / Jinja"
  },
  {
    name: "Madlibs",
    cols: '4',
    fileName: 'Madlibs.gif',
    staticFile: 'madlibs.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Madlibs',
    tools: "Flask / Jinja"
  },
  {
    name: "Hack Or Snooze",
    cols: '6',
    fileName: 'HackOrSnooze.gif',
    staticFile: 'hackorsnooze.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/HackOrSnooze',
    tools: "jQuery / Axios"
  },
  {
    name: "Connect 4",
    cols: '4',
    fileName: 'connect4.gif',
    staticFile: 'connect4.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/ConnectFour',
    tools: "JavaScript / OOP"
  },
  {
    name: "Boggle",
    cols: '4',
    fileName: 'boggle.gif',
    staticFile: 'boggle.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/FlaskBoggle',
    tools: "Flask / jQuery"
  },
  {
    name: "Meme Maker",
    cols: '4',
    fileName: 'mememaker.gif',
    staticFile: 'mememaker.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/MemeMaker',
    tools: "Vanilla JS",
    site: "https://unruffled-torvalds-a80a84.netlify.app"
  },
  {
    name: "Giphy Party",
    cols: '4',
    fileName: 'GiphyParty.gif',
    staticFile: 'giphyparty.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/GiphyParty',
    tools: "jQuery / Axios"
  },
  {
    name: "TV Maze",
    cols: '4',
    fileName: 'TvMaze.gif',
    staticFile: 'tvmaze.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/TvMaze',
    tools: "Axios / Jasmine / Bootstrap"
  },
  {
    name: "Dad Jokes",
    cols: '4',
    fileName: 'DadJokes.gif',
    staticFile: 'dadjokes.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/DadJokes',
    tools: "jQuery / Axios"
  },
  {
    name: "Growing Flower",
    cols: '4',
    fileName: 'GrowingFlower.gif',
    staticFile: 'growingflower.jpeg',
    description: '',
    githubLink: 'https://github.com/juliahowes124/GrowingFlower',
    tools: "CSS"
  },
];

fillProjects();

function isElementInViewport(elem) {
  var $elem = $(elem);

  // Get the scroll position of the page.
  var viewportTop = $('html').scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round( $elem.offset().top );
  var elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
  var $elem = $('.about-column');
  var $elem2 = $('.profile-card');

  // If the animation has already been started
  if ($elem.hasClass('start')) return;

  if (isElementInViewport($elem)) {
      // Start the animation
      $elem.addClass('start');
      $elem2.addClass('start');
  }
}

// Capture scroll events
$(window).scroll(function(){
  checkAnimation();
});
