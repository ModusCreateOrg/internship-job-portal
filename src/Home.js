import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/english">English</Link>
          </li>
          <li>
            <Link to="/spanish">Spanish</Link>
          </li>
          <li>
            <Link to="/portuguese">Portuguese</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
