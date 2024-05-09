import React, { useState } from 'react'
import "./Transaction.css";
import TransactionItem from '../component/TransactionItem.js';
import { bankTransactions } from '../Date.js'

function Transaction() {
  const [transaction, settransaction] = useState(bankTransactions)
  return (
    <div className='transaction-continer'>
      < TransactionItem transaction={transaction} />
    </div>
  )
}

export default Transaction
