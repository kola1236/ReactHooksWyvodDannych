import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from './table/table'

function App() {

const baseUrl = ' http://www.filltext.com/?rows=32&id={...|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
const [smallDate, setsmallDate] = useState([])
useEffect(() =>{
  axios(baseUrl)
  .then(
    (res)=>{
      setsmallDate(res.data)
    }
  )
}, [])




  return (
     <div className="container">
     <Table smallDate={smallDate}/>
     </div>
  );
}

export default App;
