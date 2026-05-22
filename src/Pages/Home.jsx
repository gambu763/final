import Nav from '../Components/Nav'


export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="https://res.cloudinary.com/dopqrpvhl/image/upload/P9_akrtfe"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Nav dark={false} />
    </div>
  )
}
