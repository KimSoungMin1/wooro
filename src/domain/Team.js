import { useEffect, useState } from "react";
import { Layout } from "components/Layout";
import { TeamView } from "components/Team";

const Team = () => {
  const [position, setPosition] = useState(0);

  const partner = [
    {
      img: process.env.PUBLIC_URL + "/imgs/partner1.png",
      title: "포항바이오파크",
    },
    {
      img: process.env.PUBLIC_URL + "/imgs/partner2.png",
      title: "더켓코리아",
    },
    {
      img: process.env.PUBLIC_URL + "/imgs/partner3.png",
      title: "포항공과대학교 인공지능연구원 ",
    },
    {
      img: process.env.PUBLIC_URL + "/imgs/partner4.png",
      title: "와이즈넷",
    },
    {
      img: process.env.PUBLIC_URL + "/imgs/partner5.png",
      title: "포항스틸러스",
    },
    {
      img: process.env.PUBLIC_URL + "/imgs/partner6.png",
      title: "경인교육대학교",
    },
  ];
  const [list, setList] = useState([
    {
      date: 2023,
      date1: `2023.01`,
      date2: `2023.03`,
      text1: ` 우로매쓰 학생용 App 출시 `,
      text2: ` 문항선택알고리즘 특허 등록 1건`,
    },
    {
      date: 2022,
      date1: `2022.08`,
      date2: `2022.09`,
      date3: `2022.11`,
      date4: `2022.11`,
      text1: ` 벤처기업인증 획득 `,
      text2: ` 우로매쓰 학생용 웹서비스 출시`,
      text3: ` 우로매쓰 교사용 웹서비스 출시`,
      text4: ` 문신용보증기금 혁신스타트업성장지원 프로그램 선정`,
    },

    {
      date: 2021,
      date1: `2021.02`,
      date2: `2021.09`,
      date3: `2021.09`,
      text1: ` 문항선택알고리즘 특허 출원 3건  `,
      text2: ` ㈜우로테스트 법인 설립 `,
      text3: ` 포항바이오파크 MOU체결`,
    },
  ]);

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
      <TeamView list={list} partner={partner} position={position} />
    </Layout>
  );
};

export default Team;
