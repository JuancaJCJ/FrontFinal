import React, { Fragment } from "react"
import { Route, Redirect } from "react-router-dom"
import HomeView from './views/HomeView'
import UploadFile from './views/UploadView'

function Routes () {
    return (
      <Fragment>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route exact path="/home" component={HomeView}/>
        <Route exact path="/upload" component={UploadFile}/>
      </Fragment>
    )
  }
  
  export default Routes;