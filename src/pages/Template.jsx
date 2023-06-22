import React from "react";
import { useLocation } from "react-router-dom";
import { FadeDiv } from "../components/animatedPages/FadeDiv";
import { Template1 } from "../components/resume/Template1";
import { DownloadIco } from "../assets/icons";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
export const Template = () => {
  const { state } = useLocation();
  const MyPdf1 = () => {
    return (
      <div className="w-fit">
        <PDFViewer
          style={{ minHeight: 500, height: "auto" }}
          showToolbar={false}
        >
          <Template1 state={state} />
        </PDFViewer>
      </div>
    );
  };

  return (
    <FadeDiv className="MasterDiv relative ">
      <PDFDownloadLink
        document={<Template1 state={state} />}
        fileName={state.name + state.surname + ".pdf"}
      >
        <div className="fixed right-20 bottom-10 bg-neon cursor-pointer rounded-full p-3  text-orange-500 ">
          <DownloadIco className="w-20 h-20" />
        </div>
      </PDFDownloadLink>
      <MyPdf1 />
    </FadeDiv>
  );
};
