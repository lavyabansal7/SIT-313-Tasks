import React, { useEffect, useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const loggedIn = localStorage.getItem("authenticated");
    if (loggedIn === 'true') {
      setAuthenticated(true);
    }
  }, []); // Run only on component mount

  const logOutClick = () => {
    console.log("Logging out..."); // Debugging
    setAuthenticated(false);
    localStorage.setItem("authenticated", "false");

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <Menu>
      <Link to="/App"><Menu.Item><h3>Dev @ Deakin</h3></Menu.Item></Link>

      <Input className="headerSearch" icon='search' placeholder='Search...' />

      <Menu.Menu position="right">

        <Menu.Item name='post'>
          <Link to="/post">Post</Link>
        </Menu.Item>

        <Menu.Item name='login'>
          {authenticated ? (
            <span onClick={logOutClick}>Log Out</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    
  );
};

export default Header;
