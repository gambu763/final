import Nav from '../Components/Nav'
import bg from '../assets/P9.jpg'

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Nav dark={false} />
    </div>
  )
}
