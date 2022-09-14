export function colorSearchQuery(limit = 100, direction, where) {
  const limitStr = `first: ${limit},`;
  const sortStr = `orderBy: createdAt, orderDirection: ${direction},`;
  let whereStr;
  if (where.searchValue != '' && where.filterSelected.length > 0) {
    whereStr = `where: {html_in: [${where.filterSelected.map((sel, i) => {
      return `"${sel}"`;
    })}], ${where.searchOption}_contains_nocase: "${where.searchValue}"}`;
  } else if (where.searchValue != '' && where.filterSelected.length == 0) {
    whereStr = `where: {${where.searchOption}_contains_nocase: "${where.searchValue}"}`;
  } else if (where.searchValue == '' && where.filterSelected.length > 0) {
    whereStr = `where: {html_in: [${where.filterSelected.map((sel) => {
      return `"${sel}"`;
    })}]}`;
  } else {
    whereStr = '';
  }

  return `{
      tokens(${limitStr} ${sortStr} ${whereStr}) {
        rgb 
        name
        html
        createdAt
        parent1Id
        parent2Id 
        owner { 
          id
        }
      }
    }`;
}

export function parentsQuery(parent1Id, parent2Id) {

  return `{
      parent1: tokens(where: {id: "${parent1Id}"}) {
        rgb 
        name
        html
        createdAt
        parent1Id
        parent2Id  
        owner { 
          id
        }
      }
      parent2: tokens(where: {id: "${parent2Id}"}) {
        rgb 
        name
        html
        createdAt
        parent1Id
        parent2Id  
        owner { 
          id
        }
      }
    }`;
}
