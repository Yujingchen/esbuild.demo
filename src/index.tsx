import { useState } from 'react'
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState('');
    const [code, setCode] = useState('');
    const onClick = () => {
        console.log(value)
        setCode('transplied code')
    }
    return (
        <div>
            <textarea value={value} onChange={(e) => setValue(e.target.value)}>
            </textarea>
            <div>
                <button onClick={onClick}>
                    Submit
                 </button>
            </div>
            <pre>{code}</pre>
        </div>)
};

ReactDOM.render(<App />, document.querySelector('#root'))