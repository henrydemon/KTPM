import { Link } from "react-router-dom";

const ItemSideBar = ({ listItem, currentAccount }) => {
  return (
    <>
      {currentAccount.authority === "Staff"
        ? listItem
            .filter((item) => item.name !== "Mange Account")
            .map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={item.link}>
                    <i className={`ni ni-${item.icon} ${item.color}`} />
                    <span className="nav-link-text">{item.name}</span>
                  </Link>
                </li>
              );
            })
        : listItem.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={item.link}>
                  <i className={`ni ni-${item.icon} ${item.color}`} />
                  <span className="nav-link-text">{item.name}</span>
                </Link>
              </li>
            );
          })}
    </>
  );
};

export default ItemSideBar;
