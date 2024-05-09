



function TransactionItem({ transaction }) {
    console.log(transaction);
    return (
        <div className='transaction'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Descrption</th>
                        <th scope="col">catgory</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction?.map((valus) => {
                       return (<tr key={valus.id}>
                            <th >{valus.date}</th>
                            <td>{valus.describtion}</td>
                            <td>{valus.catagory}</td>
                            <td>ksh{valus.amount}</td>
                        </tr>)
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default TransactionItem
