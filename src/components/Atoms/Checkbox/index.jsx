import React from "react";
import check from "../../../assets/svg/check.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const Checkbox = ({ onClick }) => {
  return (
    <StyledCheckbox onClick={onClick}>
      <img src={check} alt="Task Completed" />
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.button`
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  background: none;
  outline: none;
  width: 20px;
  height: 20px;
  padding: 0px;

  &:hover img {
    display: block;
    cursor: pointer;
  }

  & > img {
    width: 15px;
    height: 15px;
    display: none;
  }
`;
