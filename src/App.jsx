import Header from "./components/header/index.jsx";
import Sidebar from "./components/sidebar/index.jsx";

function App() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">
        <Header />
        <p>Welcome to your dashboard!</p>
        {/* Add your main content here */}
      </main>
    </div>
  );
}

export default App;
