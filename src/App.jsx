import { useNavigate } from "./context/NavigationContext";
import AdminPage from "./pages/AdminPage/AdminPage"
import FormPage from "./pages/FormPage/FormPage"
import VotingPage from "./pages/VotingPage/VotingPage"


function App() {

  const { currentPage } = useNavigate();

  switch (currentPage) {
    case "form":
      return <FormPage />;
    case "voting":
      return <VotingPage />;
    case "admin":
      return <AdminPage />;
    default:
      return <FormPage />;
  }

}

export default App
