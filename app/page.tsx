import ScrollIndicator from "./ui/scroll-down-icon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-tight">Ali Batu Ozdener</h1>
          <p className="animate-fade-in">CS @ UGA</p>
        </div>
        <ScrollIndicator/>
      </div>
    </main>


  );
}
