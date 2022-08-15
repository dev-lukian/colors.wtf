import cn from "classnames";
import { useState, useEffect } from "react";
import ColorButton from "../ColorButton/ColorButton";
import ColorButtonModal from "../ColorButtonModal/ColorButtonModal";

import Close from "../../public/close.svg";

import ColorGrid from "../ColorGrid/ColorGrid";
import styles from "./ColorScroll.module.css";

import getSearchedColors from "../../services/colorsService";
import colorSearchQuery from "../../queries/colorQuery";

const FILTER_OPTIONS = [
  <option key="Pink" value="Pink">
    Pink
  </option>,
  <option key="Light Pink" value="Light Pink">
    Light Pink
  </option>,
  <option key="Hot Pink" value="Hot Pink">
    Hot Pink
  </option>,
  <option key="Deep Pink" value="Deep Pink">
    Deep Pink
  </option>,
  <option key="Pale Violet Red" value="Pale Violet Red">
    Pale Violet Red
  </option>,
  <option key="Medium Violet Red" value="Medium Violet Red">
    Medium Violet Red
  </option>,
  <option key="Lavender" value="Lavender">
    Lavender
  </option>,
  <option key="Thistle" value="Thistle">
    Thistle
  </option>,
  <option key="Plum" value="Plum">
    Plum
  </option>,
  <option key="Orchid" value="Orchid">
    Orchid
  </option>,
  <option key="Violet" value="Violet">
    Violet
  </option>,
  <option key="Magenta" value="Magenta">
    Magenta
  </option>,
  <option key="Medium Orchid" value="Medium Orchid">
    Medium Orchid
  </option>,
  <option key="Dark Orchid" value="Dark Orchid">
    Dark Orchid
  </option>,
  <option key="Dark Violet" value="Dark Violet">
    Dark Violet
  </option>,
  <option key="Blue Violet" value="Blue Violet">
    Blue Violet
  </option>,
  <option key="Dark Magenta" value="Dark Magenta">
    Dark Magenta
  </option>,
  <option key="Purple" value="Purple">
    Purple
  </option>,
  <option key="Medium Purple" value="Medium Purple">
    Medium Purple
  </option>,
  <option key="Medium Slate Blue" value="Medium Slate Blue">
    Medium Slate Blue
  </option>,
  <option key="Slate Blue" value="Slate Blue">
    Slate Blue
  </option>,
  <option key="Dark Slate Blue" value="Dark Slate Blue">
    Dark Slate Blue
  </option>,
  <option key="Rebecca Purple" value="Rebecca Purple">
    Rebecca Purple
  </option>,
  <option key="Indigo" value="Indigo">
    Indigo
  </option>,
  <option key="Light Salmon" value="Light Salmon">
    Light Salmon
  </option>,
  <option key="Salmon" value="Salmon">
    Salmon
  </option>,
  <option key="Dark Salmon" value="Dark Salmon">
    Dark Salmon
  </option>,
  <option key="Light Coral" value="Light Coral">
    Light Coral
  </option>,
  <option key="Indian Red" value="Indian Red">
    Indian Red
  </option>,
  <option key="Crimson" value="Crimson">
    Crimson
  </option>,
  <option key="Red" value="Red">
    Red
  </option>,
  <option key="Fire Brick" value="Fire Brick">
    Fire Brick
  </option>,
  <option key="Dark Red" value="Dark Red">
    Dark Red
  </option>,
  <option key="Orange" value="Orange">
    Orange
  </option>,
  <option key="Dark Orange" value="Dark Orange">
    Dark Orange
  </option>,
  <option key="Coral" value="Coral">
    Coral
  </option>,
  <option key="Tomato" value="Tomato">
    Tomato
  </option>,
  <option key="Orange Red" value="Orange Red">
    Orange Red
  </option>,
  <option key="Gold" value="Gold">
    Gold
  </option>,
  <option key="Yellow" value="Yellow">
    Yellow
  </option>,
  <option key="Light Yellow" value="Light Yellow">
    Light Yellow
  </option>,
  <option key="Lemon Chiffon" value="Lemon Chiffon">
    Lemon Chiffon
  </option>,
  <option key="Light Golden Rod Yellow" value="Light Golden Rod Yellow">
    Light Golden Rod Yellow
  </option>,
  <option key="Papaya Whip" value="Papaya Whip">
    Papaya Whip
  </option>,
  <option key="Moccasin" value="Moccasin">
    Moccasin
  </option>,
  <option key="Peach Puff" value="Peach Puff">
    Peach Puff
  </option>,
  <option key="Pale Golden Rod" value="Pale Golden Rod">
    Pale Golden Rod
  </option>,
  <option key="Khaki" value="Khaki">
    Khaki
  </option>,
  <option key="Dark Khaki" value="Dark Khaki">
    Dark Khaki
  </option>,
  <option key="Green Yellow" value="Green Yellow">
    Green Yellow
  </option>,
  <option key="Chartreuse" value="Chartreuse">
    Chartreuse
  </option>,
  <option key="Lawn Green" value="Lawn Green">
    Lawn Green
  </option>,
  <option key="Lime" value="Lime">
    Lime
  </option>,
  <option key="Lime Green" value="Lime Green">
    Lime Green
  </option>,
  <option key="Pale Green" value="Pale Green">
    Pale Green
  </option>,
  <option key="Light Green" value="Light Green">
    Light Green
  </option>,
  <option key="Medium Spring Green" value="Medium Spring Green">
    Medium Spring Green
  </option>,
  <option key="Spring Green" value="Spring Green">
    Spring Green
  </option>,
  <option key="Medium Sea Green" value="Medium Sea Green">
    Medium Sea Green
  </option>,
  <option key="Sea Green" value="Sea Green">
    Sea Green
  </option>,
  <option key="Forest Green" value="Forest Green">
    Forest Green
  </option>,
  <option key="Green" value="Green">
    Green
  </option>,
  <option key="Dark Green" value="Dark Green">
    Dark Green
  </option>,
  <option key="Yellow Green" value="Yellow Green">
    Yellow Green
  </option>,
  <option key="Olive Drab" value="Olive Drab">
    Olive Drab
  </option>,
  <option key="Dark Olive Green" value="Dark Olive Green">
    Dark Olive Green
  </option>,
  <option key="Medium Aqua Marine" value="Medium Aqua Marine">
    Medium Aqua Marine
  </option>,
  <option key="Dark Sea Green" value="Dark Sea Green">
    Dark Sea Green
  </option>,
  <option key="Light Sea Green" value="Light Sea Green">
    Light Sea Green
  </option>,
  <option key="Dark Cyan" value="Dark Cyan">
    Dark Cyan
  </option>,
  <option key="Teal" value="Teal">
    Teal
  </option>,
  <option key="Cyan" value="Cyan">
    Cyan
  </option>,
  <option key="Light Cyan" value="Light Cyan">
    Light Cyan
  </option>,
  <option key="Pale Turquoise" value="Pale Turquoise">
    Pale Turquoise
  </option>,
  <option key="Aquamarine" value="Aquamarine">
    Aquamarine
  </option>,
  <option key="Turquoise" value="Turquoise">
    Turquoise
  </option>,
  <option key="Medium Turquoise" value="Medium Turquoise">
    Medium Turquoise
  </option>,
  <option key="Dark Turquoise" value="Dark Turquoise">
    Dark Turquoise
  </option>,
  <option key="Cadet Blue" value="Cadet Blue">
    Cadet Blue
  </option>,
  <option key="Steel Blue" value="Steel Blue">
    Steel Blue
  </option>,
  <option key="Light Steel Blue" value="Light Steel Blue">
    Light Steel Blue
  </option>,
  <option key="Light Blue" value="Light Blue">
    Light Blue
  </option>,
  <option key="Powder Blue" value="Powder Blue">
    Powder Blue
  </option>,
  <option key="Light Sky Blue" value="Light Sky Blue">
    Light Sky Blue
  </option>,
  <option key="Sky Blue" value="Sky Blue">
    Sky Blue
  </option>,
  <option key="Cornflower Blue" value="Cornflower Blue">
    Cornflower Blue
  </option>,
  <option key="Deep Sky Blue" value="Deep Sky Blue">
    Deep Sky Blue
  </option>,
  <option key="Dodger Blue" value="Dodger Blue">
    Dodger Blue
  </option>,
  <option key="Royal Blue" value="Royal Blue">
    Royal Blue
  </option>,
  <option key="Blue" value="Blue">
    Blue
  </option>,
  <option key="Medium Blue" value="Medium Blue">
    Medium Blue
  </option>,
  <option key="Dark Blue" value="Dark Blue">
    Dark Blue
  </option>,
  <option key="Navy" value="Navy">
    Navy
  </option>,
  <option key="Midnight Blue" value="Midnight Blue">
    Midnight Blue
  </option>,
  <option key="Cornsilk" value="Cornsilk">
    Cornsilk
  </option>,
  <option key="Blanched Almond" value="Blanched Almond">
    Blanched Almond
  </option>,
  <option key="Bisque" value="Bisque">
    Bisque
  </option>,
  <option key="Navajo White" value="Navajo White">
    Navajo White
  </option>,
  <option key="Wheat" value="Wheat">
    Wheat
  </option>,
  <option key="Burly Wood" value="Burly Wood">
    Burly Wood
  </option>,
  <option key="Tan" value="Tan">
    Tan
  </option>,
  <option key="Rosy Brown" value="Rosy Brown">
    Rosy Brown
  </option>,
  <option key="Sandy Brown" value="Sandy Brown">
    Sandy Brown
  </option>,
  <option key="Golden Rod" value="Golden Rod">
    Golden Rod
  </option>,
  <option key="Dark Golden Rod" value="Dark Golden Rod">
    Dark Golden Rod
  </option>,
  <option key="Peru" value="Peru">
    Peru
  </option>,
  <option key="Chocolate" value="Chocolate">
    Chocolate
  </option>,
  <option key="Olive" value="Olive">
    Olive
  </option>,
  <option key="Saddle Brown" value="Saddle Brown">
    Saddle Brown
  </option>,
  <option key="Sienna" value="Sienna">
    Sienna
  </option>,
  <option key="Brown" value="Brown">
    Brown
  </option>,
  <option key="Maroon" value="Maroon">
    Maroon
  </option>,
  <option key="White" value="White">
    White
  </option>,
  <option key="Snow" value="Snow">
    Snow
  </option>,
  <option key="Honey Dew" value="Honey Dew">
    Honey Dew
  </option>,
  <option key="Mint Cream" value="Mint Cream">
    Mint Cream
  </option>,
  <option key="Azure" value="Azure">
    Azure
  </option>,
  <option key="Alice Blue" value="Alice Blue">
    Alice Blue
  </option>,
  <option key="Ghost White" value="Ghost White">
    Ghost White
  </option>,
  <option key="White Smoke" value="White Smoke">
    White Smoke
  </option>,
  <option key="Sea Shell" value="Sea Shell">
    Sea Shell
  </option>,
  <option key="Beige" value="Beige">
    Beige
  </option>,
  <option key="Old Lace" value="Old Lace">
    Old Lace
  </option>,
  <option key="Floral White" value="Floral White">
    Floral White
  </option>,
  <option key="Ivory" value="Ivory">
    Ivory
  </option>,
  <option key="Antique White" value="Antique White">
    Antique White
  </option>,
  <option key="Linen" value="Linen">
    Linen
  </option>,
  <option key="Lavender Blush" value="Lavender Blush">
    Lavender Blush
  </option>,
  <option key="Misty Rose" value="Misty Rose">
    Misty Rose
  </option>,
  <option key="Gainsboro" value="Gainsboro">
    Gainsboro
  </option>,
  <option key="Light Gray" value="Light Gray">
    Light Gray
  </option>,
  <option key="Silver" value="Silver">
    Silver
  </option>,
  <option key="Dark Gray" value="Dark Gray">
    Dark Gray
  </option>,
  <option key="Dim Gray" value="Dim Gray">
    Dim Gray
  </option>,
  <option key="Gray" value="Gray">
    Gray
  </option>,
  <option key="Light Slate Gray" value="Light Slate Gray">
    Light Slate Gray
  </option>,
  <option key="Slate Gray" value="Slate Gray">
    Slate Gray
  </option>,
  <option key="Dark Slate Gray" value="Dark Slate Gray">
    Dark Slate Gray
  </option>,
  <option key="Black" value="Black">
    Black
  </option>,
];

const ColorScroll = ({ modal }) => {
  const [isValid, setIsValid] = useState(true);
  const [filterOptions, setFilterOptions] = useState(FILTER_OPTIONS);
  const [filterSelected, setFilterSelected] = useState([]);
  const [visableColors, setVisableColors] = useState([]);
  const [searchOption, setSearchOption] = useState({ value: "name" });
  const [serachConfig, setSearchConfig] = useState({
    type: "text",
    placeholder: "name",
  });
  const [search, setSearch] = useState({ value: "" });
  const [sort, setSort] = useState({ value: "desc" });

  useEffect(() => {
    let mounted = true;
    if (isValid) {
      let query = colorSearchQuery(100, sort.value, {
        filterSelected: filterSelected,
        searchOption: searchOption.value,
        searchValue: search.value,
      });

      getSearchedColors(query).then((data) => {
        if (mounted) {
          let visableColors = [];
          data.data?.tokens.map((color) => {
            if (color.id != 0) {
              visableColors.push(color);
            }
          });
          setVisableColors(visableColors);
        }
      });
    }
    return () => (mounted = false);
  }, [search.value, isValid, sort.value, filterSelected, searchOption.value]);

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;

    if (searchOption.value == "name") {
      // "name" only valid if between 1 and 50 characters
      if (searchValue.length > 50 || searchValue.length < 0) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else if (searchOption.value == "rgb") {
      // "rgb" only valid if in the form "0-255 ?, ?0-255 ?, ?0-255 *"
      if (
        !searchValue.match(
          "^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]) ?, ?([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]) ?, ?([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]) *$"
        ) &&
        searchValue.length != 0
      ) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else if (searchOption.value == "hex") {
      // "hex" only valid if in the form "#?[0-9a-fA-F]{6} *"
      if (
        !searchValue.match("^#?[0-9a-fA-F]{6} *$") &&
        searchValue.length != 0
      ) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else if (searchOption.value == "owner") {
      // "owner" only valid if in the form ethereum addres or ens
      // TODO: check if ens regex is correct
      // if((!searchValue.match("^0x[a-fA-F0-9]{40} *$") || !searchValue.match("[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*) *?")) && searchValue.length != 0) {
      if (
        !searchValue.match("^0x[a-fA-F0-9]{40} *$") &&
        searchValue.length != 0
      ) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }

    setSearch({ value: searchValue });
  };

  const handleSearchOptionChange = (event) => {
    const searchOptionValue = event.target.value;

    setSearchOption({ value: searchOptionValue });
    setSearch({ value: "" });
    setIsValid(true);

    if (searchOptionValue == "name") {
      setSearchConfig({ type: "text", placeholder: "name" });
    } else if (searchOptionValue == "rgb") {
      setSearchConfig({ type: "text", placeholder: "r, g, b" });
    } else if (searchOptionValue == "hex") {
      setSearchConfig({ type: "text", placeholder: "#ffffff" });
    } else if (searchOptionValue == "owner") {
      setSearchConfig({
        type: "text",
        placeholder: "0x8d1bb337E3291f41ff1434F61D6155bBdE63EE58",
      });
    } else {
      setSearchConfig({ type: "text", placeholder: "name" });
    }
  };

  const handleSortChange = (event) => {
    setSort({ value: event.target.value });
  };

  const handleFilterChange = (event) => {
    let newFilterOptions = [];
    let newFilterSelected = [...filterSelected];
    const selectedFilterOptionValue = event.target.value;
    filterOptions.map((op) => {
      if (op.props.value != selectedFilterOptionValue) {
        newFilterOptions.push(op);
      } else {
        newFilterSelected.push(selectedFilterOptionValue);
      }
    });
    setFilterSelected(newFilterSelected);
    setFilterOptions(newFilterOptions);
  };

  const handleRemove = (filterValue) => {
    let newFilterSelected = [];
    filterSelected.map((f) => {
      if (f != filterValue) {
        newFilterSelected.push(f);
      }
    });

    let newFilterOptions = [];
    FILTER_OPTIONS.map((f) => {
      if (!newFilterSelected.includes(f.props.value)) {
        newFilterOptions.push(f);
      }
    });
    setFilterSelected(newFilterSelected);
    setFilterOptions(newFilterOptions);
  };

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
              style={{
                color:
                  isValid || search.length == 0
                    ? "var(--white)"
                    : "var(--warning)",
              }}
            />
          </div>

          <select
            className={cn("select")}
            name="sort"
            id="sort"
            onChange={handleSortChange}
          >
            <option value="desc">newest minted</option>
            <option value="asc">oldest minted</option>
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
            <option key="default" value="">
              filter
            </option>
            {filterOptions.map((op) => {
              return op;
            })}
          </select>
          {filterSelected.map((op) => {
            return (
              <div key={op} className={styles.filterChip}>
                {op}
                <div
                  onClick={() => handleRemove(op)}
                  className={styles.closeButton}
                >
                  <Close className={styles.closeIcon} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isValid ? (
        visableColors.length > 0 ? (
          <ColorGrid
            ColorButton={modal ? ColorButtonModal : ColorButton}
            colors={visableColors}
          />
        ) : (
          <p>No colors found.</p>
        )
      ) : (
        <p>Invalid {searchOption.value}.</p>
      )}
    </div>
  );
};

export default ColorScroll;
