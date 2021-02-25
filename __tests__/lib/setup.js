import Company from '../../models/company.js'
import User from '../../models/user.js'

export default async function setup(done) {

  try {
    const users = await User.create([
      {
        name: 'nick',
        email: 'nick@nick.com',
        password: 'nick',
        type: 'company-admin'
      },
      {
        name: 'emma',
        email: 'emma@emma.com',
        password: 'emma',
        type: 'job-seeker'
      },
      {
        name: 'john',
        email: 'john@john.com',
        password: 'john',
        type: 'company-admin'
      }
    ])
    await Company.create([
      {
        company: 'Apple',
        website: 'apple.com',
        about: 'We make phones',
        logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        industry: 'tech',
        user: users[0],
        jobs: [{
          title: 'Java Developer',
          description: 'As a Java Developer at Apple, the new features that you will be working on can range from using machine learning algorithms for our anti-fraud team, through to creating new analytics tools. The developer will also get the opportunity to travel between our European offices and meet with other teams. You will be joining a growing and successful team that provide an attractive salary package with share options. You will also have the opportunity for flexible working and remote working. Our company has a horizontal structure meaning we welcome and value innovation and ideas from our developers!',
          salary: '£50,000',
          location: 'Remote',
          user: users[0]
        }]
      },
      {
        company: 'Facebook',
        website: 'facebook.com',
        about: 'We connect people',
        logo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
        industry: 'tech',
        user: users[2],
        jobs: [{
          title: 'React Developer',
          description: 'As a React Developer at Facebook, the new features that you will be working on can range from using machine learning algorithms for our anti-fraud team, through to creating new analytics tools. The developer will also get the opportunity to travel between our European offices and meet with other teams. You will be joining a growing and successful team that provide an attractive salary package with share options. You will also have the opportunity for flexible working and remote working. Our company has a horizontal structure meaning we welcome and value innovation and ideas from our developers!',
          salary: '£90,000',
          location: 'Edinburgh',
          user: users[2]
        }]
      }
    ])
  }
  catch (err) {
    console.log(err)
  }
  done()
}
