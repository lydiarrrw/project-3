export default function getCompanyData(users) {

  return [
    {
      company: 'Vulcan',
      website: 'vulcan.com',
      about: 'A cutting edge fintech wealth management organisation with offices in Central London. Our primary objective is to provide wealth management advice to a portfolio of high net worth clients, using market leading financial technology.',
      industry: 'FinTech',
      logo: 'logo.png',
      jobs: [
        {
          title: 'Java Developer',
          description: 'As a Java Developer at Vulcan, the new features that you will be working on can range from using machine learning algorithms for our anti-fraud team, through to creating new analytics tools. The developer will also get the opportunity to travel between our European offices and meet with other teams. You will be joining a growing and successful team that provide an attractive salary package with share options. You will also have the opportunity for flexible working and remote working. Our company has a horizontal structure meaning we welcome and value innovation and ideas from our developers!',
          salary: '£50,000',
          location: 'Remote',
          user: users[1]
        },
        {
          title: 'Data Scientist',
          description: 'Vulcan is looking for a Python and SQL focused Data Scientist to join our fast-growing Data team in London. You will be part of making our organisation fully data-driven and make a true impact, working in a fast paced production environment. As a Data Scientist you will work on a variety of interesting data challenges with access to the latest technology. You will be able to leverage large data sets and create useful and meaningful insights to help make better business decisions for this FinTech. You will use your knowledge with SQL and Python, and experience building Machine Learning models to work on exciting projects.',
          salary: '£70,000',
          location: 'London',
          user: users[1]
        },
        {
          title: 'Product Manager',
          description: 'Vulcan is looking for confident, knowledgeable product manager to join our London office. You will work in a fast-paced international team on multiple greenfield projects and manage several digital products and help improve the usability of our app from the landing pages/onboarding through to payment clearing.',
          salary: '£50,000',
          location: 'London',
          user: users[1]
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
      jobs: [
        {
          title: 'Product Manager',
          description: 'Ridgeway is looking for a Product Designer to help grow the design output for our portfolio of early stage start-ups working in cutting edge technology. You will be able to operate at a senior strategic level with start-up founders, whilst “getting your hands dirty” with project work. You will be collaborating with the full Outlier team, defining priorities and coordinating design schedules across multi-disciplined teams.',
          salary: '£50,000',
          location: 'London',
          user: users[1]
        },
        {
          title: 'Integration Engineer',
          description: 'As an Integration Engineer at Ridgeway, you’ll be joining a small yet talented team to help manage our Managed Node Service’s growing client base. You’ll be working closely with the organisation’s business and technical side by helping spin up new Chainlink nodes and keep them up to date while interacting with our Managed node clients. Existing knowledge of Chainlink node infrastructure is desirable but not required, but you will need to be technically savvy and have some DevOps and programming experience.',
          salary: '£60,000',
          location: 'London',
          user: users[1]
        },
        {
          title: 'Research Engineer',
          description: 'Ridgeway is recruiting a Research Engineer who will serve as part of an interdisciplinary research team applying scientific principles to discover and develop economic systems meeting high level descriptive goals using tools from an array of disciplines from multi-agent control to mechanism design. The Engineer is responsible for developing and documenting mathematical models based on requirements from internal and external stakeholders. The Engineer will use formal analysis techniques to refine economic models by characterizing evolutionary tendencies and attack vectors, as well as using stochastic process simulations to explore system trajectories and define practical bounds on system parameters. The Engineer will have opportunities to present work to technical and non-technical audiences, both publicly and privately.',
          salary: '£75,000',
          location: 'Remote',
          user: users[1]
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
      jobs: [
        {
          title: 'SEO analyst',
          description: 'Were looking for a smart, motivated, and passionate SEO Analyst to join our team. We’d like you to be responsible for researching, learning, and suggesting ways that our clients can improve their SEO. Know or have ideas about how you can track and measure the results. Work on different aspects of SEO: technical, content, digging into data and on-page factors',
          salary: '£30,000',
          location: 'Manchester',
          user: users[1]
        },
        {
          title: 'Junior React Developer',
          description: 'We’re looking for a thoughtful highly-motivated, frontend developer to join our team. Knowledge of React is essential, familiarity with Bulma, SASS, and RESTful APIs is also desirable.',
          salary: '£32,000',
          location: 'Manchester',
          user: users[1]
        },
        {
          title: 'Tech Lead',
          description: 'We are a global digital agency  seeking a skilled Technical Lead to guide a talented team to design and develop exciting and engaging solutions across multiple platforms. You will liaise closely with a range of technical clients to gain a good understanding of their requirements.This is a highly varied, hands-on Technical Lead role, where you will work across a broad range of projects in a variety of industries. You will keep up-to-date with the latest technologies and industry trends to deliver high-availability and scalable solutions.',
          salary: '£55,000',
          location: 'Manchester',
          user: users[1]
        }],
      user: users[0],
      rating: 5
    },
    {
      company: 'TechCal',
      website: 'www.techcal.com',
      about: 'Infinitely flexible. Incredibly productive for teams of all sizes. TechCal manages your calendar, from big project details to micro tasks. Collaborate anywhere, even on different devices',
      industry: 'tech',
      logo: 'https://cdn.pixabay.com/photo/2019/08/11/18/50/icon-4399684_1280.png',
      jobs: [
        {
          title: 'Front End Engineer',
          description: 'desc',
          salary: 'Competitive dependent on experience',
          location: 'London',
          user: users[1]
        },
        {
          title: 'Senior Backend Engineer',
          description: 'desc',
          salary: 'Competitive dependent on experience',
          location: 'London',
          user: users[1]
        },
        {
          title: 'Senior Full Stack Software Engineer',
          description: 'desc',
          salary: 'Competitive dependent on experience',
          location: 'London',
          user: users[1]
        }
      ],
      user: users[0],
      rating: 3.8
    },
    {
      company: 'Charity Crunch',
      website: 'www.charitycrunch.com',
      about: 'Change Lives with Charity Crunch. Begin Your Fundraising Story Today. Visit Charity Crunch For Ideas And Create A Page. A Simple Way To Fundraise. Start Raising Money Today. Make Good Things Happen. Hit Your Targets Fast. £5bn+ Raised For Causes. Raise Money Easily.',
      industry: 'non profit',
      logo: 'https://cdn.pixabay.com/photo/2019/07/11/10/19/motivation-4330453_1280.jpg',
      jobs: [
        {
          title: 'Junior Data Engineer',
          description: 'desc',
          salary: '£25,000',
          location: 'Manchester',
          user: users[1]
        },
        {
          title: 'Senior Data Engineer',
          description: 'desc',
          salary: '£50,000',
          location: 'Manchester',
          user: users[1]
        },
        {
          title: 'Software Engineer – Full-Stack – .NET, React, Redux',
          description: 'desc',
          salary: '£50,000',
          location: 'Manchester',
          user: users[1]
        }],
      user: users[0],
      rating: 4.8
    },
    {
      company: 'Language Pirate',
      website: 'www.languagepirate.com',
      about: 'Learn a language with thousands of video clips of real native speakers, fun and effective games to practice your skills. Start learning on web or on our apps!',
      industry: 'education',
      logo: 'https://i.pinimg.com/originals/4f/a7/ea/4fa7ea7edbad54b768f472066cc287cb.jpg',
      jobs: [
        {
          title: 'VP of Marketing',
          description: 'desc',
          salary: '£60,000',
          location: 'Edinburgh',
          user: users[1]
        },
        {
          title: 'Frontend Engineer (React)',
          description: 'desc',
          salary: '£30,000',
          location: 'Edinburgh',
          user: users[1]
        },
        {
          title: 'Head of Design',
          description: 'desc',
          salary: 'Commensurate with experience',
          location: 'Edinburgh',
          user: users[1]
        }
      ],
      user: users[0],
      rating: 4.2
    },
    {
      company: 'Floogle',
      website: 'www.floogle.com',
      about: 'Established in 1994, Floogle began as a small website, allowing users to search for   anything beginning with the letter F. The company then went on to expand, and is now the  leading search engine website dedicated to searching for other search engine websites.',
      industry: 'Internet, Cloud Computing, Computer Software',
      logo: '',
      jobs: [
        {
          title: 'Software Engineer - Junior/ Associate',
          description: 'Your new company You’ll be joining a global investment management firm  with over a trillion assets under management - this scale brings about significant data  and technology challenges which you can help solve. Your new role You’ll use your  understanding of the SDLC to build exciting data driven technology products for various  users such as portfolio managers within front office.',
          salary: '£25,000',
          location: 'London',
          user: users[1]
        },
        {
          title: 'Ruby Developer',
          description: 'We have a unique opportunity for a Full Stack Ruby-on-Rails Developer to  be a part of an outstanding Fintech business in London, who are scaling their tech team  due to not only scaling their product, but creating new services for their clients. You  will be working with some incredibly talented Software Developers, who truly value the   importance of collaboration and high level coding',
          salary: '£42,000',
          location: 'London',
          user: users[1]
        },
        {
          title: 'Full Stack Developer',
          descrition: 'We are looking for a Full Stack Developer for our creative consultancy   client. You will work on innovative projects that span offices across Europe, providing   expert skills in front end development to cross-functional teams. You will be   responsible for the design and production of innovative website and web application   user interfaces. This involves working closely with creative designers and developers   to turn static designs into interactive and engaging experiences',
          salary: '£30,000',
          location: 'London',
          user: users[1]
        }],
      user: users[0],
      rating: 3.7
    },
    {
      company: 'Oscorp',
      website: 'www.oscorp-industries.com',
      about: 'Oscorp was founded by Norman Osborn, a very well-known boss throughout Oscorp and   even  New York . Visit our website for information regarding our previous attempt to cure   the cross-species breakout in the state, which Spider Man truly stopped.',
      industry: 'Experimental Science, Military Research',
      logo: 'https://i.pinimg.com/600x315/fa/19/83/fa1983be614d35f930b919d03172d590.jpg',
      jobs: [
        {
          title: 'Junior Software Engineer',
          description: 'This role will commence as a Fixed term contract for 1 year. Gives both  parties flexibility. The client is well known for investing in their employees, the  goal is to hire candidates permanently after a successful 1 year fixed term contract.',
          salary: '£22,000',
          location: 'Gotham',
          user: users[1]
        },
        {
          title: 'Junior Developer',
          description: 'We have an exciting new opportunity that has become available for a   Junior Developer to work for a market leading Law Firm on a permanent basis.',
          salary: '£25,000',
          location: 'London',
          user: users[1]
        },
        {
          title: 'Junior Programmer',
          descrition: 'We’re working with a brilliant emerging talent in the world of indie game  development. This studio functions partly as a work-for-hire and porting house, and is   also hard at work on their own IP. If you’re looking for variety, you can’t go wrong  with a multi-platform studio which gets to work with the likes of Sony and Nintendo!',
          salary: '£26,000',
          location: 'London',
          user: users[1]
        }],
      user: users[0],
      rating: 4.1
    },
    {
      company: 'Code-Cog',
      website: 'www.code-cog.net',
      about: 'Codecog was formed by the Flendon brothers back in 2003, and has been providing   companies with expert advice on their computer systems ever since. More recently, the   company have expanded into other markets, and is one of the highest holders of bitcoin.',
      industry: 'internet',
      logo: '',
      jobs: [
        {
          title: 'Junior Developer C#',
          description: 'This is a fantastic opportunity to join a leading financial services  client in the city of London. You’ll join a small tech hub and develop   business-critical applications across both front and back-end development. You’ll get   involved in everything from developing new features, system enhancements and support.   This is a highly varied role and you’ll have the opportunity to learn and work with new   technologies',
          salary: '£36,000',
          location: 'London',
          user: users[1]
        },
        {
          title: 'Full Stack Java Developer',
          description: 'Systematic hedge fund in London are looking for a Java Developer to join  their team. They use technology to build out current workflows and processes to create   repeatable, scalable results. They pride themselves on their use of technology to   automate their processes. The systems you’ll be building will have a direct impact on   the business as they’ll be exposed to the portfolio managers, quants and operations   team who all place an immense amount of value and trust in these systems. Also, with no   business analysts you’ll be involved in every stage of the SDLC - from information  gathering to deploying, supporting and monitoring the system',
          salary: '£42,000',
          location: 'London',
          user: users[1]
        },
        {
          title: 'Junior iOS / Mobile Developer',
          descrition: 'An exciting, creative visual FX / graphics company is seeking a talented   junior iOS / Mobile developer to work on their next generation creative and mobile  applications. A creative mind-set is essential, and someone with at least 1 iOS app  that they have published.',
          salary: '£28,000',
          location: 'London',
          user: users[1]
        }],
      user: users[0],
      rating: 4.6
    }
  ]
}
