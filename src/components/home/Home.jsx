import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'

function Home() {
  return (
    <section className="home section" id="home">
        <div className="home__container containerGang gridGang">
            <div className="home__content gridGang">
                <Social />
                <div className='man'>
                  <div className="home__img"></div>
                  </div>
                <Data />
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}

export default Home