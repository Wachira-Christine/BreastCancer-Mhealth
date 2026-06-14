import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
