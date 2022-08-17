import { clientRgbToContractRgb, hexToRgb, rgbToContractRgb } from '../util/colorConversion';

export default function colorSearchQuery(limit=100, direction, where) {

  const { searchOption, searchValue, filterSelected } = where;
  
  const limitStr = `first: ${limit},`
  const sortStr = `orderBy: createdAt, orderDirection: ${direction},`
  let whereStr;
  let querySeachValue;
  let querySearchOption;

  if(searchValue != "") {
    if(searchOption == "rgb") {
      querySearchOption = "rgb";
      querySeachValue = clientRgbToContractRgb(searchValue);
    } else if(searchOption == "owner") {
      querySearchOption = "owner";
      querySeachValue = searchValue;
    } else if(searchOption == "hex") {
      querySearchOption = "rgb";
      const {r, g, b} = hexToRgb(searchValue);
      querySeachValue = rgbToContractRgb(r, g, b);
      console.log(rgbToContractRgb(r, g, b));
    } else if(searchOption == "name") {
      querySearchOption = "name_contains_nocase";
      querySeachValue = searchValue;
    }
  }


  if (searchValue != "" && filterSelected.length > 0)  {
     whereStr = `where: {html_in: [${filterSelected.map((sel) => {return `"${sel}"`})}], ${querySearchOption}: "${querySeachValue}"}`;
  } else if (searchValue != "" && filterSelected.length == 0)  {
     whereStr = `where: {${querySearchOption}: "${querySeachValue}"}`;
  } else if (searchValue == "" && filterSelected.length > 0)  {
    whereStr = `where: {html_in: [${filterSelected.map((sel) => {return `"${sel}"`})}]}`;
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