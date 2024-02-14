import React, { useState, useCallback, useEffect, useRef} from "react";


function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  
  const PasswordRef = useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass="" // storing the data
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"   // accesing data
 
    if (numberAllowed) str += "123456780" ;              // condition for first checkbox
    if (charAllowed) str += "~`@!#$%^&*_-";              //conditio for second checkbox
    
    for(let i=1; i<=length; i++ ){                         
      let char=Math.floor(Math.random() * str.length+1);   // for generating random number
      pass +=str.charAt(char)                              //  taking the character from string str variable and store it to pass
    }

    setPassword(pass)               // calling setPassword method abd passing the character into pass



  },[length,charAllowed,numberAllowed])      // dependency array

  const CopyToClipBoard = useCallback(()=>{      // for copying purpose 
    PasswordRef.current?.select()
    PasswordRef.current?.setSelectionRange(0,101)

    window.navigator.clipboard.writeText(password)
  },[password])
  

  useEffect(()=> {
    passwordGenerator()             // calling password generating function
    
  }, [length,charAllowed,numberAllowed,passwordGenerator])


  return (
    

    <div className="bg-gray-400 w-full h-screen">
      <div  className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500"> 


        <h1 className="text-4xl text-center text-white mb-10">PASSWORD GENERATOR</h1>


        <div className="flex shadow rounded-lg overflow-hidden mb-4">

              <input type="text" value={password} className="ouline- none w-full px-1 py-3 rounded-lg text-black" placeholder="PASSWORD" readOnly  
              ref={PasswordRef}
              />
              <button className="text-white bg-blue-400 rounded-xl px-5 py-3 shrink-0" onClick={CopyToClipBoard} >copy</button>

        </div>


        <div className="flex text-sm gap-x-2"> 

              <div className="flex  items-center gap-x-1.5"> 
              
                      <input type="range"    // this input is for that slider 
                      max={100}
                      min={6}
                      className="cursor-pointer"
                      value={length}
                      onChange={(e)=>setlength(e.target.value)}
                      />
                      <label htmlFor="slider" className="text-white ">length:{length}</label>

              </div>

                <div className="flex  items-center gap-x-1.5">
                        <input type="checkbox"  // this input is for the number checkbox
                        defaultChecked={numberAllowed}
                        id="numberInput"
                        className="cursor-pointer "
                        onChange={()=>{
                          let counter
                          setNumberAllowed((counter)=!counter)
                          
                        }}/>
                        <label htmlFor="numberInput" className="text-white -ml-1">Number{numberAllowed}</label>
                </div>

                  <div className="flex  items-center gap-x-1.5">
                        <input type="checkbox"
                        defaultChecked={charAllowed}
                        id="charInput"
                        className="cursor-pointer "
                        onChange={()=>{
                          let counter
                          setCharAllowed((counter)=!counter)
                        }}
                          />
                          <label htmlFor="charInput" className="text-white -ml-1">Character{charAllowed}</label>

                  </div>
                  
           
        </div>

        
      </div>

     
      </div>
  
  );
}

export default App;
