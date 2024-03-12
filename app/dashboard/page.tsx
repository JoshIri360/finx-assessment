import React from "react";
import { BackgroundBeams } from "@/components/ui/backgroundBeams";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hi Mr. Victor
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Sorry it took a while to get the code assessment done. I&apos;m not
          usually like this I promise. For some reason, the API gives an OK
          response for any login attempt. I must have missed something.
        </p>
        <pre className="font-mono text-wrap w-min text-center">
          {/*  */}
          ⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠖⠂⡇⠀⠀⠀⡆⠒⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠠⡔⠉⠆⠀⠀⠈⢄⠇⠀⠀⠀⢁⠌⠀⠀⠀⢠⠋⢂⡀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠈⠐⢼⠀⠀⠀⠈⠀⠀⠀⠀⠈⠀⠀⠀⢀⡦⠐⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠒⠒⠉⠉⠐⠒⠦⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⡠⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⡐⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢂⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⢀⠀⡜⡄⠀⠀⠀⠀⠀⢰⣀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⣠⠀⢠⡞⢦⡀⠀⠀⠀⠀⡟⢦⡀⠀⢁⠀⢸⣄⠀⠀⠀⠀⠀
          ⠀⠀⠀⢀⣾⡃⡦⡏⠀⣬⡽⣷⢦⡤⣀⣐⣤⡽⣦⡌⢆⡨⣹⣷⡀⠀⠀⠀ ⠀⠀⢀⣿⣿⣧⣱⠡⡀⠴⣶⣴⣄⠀⠈⢡⣴⣶⡤⡀⢧⣷⣿⣿⣷⡀⠀⠀
          ⠀⢠⣾⣿⣿⣿⣿⣷⡘⠤⢛⡋⠨⠀⡀⠠⠙⡛⠁⢦⣿⣿⣿⣿⣿⣷⡀⠀ ⠀⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⡀⠀⣦⣠⠂⡀⣤⣭⣿⣿⣿⣿⣿⣿⣿⣧⠀
          ⢸⣿⣯⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣳⣿⣿⡆ ⠈⠻⣿⣿⣿⣿⣿⠏⠉⠉⢙⡻⢿⣿⣿⣿⠿⣛⠉⠉⠙⣿⣿⣿⣿⣿⠿⠁
          ⠀⠀⠀⠉⠛⠉⠛⠓⠀⠨⠗⠩⠕⠈⠉⠔⠯⠐⠪⠤⠔⠛⠉⠉⠉⠀⠀⠀
          {/*  */}
        </pre>
      </div>
      <BackgroundBeams />
    </div>
  );
}
