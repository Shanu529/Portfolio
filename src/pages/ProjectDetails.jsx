import React, { useEffect, useState } from "react";
import LoadingFiles from "/img/LoadingFiles.gif";
import NotFound from "/img/NotFound.svg";

function ProjectDetails() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);

    const timeout = setTimeout(() => {
      setloading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <div className="flex items-center justify-center h-screen text-2xl font-bold">
          <img src={LoadingFiles} alt="loading.." className="" />
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center h-screen">
            <img src={NotFound} alt="Not Found" className="mb-4 md:w-full" />
            <p className="text-center md:text-xl">
              This page is on the way! <br /> Coming Soon...
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectDetails;
