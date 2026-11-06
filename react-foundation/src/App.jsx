const titles = ["Core", "Crucial", "Fundamentals"];
function randomInt() {
  return Math.floor(Math.random() * titles.length);
}
function CoreConcept(props) {
  return (
    <li>
      <img src="" alt="" />

      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
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
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <section>
            <ul>
              <CoreConcept
                title="Components"
                description="Txt for Components"
              />
              <CoreConcept title="State" description="Txt for State" />
              <CoreConcept title="JSX" description="Txt for JSX" />
              <CoreConcept title="Props" description="Txt for Props" />
            </ul>
          </section>
        </section>
        <Header />
        <h2>Lets Get Started!</h2>
      </main>
    </div>
  );
}

export default App;
