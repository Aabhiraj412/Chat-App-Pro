import './App.css'

function App() {

  return (
    <>
      <input type="checkbox" value="synthwave" className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>
      <button class="btn btn-accent btn-outline">Three</button>
    </>
  )
}

export default App
