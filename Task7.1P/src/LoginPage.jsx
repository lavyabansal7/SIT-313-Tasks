import React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import NavBar from './Menu'
import db from "./firebase"
import { collection, query, getDocs } from "firebase/firestore";
import { Navigate } from 'react-router-dom';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      authenticated: false,
      failed: false,
    };
  }

  loginUser = async () => {
    try {
      const q = query(collection(db, "users"));
      const snapshot = await getDocs(q);
      const users = snapshot.docs.map(doc => doc.data());

      let authenticated = false;

      users.forEach(user => {
        if (this.state.email === user.email && this.state.password === user.password) {
          authenticated = true;
        }
      });

      if (authenticated) {
        this.setState({ authenticated: true });
        alert("Login successful!");
      } else {
        this.setState({ failed: true, password: "" });
        alert("Login failed: Invalid email or password");
      }

    } catch (error) {
      console.error("Error during login:", error);
      this.setState({ failed: true });
      alert("An error occurred during login");
    }
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    if (this.state.authenticated) {
      // Redirect to home page
      return <Navigate to='/' />;
    }

    return (
      <div>
        <NavBar/>
        <Grid textAlign='center' style={{ height: '800px' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment textAlign='left'>
                <a style={{ textAlign: "right"}} href='/signup'>Sign Up</a>
                <br />
                Your email
                <Form.Input fluid onChange={this.updateInput} value={this.state.email} name="email" />
                Your password
                <Form.Input fluid type='password' onChange={this.updateInput} value={this.state.password} name="password" />
                <Button primary fluid onClick={this.loginUser}>
                  Login
                </Button>
              </Segment>
              {this.state.failed}
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Login;
