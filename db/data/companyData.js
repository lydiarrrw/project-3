export default function getCompanyData(users) {

  return [
    {
      company: 'Vulcan',
      website: 'vulcan.com',
      about: 'A cutting edge fintech wealth management organisation with offices in Central London. Our primary objective is to provide wealth management advice to a portfolio of high net worth clients, using market leading financial technology.',
      industry: 'FinTech',
      logo: 'logo.png',
      jobs: [{
        title: 'Java Developer',
        description: 'As a Java Developer at Vulcan, the new features that you will be working on can range from using machine learning algorithms for our anti-fraud team, through to creating new analytics tools. The developer will also get the opportunity to travel between our European offices and meet with other teams. You will be joining a growing and successful team that provide an attractive salary package with share options. You will also have the opportunity for flexible working and remote working. Our company has a horizontal structure meaning we welcome and value innovation and ideas from our developers!',
        salary: '£50,000',
        location: 'Remote'
      },
      {
        title: 'Data Scientist',
        description: 'Vulcan is looking for a Python and SQL focused Data Scientist to join our fast-growing Data team in London. You will be part of making our organisation fully data-driven and make a true impact, working in a fast paced production environment. As a Data Scientist you will work on a variety of interesting data challenges with access to the latest technology. You will be able to leverage large data sets and create useful and meaningful insights to help make better business decisions for this FinTech. You will use your knowledge with SQL and Python, and experience building Machine Learning models to work on exciting projects.',
        salary: '£70,000',
        location: 'London'
      },
      {
        title: 'Product Manager',
        description: 'Vulcan is looking for confident, knowledgeable product manager to join our London office. You will work in a fast-paced international team on multiple greenfield projects and manage several digital products and help improve the usability of our app from the landing pages/onboarding through to payment clearing.',
        salary: '£50,000',
        location: 'London'
      }],
      user: users[0],
      rating: 4.5
    },
    {
      company: 'Ridgeway',
      website: 'ridgeway.com',
      about: 'Ridgeway builds crypto-backed lending technology and scalable institutional-grade crypto custody and blockchain monitoring products.',
      industry: 'Block-Chain',
      logo: 'logo.png',
      jobs: [{
        title: 'Product Manager',
        description: 'Ridgeway is looking for a Product Designer to help grow the design output for our portfolio of early stage start-ups working in cutting edge technology. You will be able to operate at a senior strategic level with start-up founders, whilst “getting your hands dirty” with project work. You will be collaborating with the full Outlier team, defining priorities and coordinating design schedules across multi-disciplined teams.',
        salary: '£50,000',
        location: 'London'
      },
      {
        title: 'Integration Engineer',
        description: 'As an Integration Engineer at Ridgeway, you’ll be joining a small yet talented team to help manage our Managed Node Service’s growing client base. You’ll be working closely with the organisation’s business and technical side by helping spin up new Chainlink nodes and keep them up to date while interacting with our Managed node clients. Existing knowledge of Chainlink node infrastructure is desirable but not required, but you will need to be technically savvy and have some DevOps and programming experience.',
        salary: '£60,000',
        location: 'London'
      },
      {
        title: 'Research Engineer',
        description: 'Ridgeway is recruiting a Research Engineer who will serve as part of an interdisciplinary research team applying scientific principles to discover and develop economic systems meeting high level descriptive goals using tools from an array of disciplines from multi-agent control to mechanism design. The Engineer is responsible for developing and documenting mathematical models based on requirements from internal and external stakeholders. The Engineer will use formal analysis techniques to refine economic models by characterizing evolutionary tendencies and attack vectors, as well as using stochastic process simulations to explore system trajectories and define practical bounds on system parameters. The Engineer will have opportunities to present work to technical and non-technical audiences, both publicly and privately.',
        salary: '£75,000',
        location: 'Remote'
      }],
      user: users[0],
      rating: 4
    },
    {
      company: 'Mango',
      website: 'mango.com',
      about: 'Mango is a full-service digital agency with digital designers, programmers, SEO specialists, content creators, digital marketers all working together in-house. Our clients include Google, Marks & Spencers, NatWest. Come join our team!',
      industry: 'eCommerce',
      logo: 'logo.png',
      jobs: [{
        title: 'SEO analyst',
        description: 'Were looking for a smart, motivated, and passionate SEO Analyst to join our team. We’d like you to be responsible for researching, learning, and suggesting ways that our clients can improve their SEO. Know or have ideas about how you can track and measure the results. Work on different aspects of SEO: technical, content, digging into data and on-page factors',
        salary: '£30,000',
        location: 'Manchester'
      },
      {
        title: 'Junior React Developer',
        description: 'We’re looking for a thoughtful highly-motivated, frontend developer to join our team. Knowledge of React is essential, familiarity with Bulma, SASS, and RESTful APIs is also desirable.',
        salary: '£32,000',
        location: 'Manchester'
      },
      {
        title: 'Tech Lead',
        description: 'We are a global digital agency  seeking a skilled Technical Lead to guide a talented team to design and develop exciting and engaging solutions across multiple platforms. You will liaise closely with a range of technical clients to gain a good understanding of their requirements.This is a highly varied, hands-on Technical Lead role, where you will work across a broad range of projects in a variety of industries. You will keep up-to-date with the latest technologies and industry trends to deliver high-availability and scalable solutions.',
        salary: '£55,000',
        location: 'Manchester'
      }],
      user: users[0],
      rating: 5
    }
  ]
}
Company
[
  {
    Company: 'TechCal',
    Website: 'www.techcal.com',
    About: 'Infinitely flexible. Incredibly productive for teams of all sizes. TechCal manages your calendar, from big project details to micro tasks. Collaborate anywhere, even on different devices',
    Industry: 'tech',
    Logo: 'https://cdn.pixabay.com/photo/2019/08/11/18/50/icon-4399684_1280.png',
    Jobs: [
      {
        title: 'Front End Engineer',
        description: 'https://www.atlassian.com/company/careers/detail/be868490-3b91-4661-8899-ad2ab926ecbd',
        salary: 'Competitive dependent on experience',
        location: 'London'
      },
      {
        title: 'Senior Backend Engineer',
        description: 'https://www.atlassian.com/company/careers/detail/0a0587a9-0446-4802-aa99-0eae5322670f',
        salary: 'Competitive dependent on experience',
        location: 'London'
      },
      {
        title: 'Senior Full Stack Software Engineer',
        description: 'https://www.atlassian.com/company/careers/detail/481bc914-5ad4-485c-aa4e-ad5b2fe0649f',
        salary: 'Competitive dependent on experience',
        location: 'London'
      }
    ],
    User: '', // this should be a number?
    Rating: 'rating' //a react component? https://www.npmjs.com/package/react-rating
  },
  {
    Company: 'Charity Crunch',
    Website: 'www.charitycrunch.com',
    About: 'Change Lives with Charity Crunch. Begin Your Fundraising Story Today. Visit Charity Crunch For Ideas And Create A Page. A Simple Way To Fundraise. Start Raising Money Today. Make Good Things Happen. Hit Your Targets Fast. £5bn+ Raised For Causes. Raise Money Easily.',
    Industry: 'non profit',
    Logo: 'https://cdn.pixabay.com/photo/2019/07/11/10/19/motivation-4330453_1280.jpg',
    Jobs: [
      {
        title: 'Junior Data Engineer',
        description: 'https://blackbaud.wd1.myworkdayjobs.com/en-US/JustGiving/job/London---England/Junior-Data-Engineer_R0006874-3',
        salary: '£25,000',
        location: 'Manchester'
      },
      {
        title: 'Senior Data Engineer',
        description: 'https://blackbaud.wd1.myworkdayjobs.com/en-US/JustGiving/job/London---England/Senior-Data-Engineer_R0006674',
        salary: '£50,000',
        location: 'Manchester'
      },
      {
        title: 'Software Engineer – Full-Stack – .NET, React, Redux',
        description: 'https://blackbaud.wd1.myworkdayjobs.com/en-US/JustGiving/job/London---England/Full-Stack-Engineer---NET--React--Redux_R0006517',
        salary: '£50,000',
        location: 'Manchester'
      }],
    User: 'user',
    Rating: 'rating'
  },
  {
    Company: 'Language Pirate',
    Website: 'www.languagepirate.com',
    About: 'Learn a language with thousands of video clips of real native speakers, fun and effective games to practice your skills. Start learning on web or on our apps!',
    Industry: 'education',
    Logo: 'https://i.pinimg.com/originals/4f/a7/ea/4fa7ea7edbad54b768f472066cc287cb.jpg',
    Jobs: [
      {
        title: 'VP of Marketing',
        description: 'https://apply.workable.com/memrise/j/116580CD39/',
        salary: '£60,000',
        location: 'Edinburgh'
      },
      {
        title: 'Frontend Engineer (React)',
        description: 'https://apply.workable.com/memrise/j/46F192D72E/',
        salary: '£30,000',
        location: 'Edinburgh'
      },
      {
        title: 'Head of Design',
        description: 'https://apply.workable.com/memrise/j/B35E8E6BD9/',
        salary: 'Commensurate with experience',
        location: 'Edinburgh'
      }
    ],
    User: 'user',
    Rating: 'rating'
  },
]
