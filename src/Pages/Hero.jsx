import { motion } from "framer-motion";
import Navbar from "../Components/Global/Navbar";

export default function Hero() {
  return (
    <div className="relative h-screen w-screen bg-primary flex items-center justify-between overflow-hidden">
      <Navbar />

      
      <motion.div
        className="w-full sm:w-3/6 flex flex-col justify-center space-y-8 px-6 sm:px-16 lg:px-28"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight">
          <span className="font-bold">Get paid early</span> <br />
          save automatically <br />
          all your pay.
        </p>

        <p className="text-charcoal/80 text-base sm:text-lg">
          Supports small businesses with simple invoicing, <br />
          powerful integrations and cash flow management tools.
        </p>

        <div className="flex items-center border border-gray-200 rounded-xl bg-white w-full max-w-md h-12">
          <input
            placeholder="Your business email"
            className="flex-1 px-4 text-sm text-charcoal focus:outline-none"
          />
          <button className="bg-turq text-white px-4 py-2 rounded-xl h-full text-sm hover:bg-[#247c8a] cursor-pointer transition">
            Get Started ↗
          </button>
        </div>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", delay:0.7 }}
        className="hidden sm:flex w-3/6 items-center justify-center"
      >
        <div className="flex flex-col space-y-2 p-6 shadow-xl bg-white w-80 rounded-xl">
          <p className="text-sm font-semibold">Rajarshi</p>
          <p className="text-xs text-gray-600">rajarshitambuli@gmail.com</p>

          <div className="flex p-4 flex-col border rounded-2xl border-gray-300">
            <p className="text-xs text-gray-600">Invoice</p>
            <p className="text-2xl">$1,876,580</p>
            <p className="text-xs text-gray-600">Oct 2026</p>
          </div>

          <div className="space-y-2">
            <label className="flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer border-gray-300">
              <div className="flex items-center justify-between w-full">
                <span className="text-sm font-medium text-gray-800">
                  Credit Card
                </span>
                <input
                  type="radio"
                  name="paymentMethod"
                  className="h-4 w-4 rounded-full accent-turq cursor-pointer"
                />
              </div>
            </label>

            <label className="flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer border-gray-300">
              <div className="flex items-center justify-between w-full">
                <span className="text-sm font-medium text-gray-800">
                  Bank Account
                </span>
                <input
                  type="radio"
                  name="paymentMethod"
                  className="h-4 w-4 accent-turq cursor-pointer"
                />
              </div>
            </label>

            <button className="text-center w-full border p-2 rounded-xl bg-grayblue text-white cursor-pointer hover:bg-charcoal">
              Pay
            </button>
          </div>
        </div>
      </motion.div>

     
      <motion.div
        className="hidden sm:flex h-56 w-42 rounded-2xl shadow-md fixed top-38 right-7 lg:right-32 flex-col"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
      >
        <div className="h-4/5 bg-turq rounded-t-2xl p-4 text-white">
          <p className="text-xs">Credit Card</p>
          <p className="">234 **** ****</p>
        </div>
        <div className="h-1/5 bg-grayblue rounded-b-2xl py-2 px-4">
          <p className="text-white">VISA</p>
        </div>
      </motion.div>
    </div>
  );
}
