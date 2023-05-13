import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function GetResponse() {
  let [statusClass, setStatusClass] = useState("")

  let result = useSelector(state=>state.resultApp01)

  let defa = 
`{
  "api": "response api"
}`
  

  useEffect(()=>{
    if(result.status >= 200 && result.status < 300){
      setStatusClass(" text-green font-semibold py-[1px] inline-block")
    }else if(result.status >= 400 && result.status < 500){
      setStatusClass(" text-red font-semibold py-[1px] inline-block")
    }else{
      setStatusClass(" font-semibold py-[1px] inline-block")
    }
  }, [result])



  return (
    <>
      <div className='flex flex-1 flex-row justify-between px-2 h-[25px] bg-left_barra mx-auto
      max-w-[230px] aa:max-w-[310px] ss:max-w-[460px]  sm:max-w-[500px] md:max-w-[500px]'>
        <p className={statusClass}>
          {result.status? `status response ${result.status}` : ""}
        </p>

        <p className={statusClass}>
          {result.elapsedTime? `${result.elapsedTime} ms` : ""}
        </p>

      </div>
      

      <SyntaxHighlighter 
        className="max-w-[230px] aa:max-w-[310px] ss:max-w-[460px]  sm:max-w-[500px] md:max-w-[500] mx-auto"
        language="json" 
        style={darcula} 
        wrapLines={true}
        lineNumberContainerStyle={{ float: 'left' }}
        customStyle={{with: "100%" ,height: '100%', overflow: 'auto'}}
        >
        {`${JSON.stringify(result.data, null, 2)}`}
      </SyntaxHighlighter>



    
    </>
  )
}
