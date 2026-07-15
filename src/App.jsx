import React from 'react'
import './App.css'
import logo from './assets/logo.svg'
import student from './assets/student.svg'
import l1 from './assets/l1.svg'
import l2 from './assets/l2.svg'
import l3 from './assets/l3.svg'
import l4 from './assets/l4.svg'
import videos from './assets/videos.svg'
import gplay from './assets/gplay.svg'
import astore from './assets/astore.svg'
import ending from './assets/ending.svg'
import footer from './assets/footer.svg'
import { MdOutlineLanguage } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";


const App = () => {
  return (
    <div>
      <main>
        <header>
          <nav>
            <img src={logo} alt="" />
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Webinar</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
            <div className="btns">
              <h1>Eng <MdOutlineLanguage style={{width:'24px',height:'24px'}} /> <MdArrowDropDown /></h1>
              <button>Login</button>
            </div>
          </nav>
          <div className="first">
            <img src={student} alt="" />
            <div className="texter">
              <h1>Grow Your Skills To Advance Your Career Path.</h1>
              <p>We have something big for you who want to level up!</p>
              <form>
                <input type="text"  placeholder='What do you want to learn...'/>
                <FiSearch style={{background:'#282B57',padding:'10px',borderRadius:'6px',color:'#9A9CCB',fontSize:'44px'}} />
              </form>
                <p>Suggestions</p>
                <div className="sugestions">
                  <h3>UI UX Design</h3>
                  <h3>CSS Fundamental</h3>
                  <h3>3D Design Illustration</h3>
                  <h3>Website Development</h3>
                  <h3>Logo Design</h3>
                  <h3>Icon Design</h3>
                </div>
            </div>
          </div>
        </header>
          <div className="shits">
            <div className="shit">
              <h1>
                Get New Friends
              </h1>
              <p>You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!</p>
            </div>
            <div className="shit">
              <h1>
                Expert and Fun Mentor
              </h1>
              <p>Learn with earnest and don’t forget to get relax too. Learn and enjoy the materials or classes with our expert mentors.</p>
            </div>
            <div className="shit">
              <h1>
                Expert and Fun Mentor
              </h1>
              <p>You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!</p>
            </div>
          </div>
          <h1 className="h1">What Do You Want to Learn?</h1>
          <p className="p">Choose the right class as you need. Then enjoy studying.</p>
          <div className="learnings">
            <div className="learning">
              <img src={l1} alt="" />
              <a href="#">Technology</a>
              <h1>Digital Marketing Strategy</h1>
              <p>This course aims to give you deeper understanding of core processes ...</p>
              <button>Access Class</button>
            </div>
            <div className="learning">
              <img src={l2} alt="" />
              <a href="#">Design</a>
              <h1>Figma Fundamental</h1>
              <p>These lessons and exercises will help you start designing with Figma ...</p>
              <button>Access Class</button>
            </div>
            <div className="learning">
              <img src={l3} alt="" />
              <a href="#">Coding</a>
              <h1>HTML Fundamental</h1>
              <p>Well organized and easy to make you understand tutorials with lots of ...</p>
              <button>Access Class</button>
            </div>
            <div className="learning">
              <img src={l4} alt="" />
              <a href="#">Coding</a>
              <h1>Android App Development </h1>
              <p>Take your Android coding skills to the next level, advanced Android app ...</p>
              <button>Access Class</button>
            </div>
          </div>
          <button style={{marginBottom:'175px'}} className='btn'>Show All Classes</button>
          <h1 className="h1">Live Online Webinar</h1>
          <p className="p">You can stream Webinar live on our apps. Stay update on our Webinar, it’s Free!</p>
          <img className='video'  src={videos} alt="" />
          <h1 className="h1">Course Pricing</h1>
          <p className="p">Choose pricing that suits to your need.</p>
          <div className="options">
            <div className="option">
              <div className="hs">
              <h1>Free</h1>
              <h2>0$</h2>
              <h3>/month</h3>
              </div>
              <ul>
                <li>Free e-book for every class</li>
                <li>Materials update every day</li>
                <li>Free download material videos</li>
                <li>Unlock 5 material videos</li>
              </ul>
              <button>Buy it</button>
            </div>
            <div className="option">
              <div className="hs">
              <h1>Express</h1>
              <h2>75$</h2>
              <h3>/month</h3>
              </div>
              <ul>
                <li>Free e-book for every class</li>
                <li>Materials update every day</li>
                <li>Free download material videos</li>
                <li>Meeting 2 times a week</li>
                <li>Unlock 15 material videos</li>
              </ul>
              <button>Buy it</button>
            </div>
            <div className="option">
              <div className="hs">
              <h1>Premium</h1>
              <h2>115$</h2>
              <h3>/month</h3>
              </div>
              <ul>
                <li>Free e-book for every class</li>
                <li>Materials update every day</li>
                <li>Free download material videos</li>
                <li>Private chat with mentor</li>
                <li>Meeting 3 times a week</li>
                <li>Unlock up to 30 material videos</li>
                <li>Unlimited saved class</li>
              </ul>
              <button>Buy it</button>
            </div>
          </div>
          <div className="app">
            <div className="text">
              <h1>Get Our Apps, Now!</h1>
              <p>Reach out our apps everywhere and everytime with Sinauw Mobile Application.</p>
              <div className="imges">
                <img src={gplay} alt="" />
                <img src={astore} alt="" />
              </div>
            </div>
              <img src={ending} alt="" />
          </div>
          <img src={footer} alt="" />
      </main>
    </div>
  )
}

export default App
