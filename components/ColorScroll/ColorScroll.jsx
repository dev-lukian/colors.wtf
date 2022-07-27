import cn from 'classnames';
import { useState, useEffect } from 'react';

import ColorGrid from '../ColorGrid/ColorGrid';
import styles from './ColorScroll.module.css';

const ColorScroll = ({colors}) => {

  const [isValid, setIsValid] = useState(true);
  const [visableColors, setVisableColors] = useState(colors);
  const [searchOption, setSearchOption] = useState({value: "name"})
  const [serachConfig, setSearchConfig] = useState({type: "text", placeholder: "name"})
  const [search, setSearch] = useState({value: ""});
  const [sort, setSort] = useState({value: "newest minted"});
  const [filter, setFilter] = useState({value: ""})

  useEffect(()=> {
    
    // TODO:
    // if(isValid) {
    //   // make api call with http://colors.wtf/api/query?search={search.value}&sort={sort.value}&filter={filter.value}
    // }

    const filteredColors = colors.filter(color => search.value == "" || color.name.includes(event.target.value));
    setVisableColors(filteredColors);
  },[search, sort, filter])

  const handleSearchChange = (event) => {

    const searchValue = event.target.value;

    if(searchOption.value == "name") {
      // "name" only valid if between 1 and 50 characters
      if(searchValue.length > 50 || searchValue.length < 0 ) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }

    } else if(searchOption.value == "rgb") {
      // "rgb" only valid if in the form "0-255 ?, ?0-255 ?, ?0-255 *"
      if(!searchValue.match("^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]) ?, ?([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]) ?, ?([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]) *$") && searchValue.length != 0) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }

    } else if(searchOption.value == "hex") {
      // "hex" only valid if in the form "#?[0-9a-fA-F]{6} *"
      if(!searchValue.match("^#?[0-9a-fA-F]{6} *$") && searchValue.length != 0) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
        
    } else if(searchOption.value == "owner") {
      // "owner" only valid if in the form ethereum addres or ens
      // TODO: check if ens regex is correct
      // if((!searchValue.match("^0x[a-fA-F0-9]{40} *$") || !searchValue.match("[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*) *?")) && searchValue.length != 0) {
      if((!searchValue.match("^0x[a-fA-F0-9]{40} *$")) && searchValue.length != 0) { 
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }

    setSearch({value: searchOption});
  }

  const handleSearchOptionChange = (event) => {
    
    const searchOptionValue = event.target.value;

    setSearchOption({value: searchOptionValue});
    setSearch({value: ""});
    setIsValid(true);

    if(searchOptionValue == "name") {
        setSearchConfig({type: "text", placeholder: "name"});
    } else if(searchOptionValue == "rgb") {
        setSearchConfig({type: "text", placeholder: "r, g, b"});
    } else if(searchOptionValue == "hex") {
        setSearchConfig({type: "text", placeholder: "#ffffff"});
    } else if(searchOptionValue == "owner") {
        setSearchConfig({type: "text", placeholder: "0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58"});
    } else {
      setSearchConfig({type: "text", placeholder: "name"});
    }
  }

  const handleSortChange = (event) => {
    setSort({value: event.target.value});
  }

  const handleFilterChange = (event) => {
    setFilter({value: event.target.value});
  }

  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.searchFilterWrapper}>
        <div className={styles.searchWrapper}>
          <select 
            className={cn("select")} 
            name="serachOption" 
            id="serachOption"
            onChange={handleSearchOptionChange}
          >
            <option value="name">name</option>
            <option value="rgb">rgb</option> 
            <option value="hex">hex</option>
            <option value="owner">owner</option>
          </select>

          <input 
            className={cn("searchInput")}
            type={serachConfig.type}
            required
            id="searchBar"
            role="searchBar"
            placeholder={serachConfig.placeholder}
            onChange={handleSearchChange}
            style={{color: isValid ? "var(--white)" : "var(--warning)"}}
          />
        </div>

        <select 
          className={cn("select")} 
          name="sort" 
          id="sort"
          onChange={handleSortChange}
        >
          <option value="Newest Minted">newest minted</option>
          <option value="Oldest Minted">oldest minted</option> 
        </select>

        {/* TODO: convert into dropdown */}
        <select 
          className={cn("select")} 
          name="filter" 
          id="filter"
          onChange={handleFilterChange}
        >
          <option value="">filter</option>
          <optgroup label = "attributes">
            <option value="primary color">primary color</option>
            <option value="secondary color">secondary color</option>
            <option value="html color">html color</option>
          </optgroup>
        </select>
      </div>
      <ColorGrid colors={visableColors} />
    </div>
  );
};

export default ColorScroll;
