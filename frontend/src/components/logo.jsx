import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="EmpowerHer Logo" className="logo-image" />
      <h1 className="logo-text">EmpowerHer</h1>
    </div>
  );
}