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
    
    layout: 'bio',

    page: {
      title: 'Person page',
    },
    
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
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
//             ↙ cюди вводимо назву файлу з сontainer
res.render('bio', {

  layout: 'basic',

  page: {
    title: 'Bio page',
  },

  name: 'Albert Einstein',
  birthdate: 'March 14, 1879',
  birthplace:
    'Ulm, Kingdom of Württemberg, German Empire',
  deathdate: 'April 18, 1955',
  deathplace: 'Princeton, New Jersey, United States',
  nationality: 'Swiss, German, American',
  occupation: 'Theoretical Physicist',
  known_for: [
    'Theory of Relativity',
    'E=mc²',
    'Photoelectric Effect',
    'Brownian Motion',
  ],
  education: [
    {
      degree: 'Doctor of Philosophy',
      field: 'Physics',
      institution: 'University of Zurich',
      year: 1905,
    },
  ],
  notable_publications: [
    {
      title: 'On the Electrodynamics of Moving Bodies',
      year: 1905,
      publisher: 'Annalen der Physik',
    },
    {
      title:
        'Does the Inertia of a Body Depend Upon Its Energy Content?',
      year: 1905,
      publisher: 'Annalen der Physik',
    },
  ],
  partners: [
    {
      name: 'Mileva Marić',
      relationship: 'First wife',
      years: '1903-1919',
    },
    {
      name: 'Elsa Einstein',
      relationship:
        "Second wife, also Einstein's first cousin",
      years: '1919-1936',
    },
  ],
  awards: [
    {
      title: 'Nobel Prize in Physics',
      year: 1921,
      description:
        'Awarded for his explanation of the photoelectric effect',
    },
  ],
  influences: [
    'Isaac Newton',
    'James Clerk Maxwell',
    'Hermann Minkowski',
  ],
  influenced: [
    'Niels Bohr',
    'Erwin Schrödinger',
    'Werner Heisenberg',
    'Richard Feynman',
  ],
  quotes: [
    {
      title:'Imagination is more important than knowledge.',
    },
    {
      title:'I have no special talent. I am only passionately curious.',
    
    },  
    {
      title: 'The important thing is not to stop questioning.',
    },
    
    {
      title: 'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    },
  ],

  major_discoveries: [
    {
      title: 'Photoelectric Effect',
      year: 1905,
      description:
        'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
    },
  ],
  
  contributions: {
    title: 'Inventions',
    description:
      'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
    year: 'Late 15th to early 16th century',
    field: 'Invention',
  },
 })
})

// ================================================================

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {

    // layout: 'program',

    layout: 'basic',

    page: {
      title: 'Program',
    },

    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
       
       
       
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: false,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },

          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],

              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

// ================================================================

router.get('/web', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('web', {
    
    layout: 'basic',

    page: {
      title: 'Web',
   },

    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
            'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description:
                'Defines a division or a section in an HTML document.(div)',
              attributes: [
                {
                  name: 'id(div)',
                  description:
                    'specifies a unique id for an HTML element.(div)',
                },
                {
                  name: 'class(div)',
                  description:
                    'Specifies one or more class names for an HTML element.(div)',
                },
              ],
            },
            {
              name: 'p',
              description:
                'defines a paragraph in an HTML document.(p)',
              attributes: [
                {
                  name: 'id(p)',
                  description:
                    'Specifies a unique id for an HTML element.(p)',
                },
                {
                  name: 'class(p)',
                  description:
                    'Specifies one or more class names for an HTML element.(p)',
                },
              ],
            },
          ],
        },

        {
          name: 'CSS',
          version: 'CSS3',
          description:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                {
                  value: 'red',
                  description:
                    'Sets the text color to red.',
                },
                {
                  value: 'blue',
                  description:
                    'Sets the text color to blue.',
                },
              ],
            },
            {
              name: 'background-color',
              description:
                'Sets the background color of an element.',
              values: [
                {
                  value: 'white',
                  description:
                    'Sets the background color to white.',
                },
                {
                  value: 'black',
                  description:
                    'Sets the background color to black.',
                },
              ],
            },
          ],
        },
        
        {
          name: 'JavaScript',
          version: 'ES6',
          description:
            'JavaScript is a programming language used to create interactive effects within web browsers.',
          functions: [
            {
              name: 'alert()',
              description:
                'Displays an alert box with a specified message and an OK button.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description:
                    'The message to display in the alert box.',
                },
              ],
            },
            
            {
              name: 'getElementById()',
              description:
                'Returns the element with the specified ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description:
                    'The ID of the element to find.',
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

router.get('/js', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('js', {

    layout: 'basic',

    page: {
      title: 'JavaScript',
    },

    name: 'JavaScript',
    description:
      'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
    history: {
      year: 1995,
      founder: 'Brendan Eich',
    },
    
    types: [
      'Number',
      'String',
      'Boolean',
      'Null',
      'Undefined',
      'Symbol',
      'Object',
    ],
    syntax: {
      variables: ['var', 'let', 'const'],
      functions: ['function'],
      conditionals: ['if', 'else', 'switch'],
      loops: ['for', 'while', 'do-while'],
      classes: ['class'],
    },
    features: [
      'First-class functions',
      'Closures',
      'Dynamic typing',
      'Prototype-based inheritance',
      'Asynchronous programming with Promises and async/await',
      'Modules with import/export statements',
    ],
    libraries: [
      'jQuery',
      'React',
      'Angular',
      'Vue',
      'Node.js',
      'Express.js',
      'Lodash',
      'Moment.js',
    ],
    tools: [
      'Babel',
      'Webpack',
      'ESLint',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
    ],
    community: [
      {
        name: 'Stack Overflow',
        type: 'forum',
      },
      {
        name: 'JavaScript Weekly',
        type: 'newsletter',
      },
      {
        name: 'The Changelog',
        type: 'podcast',
      },
      {
        name: 'CSS-Tricks',
        type: 'blog',
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
