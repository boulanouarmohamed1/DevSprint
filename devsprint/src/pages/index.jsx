import BlogPost from "@/component/BlogPost";
import Discuss from "@/components/Discuss/Discuss";
import Hero from "@/components/Hero";
import HireMe from "@/components/HireMe/HireMe";
import MyResult from "@/components/MYResulta";
import Mywork from "@/components/Mywork";
import Footer from "@/componets/Footer/Footer";
import NavBar from "@/compument/Navbar/Navbar";

export default function Home() {
  return (
    <>
    <NavBar></NavBar>
    <Hero></Hero>
    <Mywork></Mywork>
    <HireMe></HireMe>
    <MyResult></MyResult>
    <Discuss></Discuss>
    <BlogPost></BlogPost>
    <Footer></Footer>
   </>
   

  );
}
