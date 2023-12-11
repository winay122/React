import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className='bg-green-300 mb-4 text-black p-4 rounded-xl'>Tailwind</h1>

    <Card name="Radhika Kumari" description="Web Developer" />
    <Card name="Khushi Sharma" description="MERN-Stack Developer" />

    </>
  )
}

export default App
