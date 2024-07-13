import { Route, Routes, useParams, useLocation } from "react-router-dom";
import { appRoutes } from "../../routes";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";



export default function ApplicationLayout({children}) {
  const params = useParams();
  const [isAboutTab, setIsAboutTab] = useState(false);

  useEffect(() => {
    if (params.tab === "tab") {
      setIsAboutTab(true);
    } else {
      setIsAboutTab(false);
    }
  }, [params.tab]);
  return (
    <>
    <Header/>
    {isAboutTab &&<div className="min-h-60 bg-blue-100 flex flex-col gap-5 p-10">
        <h1 className="text-3xl font-semibold text-center">ABOUT NamaCare GROUP</h1>
        <p className="text-lg text-gray-500">
          Health and wellness is a term used to refer to the overall well-being of an individual. Health typically refers to the
          physical well-being of a person, while wellness refers to the mental, spiritual, and emotional well-being of a person.
          Health and wellness websites help people get in better shape and take control of their well-being so they can live
          better lives.
        </p>
      </div>}
      <div className="min-h-screen max-w-7xl mx-auto">
      <Routes>
     {appRoutes.map((route,index)=>(
        <Route key={index} path={route.path} element={<route.element/>}/>
      ))}
     </Routes>
     </div>
     <Footer/>
    </>
  )
}
