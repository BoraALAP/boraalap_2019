import React from "react";

const Grid = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 32 32"
}) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    version="1.1"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Global-/-Header"
        transform="translate(-1253.000000, -67.000000)"
        fill="#D8D8D8"
      >
        <g id="Group" transform="translate(1214.000000, 67.000000)">
          <g id="grid/deavtive" transform="translate(39.000000, 0.000000)">
            <path
              d="M1,0 L5,0 C5.55228475,-1.01453063e-16 6,0.44771525 6,1 L6,5 C6,5.55228475 5.55228475,6 5,6 L1,6 C0.44771525,6 6.76353751e-17,5.55228475 0,5 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z M1,10 L5,10 C5.55228475,10 6,10.4477153 6,11 L6,15 C6,15.5522847 5.55228475,16 5,16 L1,16 C0.44771525,16 6.76353751e-17,15.5522847 0,15 L0,11 C-6.76353751e-17,10.4477153 0.44771525,10 1,10 Z M11,0 L15,0 C15.5522847,-1.01453063e-16 16,0.44771525 16,1 L16,5 C16,5.55228475 15.5522847,6 15,6 L11,6 C10.4477153,6 10,5.55228475 10,5 L10,1 C10,0.44771525 10.4477153,1.01453063e-16 11,0 Z M11,10 L15,10 C15.5522847,10 16,10.4477153 16,11 L16,15 C16,15.5522847 15.5522847,16 15,16 L11,16 C10.4477153,16 10,15.5522847 10,15 L10,11 C10,10.4477153 10.4477153,10 11,10 Z"
              id="Combined-Shape"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
export default Grid;
