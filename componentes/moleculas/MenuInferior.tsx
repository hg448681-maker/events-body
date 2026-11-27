import "./MenuInferior.css";

export default function MenuInferior() {
  return (
    <nav className="molecula-menu-inferior">
      <button type="button" className="menu-inferior-item activo">
        <img src="/home-2.svg" alt="Home" style={{ width: "22px", height: "22px" }} />
        <span>Home</span>
      </button>
      <button type="button" className="menu-inferior-item">
        <img src="/discover.svg" alt="Explore" style={{ width: "22px", height: "22px" }} />
        <span>Explore</span>
      </button>
      <button type="button" className="menu-inferior-item">
        <img src="/search-normal.svg" alt="Search" style={{ width: "22px", height: "22px" }} />
        <span>Search</span>
      </button>
      <button type="button" className="menu-inferior-item">
        <img src="/heart.svg" alt="Saved" style={{ width: "22px", height: "22px" }} />
        <span>Saved</span>
      </button>
    </nav>
  );
}