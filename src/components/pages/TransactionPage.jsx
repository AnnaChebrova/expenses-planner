import { Component } from 'react'
import moment from 'moment'

import Button from '../_share/Button/Button'
import TransactionForm from '../TransactionForm/TransactionForm'
import CategoriesTransactions from '../CategoriesTransactions/CategoriesTransactions'
import dataCatList from '../../assets/categoriesList.json'

class TransactionPage extends Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    time: moment().format('hh:mm'),
    category: 'Еда',
    sum: '',
    currency: 'UAH',
    comment: '',
    isCatList: false,
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleUpdateCat = (category) => {
    this.setState({ category })
    this.handleToggleCatList()
  }

  handleToggleCatList = () => {
    this.setState((prev) => ({ isCatList: !prev.isCatList }))
  }

  render() {
    const { transType, handleCloseTransactionForm } = this.props
    const { isCatList, ...dataForm } = this.state

    return (
      <>
        {!this.state.isCatList ? (
          <div>
            <Button title="GoBack" cbOnClick={handleCloseTransactionForm} />

            <h1> {transType === 'costs' ? 'Расходы' : 'Доходы'}</h1>
            <TransactionForm
              transType={transType}
              dataForm={dataForm}
              handleCloseTransactionForm={handleCloseTransactionForm}
              handleToggleCatList={this.handleToggleCatList}
              handleChange={this.handleChange}
            />
          </div>
        ) : (
          <CategoriesTransactions
            catList={
              transType === 'costs'
                ? dataCatList.costsCat
                : dataCatList.incomesCat
            }
            handleToggleCatList={this.handleToggleCatList}
            handleUpdateCat={this.handleUpdateCat}
          />
        )}
      </>
    )
  }
}

export default TransactionPage
