import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[orange]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>{" "}
            </li>
            <li>
              <Link to="/browse">Browse</Link>{" "}
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant={"outline"}>Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-purple-800 hover:bg-purple-900">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <Popover>
                <PopoverTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JP</AvatarFallback>
                    {/* avatarFallack is like the alternalte text to be shown instead of the image */}
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-85">
                  <div>
                    <div className="flex items-center gap-6">
                      <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JP</AvatarFallback>
                        {/* avatarFallack is like the alternalte text to be shown instead of the image */}
                      </Avatar>
                      <div>
                        <h4 className="font-medium">patel mernstack</h4>
                        <p className="text-sm text-muted-foreground">
                          this is a full stack application
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex w-fit items-center gap-4 cursor-pointer">
                        <User2 className="ml-2" />
                        <Button variant="link">View Profile</Button>
                      </div>
                      <div className="flex w-fit items-center gap-4 cursor-pointer">
                        <LogOut className="ml-2" />
                        <Button variant="link">Logout</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
