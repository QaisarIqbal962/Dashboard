import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import QaisarImage from "../assets/images/Qaisar.jpg";
import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";
import client3 from "../assets/images/client3.jpg";
import client4 from "../assets/images/client4.jpg";

const Header = () => {
  const [userName, setUserName] = useState("User");
  const [userImage, setUserImage] = useState(client1);

  // Array of available avatar images
  const avatars = [client1, client2, client3, client4];

  // Function to get a random avatar
  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randomIndex];
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData?.firstName) {
      setUserName(userData.firstName);
      // Case-insensitive comparison for "Qaisar"
      const isQaisar = userData.firstName.toLowerCase() === "qaisar";
      setUserImage(isQaisar ? QaisarImage : getRandomAvatar());
    }
  }, []);
  return (
    <section className="w-full bg-slate-100 lg:h-20 h-fit flex lg:flex-row justify-between items-center p-4 rounded-xl lg:gap-2 gap-4">
      <div>
        <h1 className="text-2xl font-semibold">Overview</h1>
      </div>
      <div className="flex justify-between items-center gap-10">
        <IoSearch className="w-6 h-6 cursor-pointer hover:scale-150 hover:text-yellow-500 transition-all" />

        <div
          id="client-info"
          className="flex justify-center items-center gap-4"
        >
          <img
            src={userImage}
            alt={userName + "'s avatar"}
            className="rounded-full w-12 h-12 object-cover"
          />

          <div className="flex flex-col justify-center items-start">
            <div className="flex justify-center items-center -mb-1 gap-2">
              <h1 className="text-lg font-semibold">Hi, {userName}</h1>
              <IoIosArrowDown />
            </div>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
