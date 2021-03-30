$projectsDiv = $(".projects-div");

function fillProjects() {
  for (let project of projects) {
    $projectsDiv.append(`
    <div class="content ${project.class}">
      <div class="content-overlay"></div>
        <img class="content-image" src="./gifs/${project.fileName}" alt="${project.name} Demo Gif" />
              <div class="content-details">
                <h3 class="content-title">${project.name}</h3>
                <p>
                  ${project.description}
                </p>
                <a
                  class="btn ${project.demoLink ? 'project-button' : 'hidden'}"
                  href="${project.demoLink}"
                  target="_blank"
                >
                  Demos
                  <i class="fa fa-play-circle fa-lg"></i>
                </a>
                <a
                  class="btn project-button"
                  href="${project.githubLink}"
                  target="_blank"
                >
                  Repo
                  <i class="fa fa-github fa-lg"></i>
                </a>
                <div class="technologies">
                  ${project.tools.map((t) => {
                    return `<img src="${t.url}" alt="${t.tool}"></img>`
                    })}
                </div>
              </div>
            </div>
    
    
    `)
  }
}

const TOOL_IMAGES = {
  html: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png",
  css: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/76_Css3_logo_logos-512.png",
  angular: "https://cdn.worldvectorlogo.com/logos/angular-icon.svg",
  aspnet: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
  sqlite: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/382px-SQLite370.svg.png",
  react: "https://jasonpallone.com/React-icon.png",
  node: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
  mongodb: "https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png",

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
    tools: [{
      tool: "Angular",
      url: TOOL_IMAGES.angular
    },
    {
      tool: "ASP.NET Core",
      url: TOOL_IMAGES.aspnet
    },
    {
      tool: "SQLite",
      url: TOOL_IMAGES.sqlite
    }
    ]
  },

  {
    name: 'Travel App',
    cols: '6',
    class: 'big-2',
    fileName: 'travelapp.gif',
    description: `A social app to share travel experiences.`,
    demoLink: "https://github.com/juliahowes124/TravelApp/#feature-demos",
    githubLink: "https://github.com/juliahowes124/TravelApp",
    tools: [{
      tool: "React",
      url: TOOL_IMAGES.react
    },
    {
      tool: "Node.js",
      url: TOOL_IMAGES.node
    },
    {
      tool: "MongoDB",
      url: TOOL_IMAGES.mongodb
    }
    ]
  },
  {
    name: "Connect Four",
    cols: '4',
    fileName: 'ConnectFour.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/ConnectFour',
    tools: []
  },
  {
    name: "Hack Or Snooze",
    cols: '6',
    fileName: 'HackOrSnooze.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/HackOrSnooze',
    tools: []
  },
  {
    name: "Madlibs",
    cols: '4',
    fileName: 'Madlibs.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/Madlibs',
    tools: []
  },
  {
    name: "Survey",
    cols: '4',
    fileName: 'survey.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/FlaskSurvey',
    tools: []
  },
  {
    name: "Boggle",
    cols: '4',
    fileName: 'boggle.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/FlaskBoggle',
    tools: []
  },
  {
    name: "Meme Maker",
    cols: '4',
    fileName: 'MemeMaker.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/MemeMaker',
    tools: []
  },
  {
    name: "Growing Flower",
    cols: '4',
    fileName: 'GrowingFlower.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/GrowingFlower',
    tools: []
  },
  {
    name: "Giphy Party",
    cols: '4',
    fileName: 'GiphyParty.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/GiphyParty',
    tools: []
  },
  {
    name: "TV Maze",
    cols: '4',
    fileName: 'TvMaze.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/TvMaze',
    tools: []
  },
  {
    name: "Dad Jokes",
    cols: '4',
    fileName: 'DadJokes.gif',
    description: '',
    githubLink: 'https://github.com/juliahowes124/DadJokes',
    tools: []
  }



];

fillProjects();
