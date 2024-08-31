import React from "react";
import plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONT from "../../../variables/font_family";

export const AddTaskButton = ({ onClick }) => {
  return (
    <PlusButton onClick={onClick}>
      <PlusIcon src={plus} alt="Add Task Icon" />
      <PlusText>タスクを追加</PlusText>
    </PlusButton>
  );
};

const PlusButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 12px;
  background-color: ${COLOR.GREEN_TRANSPARENT};
  transition: all 0.2s ease 0s;
  display: flex;
  padding: 2px 6px;
  align-items: center;

  &:hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
  }
`;

const PlusIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const PlusText = styled.div`
  color: ${COLOR.GREEN};
  font-family: ${FONT.NOTO_SANS};
  font-size: 14px;
  line-height: 20px;
  margin-left: 10px;
  white-space: nowrap;
`;
