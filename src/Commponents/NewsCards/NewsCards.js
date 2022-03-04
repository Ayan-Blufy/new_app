import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import NewCard from '../NewCard/NewCard'
import img from '../../image/preview.jpg';

import useStyles from './Style';
const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from BBC News' },
];


const NewsCards = ({ article,activeArticle }) => {
    const classes = useStyles();



    if (!article.length) {

        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : <img src={img} className={classes.img}/>}
                                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );






    }





    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {article.map((ele, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewCard i={i} article={ele} activeArticle={activeArticle} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

export default NewsCards
