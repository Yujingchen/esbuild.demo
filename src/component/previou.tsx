import { useEffect, useRef } from 'react'
interface PreviewProps {
    code: string;
}

const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
      </body>
      <script>
      window.addEventListener(
        'message',
        (event) => {
          try {
            eval(event.data);
          } catch (err) {
            const root = document.querySelector('#root');
            root.innerHTML =
              "<div style='color:red;'><h4>Runtime Error</h4>" + err + '</div>';
            throw err;
          }
        },
        false
      );</script>
    </html>`

const Preview: React.FC<PreviewProps> = ({ code }) => {
    const iframe = useRef<any>();
    useEffect(() => {
        iframe.current.srcdoc = html;
        //message code to iframe
        //iframe use event listener to receive the code from event.data
        iframe.current.contentWindow.postMessage(code, '*');
    }, [code]);

    return (<iframe ref={iframe} sandbox='allow-scripts' srcDoc={html} title='preview' />);
}

export default Preview