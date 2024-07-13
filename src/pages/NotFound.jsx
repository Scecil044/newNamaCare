import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="fixed inset-0 w-full h-full z-50 flex items-center font-serif justify-center bg-white">
      <div>
        <h1 className="text-7xl font-bold text-appGreen">404</h1>
        <h1>Page Not Found</h1>
        <div className="my-2"></div>
        <Link to="/" className="py-2 px-8 bg-appGreen text-white shadow-md ">Back Home</Link>
      </div>
    </div>
  )
}
