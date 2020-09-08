import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>
      <section id='footer'>
        <div className='container'>
          <div className='row text-center text-xs-center text-sm-left text-md-left'>
            <div className='col-xs-12 col-sm-6 col-md-6'>
              <Link className='text-black' to='/' className=''>
                <img
                  src='/footer-logo.png'
                  className='navbar-logo img-fluid'
                  width='125'
                  alt='logo'
                />
              </Link>
              <ul className='list-unstyled quick-links mt-3'>
                <li className='text-white'>
                  More than 1.7 billion people around the world are unbanked and
                  can’t access the financial services they need. Egoras protocol
                  founded in 2019, with a mission to expand financial access to
                  help underserved communities thrive.
                </li>
                <li>
                  <a className='text-black' href=''>
                    © 2020 Egoras Foundation
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-xs-12 col-sm-6 col-md-6'>
              <div className='row'>
                <div className='col-xs-12 col-sm-4 col-md-4'>
                  <h5>Legal</h5>
                  <ul className='list-unstyled quick-links'>
                    <li>
                      <a className='text-black' href='/privacy'>
                        Privacy & policy
                      </a>
                    </li>
                    <li>
                      <a className='text-black' href='/terms'>
                        Terms & Condition
                      </a>
                    </li>
                    {/* <li>
                      <Link className='text-black' to='/aboutus'>
                        About Us
                      </Link>
                    </li> */}
                    <li>
                      <a className='text-black' href='https://docs.egoras.com'>
                        API
                      </a>
                    </li>
                    <li>
                      <a className='text-black' href='https://docs.egoras.com'>
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-xs-12 col-sm-4 col-md-4'>
                  <h5>Quick links</h5>
                  <ul className='list-unstyled quick-links'>
                    <li>
                      <Link class='text-black' to='/companies'>
                        Companies
                      </Link>
                    </li>
                    <li>
                      <Link class='text-black' to='/requests'>
                        Requests
                      </Link>
                    </li>
                    <li>
                      <Link class='text-black' to='/createloan'>
                        Create a Loan
                      </Link>
                    </li>
                    <li>
                      <Link to='/companyreg' className='text-black'>
                        Partner with us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='col-xs-12 col-sm-4 col-md-4'>
                  <h5>Social</h5>
                  <ul className='list-unstyled quick-links'>
                    <li>
                      <a
                        className='text-black'
                        href='https://t.me/egorasmarket'
                      >
                        Telegram
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-black'
                        href='https://web.facebook.com/egorasmarket/'
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-black'
                        href='https://twitter.com/egorasmarket'
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a className='text-black' href=''>
                        Reddit
                      </a>
                    </li>
                    <li>
                      <a className='text-black' href=''>
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a className='text-black' href=''>
                        Youtube
                      </a>
                    </li>
                    <li>
                      <a className='text-black' href=''>
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
