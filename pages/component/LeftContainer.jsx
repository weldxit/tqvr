import React from 'react';
import style from '../../styles/leftRight.module.css'
import Link from 'next/link';
import Image from 'next/image';
const LeftContainer = () => {
    return (
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
     
        </div>
      </div>
    );
}

export default LeftContainer;
