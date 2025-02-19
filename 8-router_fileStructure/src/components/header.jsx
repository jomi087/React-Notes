import {Link} from  'react-router-dom'

function Header() {
  return (
    <div>
      <h3 style={{ color: "red" }}>
        THIS IS A HEADER COMPONENT WHICH IS MOUNTED WITH ALL ROUTES/PATHS
      </h3>
        <Link to = "/">Home</Link> &nbsp;
        <a href="/about">About</a> &nbsp;     {/* Not recomended to use  <a> tag*/}
        <Link to = "/contact">Contact</Link>
        <br /> <br />
    </div>
  );
}

export default Header;
