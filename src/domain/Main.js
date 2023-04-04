import { useEffect, useState } from "react";
import { Layout } from "components/Layout";
import { MainView } from "components/Main";

const Main = () => {
  const [position, setPosition] = useState(0);
  const onScroll = () => {
    setPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Layout>
      <MainView position={position} />
    </Layout>
  );
};

export default Main;
