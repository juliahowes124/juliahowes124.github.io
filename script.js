$projectsDiv = $(".projects-div");

function fillProjects() {
  for(let project of projects) {
    $projectsDiv.append(`
    <div class="content">
      <div class="content-overlay"></div>
        <img class="content-image" src="./gifs/${project.fileName}" alt="${project.name} Demo Gif" />
              <div class="content-details">
                <h3 class="content-title">${project.name}</h3>
                <p>
                  ${project.description}
                </p>
                <a
                  class="btn project-button"
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



const projects = [
  {name: 'Pet Net',
  fileName: 'petnet.gif',
  description: `A peer-to-peer platform where pet owners looking to rehome their
pet can connect with prospective adopters.`,
  demoLink: "https://github.com/juliahowes124/PetApp#feature-demos",
  githubLink: "https://github.com/juliahowes124/PetApp",
  tools: [{
    tool: "Angular",
    url: "https://cdn.worldvectorlogo.com/logos/angular-icon.svg"
  },
  {
    tool: "ASP.NET Core",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png"
  },
  {
    tool: "SQLite",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/382px-SQLite370.svg.png"
  }
]
},
  
  {name: 'Travel App',
  fileName: 'travelapp.gif',
  description: `A social app to share travel experiences.`,
  demoLink: "https://github.com/juliahowes124/TravelApp/#feature-demos",
  githubLink: "https://github.com/juliahowes124/TravelApp",
  tools: [{
    tool: "React",
    url: "https://jasonpallone.com/React-icon.png"
  },
  {
    tool: "Node.js",
    url: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
  },
  {
    tool: "MongoDB",
    url: "https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png"
  }
]
},
{
  name: "Connect Four",
  fileName: 'ConnectFour.gif',
  description: '',
  demoLink: '',
  githubLink: 'https://github.com/juliahowes124/ConnectFour',
  tools: [
    {
      tool: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      tool: "CSS",
      url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/76_Css3_logo_logos-512.png"
    },
    {
      tool: "HTML",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
    }
  ]
},
{
  name: "Hack Or Snooze",
  fileName: 'HackOrSnooze.gif',
  description: '',
  demoLink: '',
  githubLink: 'https://github.com/juliahowes124/HackOrSnooze',
  tools: [
    {
      tool: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      tool: "CSS",
      url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/76_Css3_logo_logos-512.png"
    },
    {
      tool: "HTML",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
    }
  ]
},
{
  name: "Madlibs",
  fileName: 'Madlibs.gif',
  description: '',
  demoLink: '',
  githubLink: 'https://github.com/juliahowes124/Madlibs',
  tools: [
    {
      tool: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      tool: "CSS",
      url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/76_Css3_logo_logos-512.png"
    },
    {
      tool: "HTML",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
    }
  ]
},
{
  name: "Survey",
  fileName: 'survey.gif',
  description: '',
  demoLink: '',
  githubLink: 'https://github.com/juliahowes124/FlaskSurvey',
  tools: [
    {
      tool: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      tool: "CSS",
      url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/76_Css3_logo_logos-512.png"
    },
    {
      tool: "HTML",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
    }
  ]
},
{
  name: "Boggle",
  fileName: 'boggle.gif',
  description: '',
  demoLink: '',
  githubLink: 'https://github.com/juliahowes124/FlaskBoggle',
  tools: [
    {
      tool: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      tool: "CSS",
      url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/76_Css3_logo_logos-512.png"
    },
    {
      tool: "HTML",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
    }
  ]
},
{
  name: "Meme Maker",
  fileName: 'MemeMaker.gif',
  description: '',
  demoLink: '',
  githubLink: 'https://github.com/juliahowes124/MemeMaker',
  tools: [
    {
      tool: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      tool: "CSS",
      url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/76_Css3_logo_logos-512.png"
    },
    {
      tool: "HTML",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
    }
  ]
},
{
  name: "Growing Flower",
  fileName: 'GrowingFlower.gif',
  description: '',
  demoLink: '',
  githubLink: 'https://github.com/juliahowes124/GrowingFlower',
  tools: [
    {
      tool: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      tool: "CSS",
      url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/76_Css3_logo_logos-512.png"
    },
    {
      tool: "HTML",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
    }
  ]
},
{
  name: "Giphy Party",
  fileName: 'GiphyParty.gif',
  description: '',
  demoLink: '',
  githubLink: 'https://github.com/juliahowes124/GiphyParty',
  tools: [
    {
      tool: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      tool: "CSS",
      url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/76_Css3_logo_logos-512.png"
    },
    {
      tool: "HTML",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
    }
  ]
},
{
  name: "TV Maze",
  fileName: 'TvMaze.gif',
  description: '',
  demoLink: '',
  githubLink: 'https://github.com/juliahowes124/TvMaze',
  tools: [
    {
      tool: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      tool: "CSS",
      url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/76_Css3_logo_logos-512.png"
    },
    {
      tool: "HTML",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
    }
  ]
},
{
  name: "Dad Jokes",
  fileName: 'DadJokes.gif',
  description: '',
  demoLink: '',
  githubLink: 'https://github.com/juliahowes124/DadJokes',
  tools: [
    {
      tool: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      tool: "CSS",
      url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/76_Css3_logo_logos-512.png"
    },
    {
      tool: "HTML",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
    }
  ]
}



];

fillProjects();
