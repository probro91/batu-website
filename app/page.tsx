import ScrollIndicator from "./ui/scroll-down-icon";
import MediaLinks from "./ui/media-links";
import Image from 'next/image';
import Link from "next/link"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 id="nameHeader" className="text-6xl font-bold tracking-tight">Ali Batu Ozdener</h1>
          <p className="animate-fade-in">CS @ UGA</p>
        </div>
        <ScrollIndicator/>
        
      </div>
      <div className="flex flex-row justify h-screen">
        <div className="flex flex-col text-left p-10 w-2/3 justify-between">
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non felis convallis, tempus mauris eget, consequat ipsum. Nam nec elementum purus. Nullam ac turpis eleifend, mattis nibh in, viverra ante. Pellentesque nec nibh elit. Donec in purus massa. Sed lobortis metus non lacus rutrum, quis sagittis orci accumsan. Praesent sagittis nec tellus ut venenatis. Quisque non tortor a est cursus dapibus. Integer euismod arcu vitae tortor lacinia cursus. Vestibulum tincidunt mauris nisi, eu ultricies elit semper eu. Nulla facilisi. Maecenas commodo efficitur mauris, eu bibendum enim porta id. Etiam dictum dolor hendrerit tempus placerat. Nunc viverra augue vitae dolor fermentum.
          </p>
          <MediaLinks/>
        </div>
        <div className="relative w-1/3 p-8 hidden md:block">
          <Image
            src="/IMG_5119.jpg"
            layout="fill"
            objectFit="contain"
            className="rounded-md pr-10"
            alt="Picture of me"
          />
        </div>
      </div>  
    </main>
  );
}

