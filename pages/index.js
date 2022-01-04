import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import profilePic from '../public/assets/image3.jpg'
import showcase from '../public/assets/image.jpg'
import showcase2 from '../public/assets/image2.jpg'
import logo from '../public/assets/image5.jpg'
import background from '../public/assets/background.png'

import Link from 'next/link'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {useState} from 'react'

import dbConnect from '../utils/dbConnect';

import text from '../models/text';


export default function Home(props) {
  console.log(props, 'props here')
  const myDate = new Date();
  const [mobileMenuState, setMobileMenuState] = useState(false)

  function toggleMenuState() {
    return setMobileMenuState(previous => !previous)
  }

  function toggleMenuStateOff() {
    return setMobileMenuState(false)
  }

  return (
    <div id="Home" className={styles.container}>
      <Head>
        <title>Robkay Beauty</title>
        <meta name="description" content={"Robkay Beauty - " + props.text.intro + ". " + props.text.caption2} />
        <meta name="author" content="Robyn K" />
        <meta property="url" content="https://robkaybeauty.com" />
        <meta property="image" content="/robyn.png" />
        <meta name="og:description" content={"Robkay Beauty - " + props.text.intro + ". " + props.text.caption2} />
        <meta name="og:author" content="Robyn K" />
        <meta property="og:url" content="https://robkaybeauty.com" />
        <meta property="og:image" content="/robyn.png" />
        <link
          rel="preload"
          href="/fonts/Acumin-RPro.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Bodoni-Classic-Roman.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {mobileMenuState && <div
        style={{width: '100%', height: '100%', position: 'fixed', zIndex: 2, left: 0, top: 0,
        background: 'rgba(0,0,0,0.85)',
      }}
      />}
      <div
        /* nav */
        className={styles.nav}
        style={{transition: 'padding 140ms ease-in-out',
        // background: 'blue'
      }}
      >
      <Link href="https://robkaybeauty.com">
      <span
      style={{cursor: 'pointer'}}
        className="logo">
        ROBKAY <span className="beauty">BEAUTY</span>
      </span>
      </Link>
      <div
        style={{
          // backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '45%',
        }}
      >
        <div className="menu-wrap">

    <input onClick={() => toggleMenuState()} type="checkbox" className="toggler" checked={mobileMenuState}/>
    <div className="hamburger"><div></div></div>
    <div className="menu">
      <div>
        <div>
          <ul>
            <li><a onClick={() => toggleMenuStateOff()} href="#Home">Home</a></li>
            <li><a onClick={() => toggleMenuStateOff()} href="#About">About</a></li>
            <li><a onClick={() => toggleMenuStateOff()} href="#OurWork">Our Work</a></li>
            <li><a onClick={() => toggleMenuStateOff()} href="#Services">Services</a></li>
            <li><a onClick={() => toggleMenuStateOff()} href="mailto: robkaymua@gmail.com">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
        <ul 
          className="websiteMenu"
          style={{
            // backgroundColor: 'green',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <li><a href="#About">About</a></li>
          <li><a href="#OurWork">Our Work</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="mailto: robkaymua@gmail.com">Contact</a></li>
        </ul>
      </div>
      </div>
      <div
        style={{
          paddingTop: '13.2vmax'
        }}
      >

      </div>
      <main className={styles.main}>
        <div 
          className={styles.contentWrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>
            {props.text.intro}
            </h1>
          </div>
        </div>
        <div
          id="About"
            style={{display: 'flex', width: '100%'}}
          >
            {/* <div style={{width: '10%'}} className={styles.hideMobile}/> */}
            <div className={styles.hideMobileAboutText}>
              <div style={{width: '75%'}}>
              <p className={styles.title}>
                <i>{props.text.caption1}</i>
              </p>
              </div>
            </div>
        <div>
        <span className="faded faded-all">
        <Image
          src={profilePic}
          alt="Picture of the author"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        </span>
        </div>
        {/* <div style={{width: '10%'}} className={styles.hideMobile}/> */}
        </div>
        <div
            style={{display: 'flex', width: '100%', justifyContent: 'center', }}
          >
            {/* <div style={{width: '10%'}} className={styles.hideMobile}/> */}
            <div className={styles.showMobileAboutText}>
              <div style={{textAlign: 'center'}}>
              <p>
                <i>{props.text.caption1}</i>
              </p>
              </div>
            </div>
            </div>
            <div
            id="OurWork"
            className={styles.sliderDiv}
            style={{display: 'flex', paddingTop: '12.5vw', justifyContent: 'center', alignItems: 'center'}}
          >
            <Carousel dynamicHeight={true} emulateTouch={true} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={7000}>
            <div>
        <Image
          src={showcase}
          alt="Showcase Image 1"
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <p className="legend">Demo 1</p>
        </div>
        <div>
        <Image
          src={showcase2}
          alt="Showcase Image 2"
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        </div>
            </Carousel>
        </div>
        <div
            style={{display: 'flex', width: '100%', justifyContent: 'center', }}
          >
            {/* <div style={{width: '10%'}} className={styles.hideMobile}/> */}
            <div className={styles.showMobileAboutText}>
              <div style={{textAlign: 'center'}}>
              <p>
                <i>{props.text.caption2}</i>
              </p>
              </div>
            </div>
            </div>
            <div
            id="Services"
            className="services"
              style={{paddingTop: '8vmax',listStyle: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}
            >
              <h1 className="services2">Services</h1>
              <ul style={{listStyle: 'none'}}>
                <br/>
                <li>
                  <p><i>Makeup Application</i></p>
                  <p><i>$85 ... 1 hr</i></p>
                  <div className={styles.heartBackground}>
              <Image
          src={background}
          alt="Picture of the author"
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        </div>
                </li>
                <br/>
                <li>
                  <p><i>Bridal Makeup Glam</i></p>
                  <p><i>$100 ... 1 hr 30min</i></p>
                </li>
                <br/>
                <li>
                  <p><i>Bridal Makeup</i></p>
                  <p><i>$150 ... 2 hrs</i></p>
                </li>
                <br/>
                <li>
                  <p><i>Wedding Makeup Trial</i></p>
                  <p><i>$80 ... 1 hr 30min</i></p>
                </li>
                <br/>
                <li>
                  <p><i>Powder Ombré Brows (Virgin)</i></p>
                  <p><i>$350 ... 3-4 hrs</i></p>
                </li>
                <br/>
                <li>
                  <p><i>Brows Touch Up</i></p>
                  <p><i>$75 ... 1 hr 30min</i></p>
                </li>
                <br/>
                <li>
                  <p><i>Annual Brow Touch Up</i></p>
                  <p><i>$175 ... 2 hrs</i></p>
                </li>
              </ul>
            </div>
      </main>

      <footer className={styles.footer}>
          <span className={styles.logo}>
            <Image className={styles.invert} src={logo} alt="Robkay Beauty Logo" width={100} height={30}/>
          </span>
          <p>© {myDate.getFullYear()}</p>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {

  dbConnect();
  const pageText = await text.find({_id: process.env.DATA_ID});
  return {
    props: {
      text: JSON.parse(JSON.stringify(pageText[0]))
    }
  }
}
