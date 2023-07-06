// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {lastDaysVaccination, vaccinationByGender, vaccinationByAge} = props

  return (
    <div className="">
      <h1>Vaccination by Age</h1>
      <div>
        <PieChart height={300} width={300}>
          <Pie
            cx="70%"
            cy="40%"
            data={vaccinationByAge}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#fecba6" />
            <Cell name="45-60" fill="#b3d23f" />
            <Cell name="Above 60" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </div>
    </div>
  )
}

export default VaccinationByAge
