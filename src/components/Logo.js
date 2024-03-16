import logo from "../logo.png";

export function Logo() {
  return (
    <img
      style={{ width: "50px", marginTop: "25px", filter: "invert(100%)" }}
      src={logo}
      alt="logo"
    />
  );
}
