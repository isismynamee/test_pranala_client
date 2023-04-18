import './App.css';
import { useCallback, useState } from 'react';

function App() {
  const [input, setInput] = useState('')
  const [bilanganGanjil, setBilanganGanjil] = useState(false)
  const [bilanganPrima, setBilanganPrima] = useState(false)
  const a = input.formInput?.length

  const changeInput = useCallback(
    (e) => {
      const {name, value} = e.target

      setInput((prev) => ({
        ...prev,
        [name]: value
      }))
    }, [setInput]
  )

  const submitInput = useCallback(
    () => {
      let hasil;
      for(let i = 0; i < a; i++){
        for(let d = 0; d <= i; d++){
          hasil += `${input.formInput[i]}`
          console.log(hasil)
        }
        console.log('\n')
      }
    }, [a]
  )

  const ganjil = useCallback(
    () => {
      if(input.formInput % 2 !== 0 ){
        setBilanganGanjil(true)
        console.log("Ganjil")
      }
    }, [input.formInput, setBilanganGanjil]
  )
  console.log(bilanganPrima, "prima")

  const prima = useCallback(
    () => {
  let final = 1
      for(let p = 0; p <= input.formInput; p++){
        if(input.formInput % p === 0){
          final = 2;
          return final
        }
      }
      console.log(final, "final")
      if(final === 1 ){
        setBilanganPrima(true)
        console.log("prima")
      }
    }, [input.formInput]
  )

  return (
    <>
      <input type="text" name='formInput' onChange={changeInput} />
      <button onClick={() => submitInput()}>Generate Segitiga</button>
      <button onClick={ganjil}>Generate Ganjil</button>
      <button onClick={prima}>Generate Prima</button>
      <div>
        {bilanganGanjil ? (
          <>
            <span>Ganjil</span>
          </>
        ): (
          <>
            <span>Genap</span>
          </>
        )}
      </div>
    </>
  );
}

export default App;
