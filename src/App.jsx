import Sidebar from "./components/sidebar/index.jsx";

function App() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
        {/* Add your main content here */}
      </main>
    </div>
  );
}

export default App;
