import cn from 'classnames';
import { useState, useEffect } from 'react';
import ColorButton from '../ColorButton/ColorButton';
import ColorButtonModal from '../ColorButtonModal/ColorButtonModal';

import Close from '../../public/close.svg';

import ColorGrid from '../ColorGrid/ColorGrid';
import styles from './ColorScroll.module.css';

const FILTER_OPTIONS = [
  <option key="primary color" value="primary color">primary color</option>,
  <option key="secondary color" value="secondary color">secondary color</option>,
  <option key="html color" value="html color">html color</option>,
]

const ColorScroll = ({modal}) => {

  const [isValid, setIsValid] = useState(true);
  const [filterOptions, setFilterOptions] = useState(FILTER_OPTIONS);
  const [filterSelected, setFilterSelected] = useState([]);
  const [visableColors, setVisableColors] = useState([]);
  const [searchOption, setSearchOption] = useState({value: "name"});
  const [serachConfig, setSearchConfig] = useState({type: "text", placeholder: "name"});
  const [search, setSearch] = useState({value: ""});
  const [sort, setSort] = useState({value: "newest minted"});
  const [filter, setFilter] = useState({value: ""});


  useEffect(() => {
    let mounted = true;
    if(isValid) {
      const query = 
      `{
        colorSearch(text: "${search.value}") 
        { 
          rgb 
          name 
          owner { 
            id
          }
        } 
      }`

      getSearchedColors(query).then(data => {
        if(mounted) {
          let visableColors = [];
          data.data?.colorSearch.map(color => {
            if(color.id != 0) {
              visableColors.push(color)
            }
          });
          console.log(visableColors);
          setVisableColors(visableColors);
        }
      });
    }
    return () => mounted = false;
  }, [search])

  function getSearchedColors(query) {
    return fetch('https://api.thegraph.com/subgraphs/name/0x7b5/colors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        query
       })
    })
      .then(data => data.json())
   }

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

    setSearch({value: searchValue});
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
    let newFilterOptions = []
    const selectedFilterOptionValue = event.target.value;
    filterOptions.map((op) =>{
      if(op.props.value != selectedFilterOptionValue) {
        newFilterOptions.push(op);
      } else {
        filterSelected.push(selectedFilterOptionValue);
      }
    });
    setFilterOptions(newFilterOptions);
  };

  const handleRemove = (filterValue) => {
    let newFilterSelected = []
    filterSelected.map((f) => {
      if(f != filterValue) {
        newFilterSelected.push(f)
      }
    });

    let newFilterOptions = []
    FILTER_OPTIONS.map((f) => {
      if(!newFilterSelected.includes(f.props.value)) {
        newFilterOptions.push(f)
      }
    })
    setFilterSelected(newFilterSelected);
    setFilterOptions(newFilterOptions);
  }

  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.searchFilterSortWrapper}>
        <div className={styles.searchSortWrapper}>
          <div className={styles.searchWrapper}>
            <select 
              className={cn("select", styles.noOutline, styles.rightBorder)} 
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
              className={cn("searchInput", styles.noOutline)}
              type={serachConfig.type}
              autoComplete="off"
              required
              id="searchBar"
              role="searchBar"
              placeholder={serachConfig.placeholder}
              onChange={handleSearchChange}
              style={{color: isValid || search.length == 0? "var(--white)" : "var(--warning)"}}
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
        </div>

        {/* TODO: convert into dropdown */}
        <div className={styles.filterWrapper}>
          <select 
            className={cn("select", styles.filterSelectWrapper)} 
            name="filter" 
            id="filter"
            onChange={handleFilterChange}
          >
            <option key="default" value="">filter</option>
            {
              filterOptions.map((op) => {
                return op
              })
            }
          </select>
          {
            filterSelected.map(op => {
              return (
                <div key={op} className={styles.filterChip}>
                  {op}
                  <div onClick={() => handleRemove(op)} className={styles.closeButton}>
                    <Close className={styles.closeIcon} />
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
      {
        isValid ? (
          visableColors.length > 0 ? (
              <ColorGrid ColorButton={modal ? ColorButtonModal : ColorButton} colors={visableColors} />
          ) : (
            <p>No colors found.</p>
          )
        ) : (
          <p>Invalid {searchOption.value}.</p>
        )
      }
      
    </div>
  );
};

export default ColorScroll;
