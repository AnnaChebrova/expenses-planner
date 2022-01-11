import MainInfo from '../MainInfo/MainInfo'
import Button from '../_share/Button/Button'
import mainInfoData from '../../assets/maininfoData.json'

const { mainInfoCosts, mainInfoIncomes, mainInfoBalance } = mainInfoData

const MainPage = () => {
  return (
    <>
      <h1>Журнал расходов</h1>
      <MainInfo data={mainInfoCosts} title="Расходы" transType="costs" />
      <MainInfo data={mainInfoIncomes} title="Доходы" transType="incomes" />
      <MainInfo data={mainInfoBalance} title="Баланс" transType="balance" />
      <Button title="Все расходы" />
      <Button title="Все доходы" />
    </>
  )
}

export default MainPage
