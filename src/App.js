import UseEffectIntro from "./components/useEffectIntro";
import UseEffectAdvance from "./components/useEffectAdvance";
import UseEffectExpert from "./components/useEffectExpert";
import UseEffectMaster from "./components/useEffectMaster";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <UseEffectMaster />
      <hr />
      <UseEffectExpert />
      <hr />
      <UseEffectAdvance />
      <hr />
      <UseEffectIntro />
    </div>
  );
}

export default App;
