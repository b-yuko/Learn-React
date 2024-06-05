import { Link } from "react-router-dom";
import "../css/DescribingTheUiPage.css";

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export function DescribingTheUiPage() {
  return (
    <>
      <Link to="/">Top Page へ戻る</Link>
      <h1 className="title">UI の記述</h1>

      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>
  );
}
