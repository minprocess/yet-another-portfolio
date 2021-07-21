// Array of js objects with properties of my web projects so far (Jun 27 2021)
var projObj = [
  {
    projTitle: "Workout Tracker",
    gitHubRepo: "https://github.com/minprocess/18-Workout-Tracker",
    deployLink: "https://workout-tracker-2542.herokuapp.com/",
    imageName: "18-Snapshot-homepage-workout-tracker.png",
    desc: "Workout Tracker is a full stack web app to view, create and track daily workouts. Used starter code.",
    tech: "Node, Express, Mongoose and JavaScript for the backend. HTML, CSS and Javascript for the frontend.",
    altText: "Home page of Workout Tracker app"
  },
  {
    projTitle: "Using a regex for validating a password string",
    gitHubRepo: "https://gist.github.com/minprocess/16c6bdaed839229df6c8d7125fb6277c",
    deployLink: "",
    imageName: "17-screenshot-using-a-regex-validating.png",
    desc: "A Gist explaining a regular expression that can be used to validate a password.",
    tech: "Gist on GitHub, Markdown",
    altText: "Gist article explaining a regex for validating a password string"
  },
  {
    projTitle: "Wobal - a social media site",
    gitHubRepo: "https://github.com/minprocess/Wobal",
    deployLink: "https://wobal-2542.herokuapp.com/",
    imageName: "wobal-feed.png",
    desc: "A full stack social media web site that rhymes with global. Simple, easy to use and won't sell data about you. Team project",
    tech: "Node, bcrypt, connect-session-sequelize, dotenv, eslint, Express, express-handlebars, express-session, MySQL2, nodemon, Sequelize.js, “badwords” (a npm package)",
    altText: "Home page of the Wobal social media app"
  },
  {
    projTitle: "Tech Blog",
    gitHubRepo: "https://github.com/minprocess/14-Tech-Blog",
    deployLink: "https://tech-blog-2542.herokuapp.com/",
    imageName: "14-homepage-tech-blog.png",
    desc: "A full stack website hosting a blog (The Tech Blog) allowing users to post articles and to post comments about articles.",
    tech: "Node, bcrypt, connect-session-sequelize, dotenv, eslint, express, express-handlebars, express-session, MySQL2, Sequelize.js",
    altText: "Home page of the Tech Blog app"
  },
  {
    projTitle: "E-commerce-backend",
    gitHubRepo: "https://github.com/minprocess/13-E-Commerce-Backend",
    deployLink: "https://ecomm-backend-2542.herokuapp.com/",
    imageName: "13-Insomnia_requests_for_backend_on_Heroku.png",
    desc: "Backend for an e-commerce website. Insomnia is used to test the CRUD actions. Used starter code",
    tech: "Node, Javascript, dotenv, express, MySQL2, Sequelize.js",
    altText: "Insomnia app showing transactions used with the backend"
  },
  {
    projTitle: "Employee Tracker",
    gitHubRepo: "https://github.com/minprocess/12-Employee-Tracker",
    deployLink: "",
    imageName: "12-Main_menu_of_Employee_Tracker.png",
    desc: "A command-line application that allows the user to interact with a MySQL database containing three tables of employee information.",
    tech: "Node, JavaScript, console.table, Inquirer.js, MySQL2",
    altText: "Snapshot of interface to a MySQL database made with Inquirer.js"
  },
  {
    projTitle: "Note Taker",
    gitHubRepo: "https://github.com/minprocess/11-Note-Taker",
    deployLink: "https://note-taker-wtp.herokuapp.com/",
    imageName: "11-screen-capture-note-taker.png",
    desc: "Web site to write and save notes. All notes are saved in one database. Used starter code",
    tech: "HTML, CSS, Node, Javascript, Express, uuidv4",
    altText: "Home page of Note Taker app showing list of stored notes"
  },
  {
    projTitle: "Team profile generator",
    gitHubRepo: "https://github.com/minprocess/10-Team-Profile-Generator",
    deployLink: "",
    imageName: "10-Team-profile-screen-capture.png",
    desc: "This app is a Node.js command-line application that a user questions about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Used starter code",
    tech: "HTML, CSS, Node, Javascript, Inquirer.js",
    altText: "Homepage of this app which was created after answering questions in Inquirer.js"
  },
  {
    projTitle: "Readme Autogen",
    gitHubRepo: "https://github.com/minprocess/09-Readme-Autogen",
    deployLink: "",
    imageName: "09-readme-autogen.png",
    desc: "A JavaScript app uses Inquirer.js to ask a programmer a series of questions and based on that generate a readme file.",
    tech: "Javascript, Inquirer.js",
    altText: "Snapshot of the readme created with this app that uses Inquirer.js"
  },
  {
    projTitle: "Open Road Travel Agency",
    gitHubRepo: "https://github.com/minprocess/Open-Road-Travel-Agency",
    deployLink: "https://minprocess.github.io/Open-Road-Travel-Agency",
    imageName: "Open-Road-Travel-Agency.png",
    desc: "Open Road Travel Agency website with a little bit of Covid-19 info. MVP. Group project",
    tech: "HTML, CSS, Javascript, 3 APIs ",
    altText: "Homepage of this travel agency app"
  },
  {
    projTitle: "Simple Weather",
    gitHubRepo: "https://github.com/minprocess/06-Simple-Weather",
    deployLink: "https://minprocess.github.io/06-Simple-Weather",
    imageName: "06-Simple-Weather.png",
    desc: "Weather app with current temperature and 5 day forecast. Uses OpenWeatherMap API",
    tech: "HTML, CSS, Javascript, jQuery, Moment.js, 1 API",
    altText: "Homepage of this weather app"
  },
  {
    projTitle: "Planner",
    gitHubRepo:  "https://github.com/minprocess/05-Calendar",
    deployLink: "https://minprocess.github.io/05-Calendar",
    imageName:  "05-Calendar.png",
    desc: "Simple daily planner. 'Events' entered by the user are kept in local storage until the next day. Used starter code.",
    tech: "HTML, CSS, JavaScript, jQuery, Moment.js",
    altText: "Homepage if this simple day planner type of app"
  },
  {
    projTitle: "Quiz",
    gitHubRepo: "https://github.com/minprocess/04-Quiz",
    deployLink: "https://minprocess.github.io/04-Quiz",
    imageName: "04-Quiz.png",
    desc: "Quiz about JavaScript. Score is calculated from the time left on timer.",
    tech: "HTML, CSS, JavaScript",
    altText: "Homepage of this app which asks 5 questions about JavaScript"
  },
  {
    projTitle: "Password Generator",
    gitHubRepo: "https://github.com/minprocess/03-SecPassGen",
    deployLink: "https://minprocess.github.io/03-SecPassGen",
    imageName: "03-SecPassGen.png",
    desc: "Generate a password containing random characters. Password can be customized. Used starter code",
    tech: "HTML, CSS, JavaScript",
    altText: "Homepage of this app which generates a random password given parameters by user"
  },
  {
    projTitle: "Horiseon Refector",
    gitHubRepo: "https://github.com/minprocess/01-Horiseon-Refactor",
    deployLink: "https://minprocess.github.io/01-Horiseon-Refactor",
    imageName: "01-Horiseon-Refactor.png",
    desc: "Refactor a website for social media and SEO company. Used starter code.",
    tech: "HTML, CSS",
    altText: "Homepage of a website for social media and SEO company"
  }
]

// Wait until css and scripts are loaded before loading the html for the projects
document.addEventListener('DOMContentLoaded', function() {
    //var elems = document.querySelectorAll('.sidenav');
    //var instances = M.Sidenav.init(elems);
    
    var projList = document.querySelector("#proj-list");  // ul
    var html = ``;
    const numRows = projObj.length/3;
    const remain = projObj.length%3;
    console.log("projObj.length", projObj.length);
    console.log("numRows", numRows)
    let k = 0;
    for (var i=0; i<numRows; i++) {
      html += `<div class="row">`;
      for (var j=0; j<3; j++) {
        html += cardHtml(k)
        k++;
      }
      html += `</div>`;
    }
    if (remain > 0) {
      for (var i=0; i<numRows; i++) {
        html += `<div class="row">`;
        for (var j=0; j<remain; j++) {
          html += cardHtml(k);
          k++;
        }
        html += `</div>`;
      }
  
    }
    //html += `</div>`
    projList.innerHTML = html;
  });

 
cardHtml = function (i) {
    var html;
    let deployLink = "";
    if (projObj[i].deployLink != "")
      deployLink = '<a href="'+projObj[i].deployLink + '">Page</a>';

    let imgName = "lake.png";   // In case an image is not available for a project this one is used.
    if (projObj[i].imageName != "") {
      imgName = projObj[i].imageName;
    }
    const title = projObj[i].projTitle;
    const desc = projObj[i].desc;
    const tech = projObj[i].tech;
    const githubRepo = projObj[i].gitHubRepo;
    const altText = projObj[i].altText;

/*
    if (pageName=='') {
      set-attribute=hide
      // write hide class in css
      //css attr: display: none;
      add link to portfolio in About section
      Applications used starter code
      json for web projects
      json for publications c++, c#
    }
*/
    html = `
    <div class="col s12 l4">
      <div class="card">
        <div class="card-image">
          <img src="./assets/images/${imgName}" alt=${altText}>
        </div>
        <div class="card-content" style="min-height: 255px">
          <span class="card-title">${title}</span>
          <p>${desc}</p>
          <p><i>Technologies</i>: ${tech}</p>
        </div>
        <div class="card-action">
          <a href="${githubRepo}">Code</a>
          ${deployLink}
        </div>
      </div>
    </div>
`
    return html;
}
