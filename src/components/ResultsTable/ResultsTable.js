const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2

})
const ResultsTable = (props) => {
    console.log(props);

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => (
    
                    <tr key={result.year}>
                    <td>{result.year}</td>
                    <td>{formatter.format(result.savingsEndOfYear)}</td>
                    <td>{formatter.format(result.yearlyInterest)}</td>
                    <td>{formatter.format(result.yearlyInterest)}</td>
                    <td>{formatter.format(result.yearlyContribution)}</td>
                  </tr>
          
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
