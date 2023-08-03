function MenuItem({ image, name, content, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}>
        <h1 style={{ paddingTop: "210px" }}>{name}</h1>
        <h6>{content}</h6>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default MenuItem;
