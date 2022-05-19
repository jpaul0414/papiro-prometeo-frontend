import React from "react";
import {
  FormActions,
  FormWrapper,
  CancelButton,
  SubmitButton,
} from "./Form.elements";
import FormInput from "./FormInput/FormInput";

const Form = ({
  fields,
  onSubmit,
  submitBtnText,
  loading,
  hasCancel,
  cancelBtnText,
  onCancel,
  maxWidth,
}) => {
  return (
    <FormWrapper onSubmit={onSubmit} maxWidth={maxWidth}>
      {fields.length > 0 &&
        fields.map((field, i) => (
          <FormInput key={`input-${field.name}-${i}`} {...field} />
        ))}
      <FormActions>
        {hasCancel && (
          <CancelButton type="button" onClick={onCancel}>
            {cancelBtnText}
          </CancelButton>
        )}
        <SubmitButton type="submit">{submitBtnText}</SubmitButton>
      </FormActions>
    </FormWrapper>
  );
};

export default Form;
