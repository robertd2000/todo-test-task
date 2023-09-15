import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Active } from "./Active";
import { Completed } from "./Completed";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/active" element={<Active />} />
      <Route path="/completed" element={<Completed />} />
    </Routes>
  );
};
