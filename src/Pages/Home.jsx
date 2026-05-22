import Nav from '../Components/Nav'


export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="/assets/P9.jpg" 
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Nav dark={false} />
    </div>
  )
}
