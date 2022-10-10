import Link from 'next/link';
import React from 'react';
import Con from '../assets/styles/Contents.module.scss';

const BaseLayout = ({children}) => {

  const [me, setMe] = React.useState<boolean>(false);
  
  return (
    <>
      <header className="Header">
        <div className="Layout">
          <div className="Homebtn">
            <h1>
              <a onClick={() => console.log('main')}>Cliche</a>
            </h1>
          </div>
          <div className="MenuList">
            {me ? (
              <ul className="Menubtns">
                <li>
                  <a onClick={() => console.log('logout')}>Logout</a>
                </li>
                <li className="review">
                  <Link href="/editreview">
                    <a>
                      <span className="material-icons">add_circle_outline</span>
                    </a>
                  </Link>
                </li>
                <li className="mypage">
                  <Link href="/mypage">
                    <a>
                      <span className={`material-icons`}>account_circle</span>
                    </a>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="Menubtns">
                <li className="login">
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
      <section>
        <div className={Con.Contents}>
          <div className={Con.Layout}>{children}</div>
        </div>
      </section>
    </>
  );
};

export default BaseLayout;