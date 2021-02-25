import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Companies from './components/Companies'
import Company from './components/Company'
import Jobs from './components/Jobs'
import Job from './components/Job'
import PostJob from './components/PostJob'
import Map from './components/Map'
import CreateCompany from './components/CreateCompany'
import About from './components/About'
import Footer from './components/Footer'

import 'bulma'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/companies" component={Companies} />
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/company/create" component={CreateCompany} />
      <Route exact path="/company/:companyId" component={Company} />
      {/* <Route exact path="/company/:companyid/job/:jobId" component={Job} /> */}
      <Route exact path="/job/:jobId" component={Job} />
      <Route exact path="/company/:companyId/job" component={PostJob} />
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/about" component={About} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App