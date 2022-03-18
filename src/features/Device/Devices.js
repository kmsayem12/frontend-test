import React from "react";
import { RowWrapper } from "./styles";
import Footer from "./Footer";

function Devices() {
  return (
    <RowWrapper>
      <div className="devices-content">
        <h1 className="text-center">Devices</h1>
      </div>
      <Footer />
    </RowWrapper>
  );
}

export default Devices;
