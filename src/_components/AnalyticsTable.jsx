import { calculateInvestmentResults, formatter } from "../util/investment"

export default function AnalyticsTable({filter}) {
    const result =  calculateInvestmentResults(filter)
    const initialInvestment = (result && result.length > 0) ?
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment : 0
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result.map((el, index) => {
                    const totalInterest = el.valueEndOfYear
                    - el.annualInvestment * el.year
                    - initialInvestment
                    const investedCapital = el.valueEndOfYear - totalInterest
                    return <tr key={index}>
                        <td>{el.year}</td>
                        <td>{formatter.format(el.valueEndOfYear)}</td>
                        <td>{formatter.format(el.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(investedCapital)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}