import { Toaster } from "react-hot-toast";
import { Routing } from "../pages";
import { Header } from "../widgets";
import { withProviders } from "./providers";
import "./index.scss";

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="items-center mx-auto max-w-screen-xl">
        <Routing />
      </div>
      <Toaster />
    </div>
  );
};

export default withProviders(App);
