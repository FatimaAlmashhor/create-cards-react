import { createContext, useReducer } from 'react'

export const initDate = {
    background: '#fff',
    mainTitle: '',
    secondTitle: '',
    fontFamily: 'Dima',
    fontSize: '25px',
    fontColor: '#000',
    secondColorText: '#000',
    frameShape: 0,
}
export const FrameContext = createContext(initDate);
export const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_BACKGROUND':
            return {
                ...state,
                background: action.background,
            }
        case 'CHANGE_FONT':
            return {
                ...state,
                fontFamily: action.fontFamily,
            }
        case 'CHANGE_FONT_COLOR':
            return {
                ...state,
                fontColor: action.fontColor,
            }
        case 'CHANGE_FONT_COLOR_SCONDE_TEXT':
            return {
                ...state,
                secondColorText: action.secondColorText,
            }
        case 'CHANGE_FONT_SIZE':
            return {
                ...state,
                fontSize: action.fontSize,
            }
        case 'CHANGE_MAIN_TITLE':
            return {
                ...state,
                mainTitle: action.mainTitle,
            }

        case 'CHANGE_SECOND_TITLE':
            return {
                ...state,
                secondTitle: action.secondTitle,
            }
        case 'CHANGE_FRAME_SHAP':
            return {
                ...state,
                frameShape: action.frameShape,
            }

        default:
            break;
    }
}

const FrameProvider = ({ children }) => {
    const [frameData, dispatch] = useReducer(reducer, initDate)
    return (
        <FrameContext.Provider value={{ frameData, dispatch }} >
            {children}
        </FrameContext.Provider>
    )
}
export default FrameProvider;