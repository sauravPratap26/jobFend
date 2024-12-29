import { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const jobKeywords = useMemo(
    () => ["Frontend Jobs", "Backend Jobs", "Node.js Jobs", "React Jobs"],
    []
  );
  const [placeholder, setPlaceholder] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = jobKeywords[currentWordIndex];

      if (isDeleting) {
        // Deleting characters
        setPlaceholder((prev) => prev.slice(0, -1));
        if (placeholder === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % jobKeywords.length);
        }
      } else {
        // Adding characters
        setPlaceholder((prev) => currentWord.slice(0, prev.length + 1));
        if (placeholder === currentWord) {
          setIsDeleting(true);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 130;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [placeholder, isDeleting, currentWordIndex, jobKeywords]);

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          aspernatur temporibus nihil tempora dolor!
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder={placeholder}
            className="outline-none border-none w-full placeholder-gray-400 pl-5"
          />
          <Button className="rounded-r-full bg-[#6A38C2]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
