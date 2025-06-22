import TonexaLogo from '../assets/TonexaLogo.png'

export default function Sidebar() {
  return (
    <div className="h-full w-60 bg-black text-white fixed z-50 p-4 left-0">
      <div className="flex items-center gap-1">
        <img src={TonexaLogo} alt="Logo" className="h-8" />
        <h1 className="text-2xl font-extrabold font-roboto tracking-wider antialiased">Tonexa</h1>
      </div>
    </div>
  );
}