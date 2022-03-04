import React, { useEffect, useState } from 'react';
import './App.css';
import useStyles from './style';
import { Typography } from '@material-ui/core';
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from '../src/Commponents/NewsCards/NewsCards'
import img from '../src/image/preview.jpg'
const alankey = "167804ec79c69f83b84732dc95d5472f2e956eca572e1d8b807a3e2338fdd0dc/stage";




function App() {
  const classes = useStyles();
  const [news, setNews] = useState([]);
  const [activeArticle,setActiveArticle]=useState(-1);
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles,number }) => {
        if (command === 'newHeadlines') {
          setNews(articles);
          setActiveArticle(-1);
        }
        else if(command==='highlight')
        {
          setActiveArticle((prev)=> prev+1);
        }
        else if(command==='open')
        {
          window.open(articles[number].url,"_blank");
        }
      }
    })
  }, [])
  return (
    <>
      <h1 style={{ textAlign: "center", color: "lightskyblue", margin: "10px 0", fontFamily:"Pushster,cursive",letterSpacing:"2px"}}>Alan AI News Application</h1>
      <div className={classes.logoContainer}>
        {news.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
        <img src={img} className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards article={news} activeArticle={activeArticle} />
    </>
  );
}

export default App;
