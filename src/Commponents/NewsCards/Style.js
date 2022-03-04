import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '10%',
        borderRadius: 10,
        color: 'white',
    },
    infoCard: {
        display: 'flex', flexDirection: 'column', textAlign: 'center',
    },
    container: {
        padding: '0 5%', width: '100%', margin: 0,
    },
    img:{
        width:'80%',
        height:'80%',
        margin:'26px 0',
        borderRadius:'10px'
    }
});