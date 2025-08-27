import React from "react";
import { Metadata } from "next";
import TeamDetailsMain from "@/pages/team/team-details";
import team_data from "@/data/team-data";

export const metadata: Metadata = {
  title: "Liko - Team Details page",
};

export default function TeamDetailsPage({params}: {params: { id: string }}) {
  const team = [...team_data].find((t) => t.id === Number(params.id));
  return team ? (
    <TeamDetailsMain item={team} />
  ) : (
    <div className="text-center pt-100">
      Team not found with id: {params.id}
    </div>
  );
}
