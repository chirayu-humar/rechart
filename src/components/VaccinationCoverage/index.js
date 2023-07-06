// Write your code here
import './index.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {lastDaysVaccination, vaccinationByGender, vaccinationByAge} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="barchartOuter">
      <h1>Vaccination Coverage</h1>
      <div>
        <BarChart
          width={800}
          height={300}
          data={lastDaysVaccination}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'white',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'white',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose1" name="dose1" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="dose2" name="dose2" fill="#fd7f0e" barSize="20%" />
        </BarChart>
      </div>
    </div>
  )
}

export default VaccinationCoverage
