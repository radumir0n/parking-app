import { useState } from "react";
import "./Form.scss";

interface IForm {
  existsError: boolean;
  tooManyError: boolean;
  emptyError: boolean;
  addCarToParking: (
    licencePlate: string
  ) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Form = ({
  addCarToParking,
  existsError,
  tooManyError,
  emptyError,
}: IForm) => {
  const [licencePlate, setLicencePlate] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLicencePlate(event.target.value);
  };

  return (
    <div>
      <section className="control-panel">
        <input
          type="text"
          id="licencePlate"
          placeholder="Enter Licence Plate..."
          maxLength={7}
          required
          onChange={handleChange}
          value={licencePlate}
        />

        <button
          id="btnAddCar"
          className="button"
          onClick={addCarToParking(licencePlate)}
        >
          Add Car
        </button>
      </section>
      {emptyError ? (
        <div style={{ fontSize: "12", color: "red" }}>
          Value cannot be empty.
        </div>
      ) : null}
      {existsError ? (
        <div style={{ fontSize: "12", color: "red" }}>Car already exists</div>
      ) : null}
      {tooManyError ? (
        <div style={{ fontSize: "12", color: "red" }}>
          There are no free parking spots.
        </div>
      ) : null}
    </div>
  );
};

export default Form;
