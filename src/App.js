import React from "react"
import { Link } from 'react-router'
import { useState } from 'react';
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./AuthContext"
import { BrowserRouter as Router, Switch, Route , Redirect} from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgetPassword"
import UpdateProfile from "./UpdateProfile"
import { v4 as uuidV4 } from 'uuid';
import HomeScreen from "./Home"
import TextEditor from "./text-editor"


function App() {
const [docId, setDocId] = useState('');
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/home"> <HomeScreen docId={docId} setDocId={setDocId} /> </PrivateRoute>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/rooms">
          <Redirect to={`/rooms/documents/${uuidV4()}`} />
        </Route>
        <Route path="/rooms/documents/:id">
          <TextEditor />
        </Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
