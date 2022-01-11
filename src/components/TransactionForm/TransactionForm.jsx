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
  state = {
    date: '',
    time: '',
    category: 'Еда',
    sum: '',
    currency: 'UAH',
    comment: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const dataFromLS = localStorage.getItem('transactions')
    const transactions = dataFromLS === null ? [] : JSON.parse(dataFromLS)
    localStorage.setItem('transactions', JSON.stringify([...transactions, this.state]))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>TransactionForm</h1>
        <LabelInput
          title="День"
          type="date"
          name="date"
          value={this.state.date}
          cbOnChange={this.handleChange}
        />
        <LabelInput
          title="Время"
          type="time"
          name="time"
          value={this.state.time}
          cbOnChange={this.handleChange}
        />
        <LabelInput
          title="Категория"
          type="button"
          name="category"
          value={this.state.category}
          cbOnChange={this.handleChange}
        />
        <LabelInput
          title="Сумма"
          name="sum"
          value={this.state.sum}
          placeholder="Введите сумму"
          cbOnChange={this.handleChange}
        />
        <LabelInput
          title="Валюта"
          type="button"
          name="currency"
          value={this.state.currency}
          cbOnChange={this.handleChange}
        />
        <LabelInput
          title="Комментарий"
          name="comment"
          value={this.state.comment}
          placeholder="Комментарий"
          cbOnChange={this.handleChange}
        />
        <Button type="type" title="Записать" />
      </form>
    )
  }
}

export default TransactionForm
