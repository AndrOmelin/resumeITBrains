// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// let address = "Україна, Кропивницький, вул. Героїв України"

var header = {
     name: {
    firstname: 'Dmytro',
    lastname: 'Ivanchuk',      
  },

  position: 'junior Fullstack JS Developer',

  salary: '600$ в місяць',

  address: "Україна, Кропивницький, вул. Героїв України",
}

var footer = {
  social: {
    email: {
       text: 'ivanov@gmail.com',
         href: "mailto:ivanov@mail.com",
    },
    phone: {
      text: '+380670000123',
        href: "tel:+380670000123",
    }, 
    linkedin: {
      text: 'Linked1n',
        href: "https://www.linkedin.com/in/dmytro-test",
    }, 
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,
    
    main: {
      summary: {
        summary_title:
          // [
          {
          // big: true, 
          title:'Summary',
          },
          // ],

        summary_text: `Open-minded for New Technologies, with 1 years of experience in development. Whenever I start to 
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`
   },

   experience: {
     experience_title: { 
      title:'Other experience',
     },
        experience_text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
        tournament position, goals etc), analyzing by simple mathematics models and preparing probability
        for such events like: money line - first win / draw / second win, totals etc.`
   },
    },

    footer,
 })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,
    
    main: {
      skills_1: {
        skills_1_title: { 
          title:'All Skills',
      },
    },
          skills: [
            {
              name: "HTML",
              point: 10,
              isTop: true,
            },

            {
              name: "Handlebars",
              point: 8,
              isTop: true,
            },

            {
              name: "VS Code & NPM",
              point: 9,
              isTop: false,
            },

            {
              name: "GIT & Terminal",
              point: 7,
            },

            {
              name: "Figma",
              point: 5,
            },
            
            {
              name: "React.js",
              point: 0,
            },

            {
              name: "PHP",
              point: null,
            },
          ],

          hobby_title: { 
            title:'My Hobbies',
          },

          hobbies: [
            {
              name: "Martial arts",
              isMain: true,
            },

            {
              name: "Fishing",
              isMain: false,
            },

            {
              name: "Read books",
              isMain: true,
            },
          ],
    },

    footer,
 })
})



//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations_title: { 
        title:'My Education',
   },

          educations: [
            {name: "Central Ukrainian National Technical University (CNTU)",
             isEnd: true,
            },

            {name: "Sorbonne University",
             isEnd: false,
            },

            {name: "University of California, Berkeley",
             isEnd: true,
            },

            {name: "Hogwarts",
             isEnd: false,
            },
          ],

          certificates_title: { 
            title:'My Сertificates',
       },

          certificates: [
            {name: "Master's Degree in Mechanical Engineering",
             id: 232421,
            },

            {name: "Bachelor of Engineering Technology",
             id: 237791,
            },
            
            {name: "Diploma of a junior specialist in machining parts on machine tools",
             id: 3784842,
            },
          ],
    },

    footer,
 })
})


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
       title: 'Resume | Work',
    },

    header,

    main:{
      works: [
       {
        position: 'Trainee Fullstack Developer',
        company:{
           name: 'Solar System',
           url: 'https://dashing-clafoutis-799204.netlify.app'
        },

        duration:{
           from: '01.01.1992',
             to: '01.09.1999',
        },

        projectAmount: 3,

        projects: [
          {
            name: 'Resume',
            url: 'https://resuME.com.ua',
            about: 'PROJECT DESCRIPTION...',
            stackAmount: 15,
            awardAmount: 20,
            stacks: [
              {
                name: 'React.js',
              },

              {
                name: 'HTML/CSS',
              },

              {
                name: 'Nodejs',
              },
            ],
            awards: [
              {
                name: 'HOP-HEY',
              },
              {
                name: 'LA-LA-LEY',
              },
            ],
          },
        ],
       },

       {
        position: 'Junior Fullstack Developer',
        company:{
           name: 'Moon System',
           url: null,
        },

        duration:{
           from: '01.01.2000',
             to: null,
        },

        projectAmount: 2,

        projects: [
          {
            name: 'Resume',
            url: 'https://resuME.com.ua',
            about: 'PROJECT DESCRIPTION...',
            stackAmount: 25,
            awardAmount: 35,

            stacks: [
              {
                name: 'Angular.js',
              },

              {
                name: 'HTML/CSS',
              },

              {
                name: 'Nodejs',
              },
            ],

            awards: [
              {
                name: 'ABCDEFG',
              },

              {
                name: 'LA-LA-LAND',
              },
            ],
          },
        ],
       },
      ],
     },

    footer,
 })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    
    layout: 'person',
    
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              teams_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
