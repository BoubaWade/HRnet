import React from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../features/createEmployeeSlice";

export default function Modal() {
  const { showModal } = useSelector((state) => state.createEmployee);
  const dispatch = useDispatch();

  return (
    <div className="modal">
      {showModal && (
        <div>
          <div
            className="overlay"
            onClick={() => dispatch(setShowModal(false))}
          ></div>
          <div className="confirm-creation">
            <p> Employee Created!</p>
            <span
              className="icon-close_modal"
              onClick={() => dispatch(setShowModal(false))}
            >
              x
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
