import React from "react";
import { HEREMap } from "here-maps-react";

function HereMap() {
  return (
    <div>
      <HEREMap
        appId="Za97PzjQ2N6UmhINGANd"
        appCode="JrHc6FOyh_XtC6WwaXHnxMjCyyxbqeRTOnFRIMJ6ZmM"
        center={{ lat: 10.998666, lng: -63.79841 }}
        zoom={12}
      />
    </div>
  );
}

export default HereMap;
