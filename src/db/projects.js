export const projects = [
  {
    title: "MY BLOG",
    description: [
      "",
      "My personal blog website where I provide a small description of myself, tech tips, blog posts, sermons notes, articles, favorite books, software and more.",
      "I also provide a set of links to my most used platforms in the home page.",
      'The "Favorites" page includes my favorite things in a broad spectrum of categories.',
      'The "Articles" page includes my research articles, sermon notes, bible commentaries or simple thoughts.',
      'In this "Tools" page I provide small and fun tech tools that were developed for teh sake of fun and with the end to help others.',
    ],
    url: "https://danielrangel.me",
    git: "https://github.com/yodarango-maintained/danielrangel-me",
    images: [
      "images/danielrangel.me/1.png",
      "images/danielrangel.me/1.png",
      "images/danielrangel.me/2.png",
      "images/danielrangel.me/3.png",
      "images/danielrangel.me/4.png",
      "images/danielrangel.me/5.png",
    ],
    bkgColor: "#ecfcd2",
    color: "#006466",
    technologies: [
      "images/tech/net.png",
      "images/tech/js.png",
      "images/tech/css.png",
      "images/tech/heroku.png",
      "images/tech/docker.png",
    ],
  },
  {
    title: "FAC KNOXVILLE",
    description: [
      "",
      "The official website for the First Apostolic Church of Knoxville, one of the biggest churches in the city. The website includes a login page set up with JWT that allows users to login and manage parts of the website.",
      'FAC Knoxville needed a way to communicate to their members all the available methods for giving, therefore they were all listed under a page titled "Give."',
      "FAC Knoxville wanted a way to make their new members and visitors feel in family. A page introducing leadership was provided.",
      "A list of the last 10 sermons is made available to the members using the Youtube API.",
      "The last page details the church's beliefs.",
    ],
    url: "https://fac-knoxville.vercel.app/",
    git: "https://github.com/yodarango-www-clientele/fac-knoxville",
    images: [
      "images/facknoxville.com/1.png",
      "images/facknoxville.com/1.png",
      "images/facknoxville.com/2.png",
      "images/facknoxville.com/3.png",
      "images/facknoxville.com/4.png",
      "images/facknoxville.com/5.png",
    ],
    bkgColor: "#001e50",
    color: "#FFF",
    technologies: [
      "images/tech/vercel.png",
      "images/tech/css.png",
      "images/tech/nextjs.png",
      "images/tech/mongodb.png",
      "images/tech/jwt.png",
    ],
  },
  {
    title: "BIBLE SCHOLAR",
    description: [
      "",
      "The official marketing website for the Bible Scholar App. No routing was implented; the different screens are handled by Javascript.",
      "Screen describes one of the features of the app.",
      "Screen describes one of the features of the app.",
      "Screen describes one of the features of the app.",
      "Screen describes one of the features of the app.",
    ],
    url: "https://biblescholar.app",
    git: "https://github.com/yodarango-saas/biblescholar_app",
    images: [
      "images/biblescholar/1.png",
      "images/biblescholar/1.png",
      "images/biblescholar/2.png",
      "images/biblescholar/3.png",
      "images/biblescholar/4.png",
      "images/biblescholar/5.png",
    ],
    bkgColor: "#4f3b78",
    color: "#ff9214",
    technologies: [
      "images/tech/svelte.png",
      "images/tech/css.png",
      "images/tech/vultr.png",
      "images/tech/nginx.png",
    ],
  },
  {
    title: "SCHOLAR APP",
    description: [
      "",
      "Full stack web app that allows users to comment on the individual verses of the Bible. MySql is used to store the data.",
      "Users have access to a personal profile secured by JWT. All requests are handled by Apollo Server Express.",
      "Different kinds of content can be created. Quotes are one of them and are displayed in the form of 24hr stories.",
      "Access to different versions and languages of the Bible is offered by the use of a public domain bible API.",
      "A database of recommended resources is offered which users can rate. This data is stored using mongoDB Atlas.",
    ],
    url: "https://my.biblescholar.app",
    git: undefined,
    images: [
      "images/my.biblescholar/1.png",
      "images/my.biblescholar/1.png",
      "images/my.biblescholar/2.png",
      "images/my.biblescholar/3.png",
      "images/my.biblescholar/4.png",
      "images/my.biblescholar/5.png",
    ],
    bkgColor: "#433b55",
    color: "#ff0045",
    technologies: [
      "images/tech/nextjs.png",
      "images/tech/ts.png",
      "images/tech/mongodb.png",
      "images/tech/jwt.png",
      "images/tech/mysql.png",
      "images/tech/apollo.png",
      "images/tech/vultr.png",
      "images/tech/nginx.png",
      "images/tech/stripe.png",
    ],
  },
  {
    title: "STWC ARTHUR",
    description: [
      "",
      "The official website for Spirit and Truth Worship Center. Built with NextJS and hosted in Vercel.",
      "Visitors are introduced to a quick description of the church's history.",
      "A list of the last sermons is made available to the members using the Youtube API.",
      "The last page details the church's beliefs.",
    ],
    url: "https://vanillacupcakeblogger.herokuapp.com/",
    git: "https://github.com/yodarango-www-clientele/stwcarthur",
    images: [
      "images/stwc.org/1.png",
      "images/stwc.org/1.png",
      "images/stwc.org/2.png",
      "images/stwc.org/3.png",
      "images/stwc.org/4.png",
    ],
    bkgColor: "#12ffe4",
    color: "#3e3535",
    technologies: [
      "images/tech/vercel.png",
      "images/tech/css.png",
      "images/tech/nextjs.png",
    ],
  },
  {
    title: "SAVVY SAUTE",
    description: [
      "",
      "Savvy Saute is a fully customizable blog. Private routes are protected by passport sessions. The architecture is MVC using EJS.",
      'The "About" page displays links to the admin\'s scoial site and a subscribtion form, all which is seen by the admin in the admin CMS.',
      'The "Posts" page displays all posts created using a pagination of 10 posts per page. All data is stored using MongoDB.',
      "The CMS allows the admin to edit all text in every page of the blog, add social sites, change password, CRUD on content and subscribers.",
      "Users are allowed to submit puclic comments about the blog which are displayed at the bottom of the home page.",
    ],
    url: "https://www.savvysaute.com/",
    git: "https://github.com/yodarango-www-clientele/savvy-saute",
    images: [
      "images/savvysaute.com/1.png",
      "images/savvysaute.com/1.png",
      "images/savvysaute.com/2.png",
      "images/savvysaute.com/3.png",
      "images/savvysaute.com/4.png",
      "images/savvysaute.com/5.png",
    ],
    bkgColor: "#ffbe00",
    color: "#FFF",
    technologies: [
      "images/tech/js.png",
      "images/tech/mongodb.png",
      "images/tech/passport.png",
      "images/tech/ejs.png",
      "images/tech/sass.png",
      "images/tech/heroku.png",
      "images/tech/sendgrid.png",
    ],
  },
];
