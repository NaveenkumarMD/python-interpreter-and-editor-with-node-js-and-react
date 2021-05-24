import React,{useState, createRef} from 'react'
import Header from './Header'
import 'highlight.js/styles/dracula.css';
import {CodeEditorEditable as Editor }  from 'react-code-editor-editable'
import ContentEditable from 'react-contenteditable'
function Compiler(){
    const [value,setValue]=useState("Lets code...")
    const [language,setLanguage]=useState("python")
    const [output,setOutput]=useState(null)
    const [input,setInput]=useState("")
    const [error,seterror]=useState(false)
    const div=createRef()
    const run=()=>{
        fetch("http://localhost:1001/exec",{
            "method":"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                code:value,
                language:language,
                input:input
            })
        }).then(res=>res.json()).then(data=>{
            console.log(data.msg)
            if(data.msg.error){
                setOutput(data.msg.error)
            }else{
                setOutput(data.msg.output)
            }
            
        }).catch(err=>{
            console.log(err.message)
        })
    }
    return(
        <div>
            <Header run={run}/>
            <div id="editor">
           <Editor 
                value={value}
                setValue={setValue}
                width="700px"
                height="600px"
                language="python"
                borderRadius="5px"
                inlineNumbers/>
                    <div>
                        <div id="output-text">Output</div>
                    <ContentEditable id="output"
                    innerRef={div}
                    html={output}
                    onChange={e=>{setOutput(e.target.value)
                    setInput(e.target.value)
                    }}
                    style={{padding:'20px',paddingTop:'40px'}} 
                    />
                    </div>


                </div>

           
        </div>
    )
}
export default Compiler