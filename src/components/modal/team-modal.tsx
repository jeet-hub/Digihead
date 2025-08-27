import { ITeamDT } from "@/types/team-d-t";
import React from "react";
import Modal from "react-bootstrap/Modal";
import TeamDetailsArea from "../team/team-details-area";

// prop type
type IProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  teamItem: ITeamDT;
};

export default function TeamModal({showModal,setShowModal,teamItem}: IProps) {
  const handleClose = () => setShowModal(false);
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      style={{
        backgroundImage: `url(/assets/img/home-01/team/team-details-bg.png)`,
      }}
    >
      <Modal.Header closeButton>
        <button type="button" className="btn-close"></button>
      </Modal.Header>
      <Modal.Body>
        <TeamDetailsArea item={teamItem} />
      </Modal.Body>
    </Modal>
  );
}
