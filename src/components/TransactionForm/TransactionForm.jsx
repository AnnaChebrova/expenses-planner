// import Button from '../_share/Button/Button'

import { Component } from 'react'
import LabelInput from '../Labelinput/Labelinput'
import Button from '../_share/Button/Button'

// const TransactionForm = () => {
//   return (
//     <form>
//       <h1>TransactionForm</h1>
//       <LabelInput title="День" type="date" name="date" value="" />
//       <LabelInput title="Время" type="time" name="time" value="" />
//       <LabelInput title="Категория" type="category" name="category" value="" />
//       <LabelInput title="Сумма" type="sum" name="sum" value="" placeholder="Введите сумму" />
//       <LabelInput title="Валюта" type="currency" name="currency" value="" />
//       <LabelInput title="Комментарий" type="comment" name="comment" value="" placeholder="Комментарий" />
//       <Button type="type" title="OK"/>

//     </form>
//   )
// }

class TransactionForm extends Component {
  state={}
  handleSubmit = (e) => {
    e.preventDefault()
    const { transType, handleCloseTransactionForm } = this.props
    const dataFromLS = localStorage.getItem(transType)
    const transactions = dataFromLS === null ? [] : JSON.parse(dataFromLS)
    // console.log("this.state :>>", this.state)
    localStorage.setItem(
      transType,
      JSON.stringify([...transactions, this.props.dataForm]),
    )
    handleCloseTransactionForm()
  }

  render() {
    const { dataForm, handleToggleCatList, handleChange } = this.props
    const { date, time, category, sum, currency, comment } = dataForm
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>TransactionForm</h1>
        <LabelInput
          title="День"
          type="date"
          name="date"
          value={date}
          cbOnChange={handleChange}
        />
        <LabelInput
          title="Время"
          type="time"
          name="time"
          value={time}
          cbOnChange={handleChange}
        />
        <LabelInput
          title="Категория"
          type="button"
          name="category"
          value={category}
          cbOnClick={handleToggleCatList}
        />
        <LabelInput
          title="Сумма"
          name="sum"
          value={sum}
          placeholder="Введите сумму"
          cbOnChange={handleChange}
        />
        <LabelInput
          title="Валюта"
          type="button"
          name="currency"
          value={currency}
          cbOnChange={handleChange}
        />
        <LabelInput
          title="Комментарий"
          name="comment"
          value={comment}
          placeholder="Комментарий"
          cbOnChange={handleChange}
        />
        <Button type="type" title="Записать" />
      </form>
    )
  }
}

export default TransactionForm
