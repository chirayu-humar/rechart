// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {lastDaysVaccination, vaccinationByGender, vaccinationByAge} = props

  return (
    <div className="GenderOuter">
      <h1>Vaccination by gender</h1>
      <div>
        <PieChart height={300} width={300}>
          <Pie
            cx="70%"
            cy="40%"
            data={vaccinationByGender}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#fecba6" />
            <Cell name="Female" fill="#b3d23f" />
            <Cell name="Others" fill="#a44c9e" />
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

export default VaccinationByGender
