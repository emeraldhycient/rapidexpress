import { useEffect } from "react";
import Booking from "./Booking";
import Header from "./Header";

function Admin() {

  useEffect(()=>{
     document.title = "admin dashboard"
  },[])

  return (
    <div>
      <Header />
      <Booking />
    </div>
  );
}

export default Admin;
