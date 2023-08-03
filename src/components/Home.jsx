import { Link } from "react-router-dom";
import BannerImg from "../img/BurgerBanner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home" style={{ backgroundImage: `url(${BannerImg})` }}>
      <div className="order">
        <Link to={"/menu"}>
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
