import React from 'react';
import Image from 'next/image';
import style from '../../styles/Mostread.module.css'
const MostReadings = () => {
    return (
        <div className={style.flexitem}>

          <div className={style.sidehead}> 
                <h1 className={style.headingtext}>OUR TOP READINGS</h1>
          </div>
          <div className={style.mostreadcontainer} >  
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/Big-Bang.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1 className={style.h1}> Big-Bang Theory, The unsolved Mystery</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/blackhole.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1  className={style.h1}>Black hole Mystery ! Haviest Object in Universe</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/hotballon.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1 className={style.h1}>Turkish Hot ballon Season have arrived</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/Big-Bang.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1  className={style.h1}>Some says bigbang is a misconception</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/star-gazing.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1  className={style.h1}>Night Star Always Remind us our identity</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/Big-Bang.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1  className={style.h1}>Big bang according to Ancient Indian Scripture</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/northernlights.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1  className={style.h1}>Northen lights shows up in rare place</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/hiking_romania.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1  className={style.h1}>What is adventures in Hiking, romania says all about it</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/Big-Bang.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1  className={style.h1}>Space is expanding itself to its surface, Will it explode ?</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/anonymous.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1  className={style.h1}>We are anonymous, we are legion, we do not forgive, we dont forget</h1>

            </div>
            </div>
          
        </div>
    );
}

export default MostReadings;
