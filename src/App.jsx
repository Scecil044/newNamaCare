import { Route, Routes } from "react-router-dom";
import ApplicationLayout from "./pages/layouts/ApplicationLayout";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<ApplicationLayout/>}/>
      </Routes>
    </>
  )
}
