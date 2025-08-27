import React from "react";
import { Metadata } from "next";
import TeamMain from "@/pages/team/team";

export const metadata: Metadata = {
  title: "Liko - Team page",
};

const TeamPage = () => {
  return (
    <TeamMain/>
  );
};

export default TeamPage;
