import React, { useState, useContext, useEffect, useCallback } from 'react'
import './Frame.css';
import styled from 'styled-components'
import { FrameContext } from '../../frameContext'
import TextStyle from '../TextStyle'
const FrameSquare = styled.div`
    width : 400px;
    height: 400px;
    background:${props => props.bg};
    background-position: center;
    background-size: cover;
    justify-items: center;
    margin : 10% auto ;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    transition: all 0.6s ease;
`
const FrameCircle = styled.div`
    width : 400px;
    height: 400px;
    background:${props => props.bg};
    background-position: center;
    background-size: cover;
    justify-items: center;
    margin : 10% auto ;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    transition: all 0.6s ease;
`
const FrameTraigolar = styled.div`
    width : 500px;
    height: 400px;
    background: ${props => props.bg};
    background-position: center;
    background-size: cover;
    justify-items: center;
    margin : 10% auto ;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    transition: all 0.6s ease;
`
const MainTitleWarrper = styled.div`
    width : 95%;
    padding : 8px 10px ;
    ${'' /* height: 100%; */}
    background-color: transparent;
    justify-content: center;
    align-items: center ;
    overflow : hidden;
    transition: all 0.6s ease;
`
const MainTitle = styled.textarea.attrs({
    placeholder: 'Write Something'
})`
    font-family:${props => props.fontFamily} ;
    text-align : center ;
    width : 90%;
    align-self : center ;
    justify-self : center ;
    margin : 25% 0px 0px  0px;
    background-color: transparent;
    border : none ;
    transition: all 0.6s ease;
    color : ${props => props.fontColor} ;
    font-size : ${props => props.fontSize} ;
    resize : vertical ;
    overflow-y : hidden;
    max-height : 200px ;
    &:active {
        height: auto;
    }
    &:focus{
        border : none ;
        min-height : 100px;
    }
`
const SecondTitle = styled.input.attrs({
    placeholder: '@useName'
})`
    font-size : 12px ;
    text-align : center ;
    width : 100%;
    background-color: transparent;
    border : none ;
    transition: all 0.6s ease;
    color: ${props => props.color};
   
`
const Frame = () => {
    const { frameData, dispatch } = useContext(FrameContext);
    const [frameType, setframeType] = useState(0);
    const [showFontDetails, setshowFontDetails] = useState(false);
    const [data, setdata] = useState('')
    const [showFontSize, setshowFontSize] = useState(false);
    const handleCloseFontDetails = () => {
        setshowFontDetails(false)
    }

    useEffect(() => {
        console.log(frameData);
    })
    return (
        <div className='warrper'>
            {showFontDetails && <TextStyle showSize={showFontSize} onClose={() => handleCloseFontDetails()} />}
            <span onClick={() => setframeType(pre => pre <= 0 ? 2 : pre - 1)} className='arrow left'></span>
            {frameType === 0 ?
                <FrameSquare id='card' bg={frameData.background}>
                    <MainTitleWarrper>
                        <div onDoubleClickCapture={() => { setshowFontDetails(true); setshowFontSize(true) }}>
                            <MainTitle
                                onChange={(e) => setdata(e.target.value)}
                                value={data}
                                fontFamily={frameData.fontFamily}
                                fontColor={frameData.fontColor}
                                fontSize={frameData.fontSize}
                            />
                        </div>
                        <div onDoubleClickCapture={() => { setshowFontDetails(true); setshowFontSize(false) }}>
                            <SecondTitle color={frameData.secondColorText} />
                        </div>
                    </MainTitleWarrper>
                </FrameSquare> :
                frameType === 1 ?
                    <FrameTraigolar id='card' bg={frameData.background}>
                        <MainTitleWarrper>
                            <div onSelect={() => { setshowFontDetails(true); setshowFontSize(true) }}>
                                <MainTitle
                                    onChange={(e) => setdata(e.target.value)}
                                    value={data}
                                    fontFamily={frameData.fontFamily}
                                    fontColor={frameData.fontColor}
                                    fontSize={frameData.fontSize}
                                />
                            </div>
                            <div onSelect={() => { setshowFontDetails(true); setshowFontSize(false) }}>
                                <SecondTitle fontColor={frameData.secondColorText} />
                            </div>
                        </MainTitleWarrper>
                    </FrameTraigolar> :
                    <FrameCircle id='card' bg={frameData.background}>
                        <MainTitleWarrper>
                            <div onSelect={() => { setshowFontDetails(true); setshowFontSize(true) }}>
                                <MainTitle
                                    onChange={(e) => setdata(e.target.value)}
                                    value={data}
                                    fontFamily={frameData.fontFamily}
                                    fontColor={frameData.fontColor}
                                    fontSize={frameData.fontSize}
                                />
                            </div>
                            <div onSelect={() => { setshowFontDetails(true); setshowFontSize(false) }}>
                                <SecondTitle fontColor={frameData.secondColorText} />
                            </div>
                        </MainTitleWarrper>
                    </FrameCircle>
            }
            <span onClick={() => setframeType(pre => pre >= 2 ? 0 : pre + 1)} className='arrow right'></span>
        </div>
    )
}

export default Frame
