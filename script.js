$projectsDiv = $(".projects-div");

function fillProjects() {
  for (let project of projects) {
    $projectsDiv.append(`
    <div class="content ${project.class}">
      <a href=${project.githubLink}></a>
        <div class="content-overlay"></div>
        <img class="content-image" src="./gifs/${project.fileName}" alt="${project.name} Demo Gif" />
              <div class="content-details">
                  <h3 class="content-title">${project.name}</h3>
                  <div class="content-tools">${project.tools}</div>
                  <div class="content-description">
                    ${project.description}
                  </div>
                  <a
                    class="btn ${project.demoLink ? 'project-button' : 'hidden'}"
                    href="${project.demoLink}"
                    target="_blank"
                  >
                  Demos
                    <i class="fa fa-play-circle fa-lg"></i>
                  </a>
                  <a
                    class="btn ${project.site ? 'project-button' : 'hidden'}"
                    href="${project.site}"
                    target="_blank"
                  >
                  Site
                    <i class="fa fa-external-link fa-lg"></i>
                  </a>
                  <a
                    class="btn project-button"
                    href="${project.githubLink}"
                    target="_blank"
                  >
                  Repo
                    <i class="fa fa-github fa-lg"></i>
                  </a>
                </div>
            </div>
    
    
    `)
  }
}


const projects = [
  {
    name: 'Pet Net',
    cols: '6',
    class: "big-1",
    fileName: 'petnet.gif',
    description: `A peer-to-peer platform where pet owners looking to rehome their
pet can connect with prospective adopters.`,
    demoLink: "https://github.com/juliahowes124/PetApp#feature-demos",
    githubLink: "https://github.com/juliahowes124/PetApp",
    tools: "Angular / ASP.NET Core / SQLite"
  },

  {
    name: 'Travel App',
    cols: '6',
    class: 'big-2',
    fileName: 'travelapp.gif',
    description: `A social app to share travel experiences.`,
    demoLink: "https://github.com/juliahowes124/TravelApp/#feature-demos",
    githubLink: "https://github.com/juliahowes124/TravelApp",
    tools: "React / Express / MongoDB"
  },
  {
    name: "Notes",
    cols: '4',
    fileName: 'notes.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/FlaskNotes',
    tools: "Flask / PostreSQL / SQLAlchemy(ORM)"
  },
  {
    name: "Blogly",
    cols: '4',
    fileName: 'blogly.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Blogly',
    tools: "Flask / PostreSQL / SQLAlchemy(ORM)"
  },
  {
    name: "Adopt",
    cols: '4',
    fileName: 'adoptly.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Adoptly',
    tools: "Flask / WTForms / PostreSQL"
  },
  {
    name: "Cupcakes",
    cols: '4',
    fileName: 'cupcakes.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/FlaskCupcake',
    tools: "PostreSQL / Flask / jQuery"
  },
  {
    name: "Websocket Group Chat",
    cols: '4',
    fileName: 'websocket.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Websocket-GroupChat',
    tools: "Node.JS / Express"
  },
  {
    name: "Lunch",
    cols: '4',
    fileName: 'lunch.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Lunch',
    tools: "Node.JS / Express / PostgreSQL"
  },
  {
    name: "Lights Out",
    cols: '4',
    fileName: 'lights_out.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Lights-Out',
    tools: "React"
  },
  {
    name: "Survey",
    cols: '4',
    fileName: 'survey.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/FlaskSurvey',
    tools: "Flask / Jinja / Sessions"
  },
  {
    name: "Madlibs",
    cols: '4',
    fileName: 'Madlibs.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Madlibs',
    tools: "Flask / Jinja / Sessions"
  },
  {
    name: "Hack Or Snooze",
    cols: '6',
    fileName: 'HackOrSnooze.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/HackOrSnooze',
    tools: "jQuery / Axios"
  },
  {
    name: "Connect 4",
    cols: '4',
    fileName: 'ConnectFour.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/ConnectFour',
    tools: "JavaScript / OOP"
  },
  {
    name: "Boggle",
    cols: '4',
    fileName: 'boggle.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/FlaskBoggle',
    tools: "Flask / jQuery"
  },
  {
    name: "Meme Maker",
    cols: '4',
    fileName: 'MemeMaker.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/MemeMaker',
    tools: "Vanilla JS",
    site: "https://unruffled-torvalds-a80a84.netlify.app"
  },
  {
    name: "Giphy Party",
    cols: '4',
    fileName: 'GiphyParty.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/GiphyParty',
    tools: "jQuery / Axios"
  },
  {
    name: "TV Maze",
    cols: '4',
    fileName: 'TvMaze.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/TvMaze',
    tools: "Axios / Jasmine / Bootstrap"
  },
  {
    name: "Dad Jokes",
    cols: '4',
    fileName: 'DadJokes.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/DadJokes',
    tools: "jQuery / Axios"
  },
  {
    name: "Growing Flower",
    cols: '4',
    fileName: 'GrowingFlower.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/GrowingFlower',
    tools: "CSS"
  },
];

fillProjects();
window.addEventListener('resize', handleResize);

function handleResize() {
  if(window.innerWidth <= 768) {
    $projectsDiv.delegate(".content", "click", openLink);
  } else {
    $projectsDiv.undelegate('.content', 'click', openLink);
  }
}

function openLink() {
  window.open($(this).find("a").attr("href"), '_blank');
}

