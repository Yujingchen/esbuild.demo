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
    // const ref = useRef<any>();
    // const startService = async () => {
    //     const service = await esbuild.startService({
    //         worker: true,
    //         wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
    //     });
    //     ref.current = service;
    // };
    // useEffect(() => {
    //     startService();
    // }, []);
    const onClick = async () => {
        // if (!ref.current) {
        //     return;
        // };
        // iframe.current.srcdoc = html;
        // const result = await ref.current.build({
        //     entryPoints: ['index.js'],
        //     bundle: true,
        //     write: false,
        //     define: {
        //         'process.env.NODE_ENV': '"production"',
        //         global: 'window'
        //     },
        //     plugins: [unpkgPathPlugin(), fetchPlugin(value)]
        // });
        // iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*');
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