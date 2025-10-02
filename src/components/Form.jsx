// import { Mail } from "lucide-react";
// import React from "react";

// function Form() {
//   return (
//     <div>
//       <p className="text-center text-lg p-5 w-1/3 mx-auto font-bold">
//         I’d love to hear from you. Whether it’s a job opportunity or a project
//         idea,{" "}
//         <span className="bg-black p-1 rounded-md text-[0.8rem] text-white">
//           let’s talk!
//         </span>
//       </p>

//       <div className="flex justify-center mt-5">
//         <a
//           href="mailto:nextin766@gmail.com?subject=Portfolio%20Contact&body=Hi,%20I%20would%20like%20to%20connect%20with%20you."
//           className="flex items-center gap-2 px-4 py-2  rounded-lg "
//           target="_blank"
//         >
//           <Mail className="w-5 h-5" />
//           Send Email
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Form;


import { Mail } from "lucide-react";
import React from "react";

function Form() {
  return (
    <div className="max-w-md mx-auto px-6 py-10 ">
      <p className="text-center text-lg font-semibold mb-6 ">
        I’d love to hear from you. Whether it’s a job opportunity or a project
        idea,{" "}
        <span className="px-2 py-1 rounded-md text-lg font-semibold text-cyan-500 ">
          let’s talk!
        </span>
      </p>

      <div className="flex justify-center">
        <a
          href="mailto:nextin766@gmail.com?subject=Portfolio%20Contact&body=Hi,%20I%20would%20like%20to%20connect%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-7 py-3 border border-cyan-500 text-cyan-500 rounded-md shadow-sm transition hover:bg-cyan-500 hover:text-black"
        >
          <Mail className="w-5 h-5" />
          <span className="font-semibold">Send Email</span>
        </a>
      </div>
    </div>
  );
}

export default Form;
