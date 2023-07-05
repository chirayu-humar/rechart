// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'

class CowinDashboard extends Component {
  state = {isLoading: false}

  componentDidMount = async () => {
    this.fetchTheData()
  }

  changeVaccinationCoverage = object => {
    const temp = {
      dose1: object.dose_1,
      dose2: object.dose_2,
      vaccineDate: object.vaccine_date,
    }
    return temp
  }

  fetchTheData = async () => {
    this.setState({
      isLoading: true,
    })
    const options = {
      method: 'GET',
    }
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url, options)
    const jsonData = await response.json()
    console.log(jsonData)
    const lastDaysVaccination = jsonData.last_7_days_vaccination
    const vaccinationByAge = jsonData.vaccination_by_age
    const vaccinationByGender = jsonData.vaccination_by_gender
    this.setState({
      lastDaysVaccination: lastDaysVaccination.map(eachItem =>
        this.changeVaccinationCoverage(eachItem),
      ),
      vaccinationByGender,
      vaccinationByAge,
      isLoading: false,
    })
  }

  render() {
    const {
      isLoading,
      lastDaysVaccination,
      vaccinationByGender,
      vaccinationByAge,
    } = this.state
    console.log(lastDaysVaccination)
    return (
      <div className="bg-container">
        {/* first div */}
        <div className="firstDiv">
          <img
            className="proper"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          />
          <h1>Co-Win</h1>
        </div>
        {/* second div */}
        <div className="secondDiv">
          <h1>coWIN vaccination in india</h1>
        </div>
        {/* third div */}
        {isLoading && (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        )}
        {/* fourth div */}
        <VaccinationCoverage lastDaysVaccination={lastDaysVaccination} />
        {/* fifth div */}
        {/* sixth div */}
        {/* seventh div */}
      </div>
    )
  }
}

export default CowinDashboard
