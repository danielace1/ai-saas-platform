import { Button } from "@/components/ui/button";
import Link from "next/link";

const Landingpage = () => {
  return (
    <div>
      <h1>
        landing page (unprotected)
        <Link href={"/sign-in"}>
          <Button>Login</Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button>Register</Button>
        </Link>
      </h1>
    </div>
  );
};

export default Landingpage;
