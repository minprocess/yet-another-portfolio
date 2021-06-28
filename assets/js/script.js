// Array of js objects with properties of my web projects so far (Jun 27 2021)
var projObj = [
  {
    projTitle: "Wobal - a social media site",
    gitHubPages: "",
    gitHubRepo: "https://github.com/minprocess/Wobal",
    herokuApp: "https://wobal-2542.herokuapp.com/",
    imageName: "wobal-feed.png",
    desc: "A social media site that rhymes with global",
    tech: "Node, bcrypt, connect-session-sequelize, dotenv, eslint, express, express-handlebars, express-session, mysql2, nodemon, sequelize, “badwords” (npm package)"
  },
  {
    projTitle: "Tech Blog",
    gitHubPages: "",
    gitHubRepo: "https://github.com/minprocess/14-Tech-Blog",
    herokuApp: "https://tech-blog-2542.herokuapp.com/",
    imageName: "14-homepage-tech-blog.png",
    desc: "A full stack website hosting a blog (Tech Talk) allowing users to post articles and to post comments about articles",
    tech: "Node, bcrypt, connect-session-sequelize, dotenv, eslint, express, express-handlebars, express-session, mysql2, sequelize"
  },
  {
    projTitle: "E-commerce-backend",
    gitHubPages: "",
    gitHubRepo: "https://github.com/minprocess/13-E-Commerce-Backend",
    herokuApp: "https://ecomm-backend-2542.herokuapp.com/",
    imageName: "13-Insomnia_requests_for_backend_on_Heroku.png",
    desc: "Backend for an e-commerce website",
    tech: "Noed, Javascript, dotenv, express, mysql2, sequelize"
  },
  {
    projTitle: "Employee Tracker",
    gitHubPages: "",
    gitHubRepo: "https://github.com/minprocess/12-Employee-Tracker",
    herokuApp: "",
    imageName: "12-Main_menu_of_Employee_Tracker.png",
    desc: "A command-line application that allows the user to interact with a mySQL database containing three tables of employee information.",
    tech: "Node, JavaScript, console.table, inquirer, mysql"
  },
  {
    projTitle: "Note Taker",
    gitHubPages: "",
    gitHubRepo: "https://github.com/minprocess/11-Note-Taker",
    herokuApp: "https://note-taker-wtp.herokuapp.com/",
    imageName: "11-screen-capture-note-taker.png",
    desc: "Web site to write and save notes. All notes are saved in the same tables",
    tech: "HTML, CSS, Node, Javascript, Express, uuid"
  },
  {
    projTitle: "Team profile generator",
    gitHubPages: "",
    gitHubRepo: "https://github.com/minprocess/10-Team-Profile-Generator",
    herokuApp: "",
    imageName: "10-Team-profile-screen-capture.png",
    desc: "This app is a Node.js command-line application that a user questions about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
    tech: "HTML, CSS, Node, Javascript, Inquirer"
  },
  {
    projTitle: "Readme Autogen",
    gitHubPages: "",
    gitHubRepo: "https://github.com/minprocess/09-Readme-Autogen",
    herokuApp: "",
    imageName: "09-readme-autogen.png",
    desc: "A JavaScript app uses Inquirer.js to ask a programmer a series of questions and based on that generate a readme file.",
    tech: "Javascript, Inquirer.js"
  },
  {
    projTitle: "Open Road Travel Agency",
    gitHubPages: "https://minprocess.github.io/Open-Road-Travel-Agency",
    gitHubRepo: "https://github.com/minprocess/Open-Road-Travel-Agency",
    herokuApp: "",
    imageName: "Open-Road-Travel-Agency.png",
    desc: "Open Road Travel Agency website with a little bit of Covid-19 info. MVP obviously!",
    tech: "HTML, CSS, Javascript, 3 APIs "
  },
  {
    projTitle: "Simple Weather",
    gitHubPages: "https://minprocess.github.io/06-Simple-Weather",
    gitHubRepo: "https://github.com/minprocess/06-Simple-Weather",
    herokuApp: "",
    imageName: "06-Simple-Weather.png",
    desc: "Weather app with current temperature and 5 day forecast. Uses OpenWeatherMap API",
    tech: "HTML, CSS, Javascript, jQuery, Moment.js, 1 API"
  },
  {
    projTitle: "Planner",
    gitHubPages: "https://minprocess.github.io/05-Calendar",
    gitHubRepo:  "https://github.com/minprocess/05-Calendar",
    herokuApp: "",
    imageName:  "05-Calendar.png",
    desc: "Simple daily planner. 'Events' entered by the user are kept in local storage until the next day",
    tech: "HTML, CSS, JavaScript, jQuery, Moment.js"
  },
  {
    projTitle: "Quiz",
    gitHubPages: "https://minprocess.github.io/04-Quiz",
    gitHubRepo: "https://github.com/minprocess/04-Quiz",
    herokuApp: "",
    imageName: "04-Quiz.png",
    desc: "Quiz about JavaScript. Has a timer. Score is calculated from the time left on timer.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    projTitle: "Password Generator",
    gitHubPages: "https://minprocess.github.io/03-SecPassGen",
    gitHubRepo: "https://github.com/minprocess/03-SecPassGen",
    herokuApp: "",
    imageName: "03-SecPassGen.png",
    desc: "Generate a password containing random characters. Can be customized.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    projTitle: "Horiseon Refector",
    gitHubPages: "https://minprocess.github.io/01-Horiseon-Refactor",
    gitHubRepo: "https://github.com/minprocess/01-Horiseon-Refactor",
    herokuApp: "",
    imageName: "01-Horiseon-Refactor.png",
    desc: "Refactor a website for social media and SEO company.",
    tech: "HTML, CSS"
  }
]

// Wait until css and scripts are loaded before loading the html for the projects
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    
    var projList = document.querySelector("#proj-list");  // ul
    var html = "";
    for (var i=0; i<projObj.length; i++) {
        html += cardHtml(i)
    }
    projList.innerHTML = html;
  });

 
cardHtml = function (i) {
    var html;
    let pageName = "";
    if (projObj[i].gitHubPages != "") {
      pageName = projObj[i].gitHubPages
    }
    else if (projObj[i].herokuApp != "") {
      pageName = projObj[i].herokuApp;
    }

    let imgName = "lake.png"
    if (projObj[i].imageName != "") {
      imgName = projObj[i].imageName;
    }

    let title = projObj[i].projTitle;

    let desc = projObj[i].desc;

    let githubRepo = projObj[i].gitHubRepo;

    html = `<div class="col s12 l4">
    <div class="card">
      <div class="card-image">
        <a href="${pageName}"> <img src="./assets/images/${imgName}" object-fit w3shool></a>
      </div>
      <div class="card-content">
        <span class="card-title">${title}</span>
        <p>${desc}</p>
      </div>
      <div class="card-action">
        <a href="${githubRepo}">Code</a>
        <a href="${pageName}">Page</a>
      </div>
    </div>
  </div>
</div>
`
    return html;
}
