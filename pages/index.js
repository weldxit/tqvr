import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import style from '../styles/Home.module.css'
import Link from 'next/link'
import MostReadings from './component/MostReading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function codeGenerate(ylink) {
    const code = ylink.slice(32, 43)
    return code
  }
  return (
    <>



      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={style.main}>

        <div className={style.left_container}>
          <h1 className={style.heading}>Till Yesterday</h1>
          <div className={style.left}>
           
            <div className={style.imagediv}>
              <Link href={"/"}>
                <Image
                  src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"}
                  fill={true}

                  alt={"my image"}
                  className={style.image}
                />
                <h2 className={style.imagedivmain_para}>
                  Modi Ji visiting odisha for the first time.
                </h2>
              </Link>
            </div>
            <div className={style.imagediv}>
              <Link href={"/"}>
                <Image
                fill={true}
                  src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"}

                  alt={"my image"}
                  className={style.image}
                />
                <h2 className={style.imagedivmain_para}>
                  Trump fires up on his wife
                </h2>
              </Link>
            </div>
            <div className={style.imagediv}>
              <Link href={"/"}>
                <Image
                fill={true}
                  src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"}

                  alt={"my image"}
                  className={style.image}
                />
                <h2 className={style.imagedivmain_para}>
                  Jack sparrow lost Black Pearl
                </h2>
              </Link>
            </div>
            <div className={style.imagediv}>
              <Link href={"/"}>
                <Image
                fill={true}
                  src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"}

                  alt={"my image"}
                  className={style.image}
                />
                <h2 className={style.imagedivmain_para}>
                  A Geek philosopher
                </h2>
              </Link>
            </div>
            <div className={style.imagediv}>
              <Link href={"/"}>
                <Image
                fill={true}
                  src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"}

                  alt={"my image"}
                  className={style.image}
                />
                <h2 className={style.imagedivmain_para}>
                  Twilight Conflict | Bella Swan
                </h2>
              </Link>
            </div>
            <div className={style.imagediv}>
              <Link href={"/"}>
                <Image
                fill={true}
                  src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"}

                  alt={"my image"}
                  className={style.image}
                />
                <h2 className={style.imagedivmain_para}>
                  Rami got the Award
                </h2>
              </Link>
            </div>
            <div className={style.imagediv}>
              <Link href={"/"}>
                <Image
                fill={true}
                  src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"}

                  alt={"my image"}
                  className={style.image}
                />
                <h2 className={style.imagedivmain_para}>
                  Elon takes marijuana on show
                </h2>
              </Link>
            </div>
            <div className={style.imagediv}>
              <Link href={"/"}>
                <Image
                fill={true}
                  src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"}

                  alt={"my image"}
                  className={style.image}
                />
                <h2 className={style.imagedivmain_para}>
                  The clean Greece
                </h2>
              </Link>
            </div>
            <div className={style.imagediv}>
              <Link href={"/"}>
                <Image
                fill={true}
                  src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"}

                  alt={"my image"}
                  className={style.image}
                />
                <h2 className={style.imagedivmain_para}>
                  Winter has came, Warm up !
                </h2>
              </Link>
            </div>
            <div className={style.imagediv}>
              <Link href={"/"}>
                <Image
                fill={true}
                  src={"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_960_720.jpg"}

                  alt={"my image"}
                  className={style.image}
                />
                <h2 className={style.imagedivmain_para}>
                  30 Km long Wall | Great Wall
                </h2>
              </Link>
            </div>
          </div>
        </div>
        {/* //////////////////////mid//////////////////////// */}
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









        <div className={style.right_container}>
          <h1 className={style.heading}>See Our videos</h1>
          <div className={style.sidebar}>
          
            <div className={style.ytcontainer}>
              <iframe className={style.yframe} src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameBorder="0"></iframe>
            </div>
            <div className={style.ytcontainer}>
              <iframe className={style.yframe} src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=l2Rpcmhzlms')}`} frameBorder="0"></iframe>
            </div>
            <div className={style.ytcontainer}>
              <iframe className={style.yframe} src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameBorder="0"></iframe>
            </div>
            <div className={style.ytcontainer}>
              <iframe className={style.yframe} src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameBorder="0"></iframe>
            </div>
            <div className={style.ytcontainer}>
              <iframe className={style.yframe} src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameBorder="0"></iframe>
            </div>
            <div className={style.ytcontainer}>
              <iframe className={style.yframe} src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameBorder="0"></iframe>
            </div>
            <div className={style.ytcontainer}>
              <iframe className={style.yframe} src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameBorder="0"></iframe>
            </div>
            <div className={style.ytcontainer}>
              <iframe className={style.yframe} src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameBorder="0"></iframe>
            </div>
            <div className={style.ytcontainer}>
              <iframe className={style.yframe} src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameBorder="0"></iframe>
            </div>
            <div className={style.ytcontainer}>
              <iframe className={style.yframe} src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameBorder="0"></iframe>
            </div>
            <div className={style.ytcontainer}>
              <iframe className={style.yframe} src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      </main>
      <MostReadings/>

    </>

  )
}
