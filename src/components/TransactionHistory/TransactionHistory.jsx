

const TransactionHistory = ({items}) => {
  return (
    <table className="transaction-history">
        <thead>
           {items.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                 <th>{type }</th>
                 <th>{ amount}</th>
                 <th>{ currency}</th>
              </tr>
           ))}
    
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
  )
}

export default TransactionHistory
