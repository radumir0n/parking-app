import { useEffect } from "react";
import { ICar } from "../Cars/Cars";

import { getDuration } from "../../utils/utils";

interface IParkedCar {
  car: ICar;
  cars: ICar[];
  setCars: (cars: ICar[]) => void;
  exitCar: () => void;
}

const ParkedCar: React.FC<IParkedCar> = ({ car, cars, setCars, exitCar }) => {
  useEffect(() => {
    let interval: number | string | any;
    if (car.timerOn) {
      interval = setInterval(() => {
        if (car.timerOn)
          setCars(
            cars.map((car: ICar) =>
              car.timerOn ? { ...car, duration: car.duration + 1 } : car
            )
          );
      }, 1000);
    } else {
      clearInterval(interval);
    }
    //Clean function
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        marginLeft: "auto",
      }}
    >
      <div>{getDuration(car.duration)}</div>
      <button
        style={{ marginLeft: "2rem", marginRight: "1rem" }}
        onClick={exitCar}
      >
        Exit
      </button>
    </div>
  );
};

export default ParkedCar;
