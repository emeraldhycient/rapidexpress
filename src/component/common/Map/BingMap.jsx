import React from "react";
import { ReactBingmaps } from "react-bingmaps";
//import BingMapsReact from "bingmaps-react";

function BingMap() {
  return (
    //<BingMapsReact bingMapsKey="As8Dkb37VomybroLYJBkw6Hcc267iZhZnu912HOYrvffUsb_6JI5VVw95z1rgqK6" />
    <ReactBingmaps
      bingmapKey="[AjtUzWJBHlI3Ma_Ke6Qv2fGRXEs0ua5hUQi54ECwfXTiWsitll4AkETZDihjcfeI]"
      center={[13.0827, 80.2707]}
    ></ReactBingmaps>
  );
}

export default BingMap;
