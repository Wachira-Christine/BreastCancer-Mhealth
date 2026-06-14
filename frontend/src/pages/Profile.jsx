import { auth } from "../firebase";

export default function Profile() {
  const user = auth.currentUser;

  return (
    <div>
      <h1>User Profile</h1>

      {user ? (
        <>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
        </>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
}