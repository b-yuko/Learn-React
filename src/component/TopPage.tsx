import { Link } from "react-router-dom";

export function TopPage() {
  return (
    <>
      <h1>REACT を学ぶ</h1>
      <h2>
        <Link to="/describing-the-ui">UI の記述</Link>
      </h2>
    </>
  );
}
