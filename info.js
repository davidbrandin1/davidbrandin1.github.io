let info = {
  name: "David Brandin",
  logo_name: "David",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Hey, I'm David Brandin, a senior at Westwood High School. I'm a determined and knowledge-hungry student with a 4.4 GPA. I have an interest in Computer Science and have made this website using Java. I am seeking a degree in the field Computer Science.",
  links: {
    github: "https://github.com/davidbrandin1",
    resume: "https://docs.google.com/document/d/1TTG9MQ0kcJxc4gUjsNrDX22FTflQoidRXviQN_E5vR4/edit?usp=sharing",
  },
  education: [
    {
      name: "Westwood High School",
      place: "Blythewood, SC",
      date: "Aug 2020 - May 2023",
      gpa: "4.4 GPA, 23 out of 279 class ranking",
      description:
        "",
      skills: [
        "7 AP Classes",
        "5 Programming Classes",
        "Cross Country Runner",
        "Beta Club",
        "National Technical Honors Society",
      ]
    },
  ],
  experience: [
    {
      name: "Religious School",
      place: "Beth Shalom Synagogue,",
      date: "Columbia, SC",
      position: "4th & 5th Grade Teacher",
      description:
        "",
      skills: ["Teach biblical lesson plans", "Help students read and write in Hebrew", "Educate students in spoken Hebrew"]
    },
    {
      name: "Sonic Drive-In",
      place: "",
      date: "Columbia, SC",
      position: "Fountain",
      description:
        "",
      skills: ["Prepared drink items", "Collaborated with crew members"]
    },
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "JavaScript, Python, Visual Basic"],
      icon: "fa fa-code"
    },
    {
      title: "Web Design",
      info: ["Vue.js, HTML5, CSS, Tailwind"],
      icon: "fa fa-pencil-square-o"
    },
    {
      title: "Other Skills",
      info: [
        "PC Building / Repair, Microsoft VS Code, Shell Scripting, Version Control, Adobe Photoshop 2019, Sony Vegas Pro 17, Google Suite"],
      icon: "fa fa-cubes"
    },
  ],
  
  portfolio: [
    {
      name: "Website",
      pictures: [
        {
          img: require("./src/assets/portfolio/website/1.png")
        },
        {
          img: require("./src/assets/portfolio/website/2.png")
        },
        {
          img: require("./src/assets/portfolio/website/3.png")
        },
        {
          img: require("./src/assets/portfolio/website/4.png")
        },
      ],
      technologies: ["vue", "html", "css"],
      category: "Web App",
      date: "Aug, 2023 - Current",
      github:
        "https://github.com/davidbrandin1/davidbrandin1.github.io",
      visit: "https://davidbrandin.com/",
      description:
        " A personal website I created from scatch using Vue.js "
    },
  ],
};

export default info;
