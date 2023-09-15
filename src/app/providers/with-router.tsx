import { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { Spinner } from "../../shared/ui";

const withRouter = (component: Component) => () => {
  return (
    <HashRouter>
      <Suspense fallback={<Spinner />}>{component()}</Suspense>
    </HashRouter>
  );
};

export default withRouter;
