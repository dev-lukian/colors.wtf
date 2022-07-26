import cn from 'classnames';
import { useState, useEffect } from 'react';

import ColorGrid from '../ColorGrid/ColorGrid';
import styles from './ColorScroll.module.css';

const ColorScroll = ({colors}) => {

  const [visableColors, setVisableColors] = useState(colors);
  const [serachOption, setSearchOption] = useState({value: "name"})
  const [serachConfig, setSearchConfig] = useState({type: "text", placeholder: "name"})
  const [search, setSearch] = useState({value: ""});
  const [sort, setSort] = useState({value: "newest minted"});
  const [filter, setFilter] = useState({value: ""})

  useEffect(()=> {
    // TODO: API call
    const filteredColors = colors.filter(color => search.value == "" || color.name.includes(event.target.value));
    setVisableColors(filteredColors);
  },[search, sort, filter])

  const handleSearchChange = (event) => {
    setSearch({value: event.target.value});
  }

  const handleSearchOptionChange = (event) => {
    
    const searchOptionValue = event.target.value;

    setSearchOption({value: setSearchOption});
    setSearch({value: ""});

    if(searchOptionValue == "name") {
        setSearchConfig({type: "text", placeholder: "name"});
    } else if(searchOptionValue == "rgb") {
        setSearchConfig({type: "text", placeholder: "r, g, b"});
    } else if(searchOptionValue == "hex") {
        setSearchConfig({type: "text", placeholder: "#FFFFFF"});
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
      <ColorGrid colors={visableColors}/>
    </div>
  );
};

export default ColorScroll;
