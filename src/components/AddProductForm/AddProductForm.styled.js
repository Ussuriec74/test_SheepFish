import styled from "styled-components";
import { Form, Field } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 auto;
  padding: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.space[11]}px;
  border: ${p => p.theme.borders.normal} black;
  border-radius: ${p => p.theme.radii.normal};
  background-color: inherit;
`;

export const FormLabel = styled.label`
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[6]}px;
`;

export const FormItem = styled(Field)`
  margin: 0 auto;
  margin-bottom: ${p => p.theme.space[5]}px;
  width: 90%;
  min-height: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const FormBtn = styled.button`
  margin: 0 auto;
  min-width: ${p => p.theme.space[8]}px;
  cursor: pointer;
  background-color: ${p => p.theme.colors.btnColor};
  border-radius: ${p => p.theme.radii.small};
  &:focus, &:hover {
    background-color: ${p => p.theme.colors.accentColor};
  }
`;