import { useState } from 'react';
import ReactDOM from 'react-dom';
// import { unpkgPathPlugin } from './plugins/unpkg-path-plugin'
// import { fetchPlugin } from './plugins/fetch-plugin';
import CodeEditor from './component/code-editor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Preview from './component/previou';
import bundle from './bunlder/index';
const App = () => {
    const [value, setValue] = useState('');
    const [code, setCode] = useState('');
    const onClick = async () => {
        const output = await bundle(value)
        setCode(output.outputFiles[0].text)
    };



    // const escaped = html
    //     .replace(/\n/g, '')
    //     .replace(/"/g, '\\"')
    //     .replace(/'/g, "\\'")

    return (
        <div >
            <CodeEditor initialValue="" onChange={(value) => setValue(value)} />
            <textarea value={value} onChange={(e) => {
                setValue(e.target.value)
            }
            }>
            </textarea>
            <div>
                <button onClick={onClick}>
                    Submit
             </button>
            </div>
            <Preview code={code}></Preview>
        </div >
    )
};


ReactDOM.render(<App />, document.querySelector('#root'))