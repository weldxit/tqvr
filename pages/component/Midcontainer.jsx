import React from 'react';
import style from '../../styles/Mid.module.css'
import Link from 'next/link';
import Image from 'next/image';
const Midcontainer = () => {
    return (
        <div className={style.mid}>
        <h1 className={style.heading}>Today</h1>
        <div className={style.topnews}>
          {/* <h1 className={style.heading}>Top News <span className={style.today}>Today</span></h1> */}
          {/* frontpage -> mid content -> right side div of mid */}
          <div className={style.imagedivmain}>

            <Link href={'/'}>

              <div className={style.imgwr}>
                <Image
                  src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"}
                  fill={true}
                  alt={"my image"}
                  className={style.image}
                  placeholder='blur'
                  blurDataURL="base64"
                />
              </div>

              <div className={style.imagedivmain_heading}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </Link>

          </div>
          {/* frontpage -> mid content -> left side div of mid */}
          <div className={style.topnewsleft}>
            <div className={style.topnewsleft_img}>
              <Link href={'/'}>
                <Image src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"} fill={true} alt={"my image"} />
                <h2 className={style.imagedivmain_para}>#1 Marshmello reached 1 Billion listeners.</h2>
              </Link>
            </div>
            <div className={style.topnewsleft_img}>
              <Link href={'/'}>
                <Image src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"} fill={true} alt={"my image"} />
                <h2 className={style.imagedivmain_para}>Mr.Robot targets the fsociety.</h2>
              </Link>
            </div>
            <div id={style.remove0} className={style.topnewsleft_img}>
              <Link href={'/'}>
                <Image src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"} fill={true} alt={"my image"} />
                <h2 className={style.imagedivmain_para}>Alan walkers next song, Thrilling !!</h2>
              </Link>
            </div>
            <div id ={style.remove} className={style.topnewsleft_img}>
              <Link href={'/'}>
                <Image src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"} fill={true} alt={"my image"} />
                <h2 className={style.imagedivmain_para}>Anonymous has taken away the Dark Web portals.</h2>
              </Link>
            </div>
        </div>
        </div>
          <div></div>
        <div className={style.specialnews}>
          <h1 className={style.heading}>SPECIAL NEWS</h1>

          <div className={style.spgrid}>
            <div className={style.spcontainer}>
              <div className={style.spimage}>
                <Image
                  src={'https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg'}
                  fill={true}
                  alt='planet mars'
                />
              </div>
              <h3 className={style.sphead}>
                Red planet <b>Mars</b> has some unusual activities occured.
              </h3>
              <p className={style.sppara}>
                To the neear orbit of mars, at last evening there was a high frequency radiated nearly for 30 minutes.
              </p>
            </div>
            <div className={style.spcontainer}>
              <div className={style.spimage}>
                <Image
                  src={'https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg'}
                  fill={true}
                  alt='planet mars'
                />
              </div>
              <h3 className={style.sphead}>
                Red planet <b>Mars</b> has some unusual activities occured.
              </h3>
              <p className={style.sppara}>
                To the neear orbit of mars, at last evening there was a high frequency radiated nearly for 30 minutes.
              </p>
            </div>
            <div className={style.spcontainer}>
              <div className={style.spimage}>
                <Image
                  src={'https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg'}
                  fill={true}
                  alt='planet mars'
                />
              </div>
              <h3 className={style.sphead}>
                Red planet <b>Mars</b> has some unusual activities occured.
              </h3>
              <p className={style.sppara}>
                To the neear orbit of mars, at last evening there was a high frequency radiated nearly for 30 minutes.
              </p>
            </div>
            <div className={style.spcontainer}>
              <div className={style.spimage}>
                <Image
                  src={'https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg'}
                  fill={true}
                  alt='planet mars'
                />
              </div>
              <h3 className={style.sphead}>
                Red planet <b>Mars</b> has some unusual activities occured.
              </h3>
              <p className={style.sppara}>
                To the neear orbit of mars, at last evening there was a high frequency radiated nearly for 30 minutes.
              </p>
            </div>
            <div className={style.spcontainer}>
              <div className={style.spimage}>
                <Image
                  src={'https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg'}
                  fill={true}
                  alt='planet mars'
                />
              </div>
              <h3 className={style.sphead}>
                Red planet <b>Mars</b> has some unusual activities occured.
              </h3>
              <p className={style.sppara}>
                To the neear orbit of mars, at last evening there was a high frequency radiated nearly for 30 minutes.
              </p>
            </div>
            <div className={style.spcontainer}>
              <div className={style.spimage}>
                <Image
                  src={'https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg'}
                  fill={true}
                  alt='planet mars'
                />
              </div>
              <h3 className={style.sphead}>
                Red planet <b>Mars</b> has some unusual activities occured.
              </h3>
              <p className={style.sppara}>
                To the neear orbit of mars, at last evening there was a high frequency radiated nearly for 30 minutes.
              </p>
            </div>
           
          </div>

        </div>

      </div>

    );
}

export default Midcontainer;
