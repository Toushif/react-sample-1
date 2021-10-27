import {useState} from 'react'

const Input = ({colors = []}) => {
    const [inputText, setInputText] = useState('')

    const selectColor = color => {
        console.log(color)
    }

    return (<div className="input-wrapper">
        <div>
            <div>title</div>
            <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
        </div>
        <div>
            <div>background color</div>
            <div className="outer-colors">
                {colors && colors.map((color, ind) => <div key={ind} className={'colors-inner'} style={{'backgroundColor': color}} onClick={() => selectColor(color)}></div>)}
            </div>
        </div>
    </div>)
}

export default Input
