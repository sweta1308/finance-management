export const Table = ({ data }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>

          {data.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>${transaction.amount}</td>
              <td>{new Date(transaction.updatedAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
