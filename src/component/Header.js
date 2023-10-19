import { Link } from "react--dom";
const Header = () => {
  return (
    <>
      <h1>투두리스트</h1>
      <Link to="/">홈</Link>
      <Link to="/clear">수행완료</Link>
      <Link to="/unclear">미수행</Link>
    </>
  );
};
export default Header;
