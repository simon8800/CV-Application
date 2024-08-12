function ResumeName({firstName, lastName}) {
  // Helper function to concatenate and trim names
  const getFullName = (firstName, lastName) => {
    return `${firstName || ''} ${lastName || ''}`.trim();
  }

  const fullName = getFullName(firstName, lastName);

  return fullName ? <h2>{fullName}</h2> : null;
}

export default ResumeName;