import './App.css';
import Input from './input';
// import Output from './output';
import {useEffect, useState} from 'react'

function fetchAPI() {
  return new Promise(resolve => {
    const res = fetch('https://random-flat-colors.vercel.app/api/random?count=6')
    res.then(data => {
      resolve(data.json())
    })
  })
}

function App() {
  const [colorData, setColorData] = useState(null)

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('https://random-flat-colors.vercel.app/api/random?count=6')
      response = await response.json()
      setColorData(response.colors)
    }

    fetchMyAPI()

    // let res = fetchAPI()
    // res.then(data => {
    //   setColorData(data.colors)
    // })
    
    // const xmlResponse = new XMLHttpRequest();
    // xmlResponse.open('GET', 'https://random-flat-colors.vercel.app/api/random?count=6', true)
    // xmlResponse.onload = function() {
    //   if(xmlResponse.status === 200) {
    //     const data = JSON.parse(xmlResponse.response);
    //     setColorData(data.colors)
    //   }
    // };
    // xmlResponse.send()
  }, [])

  return (
    <div className="App">
      <Input colors={colorData}/>
      {/* <Output colors={colorData}/> */}
    </div>
  );
}

export default App;
