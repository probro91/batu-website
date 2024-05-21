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
          <p className="animate-fade-in">CS @ UGA</p>
        </div>
        <ScrollIndicator/>
        
      </div>
      <div className="h-screen relative flex flex-col">
        <div className="flex-grow flex flex-row justify">
          <div className="flex flex-col text-left pr-10 pl-10 pt-10 w-2/3 justify">
            <p className="text-lg">Hi, thanks for visiting my website! I am Ali Batu Ozdener, currently an undergraduate studying computer science at the University of Georgia, with plans to pursue a master's degree in Artificial Intelligence. I love being engaged on campus, so I have a variety of roles and responsibilities across different organizations. Firstly, I am a research assistant under Dr. Deepak Mishra, where I research the application of NeRFs in arid and polar climates. Next, I serve as the sponsorship director for UGAHacks, the flagship hackathon of the University of Georgia, and the VP of Engagement and Membership for Kappa Theta Pi, a professional technology fraternity. Last but not least, I am the treasurer for the Girls Who Code chapter at UGA. Serving in these different roles has given me great insight into the field of computer science, helping guide me in my professional career. This summer, I will be returning as a software engineering intern at Macy’s, where I also interned last summer. Outside of school, I love playing guitar, hiking, and spending time with my family. Please check out my resume and feel free to reach out to me through LinkedIn or email!
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

