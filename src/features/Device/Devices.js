import React, { useEffect, useState } from "react";
import { RowWrapper, DevicesWrapper } from "./styles";
import Footer from "./Footer";
import { Device } from "./api";
import DevicesList from "./DevicesList";

function Devices() {
  const [list, setList] = useState([]);

  const getDevices = async () => {
    const { data } = await Device.device();
    setList(data?.devices);
  };

  useEffect(() => {
    // initial api call
    getDevices();
    // every 5 seconds api call
    const intervalCall = setInterval(() => {
      getDevices();
    }, 5000);
    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, []);

  return (
    <RowWrapper>
      <div className="devices-content">
        <DevicesWrapper>
          <h1 className="text-center">
            {list.length}
            <br /> Devices Online
          </h1>
          <DevicesList list={list} />
        </DevicesWrapper>
      </div>
      <Footer />
    </RowWrapper>
  );
}

export default Devices;
