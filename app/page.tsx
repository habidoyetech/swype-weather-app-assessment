
import Image from "next/image";
import SearchWeather from "./component/SearchWeather";

export default function Home() {
  return (
    <div className="font-mono min-h-screen ">
      <div className="container px-8 py-6 space-y-16 mx-auto">
        <header>
        <div>
          <img src="/logo.svg" alt="app logo" />
        </div>
        <div>
          <div className="flex items-center gap-3">
          
        </div>

        </div>
      </header>
      <main>
        <div >
          <h1 className="text-4xl font-mono text-foreground font-bold text-center">How's is the sky looking today?</h1>
        </div>
        <div>
          <div>
            <SearchWeather/>
          </div>
        </div>
      </main>

      </div>
      
    </div>
  );
}
