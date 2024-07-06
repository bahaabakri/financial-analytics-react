import { calculateInvestmentResults } from "../util/investment"

export default function AnalyticsTable({filter}) {

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
                {calculateInvestmentResults(
                    filter.initialInvestment,
                    filter.annualInvestment,
                    filter.expectedReturn,
                    filter.duration
                ).map((el, index) => {
                    <tr key={index}>
                        <td>{el.year}</td>
                        <td>{el.valueEndOfYear}</td>
                        <td>{el.interest}</td>
                        <td>{el.interest}</td>
                        <td>{el.valueEndOfYear}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}