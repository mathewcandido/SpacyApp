import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx'
import { NewEvent } from './pages/NewEvent.jsx'
export const Router = () => {
  return (

    <Switch>
      <Route path='/novoevento' component={NewEvent} />
      <Route path='/editar/:id' component={NewEvent}/>
      <Route path='/' exact component={Home} />
    </Switch>

  )
}