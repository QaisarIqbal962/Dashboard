import React from "react";
import Header from "../components/Header";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import client from "../assets/images/client.jpg";
import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";
import client3 from "../assets/images/client3.jpg";
import client4 from "../assets/images/client4.jpg";

const Main = () => {
  return ( 
    <section className="w-4/5 grow bg-white h-screen overflow-y-auto flex flex-col justify-start items-center gap-2 p-4">
      <Header />

      {/* main section start here */}

      <div id="main-section"
          className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full h-screen"
      >

        <div id="left" className="col-span-2 p-2 gap-3 flex flex-col justify-between items-center h-full">

          {/* three grid layout */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full mb-4">
            <div className="w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover: rotate-[-5deg] hover:scale-105 cursor-pointer">


              <div className="w-full flex justify-between items-center">
                <h1 className="text-md text-black font-semibold">Facebook</h1>
                <h1 className="text-green-600 font-semibold">+21.75%</h1>
              </div>
            </div>

          </div>

        </div>

      </div>


    </section>
  );
};

export default Main;
