
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header'

function App() {
  const [count,setCount] = useState(0);
  const handleCredit = credit => {
    const newCount = count + credit;
    setCount(newCount);
}
const handlePrice = price => {
  const newCredit = count - price;
  setCount(newCredit);
}

  return (
    <>
        <Header count={count}></Header>
        <Banner handleCredit={handleCredit}></Banner>
        <Blogs handlePrice={handlePrice}></Blogs>
     

    </>
  )
}

export default App
