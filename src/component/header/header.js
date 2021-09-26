import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers,faAddressCard,faIdBadge,faSearch } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
  const Homeicon = <FontAwesomeIcon icon={faHome} />
  const usersicon = <FontAwesomeIcon icon={faUsers} />
  const Addressicon = <FontAwesomeIcon icon={faAddressCard} />
  const IdBadgeicon = <FontAwesomeIcon icon={faIdBadge} />
  const Searchicon = <FontAwesomeIcon icon={faSearch} />
  return (
    <div className='header'>
      {/* manu section */}
      <div className='manu'>
      <div className='logo'>
        <h1>SoftTcch<span>.IT</span></h1>
      </div>
      <nav>
        <ul>
          <li><a href="/Home">{Homeicon} Home</a></li>
          <li><a href="/members">{usersicon} Members</a></li>
          <li><a href="/about">{Addressicon} About us</a></li>
          <li><a href="/contact">{IdBadgeicon} Contact us</a></li>
        </ul>
      </nav>
      </div>
      {/* manu section end */}
      {/* developers section */}
      <div className='developers'>
        <div className='developer'>
          <p>Front End Developer</p>
          <h2>Members : 50</h2>
        </div>
        <div className='developer'>
        <p>Software Developer</p>
        <h2>Members : 100</h2>
        </div>
        <div className='developer'>
        <p>Full Stack Developer</p>
        <h2>Members : 60</h2>
        </div>
        <div className='developer'>
        <p>Total Developers</p>
        <h2>Members : 210</h2>
        </div>
      </div>
      {/* developers section end */}
    </div>
  );
};

export default Header;