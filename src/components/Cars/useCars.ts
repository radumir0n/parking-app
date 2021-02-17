import { useState } from "react";
import { ICar } from "./Cars";
import { getTime } from "../../utils/utils";

export function useCars([]) {
  const [cars, setCars] = useState<ICar[]>([]);
  const [fees, setFees] = useState<ICar[]>([]);
  const [existsError, setExistsError] = useState(false);
  const [tooManyError, setTooManyError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);

  const addCarToParking = (licencePlate: string) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();

    const newCar: ICar = {
      licencePlate: licencePlate,
      timeAtEntry: getTime(),
      duration: 0,
      timeAtExit: "",
      fee: 10,
      paid: false,
      timerOn: true,
    };

    // Condition for unique input
    if (cars !== undefined) {
      const valuesInState = cars.map((car) => car.licencePlate);

      // Issue to solve: cars in parkingspot lose 1 second when adding new car
      licencePlate.length === 0
        ? setEmptyError(true)
        : cars.length > 9
        ? setTooManyError(true)
        : !valuesInState.includes(licencePlate)
        ? setCars([...cars, newCar])
        : setExistsError(true);
    }

    setTimeout(() => {
      setExistsError(false);
      setTooManyError(false);
      setEmptyError(false);
    }, 5000);
  };

  const exitCarFromParking = (index: number): void => {
    if (cars !== undefined) {
      const carsCopy = [...cars];

      cars[index].timerOn = false;
      cars[index].fee += 5 * Math.floor(carsCopy[index].duration / 3600);
      cars[index].timeAtExit = getTime();
      cars[index].paid = true;

      updateCarsAndFees(cars[index]);
    }
  };

  const updateCarsAndFees = (car: ICar): void => {
    if (cars !== undefined) {
      const newCars = cars.filter((c) => c !== car);

      setFees((prevFees) => [...prevFees, car]);
      setCars(newCars);
    }
  };

  return {
    fees,
    cars,
    existsError,
    tooManyError,
    emptyError,
    setCars,
    addCarToParking,
    exitCarFromParking,
  };
}
