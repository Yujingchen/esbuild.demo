import { useEffect, useRef } from 'react'
interface PreviewProps {
    code: string;
}
const iframe = useRef<any>();

const html = `
<html>
<head></head>
<body>
<div id="root"></div> 
</body>
<script>
window.addEventListener('message',(event)=>{
    try{
    eval(event.data)
    }
    catch(err){
        const root=document.querySelector('#root')
        root.innerHTML = "<div style='color:red;'><h4>Runtime Error</h4>" + err+ "</div>";
        throw err;
    }
},false);
</script>
</html>`

const Preview: React.FC<PreviewProps> = ({ code }) => {
    useEffect(() => {
        iframe.current.srcdoc = html;
    }, [code])
    return <iframe />
}

export default Preview