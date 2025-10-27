import { useEffect, useState } from "react";
import Header from "../components/Header";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import QaisarImage from "../assets/images/Qaisar.jpg";
import client from "../assets/images/client2.jpg"; // default avatar
import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";
import client3 from "../assets/images/client3.jpg";
import client4 from "../assets/images/client4.jpg";
import OurCharts from "../components/OurCharts";

const Main = () => {
  const [userName, setUserName] = useState("User");
  const [userEmail, setUserEmail] = useState("user@example.com");
  const [userImage, setUserImage] = useState(client);

  // Array of available avatar images
  const avatars = [client1, client2, client3, client4];
  
  // Function to get a random avatar
  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randomIndex];
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      const fullName = `${userData.firstName} ${userData.lastName}`;
      setUserName(fullName);
      setUserEmail(userData.email);
      // Use Qaisar's image if name matches (case-insensitive), otherwise use random avatar
      const isQaisar = userData.firstName.toLowerCase() === "qaisar";
      setUserImage(isQaisar ? QaisarImage : getRandomAvatar());
    }
  }, []);

  return (
    <section className="w-4/5 grow bg-white h-screen overflow-y-auto flex flex-col justify-start items-center gap-2 p-4">
      <Header />

      {/* main section start here */}

      <div
        id="main-section"
        className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full h-screen"
      >
        <div
          id="left"
          className="col-span-2 p-2 gap-3 flex flex-col justify-between items-center h-full"
        >
          {/* three grid layout */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full mb-4">
            {/* 🟦 Facebook Card */}
            <div
              className="w-full flex flex-col justify-center items-center bg-[#1877F2]/20 p-5 rounded-xl gap-5 
              transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-[-5deg] hover:shadow-2xl hover:shadow-[#1877F2]/50 cursor-pointer"
            >
              <div className="w-full flex justify-between items-center">
                <h1 className="text-md text-[#1877F2] font-semibold">
                  Facebook
                </h1>
                <h1 className="text-green-600 font-semibold">+21.75%</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-3xl text-black font-semibold">10,328</h1>
                  <p className="text-slate-700">Followers</p>
                </div>

                <div className="bg-[#1877F2] hover:bg-[#0e5dc1] cursor-pointer text-white p-3 rounded-full">
                  <FaFacebook className="w-[30px] h-[30px]" />
                </div>
              </div>
            </div>

            {/* 🟪 Instagram Card */}
            <div
              className="w-full flex flex-col justify-center items-center bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-5 rounded-xl gap-5 
              transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-[-5deg] hover:shadow-2xl hover:shadow-[#E4405F]/50 cursor-pointer"
            >
              <div className="w-full flex justify-between items-center">
                <h1 className="text-md text-white font-semibold">Instagram</h1>
                <h1 className="text-white font-semibold">+21.75%</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-center items-start gap-1 text-white">
                  <h1 className="text-3xl font-semibold">23,328</h1>
                  <p className="">Followers</p>
                </div>

                <div className="bg-white/20 hover:bg-white/30 cursor-pointer text-white p-3 rounded-full">
                  <FaInstagram className="w-[30px] h-[30px]" />
                </div>
              </div>
            </div>

            {/* 🩵 Twitter Card */}
            <div
              className="w-full flex flex-col justify-center items-center bg-[#1DA1F2]/20 p-5 rounded-xl gap-5 
              transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-[-5deg] hover:shadow-2xl hover:shadow-[#1DA1F2]/50 cursor-pointer"
            >
              <div className="w-full flex justify-between items-center">
                <h1 className="text-md text-[#1DA1F2] font-semibold">
                  Twitter
                </h1>
                <h1 className="text-green-600 font-semibold">+21.75%</h1>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-3xl text-black font-semibold">34,328</h1>
                  <p className="text-slate-700">Followers</p>
                </div>

                <div className="bg-[#1DA1F2] hover:bg-[#0c8cd8] cursor-pointer text-white p-3 rounded-full">
                  <FiTwitter className="w-[30px] h-[30px]" />
                </div>
              </div>
            </div>
          </div>
          {/* end of three grid layout */}
          <OurCharts />
        </div>

        {/* left section end here */}

        {/* right section start from here  */}

        <div
          id="right"
          className="p-2 flex flex-col justify-center items-center gap-4 h-full"
        >
          <div
            id="top"
            className="bg-slate-100 p-7 w-full rounded-xl flex flex-col justify-center items-center gap-6 h-fit"
          >
            <div
              id="image-box"
              className="w-full flex flex-col justify-center items-center gap-4"
            >
              <img
                src={userImage}
                alt={`${userName}'s profile`}
                className="rounded-full w-[100px] h-[100px] object-cover"
              />
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-black font-bold text-2xl">{userName}</h1>
                <p className="text-slate-700 text-lg">{userEmail}</p>
              </div>
            </div>
            <div
              id="followers-info"
              className="flex justify-between items-center gap-8 w-full"
            >
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-2xl text-black font-semibold">193</h1>
                <p>Posts </p>
              </div>

              <div className="flex flex-col justify-center items-start">
                <h1 className="text-2xl text-black font-semibold">17,536</h1>
                <p>Followers </p>
              </div>

              <div className="flex flex-col justify-center items-start">
                <h1 className="text-2xl text-black font-semibold">274</h1>
                <p>Following </p>
              </div>
            </div>
          </div>

          <div
            id="bottom"
            className="bg-black w-full h-full p-6 rounded-xl flex flex-col justify-center items-center gap-8"
          >
            <div className="flex md:flex-row flex-col justify-between items-center w-full gap-2">
              <h1 className="text-white text-md">Facebook Campaign</h1>
              <button className="bg-green-600 text-white px-6 py-1 rounded-xl cursor-pointer text-md">
                Active
              </button>
            </div>

            <div className="flex justify-between items-center w-full h-fit flex-col md:flex-row gap-4">
              <div className="flex flex-col justify-center items-start gap-1">
                <h1 className="text-white text-2xl font-bold">1,129</h1>
                <p className="text-slate-200 text-sm">Followers Today</p>
              </div>

              <div className="flex flex-col justify-center items-start gap-1">
                <h1 className="text-white text-2xl font-bold">50,000</h1>
                <p className="text-slate-200 text-sm">Followers Goals</p>
              </div>

              <div className="flex flex-col justify-center items-start gap-1">
                <h1 className="text-white text-2xl font-bold">10,000</h1>
                <p className="text-slate-200 text-sm">Followers Online</p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center w-full">
              <div className="flex -space-x-4 rtl:space-x-reverse w-full md:justify-start justify-center items-start">
                <img
                  src={client1}
                  alt="client image"
                  className="w-10 h-10 border-2 border-white rounded-full"
                />
                <img
                  src={client2}
                  alt="client image"
                  className="w-10 h-10 border-2 border-white rounded-full"
                />
                <img
                  src={client3}
                  alt="client image"
                  className="w-10 h-10 border-2 border-white rounded-full"
                />
                <img
                  src={client2}
                  alt="client image"
                  className="w-10 h-10 border-2 border-white rounded-full"
                />
                <img
                  src={client1}
                  alt="client image"
                  className="w-10 h-10 border-2 border-white rounded-full"
                />
                <img
                  src={client3}
                  alt="client image"
                  className="w-10 h-10 border-2 border-white rounded-full"
                />
                <img
                  src={client1}
                  alt="client image"
                  className="w-10 h-10 border-2 border-white rounded-full"
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-1">
                <h1 className="text-white text-xl font-bold">+7,294</h1>
                <p className=" text-slate-200 text-sm"> All Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
