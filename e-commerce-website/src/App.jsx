import ListProvider from "./contexts/ListContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PageRoutes from "./routes/PageRoutes";
import UserProvider from "./contexts/UserContext";
import AuthProvider from "./contexts/AuthContext";
import SelectedProvider from "./contexts/selectedContext";

function App() {
  return (
    <>
      <SelectedProvider>
        <UserProvider>
          <AuthProvider>
            <ListProvider>
              <PageRoutes />
            </ListProvider>
          </AuthProvider>
        </UserProvider>
      </SelectedProvider>
    </>
  );
}

export default App;
