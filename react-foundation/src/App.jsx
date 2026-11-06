const titles = ["Core", "Crucial", "Fundamentals"];
import { CORE_CONCEPTS } from "./data.js";
function randomInt() {
  return Math.floor(Math.random() * titles.length);
}
function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt="" />

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
                img={CORE_CONCEPTS[0].image}
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
              />
              <CoreConcept
                img={CORE_CONCEPTS[1].image}
                title={CORE_CONCEPTS[1].title}
                description={CORE_CONCEPTS[1].description}
              />
              <CoreConcept
                img={CORE_CONCEPTS[2].image}
                title={CORE_CONCEPTS[2].title}
                description={CORE_CONCEPTS[2].description}
              />
              <CoreConcept
                img={CORE_CONCEPTS[3].image}
                title={CORE_CONCEPTS[3].title}
                description={CORE_CONCEPTS[3].description}
              />
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
