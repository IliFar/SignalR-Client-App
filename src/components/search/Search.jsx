import { useState, useContext } from "react";
import { AppContext } from "../Data";
import { BiSearchAlt } from "react-icons/bi";
import "./Search.css";


export default function SearchBox() {
const [searchInput, setSearchInput] = useState("");
const { roomNameList } = useContext(AppContext);
const allRooms = document.getElementsByClassName("room");

const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value.toLowerCase());
};

//Nothing in search box, show all
if (allRooms.length > 0 && searchInput.length == 0) {
    for (let i = 0; i < roomNameList.length; i++) {
        allRooms[i].classList.remove("hidden");
    }
}

if (allRooms.length > 0 && searchInput.length > 0) {
    //Reset, show all
    for (let i = 0; i < roomNameList.length; i++) {
        allRooms[i].classList.remove("hidden");
    }
    //show result only
    roomNameList.map((name, i) => {
        let roomName = name.toLowerCase();
        if (!roomName.includes(searchInput)) {
        allRooms[i].classList.add("hidden");
        }
    });
  }

  return (
    <>
      <div className="search">
        <div className="search-div">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            value={searchInput}
          />
          <span className="search-icon">
            <BiSearchAlt />
          </span>
        </div>
      </div>
    </>
  );
}
