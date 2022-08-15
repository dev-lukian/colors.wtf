export default function colorSearchQuery(limit=100, direction, where) {

  
  const limitStr = `first: ${limit},`
  const sortStr = `orderBy: createdAt, orderDirection: ${direction},`
  let whereStr;
  console.log(where.filterSelected)
  if (where.searchValue != "" && where.filterSelected.length > 0)  {
     whereStr = `where: {html_in: [${where.filterSelected.map((sel, i) => {return `"${sel}"`})}], ${where.searchOption}_contains_nocase: "${where.searchValue}"}`;
  } else if (where.searchValue != "" && where.filterSelected.length == 0)  {
     whereStr = `where: {${where.searchOption}_contains_nocase: "${where.searchValue}"}`;
  } else if (where.searchValue == "" && where.filterSelected.length > 0)  {
    whereStr = `where: {html_in: [${where.filterSelected.map((sel) => {return `"${sel}"`})}]}`;
  } else {
    whereStr = "";
  }

  return(
    `{
      tokens(${limitStr} ${sortStr} ${whereStr}) {
        rgb 
        name
        html
        createdAt 
        owner { 
          id
        }
      }
    }`
  )
} 