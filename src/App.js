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
    // async function fetchMyAPI() {
    //   let response = await fetch('https://random-flat-colors.vercel.app/api/random?count=6')
    //   response = await response.json()
    //   setColorData(response.colors)
    // }

    // fetchMyAPI()

    // let res = fetchAPI()
    // res.then(data => {
    //   setColorData(data.colors)
    // })
    
    const xmlResponse = new XMLHttpRequest();
    xmlResponse.open('GET', 'https://random-flat-colors.vercel.app/api/random?count=6', true)
    xmlResponse.onload = function() {
      if(xmlResponse.status === 200) {
        const data = xmlResponse.response;
        console.log(xmlResponse.response)
        setColorData(data.colors)
      }
    };
    xmlResponse.responseType = 'json' //if you dont use this then xmlResponse.response inside onload will be string by default whicih you will need to parse using JSON.parse(xmlResponse.response)
    xmlResponse.send()
  }, [])

  return (
    <div className="App">
      <Input colors={colorData}/>
      {/* <Output colors={colorData}/> */}
    </div>
  );
}

export default App;
