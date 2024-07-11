/*import { FaBars } from "react-icons/fa";*/
import { useRouteError } from "react-router-dom";

 function Error() {
  const error = useRouteError();

  return (<>
{error && <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>}
  </>);
}
export default Error