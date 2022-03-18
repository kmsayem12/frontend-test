import React from "react";
import PropTypes from "prop-types";

function DevicesList({ list }) {
  const devices = list?.map((item, index) => (
    <div className="stat" key={index} style={{ "--i": index }}></div>
  ));
  return (
    <div className="circle" style={{ "--total": list.length }}>
      {devices}
    </div>
  );
}

DevicesList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default DevicesList;
