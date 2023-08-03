import data from "./data.jsx";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menutitle">Our Burgers</h1>
      <div className="menuList">
        {data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
              className="menuItem"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
