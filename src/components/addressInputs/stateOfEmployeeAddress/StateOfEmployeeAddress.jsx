// import React, { useState } from "react";
// import "../stateOfEmployeeAddress/stateOfEmployeeAddress.css";
// import { useDispatch} from "react-redux";
// import { setStateOfAddressEmployee } from "../../../features/employeesListSlice";
// import states from "../../../config/constant";

// export default function StateOfEmployeeAddress() {
//   const [selectedItem, setSelectedItem] = useState("Alabama");
//   const [showListOfState, setShowListOfState] = useState(false);
//   const dispatch = useDispatch();

//   const handleClick = (stateName, stateAbbreviation) => {
//     setSelectedItem(stateName);
//     dispatch(setStateOfAddressEmployee(stateAbbreviation));
//     toggleListOfState();
//   };

//   const toggleListOfState = () => {
//     setShowListOfState(!showListOfState);
//   };

//   return (
//     <div className="drop-down-container">
//       <div className="drop-down">
//         <label htmlFor="state">State</label>
//         <button
//           id="state"
//           className="drop-down-button"
//           onClick={toggleListOfState}
//         >
//           <span className="drop-down-button-item-selected">{selectedItem}</span>
//           <span className="drop-down-button-icon">"icon"</span>
//         </button>
//         {showListOfState && (
//           <ul className="drop-down-list-items">
//             {states.map((data, index) => (
//               <li
//                 className="drop-down-item"
//                 tabIndex={0}
//                 key={index}
//                 onClick={() => handleClick(data.name, data.abbreviation)}
//               >
//                 {data.name}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div className="select-container">
//         <select value={selectedItem} onChange={() => {}}>
//           {states.map((data, index) => (
//             <option key={index} value={data.name}>
//               {data.abbreviation}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }
