import { AiFillApple } from "react-icons/ai";
import { BsSearch, BsBag } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import { motion } from "framer-motion";

import "../styles/navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [cross, setCross] = useState(true);

  const handleSearch = () => {
    setOpen(true);
    setCross(false);
  };

  const handleCross = () => {
    setOpen(false);
    setCross(true);
  };

  const variants = {
    open: { opacity: 1, x: 10 },
    closed: { opacity: 0, x: 0 },
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [respNav, setRespNav] = useState(false);

  useEffect(() => {
    if (windowSize.innerWidth <= 850) {
      setRespNav(true);
    } else {
      setRespNav(false);
    }
  });

  const [ham, setHam] = useState(false);
  const handleHam = () => {
    setHam(!ham);
  };

  return (
    <>
      {open && (
        <div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, type: "tween" }}
        />
      )}
      <div className={`ham-links ${ham ? "active" : ""}`}>
        <span>Store</span>
        <span>Mac</span>
        <span>iPad</span>
        <span>iPhone</span>
        <span>Watch</span>
        <span>AirPods</span>
        <span>TV & Home</span>
        <span>Only on Apple</span>
        <span>Accessories</span>
        <span>Support</span>
      </div>
      <div style={{ position: "relative", width: "100%", zIndex: "2000" }}>
        <nav
          style={{
            backgroundColor: open && "var(--nav-when-search)",
          }}
        >
          <motion.div
            className="nav-links"
            animate={{ display: open ? "none" : "flex" }}
          >
            <motion.div
              className="ham"
              onClick={handleHam}
              style={{
                display: respNav ? "block" : "none",
              }}
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ duration: 0.3, type: "tween" }}
            >
              <span className={ham ? "first active-first" : "first"}></span>
              <span className={ham ? "second active-second" : "second"}></span>
            </motion.div>

            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.1, duration: 0.3, type: "tween" }}
              href="#"
            >
              <AiFillApple fontSize="20px" style={{ marginTop: "3.5px" }} />
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.12, duration: 0.3, type: "tween" }}
              href="#"
              style={{ display: respNav && "none" }}
            >
              Store
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.13, duration: 0.3, type: "tween" }}
              href="#"
              style={{ display: respNav && "none" }}
            >
              Mac
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.14, duration: 0.3, type: "tween" }}
              href="#"
              style={{ display: respNav && "none" }}
            >
              iPad
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.15, duration: 0.3, type: "tween" }}
              href="#"
              style={{ display: respNav && "none" }}
            >
              iPhone
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.16, duration: 0.3, type: "tween" }}
              href="#"
              style={{ display: respNav && "none" }}
            >
              Watch
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.17, duration: 0.3, type: "tween" }}
              href="#"
              style={{ display: respNav && "none" }}
            >
              AirPods
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.18, duration: 0.3, type: "tween" }}
              href="#"
              style={{ display: respNav && "none" }}
            >
              TV & Home
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.19, duration: 0.3, type: "tween" }}
              href="#"
              style={{ display: respNav && "none" }}
            >
              Only on Apple
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.2, duration: 0.3, type: "tween" }}
              href="#"
              style={{ display: respNav && "none" }}
            >
              Accessories
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.21, duration: 0.3, type: "tween" }}
              href="#"
              style={{ display: respNav && "none" }}
            >
              Support
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.22, duration: 0.3, type: "tween" }}
              href="#"
              onClick={handleSearch}
            >
              <BsSearch fontSize="15px" style={{ marginTop: "3.5px" }} />
            </motion.a>
            <motion.a
              animate={cross ? "open" : "closed"}
              variants={variants}
              transition={{ delay: 0.23, duration: 0.3, type: "tween" }}
              href="#"
              style={{ display: respNav && "none" }}
            >
              <BsBag fontSize="15px" style={{ marginTop: "3.5px" }} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={open ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.3, type: "tween" }}
            className="nav-search"
            style={{ display: open ? "flex" : "none" }}
          >
            <a href="#">
              <BsSearch fontSize="15px" style={{ marginTop: "7px" }} />
            </a>
            <input type="text" placeholder="Search apple.com" />
            <a href="#" onClick={handleCross}>
              <IoMdClose fontSize="20px" style={{ marginTop: "7px" }} />
            </a>
          </motion.div>
        </nav>
        <div
          className="search-bottom"
          style={{ display: open ? "flex" : "none" }}
        >
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={open ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.15, duration: 0.2, type: "tween" }}
          >
            QUICK LINKS
          </motion.div>
          <motion.div>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={open ? { x: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.13, duration: 0.2, type: "tween" }}
            >
              Holiday Gifts
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={open ? { x: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.16, duration: 0.2, type: "tween" }}
            >
              Visiting an Apple Store FAQ
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={open ? { x: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.19, duration: 0.2, type: "tween" }}
            >
              Apple Gift Card
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={open ? { x: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.22, duration: 0.2, type: "tween" }}
            >
              AirPods
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={open ? { x: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.25, duration: 0.2, type: "tween" }}
            >
              AirTag
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
