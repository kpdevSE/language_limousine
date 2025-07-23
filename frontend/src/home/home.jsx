import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={"/admin/admin-dashboard"}>
        <Button>Admin Page</Button>
      </Link>
    </div>
  );
}
