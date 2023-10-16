import React from "react";
import { motion } from "framer-motion";
import * as S from "./SideBar.style";
import { useAside } from "@/contexts/AsideContext";
import Link from "next/link";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import { PiShoppingCartDuotone } from "react-icons/pi";

const SideBar: React.FC = () => {
  const { asideMobile, closeAsideMobile } = useAside();
  const { isLoged } = useAuth();
  const { push } = useRouter();
  const {asideCart, openAsideCart} = useCart()

  return (
    asideMobile === true && (
      <div>
        <motion.section
          style={{
            position: "fixed",
            zIndex: 998,
            right: 0,
            width: "50%",
            height: "100%",
            backgroundColor: "#2B1700",
            color: "#F2E0C5",
            display: ` ${ !asideCart ? "flex" : "none"} `, 
            flexDirection: "column",
            alignItems: "center",
            
          }}
          initial={{ x: 200 }}
          animate={{
            x: [
              195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135,
              130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60,
              55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0,
            ],
          }}
          exit={{ x: 100 }}
          transition={{ duration: 0.4 }}
        >
          <motion.button
          onClick={() => push(isLoged ? "/profile" : "/identify")}
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              color: "#F2E0C5",
              backgroundColor: "#5D2A0C",
              marginTop: "8rem",
              fontSize: "1.5rem",
              borderRadius: "10px",
              width: "185px",
              height: "38px",
            }}
          >
            {isLoged === true ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <BiLogOut />
                <span className="text">Minha conta</span>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BiLogIn />
                <span className="text">Identifique-se</span>
              </div>
            )}
          </motion.button>
          <motion.button
            onClick={openAsideCart}
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              color: "#F2E0C5",
              backgroundColor: "#5D2A0C",
              marginTop: "1rem",
              fontSize: "1.5rem",
              borderRadius: "10px",
              width: "185px",
              height: "38px",
            }}
          >
            <PiShoppingCartDuotone />
              <span className="text">Carrinho</span>
          </motion.button>
        </motion.section>
      </div>
    )
  );
};

export default SideBar;
