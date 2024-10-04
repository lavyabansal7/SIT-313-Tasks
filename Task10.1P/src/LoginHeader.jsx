import React, { useState, useEffect } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link, useNavigate } from "react-router-dom";

const LoginHeader = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Run on component mount to check authentication status
  useEffect(() => {
    const loggedIn = localStorage.getItem("authenticated");
    console.log("LoggedIn status from localStorage:", loggedIn); // Debugging

    if (loggedIn === 'true') {
      setAuthenticated(true);
      console.log("User is authenticated."); // Debugging
    }
  }, []); // Empty dependency array ensures this runs only on mount

  const logOutClick = () => {
    console.log("Logging out..."); // Debugging
    setAuthenticated(false);
    localStorage.setItem("authenticated", "false");

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <Menu>
      <Link to="/"><Menu.Item><h3>Dev @ Deakin</h3></Menu.Item></Link>

      <Input className="headerSearch" icon='search' placeholder='Search...' />

      <Menu.Menu position="right">
        <Menu.Item name='findQuestion'>
          <Link to="/find_question">Find Question</Link>
        </Menu.Item>

        <Menu.Item name='post'>
          <Link to="/post">Post</Link>
        </Menu.Item>

        {authenticated ? (
          <Menu.Item name='logout'>
            <button onClick={logOutClick}>Logout</button> {/* Ensure the button is rendered */}
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Link to="/login">Login</Link>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default LoginHeader;
