import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import LogIn from './components/LogIn'
import Students from './components/Students'
import Stparents from './components/Stparents'
import { AuthProvider } from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/stparents" component={Stparents} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;