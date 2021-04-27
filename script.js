$projectsDiv = $(".projects-div");

function fillProjects() {
  for (let project of projects) {
    $projectsDiv.append(`
    <div class="content ${project.class}">
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
    tools: "PostreSQL / Flask"
  },
  {
    name: "Blogly",
    cols: '4',
    fileName: 'blogly.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Blogly',
    tools: "PostreSQL / SQLAlchemy (ORM) / Flask"
  },
  {
    name: "Adopt",
    cols: '4',
    fileName: 'adoptly.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Adoptly',
    tools: "PostreSQL / Flask / WTForms"
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
    name: "Connect 4",
    cols: '4',
    fileName: 'ConnectFour.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/ConnectFour',
    tools: "JavaScript / OOP"
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
    name: "Madlibs",
    cols: '4',
    fileName: 'Madlibs.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Madlibs',
    tools: "Flask / Jinja / Sessions"
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
    name: "Growing Flower",
    cols: '4',
    fileName: 'GrowingFlower.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/GrowingFlower',
    tools: "CSS"
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
];

fillProjects();
