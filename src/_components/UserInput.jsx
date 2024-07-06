export default function UserInput({filter, updateFilterOutside}) {

    const updateFilter = (element, value) => {
        updateFilterOutside(element, value)
    }
    return(
        <form id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="">INITIAL INVESTMENT</label>
                    <input type="text" value={filter.initialInvestment} onChange={(e) => updateFilter('initialInvestment', e.target.value)} />

                </div>
                <div>
                    <label htmlFor="">ANNUAL INVESTMENT</label>
                    <input type="text" value={filter.annualInvestment} onChange={(e) => updateFilter('annualInvestment', e.target.value)} />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="">EXPECTED RETURN</label>
                    <input type="text" value={filter.expectedReturn} onChange={(e) => updateFilter('expectedReturn', e.target.value)} />

                </div>
                <div>
                    <label htmlFor="">DURATION</label>
                    <input type="text" value={filter.duration} onChange={(e) => updateFilter('duration', e.target.value)} />
                </div>
            </div>
        </form>
    )
}