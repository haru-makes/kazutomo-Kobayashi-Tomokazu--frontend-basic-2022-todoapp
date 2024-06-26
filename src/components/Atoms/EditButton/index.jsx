import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const EditButton = ({ onClick }) => {
  return (
    <SampleButton onClick={onClick}>
      <PencilIcon src={pencil} alt="Edit Icon" />
    </SampleButton>
  );
};

const SampleButton = styled.button`
  background-color: ${COLOR.GREEN_TRANSPARENT};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;

const PencilIcon = styled.img`
  width: 100%;
  height: 100%;
`;
