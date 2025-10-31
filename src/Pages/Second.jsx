import { motion } from "framer-motion";
import file from "../assets/file.png";
import bank from "../assets/bank.png";
import shield from "../assets/shield.png";

export default function Second() {
  // Variants for staggered animations
  const textVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25, // delay between cards
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      className="min-h-[80vh] w-full flex items-center justify-center"
      style={{
        background: `linear-gradient(to bottom, var(--tw-color-primary, #E9F3F4) 37.5%, #ffffff 37.5%)`,
      }}
    >
      <motion.div
        className="min-h-[50vh] w-5/6 border rounded-xl border-gray-200 bg-white shadow-md sm:px-16 sm:py-12 p-8 space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="text-sm text-turq font-semibold"
          variants={textVariant}
        >
          FUTURE PAYMENT
        </motion.p>

        <div className="sm:flex sm:items-start sm:justify-between space-y-3 sm:space-y-0">
          <motion.p
            className="text-2xl sm:text-4xl w-4/5"
            variants={textVariant}
          >
            Experience that grows <br /> with your scale.
          </motion.p>

          <motion.p
            className="sm:text-sm sm:pt-2 text-gray-600 sm:w-3/5 text-xs pt-1"
            variants={textVariant}
          >
            Design a financial operating system that works for your business and
            streamlines cash flow management.
          </motion.p>
        </div>

        <motion.div
          className="gap-2 w-full flex flex-col sm:flex-row justify-end pt-4"
          variants={cardContainer}
        >
          <motion.div
            className="w-full sm:w-1/3 h-full flex flex-col sm:justify-between gap-4"
            variants={cardVariant}
          >
            <img src={file} alt="" className="h-8 w-8" />
            <div className="space-y-2">
              <p className="text-xl font-semibold">Free Transfers</p>
              <p className="text-sm text-gray-600">
                Create a financial experience and automate repeat purchases by
                scheduling recurring payments.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full sm:w-1/3 h-full flex flex-col justify-between gap-4"
            variants={cardVariant}
          >
            <img src={bank} alt="" className="h-8 w-8" />
            <div className="space-y-2">
              <p className="text-xl font-semibold">Multiple Accounts</p>
              <p className="text-sm text-gray-600">
                Run your operations with cash from your account and generate
                yield on funds stored in your account.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full sm:w-1/3 h-full flex flex-col justify-between gap-4"
            variants={cardVariant}
          >
            <img src={shield} alt="" className="h-8 w-8" />
            <div className="space-y-2">
              <p className="text-xl font-semibold">Unmatched Security</p>
              <p className="text-sm text-gray-600">
                Securely manage your finances with organization-wide MFA,
                card-locking and account-level controls.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
