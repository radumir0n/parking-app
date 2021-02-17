import "./Cars.scss";
import { useCars } from "./useCars";

import Fees from "./Fees/Fees";
import Form from "./Form/Form";
import ParkedCar from "../ParkedCar/ParkedCar";
import uniqueId from "lodash/uniqueId";

export interface ICar {
  licencePlate: string;
  timeAtEntry: string;
  duration: number;
  timeAtExit: string;
  fee: number;
  paid: boolean;
  timerOn: boolean;
}

const Cars: React.FC = () => {
  const {
    fees,
    cars,
    existsError,
    tooManyError,
    emptyError,
    setCars,
    addCarToParking,
    exitCarFromParking,
  } = useCars([]);

  return (
    <div className="parking-component">
      <div className="parking-header">
        <Form
          addCarToParking={addCarToParking}
          existsError={existsError}
          tooManyError={tooManyError}
          emptyError={emptyError}
        />
        <div className="parking-count">
          Occupied Parking Spots: <strong>{cars.length}/10</strong>
        </div>
      </div>
      {cars.map((car: ICar, index: number) => (
        <div className="parking-spot" key={uniqueId()}>
          <p>{car.licencePlate}</p>
          <ParkedCar
            car={car}
            cars={cars}
            setCars={setCars}
            exitCar={() => exitCarFromParking(index)}
          />
        </div>
      ))}
      <Fees fees={fees} />
    </div>
  );
};

export default Cars;
