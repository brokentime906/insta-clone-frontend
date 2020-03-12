import React, { useState } from "react";
import styled from "styled-components";

const useInputManual = defaultValue => {
  const [value, setValue] = useState(defaultValue);
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return { value, onChange, setValue };
};

export default useInputManual;
