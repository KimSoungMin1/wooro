import React from "react";
import { Layout } from "components/Layout";
import { ServiceView } from "components/Service";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const Service = () => {
  const fee = [
    {
      title: "무료",
      subTitle: "FREE",
      condition: "15명 미만",
      icon1: <CheckIcon className="fee-icon" />,
      icon2: <CheckIcon className="fee-icon" />,
      icon3: <CheckIcon className="fee-icon" />,
      icon4: <CloseIcon className="fee-icon" />,
      icon5: <CloseIcon className="fee-icon" />,
      list1: "학습진다",
      list2: "숙제 출제 및 관리",
      list3: "모의고사 30장",
      list4: "모의고사 성적 관리",
      list5: "교사 관리 대시보드",
      button: "시작하기",
    },
    {
      title: "150,000",
      subTitle: "BASIC TEACHER",
      condition: "15~30명",
      icon1: <CheckIcon className="fee-icon" />,
      icon2: <CheckIcon className="fee-icon" />,
      icon3: <CheckIcon className="fee-icon" />,
      icon4: <CheckIcon className="fee-icon" />,
      icon5: <CloseIcon className="fee-icon" />,
      list1: "학습진다",
      list2: "숙제 출제 및 관리",
      list3: "모의고사 30장",
      list4: "모의고사 성적 관리",
      list5: "교사 관리 대시보드",
      button: "체험하기",
    },
    {
      title: "360,000",
      subTitle: "BASIC ACADEMY",
      condition: "31~50명",
      icon1: <CheckIcon className="fee-icon" />,
      icon2: <CheckIcon className="fee-icon" />,
      icon3: <CheckIcon className="fee-icon" />,
      icon4: <CheckIcon className="fee-icon" />,
      icon5: <CheckIcon className="fee-icon" />,
      list1: "학습진다",
      list2: "숙제 출제 및 관리",
      list3: "모의고사 30장",
      list4: "모의고사 성적 관리",
      list5: "교사 관리 대시보드",
      button: "체험하기",
    },
    {
      title: "별도 문의",
      subTitle: "PREMIUM",
      condition: "인원제한 없음",
      icon1: <CheckIcon className="fee-icon" />,
      icon2: <CheckIcon className="fee-icon" />,
      icon3: <CheckIcon className="fee-icon" />,
      icon4: <CheckIcon className="fee-icon" />,
      icon5: <CheckIcon className="fee-icon" />,
      list1: "학습진다",
      list2: "숙제 출제 및 관리",
      list3: "모의고사 30장",
      list4: "모의고사 성적 관리",
      list5: "교사 관리 대시보드",
      button: "문의하기",
    },
  ];
  return (
    <Layout>
      <ServiceView fee={fee} />
    </Layout>
  );
};

export default Service;
