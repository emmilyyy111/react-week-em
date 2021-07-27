function RepresentativeSearchResults(props){

const {offices, officials} = props

    return (
        <div>
            {offices.map(office => {

                const official = officials[office.officialIndices[0]]
                const address = official?.address && official?.address[0]
                
            return (
                 <div className="representative-info">
                    <div className="office-title">{office.name}</div>
                    <p>{official?.name}</p>
                    <label>
                        <label className="info-title">Phone:</label>&nbsp;
                        <a href={`tel:${official?.phones[0]}`}>
                            {official?.phones[0]}
                        </a>
                    </label>
                    <br/>
                    {official?.address && 
                        <>
                        <label>
                            <label className="info-title">Address:</label>&nbsp;
                            <span>
                            {official?.address[0]?.line1},
                            &nbsp; {official?.address[0]?.city},
                            &nbsp; {official?.address[0]?.state}, 
                            &nbsp; {official?.address[0]?.zip}
                            </span>
                        </label>
                        <br/>
                        </>
                    }
                    {official?.emails && 
                        <>
                        <label>
                            <label className="info-title">Email:</label>&nbsp;
                            <a href={`mailto: ${official?.emails[0]}`}>
                                {official?.emails[0]}
                            </a>
                        </label>
                        <br/>
                        </>
                    }
        </div>)
        
    })}        
    </div>
    )
    
}

export default RepresentativeSearchResults