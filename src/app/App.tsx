import { BrowserRouter } from "react-router-dom";
import { Animator } from "widgets/Animator";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";
import { ViewWrapper } from "widgets/ViewWrapper/styled";

const App = () => {
  return (
    <BrowserRouter>
      <ViewWrapper>
        <Header />
        <Animator />
        <Footer />
      </ViewWrapper>
    </BrowserRouter>
  );
};

export default App;
