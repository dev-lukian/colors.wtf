import cn from 'classnames';
import { useState } from 'react';

import ColorGrid from '../ColorGrid/ColorGrid';
import styles from './ColorScroll.module.css';

const ColorScroll = ({colors}) => {

  const [visableColors, setVisableColors] = useState(colors)
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState({value: "Newest Minted"});

  const handleSearchChange = (event) => {
    setSearch({value: event.target.value});
    const filteredColors = colors.filter(color => event.target.value == '' || color.name.includes(event.target.value));
    setVisableColors(filteredColors);
  }

  const handleFilterChange = (event) => {
    setFilter({value: event.target.value});
  }

  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.searchFilterWrapper}>
        <input 
          className={cn("searchInput")}
          type="text"
          required
          id="searchBar"
          role="searchBar"
          placeholder="search"
          onChange={handleSearchChange}
        />

        <select 
          className={cn("filterSelect")} 
          name="filter" 
          id="filter"
          onChange={handleFilterChange}
        >
          <option value="Newest Minted">newest minted</option>
          <option value="Oldest Minted">oldest minted</option> 
          <option value="Primary Color">primary color</option>
          <option value="Secondary Color">secondary color</option>
        </select>
      </div>
      <ColorGrid colors={visableColors}/>
    </div>
  );
};

export default ColorScroll;
