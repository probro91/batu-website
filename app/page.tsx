import ScrollIndicator from "./ui/scroll-down-icon";
import MediaLinks from "./ui/media-links";
import Image from 'next/image';
import Footer from "./ui/Footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 id="nameHeader" className="text-6xl font-bold tracking-tight">Ali Batu Ozdener</h1>
          <p className="animate-fade-in">MS AI @ UGA</p>
        </div>
        <ScrollIndicator/>
        
      </div>
      <div className="h-screen relative flex flex-col">
        <div className="flex-grow flex flex-row justify">
          <div className="flex flex-col text-left pr-10 pl-10 pt-10 w-2/3 justify">
          <p className="text-lg">
            {"Hi, thanks for visiting my website! I am Ali Batu Ozdener. In May 2025, I graduated Summa Cum Laude with a Bachelor’s in Computer Science from the University of Georgia, and I am now pursuing a Master’s degree in Artificial Intelligence through the university’s accelerated program, graduating May 2026. I love being engaged on campus, so I have a variety of roles and responsibilities across different organizations. I am a research assistant under Dr. Deepak Mishra, where I research into the field of "}
            <a
              href="https://www.matthewtancik.com/nerf"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              NeRFs
            </a>
            {". I also serve as the lead director of "}
            <a
              href="https://ugahacks.com"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              UGAHacks
            </a>
            {", the flagship hackathon of the University of Georgia. In addition, I have volunteered for Girls Who Code in the past, teaching K–12 students about computer science. Serving in these different roles has given me great insight into the field of computer science, helping guide me in my professional career. I have experience as a Fullstack Engineer from my internship at "}
            <a
              href="https://aws.amazon.com"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Amazon Web Services
            </a>
            {" last summer working in the Billing organization, as well as my two internships at "}
            <a
              href="https://www.macys.com"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Macy's
            </a>
            {" where I worked on applications for Macy’s contact center. Outside of school, I love playing guitar, hiking, and spending time with my family. Please check out my resume and feel free to reach out to me through LinkedIn or email!"}
          </p>
          <div className="grid h-1/2 justify items-center">
            <MediaLinks/>
          </div>
            
          </div>
          <div className="relative w-1/3 pr-8 pl-8 pt-8d hidden md:block">
            <Image
              src="/IMG_5119.jpg"
              layout="fill"
              objectFit="contain"
              className="rounded-md pr-10"
              alt="Picture of me"
            />
          </div>
        
        </div>
        <Footer/>
      </div>
    </main>
  );
}

