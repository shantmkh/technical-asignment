import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Animator } from "widgets/Animator/Animator";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </div>
      <Animator />
    </BrowserRouter>
  );
};

export default App;
