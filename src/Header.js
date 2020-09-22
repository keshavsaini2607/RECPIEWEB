import React from 'react'
import './Header.css'
import { SearchOutlined, Notifications, Shop, People, Share } from '@material-ui/icons'
import { Link } from '@material-ui/core'


function Header() {
    return (
        <div className="header">
        <div className="header__left">
            <h1>Foodmania</h1>
            
            <div class="dropdown">
                <div className="menu__title">
                <span className="span__head">Shop </span>
                </div>
                 <div class="dropdown-content">
                    <Link  className="dropdown_options">
                    <Notifications className="userIcon" />
                    <span>Notifications</span>
                    </Link>
                    <Link  className="dropdown_options">
                    <Shop className="userIcon" />
                    <span>Videos</span>
                    </Link>
                    <Link  className="dropdown_options">
                    <People className="userIcon" />
                    <span>Our Community</span>
                    </Link>
                    <Link  className="dropdown_options">
                    <Share className="userIcon" />
                    <span>Socialize</span>
                    </Link>
                 </div>
             </div>

                <div class="dropdown">
                    <div className="menu__title">
                        <span className="span__head">Recpies </span>
                    </div>
                    <div class="dropdown-content">
                        <a href="/food">
                        <span>See all Recpies</span>
                        </a>
                    </div>
                </div>

                <div class="dropdown">
                    <a href="/contactus" className="menu__title">
                        <span className="span__head">Contact us </span>
                    </a>
                    
                </div>

          <div class="dropdown">
          <div className="menu__title">
          <span className="span__head">Hotline</span>
          </div>
           <div class="dropdown-content">
              <Link  className="dropdown_options">
              <Notifications className="userIcon" />
              <span>Notifications</span>
              </Link>
              <Link  className="dropdown_options">
              <Shop className="userIcon" />
              <span>Videos</span>
              </Link>
              <Link  className="dropdown_options">
              <People className="userIcon" />
              <span>Our Community</span>
              </Link>
              <Link  className="dropdown_options">
              <Share className="userIcon" />
              <span>Socialize</span>
              </Link>
           </div>
       </div>
            <SearchOutlined className="search__icon" />
        </div>
            
        <div className="header__right">
            <span id="span__login">Login</span>
            <span id="span__signup">Signup</span>
        </div>
        </div>
    )
}

export default Header
