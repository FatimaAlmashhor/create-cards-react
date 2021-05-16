import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FrameContext } from '../../frameContext';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,

    },
    sideBarItem: {
        backgroundColor: '#F5F5F5',
    },
    pallate: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    pallateItem: {
        width: '30px',
        height: '30px',
        margin: '5px',
        borderRadius: '50%',
        cursor: 'pointer'
    }
}));
const SidebarItem = (props) => {
    const { name, content } = props;
    const classes = useStyles();
    const { frameDate, dispatch } = useContext(FrameContext)
    return (
        <div>
            <Accordion className={classes.sideBarItem}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.pallate}>
                    {name === 'background' ?
                        content.map((color, index) =>
                            <div
                                key={index}
                                onClick={() => dispatch({ type: 'CHANGE_BACKGROUND', background: color })}
                                className={classes.pallateItem}
                                style={{
                                    backgroundColor: color
                                }}></div>
                        ) :
                        name === 'images' ?
                            content.map((img, index) =>
                                <div
                                    key={index}
                                    onClick={() => dispatch({ type: 'CHANGE_BACKGROUND', background: `url(${img})` })}
                                    className={classes.pallateItem}
                                    style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                    }}></div>
                            ) :
                            content.map((font, index) =>
                                <p
                                    onClick={() => dispatch({ type: 'CHANGE_FONT', fontFamily: font })}
                                    key={index}
                                    style={{
                                        fontFamily: font,
                                        margin: '3px',
                                        background: '#fff',
                                        borderRadius: '50%',
                                        width: '36px',
                                        height: '36px',
                                        cursor: 'pointer'
                                    }}>خط</p>
                            )
                    }
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default SidebarItem
