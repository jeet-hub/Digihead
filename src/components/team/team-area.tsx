import React from "react";
import team_data from "@/data/team-data";
import TeamItem from "./team-item";
import { ITeamDT } from "@/types/team-d-t";
import TeamModal from "../modal/team-modal";

export default function TeamArea() {
  const [showModal, setShowModal] = React.useState(false);
  const [teamItem, setTeamItem] = React.useState<ITeamDT | null>(null);
  function handleTeamModal(team: ITeamDT) {
    setShowModal(!showModal);
    setTeamItem(team);
  }
  return (
    <>
      <div className="tp-team-area pb-120 fix">
        <div className="container container-1530">
          <div className="row">
            {team_data.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <TeamItem item={item} handleTeamModal={handleTeamModal} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* team modal */}
      {teamItem && (
        <TeamModal
          setShowModal={setShowModal}
          showModal={showModal}
          teamItem={teamItem}
        />
      )}
      {/* team modal */}
    </>
  );
}
