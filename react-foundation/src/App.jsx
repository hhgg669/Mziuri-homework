const titles = ["Core", "Crucial", "Fundamentals"];
function randomInt() {
  return Math.floor(Math.random() * titles.length);
}

function Header() {
  return (
    <header>
      <img src="/src/assets/jsx-ui.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {titles[randomInt()]} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <main>
        <Header />
        <h2>Lets Get Started!</h2>
      </main>
    </div>
  );
}

export default App;
