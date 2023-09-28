import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import * as S from "./SideBar.style";
import { useAside } from "@/contexts/AsideContext";

const SideBar: React.FC = () => {
  const { aside } = useAside();

  return (
    aside === true && (
      <S.Div>
        <motion.section
          style={{
            position: "fixed",
            zIndex: 998,
            right: 0,
            width: "50%",
            height: "100%",
            backgroundColor: "#2B1700",
            color: "#F2E0C5",
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
        ></motion.section>
      </S.Div>
    )
  );
};

export default SideBar;
