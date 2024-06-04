


import './App.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useState } from 'react'
import spotify from './assets/spotify.png'
import instagram from './assets/insta.png'
import yt from './assets/yt.png'
import tiktok from './assets/tik.png'
import tee from './assets/tee.png'

function App() {

  const [ballHasFallen, setBallHasFallen] = useState(false)
  const [instaShown, setInstaShown] = useState(false)
  const [hideSpotify, setHideSpotify] = useState(false)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollToPlugin)

    let observer = ScrollTrigger.normalizeScroll(true)

    let scrollTween: gsap.core.Tween | null = null

    document.addEventListener("touchstart", e => {
      if (scrollTween) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }, {capture: true, passive: false})
    let goingHome = false

    gsap.fromTo('#Circle', 
      {
      duration: 2,
      x: 0,
      y: -50,
      width: 500,
      height: 500,
      borderRadius: '50%',
      ease: 'bounce',

      }
      ,{
      duration: 2,
      x: 0,
      y: -50,
      width: 350,
      height: 350,
      borderRadius: '50%',
      ease: 'bounce',
      
    })
    gsap.fromTo('#drop', {
      duration: 2,
      
      x: -80,
      y: -1000,

      ease: 'bounce',
    }, {
      duration: 2,
      delay: 1.5,
      x: -80,
      y: -110,
      width: 100,
      height: 100,

      ease: 'bounce',
    })

    gsap.fromTo('#in', {
      duration: 2,
      delay: 2,
      x: 0,
      y: -1000,
      ease: 'bounce',
    }, {
      duration: 2,
      delay: 1.75,
      x: 0,
      y: 10,
      width: 100,
      height: 100,

      ease: 'bounce',
    })

    gsap.fromTo('#The', {
      duration: 2,
      x: 0,
      y: -1000,
      ease: 'bounce',
    }, {
      duration: 2,
      delay: 1,
      x: -100,
      y: -280,
      width: 100,
      height: 100,

      ease: 'bounce',
    })

    gsap.fromTo('#podcast', {
      duration: 2,
      x: 0,
      y: -1000,
      ease: 'bounce',
    }, {
      duration: 2,
      delay: 2,
      x: -100,
      y: 210,
      width: 100,
      height: 100,

      ease: 'bounce',
    })



    
    function goToInfo() {


      setHideSpotify(false)
      scrollTween = gsap.to(window, {
        scrollTo: "#Info",
        onStart: () => {
          // observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
          // observer.enable();
        },
        duration: 1,
        onComplete: () => scrollTween = null,
        overwrite: true
      });

      

      const mm = gsap.matchMedia();

      // add a media query. When it matches, the associated function will run
      mm.add("(min-width: 600px)", () => {

        gsap.to('#Circle', {
          duration: 2,
          x: -10,
          y: 800,
          width: 350,
          height: 350,
          borderRadius: '50%',
          ease: 'bounce',
          onComplete: () => setBallHasFallen(true)
          
        })
  
        gsap.fromTo('#insta-Circle', {
          duration: 4,
          x: -10,
          y: 200,
          ease: 'bounce',
          borderRadius: '50%',

  
          width: 350,
          height: 350,
        }, {
          duration: 4,
          x: -400,
          y: 200,
          width: 100,
          height: 100,
          borderRadius: '50%',

          delay: 2,
    
          ease: 'back'
        })
  
        gsap.to("#insta-Circle", {
          duration: 4,
          x: -400,
          y: 200,
          width: 300,
          height: 100,
          borderRadius: '10px',
          
          delay: 3.5,
          ease: 'back',
          onComplete: () => setInstaShown(true)
        })
  
        gsap.fromTo('#yt-Circle', {
          duration: 4,
          x: -10,
          y: 200,
          ease: 'bounce',
          borderRadius: '50%',

          width: 350,
          height: 350,
        }, {
          duration: 4,
          x: 400,
          y: 200,
          borderRadius: '50%',

          width: 100,
          height: 100,
          delay: 2,
    
          ease: 'back'
        })
  
        gsap.to("#yt-Circle", {
          duration: 4,
          x: 400,
          y: 200,
          width: 300,
          height: 100,
          borderRadius: '10px',
          delay: 3.5,
          ease: 'back'
        })
  
        gsap.fromTo('#tik-Circle', {
          duration: 4,
          x: -10,
          y: 200,
          ease: 'bounce',
          borderRadius: '50%',

  
          width: 350,
          height: 350,
        }, {
          duration: 4,
          x: -400,
          y: 500,
          width: 100,
          height: 100,
          borderRadius: '50%',

          delay: 2,
    
          ease: 'back'
        })
  
        gsap.to("#tik-Circle", {
          duration: 4,
          x: -400,
          y: 500,
          width: 300,
          height: 100,
          borderRadius: '10px',
          delay: 3.5,
          ease: 'back'
        })
  
        gsap.fromTo('#merch-Circle', {
          duration: 4,
          x: -10,
          y: 200,
          ease: 'bounce',
          borderRadius: '50%',
  
          width: 350,
          height: 350,
        }, {
          duration: 4,
          x: 400,
          y: 500,
          width: 100,
          height: 100,
          delay: 2,
          borderRadius: '50%',
          ease: 'back'
        })
  
        gsap.to("#merch-Circle", {
          duration: 4,
          x: 400,
          y: 500,
          width: 300,
          height: 100,
          borderRadius: '10px',
          delay: 3.5,
          ease: 'back'
        })
  
        gsap.fromTo('#spotify-Circle', {
          duration: 2,
          x: -10,
          y: 200,
          ease: 'bounce',
  
          width: 350,
          height: 350,
        }, {
          duration: 2,
          x: -10,
          y: 200,
        
          delay: 2,
    
          ease: 'back'
        })
      

        
      });

      mm.add("(max-width: 600px)", () => {
        gsap.to('#Circle', {
          duration: 2,
          x: 0,
          y: 650,
          width: 350,
          height: 350,
          borderRadius: '50%',
          ease: 'bounce',
          onComplete: () => setBallHasFallen(true)

          
        })

        gsap.fromTo('#insta-Circle', {
          duration: 2,
          x: 0,
          y: 200,
          ease: 'bounce',
          borderRadius: '50%',
          width: 350,
          height: 350,
        }, {
          duration: 2,
          x: -100,
          y: 50,
          width: 100,
          height: 100,
          delay: 2,
          borderRadius: '50%',
          ease: 'back'
        })
  
        gsap.to("#insta-Circle", {
          duration: 2,
          x: -100,
          y: 50,
          width: 100,
          height: 100,
          borderRadius: '10px',
          delay: 2.5,
          ease: 'back'
        })
  
        gsap.fromTo('#yt-Circle', {
          duration: 2,
          x: 0,
          y: 200,
          ease: 'bounce',
          borderRadius: '50%',
          width: 350,
          height: 350,
        }, {
          duration: 2,
          x: 100,
          y: 50,
          width: 100,
          height: 100,
          delay: 2,
          borderRadius: '50%',
          ease: 'back'
        })
  
        gsap.to("#yt-Circle", {
          duration: 2,
          x: 100,
          y: 50,
          width: 100,
          height: 100,
          borderRadius: '10px',
          delay: 2.5,
          ease: 'back'
        })
  
        gsap.fromTo('#tik-Circle', {
          duration: 2,
          x: 0,
          y: 200,
          ease: 'bounce',
          borderRadius: '50%',
          width: 350,
          height: 350,
        }, {
          duration: 2,
          x: -100,
          y: 500,
          width: 100,
          height: 100,
          delay: 2,
          borderRadius: '50%',
    
          ease: 'back'
        })
  
        gsap.to("#tik-Circle", {
          duration: 2,
          x: -100,
          y: 500,
          width: 100,
          height: 100,
          borderRadius: '10px',
          delay: 2.5,
          ease: 'back'
        })
  
        gsap.fromTo('#merch-Circle', {
          duration: 2,
          x: 0,
          y: 200,
          ease: 'bounce',
          borderRadius: '50%',
  
          width: 350,
          height: 350,
        }, {
          duration: 2,
          x: 100,
          y: 500,
          width: 100,
          height: 100,
          delay: 2,
          borderRadius: '50%',
          ease: 'back'
        })
  
        gsap.to("#merch-Circle", {
          duration: 2,
          x: 100,
          y: 500,
          width: 100,
          height: 100,
          borderRadius: '10px',
          delay: 2.5,
          ease: 'back'
        })
  
        gsap.fromTo('#spotify-Circle', {
          duration: 2,
          x: 0,
          y: 200,
          ease: 'bounce',
  
          width: 300,
          height: 300,
        }, {
          duration: 2,
          x: 0,
          y: 175,
        
          delay: 2,
    
          ease: 'back'
        })
      });
      

    
      


  
    }

    function goToHome() {
      setHideSpotify(true)
      goingHome = true

      const mm = gsap.matchMedia();
      setInstaShown(false)
      gsap.set(document.body, {overflow: 'hidden'})
      // add a media query. When it matches, the associated function will run
      mm.add("(min-width: 600px)", () => {

        
  
        gsap.fromTo('#insta-Circle', {
          duration: 4,
          x: -400,
          y: 200,
          ease: 'bounce',
          borderRadius: '10px',

  
          width: 300,
          height: 100,
        }, {
          duration: 4,
          x: -10,
          y: 300,
          width: 100,
          height: 100,
          borderRadius: '50%',


    
          ease: 'back'
        })
  

  
        gsap.fromTo('#yt-Circle', {
          duration: 4,
          x: 400,
          y: 200,
          ease: 'bounce',
          borderRadius: '10px',

          width: 300,
          height: 100,
        }, {
          duration: 4,
          x: -10,
          y: 300,
          borderRadius: '50%',

          width: 100,
          height: 100,

    
          ease: 'back'
        })
  
       
  
        gsap.fromTo('#tik-Circle', {
          duration: 4,
          x: -400,
          y: 500,
          ease: 'bounce',
          borderRadius: '10px',

  
          width: 300,
          height: 100,
        }, {
          duration: 4,
          x: -10,
          y: 300,
          width: 100,
          height: 100,
          borderRadius: '50%',


    
          ease: 'back'
        })
  


      
  
        gsap.fromTo('#merch-Circle', {
          duration: 4,
          x: 400,
          y: 500,
          ease: 'bounce',
          borderRadius: '10px',
  
          width: 300,
          height: 100,
        }, {
          duration: 4,
          x: -10,
          y: 300,
          width: 100,
          height: 100,

          borderRadius: '50%',
          ease: 'back'
        })

        gsap.fromTo('#spotify-Circle', {
          duration: 2,
          x: -10,
          y: 200,
          ease: 'bounce',
  
          width: 350,
          height: 350,
        }, {
          duration: 4,
          x: -10,
          y: 200,
          
          width:0,
          height: 0,
          delay: 2,
          onStart: () => setBallHasFallen(false),

    
          ease: 'back'
        })
  
  
        
      
        gsap.to('#Circle', {
          duration: 4,
          x: 0,
          y: -50,
          width: 350,
          height: 350,
          borderRadius: '50%',
          ease: 'bounce',
          delay: 1,
          
        })
        
      });

      mm.add("(max-width: 600px)", () => {


        gsap.fromTo('#insta-Circle', {
          duration: 4,
          x: -100,
          y: 50,
          ease: 'bounce',
          borderRadius: '10px',

  
          width: 100,
          height: 100,
        }, {
          duration: 4,
          x: -10,
          y: 300,
          width: 100,
          height: 100,
          borderRadius: '50%',


    
          ease: 'back'
        })
  

  
        gsap.fromTo('#yt-Circle', {
          duration: 4,
          x: 100,
          y: 50,
          ease: 'bounce',
          borderRadius: '10px',

          width: 100,
          height: 100,
        }, {
          duration: 4,
          x: -10,
          y: 300,
          borderRadius: '50%',

          width: 100,
          height: 100,

    
          ease: 'back'
        })
  
       
  
        gsap.fromTo('#tik-Circle', {
          duration: 4,
          x: -100,
          y: 500,
          ease: 'bounce',
          borderRadius: '10px',

  
          width: 100,
          height: 100,
        }, {
          duration: 4,
          x: -10,
          y: 300,
          width: 100,
          height: 100,
          borderRadius: '50%',


    
          ease: 'back'
        })
  


      
  
        gsap.fromTo('#merch-Circle', {
          duration: 4,
          x: 100,
          y: 500,
          ease: 'bounce',
          borderRadius: '10px',
  
          width: 100,
          height: 100,
        }, {
          duration: 4,
          x: -10,
          y: 300,
          width: 100,
          height: 100,

          borderRadius: '50%',
          ease: 'back'
        })

        gsap.fromTo('#spotify-Circle', {
          duration: 2,
          x: -10,
          y: 200,
          ease: 'bounce',
  
          width: 350,
          height: 350,
        }, {
          duration: 4,
          x: -10,
          y: 200,
          
          width:0,
          height: 0,
          delay: 2,
          onStart: () => setBallHasFallen(false),

    
          ease: 'back'
        })
  
  
        
      
        gsap.to('#Circle', {
          duration: 4,
          x: 0,
          y: -50,
          width: 350,
          height: 350,
          borderRadius: '50%',
          ease: 'bounce',
          delay: 1,
          
        })
        // gsap.fromTo('#insta-Circle', {
        //   duration: 2,
        //   x: 0,
        //   y: 200,
        //   ease: 'bounce',
        //   borderRadius: '50%',
        //   width: 350,
        //   height: 350,
        // }, {
        //   duration: 2,
        //   x: -100,
        //   y: 50,
        //   width: 100,
        //   height: 100,
        //   delay: 2,
        //   borderRadius: '50%',
        //   ease: 'back'
        // })
  
        // gsap.to("#insta-Circle", {
        //   duration: 2,
        //   x: -100,
        //   y: 50,
        //   width: 100,
        //   height: 100,
        //   borderRadius: '10px',
        //   delay: 2.5,
        //   ease: 'back'
        // })
  
        // gsap.fromTo('#yt-Circle', {
        //   duration: 2,
        //   x: 0,
        //   y: 200,
        //   ease: 'bounce',
        //   borderRadius: '50%',
        //   width: 350,
        //   height: 350,
        // }, {
        //   duration: 2,
        //   x: 100,
        //   y: 50,
        //   width: 100,
        //   height: 100,
        //   delay: 2,
        //   borderRadius: '50%',
        //   ease: 'back'
        // })
  
        // gsap.to("#yt-Circle", {
        //   duration: 2,
        //   x: 100,
        //   y: 50,
        //   width: 100,
        //   height: 100,
        //   borderRadius: '10px',
        //   delay: 2.5,
        //   ease: 'back'
        // })
  
        // gsap.fromTo('#tik-Circle', {
        //   duration: 2,
        //   x: 0,
        //   y: 200,
        //   ease: 'bounce',
        //   borderRadius: '50%',
        //   width: 350,
        //   height: 350,
        // }, {
        //   duration: 2,
        //   x: -100,
        //   y: 500,
        //   width: 100,
        //   height: 100,
        //   delay: 2,
        //   borderRadius: '50%',
    
        //   ease: 'back'
        // })
  
        // gsap.to("#tik-Circle", {
        //   duration: 2,
        //   x: -100,
        //   y: 500,
        //   width: 100,
        //   height: 100,
        //   borderRadius: '10px',
        //   delay: 2.5,
        //   ease: 'back'
        // })
  
        // gsap.fromTo('#merch-Circle', {
        //   duration: 2,
        //   x: 0,
        //   y: 200,
        //   ease: 'bounce',
        //   borderRadius: '50%',
  
        //   width: 350,
        //   height: 350,
        // }, {
        //   duration: 2,
        //   x: 100,
        //   y: 500,
        //   width: 100,
        //   height: 100,
        //   delay: 2,
        //   borderRadius: '50%',
        //   ease: 'back'
        // })
  
        // gsap.to("#merch-Circle", {
        //   duration: 2,
        //   x: 100,
        //   y: 500,
        //   width: 100,
        //   height: 100,
        //   borderRadius: '10px',
        //   delay: 2.5,
        //   ease: 'back'
        // })
  
        // gsap.fromTo('#spotify-Circle', {
        //   duration: 2,
        //   x: 0,
        //   y: 200,
        //   ease: 'bounce',
  
        //   width: 300,
        //   height: 300,
        // }, {
        //   duration: 2,
        //   x: 0,
        //   y: 175,
        
        //   delay: 2,
    
        //   ease: 'back'
        // })
        // gsap.to('#Circle', {
        //   duration: 2,
        //   x: 0,
        //   y: -50,
        //   width: 350,
        //   height: 350,
        //   borderRadius: '50%',
        //   ease: 'bounce',
          
        // })
      });

      // setBallHasFallen(false)
      


      scrollTween = gsap.to(window, {
        scrollTo: "#HomeScreen",
        onStart: () => {
          observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
          observer.enable();
          gsap.set(document.body, {overflow: 'auto',})
        },
        duration: 1,
        onComplete: () => {scrollTween = null; goingHome = false} ,
        overwrite: true,
        delay: 1.5
      });

  
    }


    ScrollTrigger.create({
      trigger: "#Info",
      start: "top bottom",
      end: "+=199%",


      onToggle: self => self.isActive && !scrollTween && !goingHome && goToInfo()
    });

    ScrollTrigger.create({
      trigger: "#HomeScreen",
      start: "top bottom",
      end: "+=199%",


      onToggle: self => self.isActive && !scrollTween && goToHome()
    });

   

    
  })



  return (
    <>
    <section id='HomeScreen'>
      <div className='App'> 
          <h1 id='The'>The</h1>
          <div id='Circle' className={ballHasFallen ? "hidden" : "shown"}></div>
          <h1 id='drop'>Drop</h1>
          <h1 id='in'>In</h1>
          <h1 id='podcast'>Podcast</h1>
        </div>
    </section>
    <section id='Info'>
      <div className='Where'>
      <div id='insta-Circle' className={ballHasFallen ? "shown" : "hidden"} onClick={() => {
        window.open('https://www.instagram.com/drop.inpodcast?igsh=OHlpYzFvdjZqZWhz', '_blank')
      }}>
        <img src={instagram} alt="instagram" className='insta-icon' />
        <div className={instaShown ? "show-desc" : "hide-desc"}>
          <h2>Instagram</h2>
          <p>@drop.inpodcast</p>
        </div>
      </div>

      <div id='yt-Circle' className={ballHasFallen ? "shown" : "hidden"} onClick={() => {
        window.open('youtube.com/@TheDropInPodcast?si=tga44j_yoPbzKPa0', '_blank')
      }}>
        <img src={yt} alt="yt" className='yt-icon'/>
        <div className={instaShown ? "show-desc" : "hide-desc"}>
          <h2>Youtube</h2>
          <p>@TheDropInPodcast</p>
        </div>
      </div>

      <div id='tik-Circle' className={ballHasFallen ? "shown" : "hidden"} onClick={() => {
        window.open('tiktok.com/@dropitef02x?_t=8hYHk9jCI6I&_r=1', '_blank')
      }}>
        <img src={tiktok} alt="tiktok" className='tik-icon'/>
        <div className={instaShown ? "show-desc" : "hide-desc"}>
          <h2>Tik Tok</h2>
          <p>@dropitef02x</p>
        </div>
      </div>

      <div id='merch-Circle' className={ballHasFallen ? "shown" : "hidden"} onClick={() => {
        window.open('teepublic.com/user/the-drop-in', '_blank')
      }}>
        <img src={tee} alt="merch" className='merch-icon'/>
        <div className={instaShown ? "show-desc" : "hide-desc"}>
          <h2>Merch Store</h2>
          <p>Get t-shirts and more while supporting us</p>
        </div>
      </div>

      <div id='spotify-Circle' className={ballHasFallen ? "shown" : "hidden"} onClick={() => {
        window.open('open.spotify.com/show/4K4P4VwhsM3SnPAv27ycR8?si=ABSC15OAQ5CfJgKHbPDFqw', '_blank')
      }}>
        <img src={spotify} alt="spotify" className={'spotify-icon ' + (hideSpotify ? "fade-out" : "")}/>
      </div>


      </div>
    </section>
     
      
      
    </>
  )
}

export default App
