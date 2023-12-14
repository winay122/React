import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [allowNumber, setAllowedNumber] = useState(false)
  const [allowChar, setAllowChar] = useState(false)
  const [password, setPssword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (allowNumber) str += "0123456789"
    if (allowChar) str += "!@#$%^&*()-_+=[]{}~`"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)

      pass += str.charAt(char)
      setPssword(pass)
    }

  }, [length, allowNumber, allowChar])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, allowNumber, allowChar, passwordGenerator])

  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700'>
        <div className=' text-white text-center my-3'>Password Generator</div>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className=' outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyToClipboard}
          className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>

        </div>
        <div className=' flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className=' cursor-pointer'
              onChange={(e) => {setLength(e.target.value)} }
            />
            <label>Length: {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={allowNumber}
              id='numberInput'
              onChange={() => {
                setAllowedNumber((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={allowChar}
              id='characterInput'
              onChange={() => {
                setAllowChar((prev) => !prev)
              }}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
