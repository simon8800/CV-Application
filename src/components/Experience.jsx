function Experience ({experience}) {
  const {companyName, position, responsibilities, startDate, endDate, employed} = experience

  return (
    <div className="experience">
      <h2>Employment</h2>
      <div className="titles">
        {position && <p>{position}</p>}
        {companyName && <p>{companyName}</p>}
      </div>
      {responsibilities && <p>{responsibilities}</p>}
    </div>  
    )
}

function dateMaker(startDate, endDate, employed) {
  return;
}
export default Experience;