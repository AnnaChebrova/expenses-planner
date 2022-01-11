import Button from '../_share/Button/Button'

const MainInfo = ({ title, data, transType }) => {

    transType = "costs" || "incomes"

  return (
    <div>
      <h1>{title}</h1>
      <p>UAH</p>
      <ul>
        {data && data.map(({ period, sum }) => (
          <li key={period}>
            <span>{period}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
      <Button title="Add" />
    </div>
  )
}

export default MainInfo
