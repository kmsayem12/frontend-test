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
    getDevices();
  }, []);
  console.log(list);

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
