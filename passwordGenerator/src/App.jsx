import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number && char) str+="1234567890!@#$%^&*()"
    else if(number) str+="0123456789"
    else if(char) str+="~!@#$%^&*(){}"

    for(let i=0; i<length; i++){
      let j = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(j)
    }

    setPassword(pass)


  }, [length, number, char, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 
      text-orange-500 bg-gray-700'>

        <h1 className='text-white text-center 
        my-3'>password Generator</h1>

        <div className='flex shadow rounded-lg 
        overflow-hidden mb-4'>
          <input 
          type="text" value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password' readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPassword}
          className='outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0 '>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range" 
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e) => setlength(e.target.value)}
              />
              <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={number}
             id='numberInput'
             onChange={() => setNumber(!number)}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={char}
             id='charInput'
             onChange={() => setChar(!char)}
             />
             <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
