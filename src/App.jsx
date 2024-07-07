import Header from "./_components/Header" 
import UserInput from "./_components/UserInput"
import AnalyticsTable from "./_components/AnalyticsTable"
import {useState} from 'react'
function App() {
  const [isValid, setIsValid] = useState(false)
  const [filter, setFilter] = useState({
    isValid: false,
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  })

  const updateFilterOutside  = (element, value) => {
    if (+value <= 0) {
      setIsValid(false)
    } else {
      setIsValid(true)
      setFilter(prevFilterState => {
        return {
            ...prevFilterState,
            [element]: +value
        }
      })
    }

  }

  return (
    <>
        <Header />
        <UserInput filter={filter} updateFilterOutside={updateFilterOutside}/>
        {isValid ? <AnalyticsTable filter={filter}/> : 
        <p className="error-message center">Please enter valid data</p>}
        
    </>

  )
}

export default App
