function Experience ({experience}) {
  const {companyName, position, responsibilities, startDate, endDate, employed} = experience

  return (
    <div className="experience">
      <h2>Employment</h2>
      <div className="titles">
        {position && <p>{position}</p>}
        {companyName && <p>{companyName}</p>}
      </div>
      {responsibilities && formatLongText(responsibilities).map(sentence => {
        return(<p>{sentence}</p>)
      })}
      {startDate && <p>{employedDates(startDate, endDate, employed)}</p>}
    </div>  
    )
}

function employedDates(startDate = "", endDate = "", employed) {
  // Return the following formats
  // If employed: 11/1/23 - Current
  // Else: 11/1/23 - 3/4/24
  let dates = ""
  if (employed) {
    dates = startDate + " - " + "Current";
  } else {
    dates = startDate + " - " + endDate;
  }

  return dates;
}

function formatLongText(text) {
  let sentences = text.split("\n");
  return sentences;
}


export default Experience;