import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { FrameContext } from '../frameContext';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { fontSize } from '../Data'
const useStyles = makeStyles((theme) => ({
    formControl: {
        diplay: 'inline',
        margin: theme.spacing(1),
        width: 50,
        flex: 1,
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    }
}));
const HelperCard = styled.div`
    position: absolute ;
    z-index : 100 ;
    top:10%;
    left:50%;
    width : auto ; 
    height : 40px ;
    padding  : 5px;
    font-size : 14px;
    line-height : 50px;
    text-align : center ;
    justify-content : start ;
    align-items : center ;
    display: flex ; 
    box-shadow : 0px 4px 4px rgb(0 , 0 ,0 , 20%) ;
    background-color : #fff ;
    border-radius : 5px;
`;
const HelperCardItem = styled.div`
    width : 160px;
    & > *{
        display : inline;
        margin : 0px 7px;
    }
`;
const Warrper = styled.div`
   position : absolute ;
   top: 0px ;
   left : 0px;
   z-index : 1; 
   width : 100% ; 
   height : 100% ;
   background : rgba( 0,0,0,0.25) ;
`;
const TextStyle = ({ onClose, showSize }) => {
    const classes = useStyles();
    const [fontColor, setfontColor] = useState('#000');
    const { dispatch } = useContext(FrameContext)
    const [size, setSize] = useState('');

    const handleSizeChange = (e) => {
        setSize(e.target.value);
        onClose()
        dispatch({ type: 'CHANGE_FONT_SIZE', fontSize: `${e.target.value}px` })
    };

    const handleColorsChanging = (e) => {
        if (showSize) {
            dispatch({ type: 'CHANGE_FONT_COLOR', fontColor: e.target.value })
        }
        else {
            dispatch({ type: 'CHANGE_FONT_COLOR_SCONDE_TEXT', secondColorText: e.target.value })
        }
        setfontColor(e.target.value);

    }
    return (
        <div>

            <HelperCard>
                <HelperCardItem>Font colors :
                <span><input
                        classNeme={classes.colorPicker}
                        type='color'
                        onChange={handleColorsChanging}
                        value={fontColor}

                    />
                    </span></HelperCardItem>
                {showSize && <HelperCardItem>Font size :
                 <FormControl className={classes.formControl}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            onChange={handleSizeChange}
                        >
                            {
                                fontSize.map(element =>
                                    <MenuItem value={element}>{element}</MenuItem>
                                )
                            }

                        </Select>
                    </FormControl>
                </HelperCardItem>}
            </HelperCard>
            <Warrper onClick={() => onClose()}> </Warrper>
        </div>
    )
}

export default TextStyle
