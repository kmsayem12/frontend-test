import React from "react";

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

export default DevicesList;
