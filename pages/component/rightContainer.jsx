import React from 'react';
import style from '../../styles/leftRight.module.css'

const RightContainer = () => {
        function codeGenerate(ylink) {
          const code = ylink.slice(32, 43)
          return code
        }
    return (
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
        </div>
      </div>
    );
}

export default RightContainer;
