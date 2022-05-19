import { Input, InputGroup, InputLabel } from "./FormInput.elements";

const FormInput = ({
  label,
  type,
  placeholder,
  name,
  id,
  options,
  value,
  required,
  autocomplete,
  pattern,
  onChange,
}) => {
  return (
    <InputGroup>
      {label && (
        <InputLabel htmlFor={id} required={required}>
          {label}
        </InputLabel>
      )}
      {type === "text" && (
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          defaultValue={value}
          required={required}
          autoComplete={autocomplete}
          pattern={pattern}
        ></Input>
      )}
      {type === "number" && (
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          defaultValue={value}
          required={required}
          autoComplete={autocomplete}
          pattern={pattern}
        ></Input>
      )}
      {type === "email" && (
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          defaultValue={value}
          required={required}
          autoComplete={autocomplete}
          pattern={pattern}
        ></Input>
      )}
      {type === "password" && (
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          required={required}
          autoComplete={autocomplete}
          pattern={pattern}
        ></Input>
      )}
      {type === "tel" && (
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          required={required}
          autoComplete={autocomplete}
          pattern={pattern}
        ></Input>
      )}
    </InputGroup>
  );
};

export default FormInput;
