import LanguageLimousineHero from "@/components/Components/HomeComponents/Hero";
import NavigationBar from "@/components/Components/Navigationbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <LanguageLimousineHero />
      <h1>Home Page</h1>
      <Link to={"/admin/admin-dashboard"}>
        <Button>Admin Page</Button>
      </Link>
    </div>
  );
}
