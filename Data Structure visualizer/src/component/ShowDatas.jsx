import React from "react";
import PropTypes from "prop-types";
import "../stylesheet/ShowDatas.css";

const ShowDatas = ({ dataStates = [] }) => {
  const width = 63;

  return (
    <div className="show-datas">
      <svg className="data-svg">
        {dataStates.map((data, i) => (
          <g key={i}>
            <rect
              x={10 * (i + 1) + width * i}
              y="10"
              width={width}
              height="20"
              style={{ fill: "aliceblue", stroke: "black" }}
            />
            <text
              x={12 * (i + 1) + width * i}
              y="25"
              width={width}
              height="20"
              fill="red"
            >
              {data.name.substring(0, 6)}
            </text>
            <rect
              x={10 * (i + 1) + width * i}
              y="30"
              width={width}
              height="30"
              style={{ cursor: "pointer", fill: "lightgray", stroke: "black" }}
            >
              <title>{data.value.toString()}</title>
            </rect>
            <text x={12 * (i + 1) + width * i} y="50" width={width} height="20">
              {typeof data.value === "object"
                ? data.value.classname
                  ? data.value.classname.substring(0, 6)
                  : data.value.constructor.name.substring(0, 6)
                : (typeof data.value).substring(0, 6)}
              <title>{data.value.toString()}</title>
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

ShowDatas.propTypes = {
  dataStates: PropTypes.array,
};

export default ShowDatas;
