import { useEffect, useState } from "react";
import { LogOut, Pencil, Save } from "lucide-react";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { asynclogoutuser, asyncupdateuser } from "../store/actions/userActions";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);
  

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    occupation: "Student",
  });

  // Sync Redux user state with local profile state
  useEffect(() => {
    if (user) {
      setProfile({
        name: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
        city: user.city || "",
        occupation: user.occupation || "Student",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const LogoutHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/")
  };

  const SaveHandler = () => {
    if (user && user.id) {
      dispatch(asyncupdateuser(user.id, profile));
    }
  };

  return (
    <>
      <div className="min-h-screen bg-black mx-auto text-white p-6 sm:p-12">
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="relative w-28 h-28 rounded-full overflow-hidden">
            <img
              src={user?.avatar || "https://i.imgur.com/23wA0Cy.jpg"}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-2 border-white"
            />
            <div className="absolute bottom-0 right-0 bg-emerald-600 p-1 rounded-full">
              <Pencil size={16} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-gray-400 font-semibold">{profile.name}</h2>
            <p className="text-gray-400">{profile.email}</p>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm text-gray-400">Full Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded"
              type="text"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">Email</label>
            <input
              name="email"
              value={profile.email}
              disabled
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded"
              type="email"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">
              Contact Number
            </label>
            <input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded"
              type="text"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">Occupation</label>
            <select
              name="occupation"
              value={profile.occupation}
              onChange={handleChange}
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded"
            >
              <option>Student</option>
              <option>Engineer</option>
              <option>Designer</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">City</label>
            <input
              name="city"
              value={profile.city}
              onChange={handleChange}
              placeholder="Enter city name"
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded"
              type="text"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-end gap-4">
          <button
            onClick={SaveHandler}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white transition"
          >
            Save Changes <Save size={18} />
          </button>

          <button
            onClick={LogoutHandler}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded text-white transition"
          >
            Logout <LogOut size={18} />
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
