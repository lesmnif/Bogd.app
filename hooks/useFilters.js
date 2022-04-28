import { atom, useAtom } from 'jotai'


// Create your atoms and derivatives
const textAtom = atom('hello') 

// Use them anywhere in your app
const Input = () => {
  const [text, setText] = useAtom(textAtom)
  const handleChange = (e) => setText(e.target.value)
  return (
    <input value={text} onChange={handleChange} />
  )
}