//http://localhost:8080/ai/prompt?prompt

import { useState } from "react"

function API() {
    //const [data, setData] = useState([])
    const fetchdata = async (String value= "hello") => {
        try{
         const res = await fetch(`http://localhost:8080/ai/prompt?prompt=${value}`);
         const result = await res.json();
         console.log(result)   
        }
        catch(error){
            console.log(error.message)
        }
      }
  return (
    <div>
       
    </div>
  )

  
}

export default API