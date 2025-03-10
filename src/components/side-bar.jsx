import { motion } from "framer-motion";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const sidebarVariants = {
    open: {
      height: "100vh",
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
    closed: {
      height: "0px",
      opacity: 0,
      transition: { type: "tween", duration: 0.4 },
    },
  };

  return (
    <>
      {/* Sidebar */}
      <motion.aside
        className="sidebar-2"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className="sidebar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Templates</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="" className="primary-btn">
              Try it now
            </a>
          </li>
        </ul>
      </motion.aside>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          className="overlay"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );
};

export default Sidebar;
