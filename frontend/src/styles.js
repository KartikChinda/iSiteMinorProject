import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,0,0, 1)',
        fontFamily: 'Shizuru',
        paddingBottom: '10px'
    },
    image: {
        marginLeft: '15px',
    },
}));