export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-20 px-6 sm:px-20  flex items-center justify-between bg-primary">
      <div className="flex items-center">
        <img src="" alt="" />
        <p className="sm:text-2xl text-xl font-semibold text-center">Finpay</p>

        <div className="ml-22 ">
          <ul className="md:flex sm:space-x-10 items-center justify-center p-1 text-sm  hidden">
            <li>Products</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Learn</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="w-20 py-2 h-full border border-gray-400 rounded-xl text-sm">
          Login
        </button>
        <button className="w-20 py-2 h-full border rounded-xl bg-turq text-white text-sm">
          Sign Up
        </button>
      </div>
    </div>
  );
}
