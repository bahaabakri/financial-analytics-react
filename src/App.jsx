import Header from "./_components/Header" 
import UserInput from "./_components/UserInput"
import AnalyticsTable from "./_components/AnalyticsTable"
import {useState} from 'react'
function App() {
  const [filter, setFilter] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  })

  const updateFilterOutside  = (element, value) => {
    setFilter(prevFilterState => {
      return {
          ...prevFilterState,
          [element]: value
      }
    })
  }

  return (
    <>
        <Header />
        <UserInput filter={filter} updateFilterOutside={updateFilterOutside}/>
        <AnalyticsTable filter={filter}/>
    </>

  )
}

export default App
