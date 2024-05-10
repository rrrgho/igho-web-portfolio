import { FC } from "react";
import Navbar from "./Navbar";

// Interface
interface IPortfolioLayout {
  children: React.ReactNode;
}

const PortfolioLayout: FC<IPortfolioLayout> = ({ children }) => {
  return (
    <main>
      <div className="bg-white h-auto relative">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default PortfolioLayout;