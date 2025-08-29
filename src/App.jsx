import Header from "./components/header/index.jsx";
import Sidebar from "./components/sidebar/index.jsx";
import Dashboard from "./components/dashboard/index.jsx";

function App() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
