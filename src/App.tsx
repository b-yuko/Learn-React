import { Route, Routes } from "react-router-dom";
import { TopPage } from "./component/TopPage.tsx";
import { DescribingTheUiPage } from "./component/DescribingTheUiPage.tsx";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/describing-the-ui" element={<DescribingTheUiPage />} />
    </Routes>
  );
}
