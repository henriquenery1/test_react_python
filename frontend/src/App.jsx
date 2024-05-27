import axios from "axios"
import { useState, useEffect } from "react";

const urlBackEnd = 'http://localhost:8000'

function App() {
  const [ body, setBoby ] = useState('Test')

  useEffect(() => {
    axios.get(`${urlBackEnd}/get_data`)
    .then((response) => {
      console.log(response)
      const data = response.data
      setBoby(data['body'])
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])

  const [ paragrafo, setparagrafo ] = useState('')

  useEffect(() => {
    axios.get(`${urlBackEnd}/`)
    .then((response) => {
      console.log(response)
      const paragrafoData = response.data
      setparagrafo(paragrafoData['hello'])
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])

  return (
    <div>
      {body}
      <p>
        {paragrafo}
      </p>
    </div>
    
  );
}

export default App;
