import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTextWidth
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(true);
  const [destination, setDestination] = useState("");

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate()

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", {state: {destination, date, options}})
  }

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTextWidth} />
            <span>Stays</span>
          </div>
        </div>
        <div className="headerContent">
          <div className="headerHeading">
            <h2>A lifetime of discounts? It's Genius</h2>
            <p>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with{" "}
            </p>
            <button className="headerBtn">Sing in / Register</button>
          </div>
        </div>
        {type !== "list" && <>
        
          <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adults ${options.children} children ${options.room} room`}</span>
            {openOptions && <div className="headerSearchCountArea">
              <div className="singleCount">
                <span>Adult</span>
                <div className="countBtnContent">
                  <button
                    disabled={options.adult <= 1}
                    onClick={() => handleOptions("adult", "d")}
                    className="countButton"
                  >
                    -
                  </button>
                  <span>{options.adult}</span>
                  <button
                    onClick={() => handleOptions("adult", "i")}
                    className="countButton"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="singleCount">
                <span>Children</span>
                <div className="countBtnContent">
                  <button
                    disabled={options.children <= 1}
                    onClick={() => handleOptions("children", "d")}
                    className="countButton"
                  >
                    -
                  </button>
                  <span>{options.children}</span>
                  <button
                    onClick={() => handleOptions("children", "i")}
                    className="countButton"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="singleCount">
                <span>Room</span>
                <div className="countBtnContent">
                  <button
                    disabled={options.room <= 1}
                    onClick={() => handleOptions("room", "d")}
                    className="countButton"
                  >
                    -
                  </button>
                  <span>{options.room}</span>
                  <button
                    onClick={() => handleOptions("room", "i")}
                    className="countButton"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
  );
};

export default Header;
