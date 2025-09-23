import ScrollIndicator from "./ui/scroll-down-icon";
import MediaLinks from "./ui/media-links";
import Image from 'next/image';
import Footer from "./ui/Footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-4 sm:px-6 md:px-0">
      <div className="flex items-center justify-center min-h-[100svh] md:h-screen">
        <div className="text-center">
          <h1 id="nameHeader" className="text-5xl sm:text-6xl md:text-6xl font-bold tracking-tight px-2 md:px-0">Ali Batu Ozdener</h1>
          <p className="animate-fade-in mt-2 md:mt-0">MS AI @ UGA</p>
        </div>
        <ScrollIndicator/>
        
      </div>
      <div className="min-h-screen md:h-screen relative flex flex-col">
        <div className="flex-grow flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="flex flex-col text-left md:pr-10 md:pl-10 px-2 md:px-0 pt-8 md:pt-10 w-full md:w-2/3">
          <p className="text-base sm:text-lg">
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
             {"Macy's"}
            </a>
            {" where I worked on applications for Macy’s contact center. Outside of school, I love playing guitar, hiking, and spending time with my family. Please check out my resume and feel free to reach out to me through LinkedIn or email!"}
          </p>
          <div className="mt-8 md:grid md:h-1/2 md:items-center">
            <MediaLinks/>
          </div>
            
          </div>
          <div className="relative w-full md:w-1/3 pr-8 pl-8 pt-0 hidden md:block">
            <Image
              src="/IMG_5119.jpg"
              fill
              className="object-contain rounded-md pr-10"
              sizes="(min-width: 768px) 33vw, 100vw"
              alt="Picture of me"
            />
          </div>
        
        </div>
        <Footer/>
      </div>
    </main>
  );
}
