import React,{useRef,useState,useEffect} from 'react';
import styles from './Hero.module.css';
import casecase from '../../images/case.png';
import podpod from '../../images/pods.png';
import overlayy from '../../images/caseoverlay.png';

import {gsap,TweenMax, Power3} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
  });


const Hero = () => {
    let leftleftref = useRef(null);
    let overlayref = useRef(null);
    let backref = useRef(null);
    let overlay = useRef(null);
    let podref = useRef(null);

    let titleref1 = useRef(null);
    let titleref2 = useRef(null);
    let subref1 = useRef(null);
    let subref2 = useRef(null);
    let subref3 = useRef(null);
    let subref4 = useRef(null);


    useEffect(()=>{
    /*     gsap.from(
            [titleref1,titleref2,subref1,subref2,subref3,subref4],
            2,
            {
                repeat: -1,
                opacity: 0,
                y: 300,
                ease: Power3.easeInOut,
            }
        ) */

        gsap.to(
            leftleftref,
            2,
            {
                scrollTrigger: {
                    trigger: [overlay],
                    pin: true,
                    scrub: 0,
                    snap: 0,
                    end: "+=1500",
                  },

                /* repeat: -1, */
                y: 10,
                opacity: 0,
                ease: Power3.easeInOut,
            }
        )

        gsap.from(
            [overlayref,backref,titleref1,titleref2,subref1,subref2,subref3,subref4],
            2,
            { 
                scrollTrigger: {
                    trigger: [overlay],
                    pin: true,
                    scrub: 0,
                    snap: 0,
                    end: "+=1500",
                  },
                /* repeat: -1, */
                opacity: 0,
                y: 300,
                ease: Power3.easeInOut,
            }
        )

        gsap.to(
            [podref],
            2,
            {  
                scrollTrigger: {
                    trigger: [overlay],
                    pin: true,
                    scrub: 0,
                    snap: 0,
                    end: "+=1500",
                  },   
               /*  repeat: -1, */
                y: 60,
                ease: Power3.easeInOut,
            }
        )
        
        

    })


    return ( 
        <div ref={el =>{overlay = el}} className={styles.container}>

            <div className={styles.inner}> 
                <div ref={el =>{leftleftref = el}} className={styles.left}>
                    <h1 className={styles.title}>Magic Runs in the family.</h1>
                    <h2 className={styles.subtitle}>Airpods deliver effortless, all-day audio on the go</h2>
                    <a className={styles.linklink} href="#">Explore >></a>
                </div>
                <div className={styles.right}>
                    <div className={styles.images1}>
                        <img ref={el =>{podref = el}} src={podpod} alt="images1"/>
                    </div>
                </div>
            </div>

            {/* OVERLAY=OVERLAY=OVERLAY=OVERLAY=OVERLAY=OVERLAY */}

                <div  className={styles.innerinner}>
                    <div className={styles.leftleft}>

                        <div className={styles.item1}>
                            <h1 ref={el => {titleref1 = el}} className={styles.title1}>Battery life</h1>
                            <h1 ref = {el => {subref1 = el}} className={styles.subtitle1}>5hrs+</h1>
                            <h1 ref = {el=>{subref2 = el}} className={styles.subtitle2}>listening time on one charge</h1>
                        </div>

                        <div className={styles.item2}>
                            <h1 ref={el=>{titleref2 = el}} className={styles.title1}>Battery life</h1>
                            <h1 ref={el=>{subref3 = el}} className={styles.subtitle1}>5hrs+</h1>
                            <h1 ref={el=>{subref4 = el}} className={styles.subtitle2}>listening time with charging case</h1>
                        </div>

                    </div>

                    <div className={styles.rightright}>
                        <div className={styles.images2}>
                            <img 
                            className={styles.overlayimage} 
                            ref={el => {overlayref = el}} 
                            src={overlayy} alt="images2"/> 
                            <img 
                            className={styles.backimage} 
                            ref={el => {backref = el}}
                            src={casecase} 
                            alt="images2"/>
                    </div>
                    </div>
                </div>

        </div> 
        );
    }
export default Hero;