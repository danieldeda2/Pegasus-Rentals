// VERSION 2.0 - MOBILE FIXED - 20260106_0603
import React from 'react'
import './FleetItems.css'
import { useNavigate } from 'react-router-dom'

// cars
import cadillac_escalade_2018 from './fleet_items/cadillac_escalade_2018.PNG'
import fiat_500_2016 from './fleet_items/fiat_500_2016.PNG'
import ford_explorer_2020 from './fleet_items/ford_explorer_2020.PNG'
import hyundai_elantra_2017 from './fleet_items/hyundai_elantra_2017.PNG'
import range_rover_sport_2019 from './fleet_items/range_rover_sport_2019.png'
import chevy_impala_2018 from './fleet_items/chevy_impala_2018.PNG'
import ford_escape_2014 from './fleet_items/ford_escape_2014.PNG'
import honda_pilot_2017 from './fleet_items/honda_pilot_2017.PNG'
import hyundai_sante_fe_2022 from './fleet_items/hyundai_sante_fe_2022.png'
import m8 from './fleet_items/m8.PNG'

// icons
import capacity_icon from './person_icon.png'
import mpg_icon from './mpg_icon.png'
import car_doors_icon from './car_door_icon.png'
import drivetrain_icon from './drivetrain_icon.png'

const FleetItems = () => {
  const navigate = useNavigate();

  const cars = [
    { id: 0, name: "BMW M8 Convertible", year: "2020", image: m8, capacity: 4, drivetrain: "AWD", mpg: 17, doors: 2, category: "Luxury Sports" },
    { id: 1, name: "Range Rover Sport", year: "2019", image: range_rover_sport_2019, capacity: 5, drivetrain: "AWD", mpg: 19, doors: 4, category: "Luxury SUV" },
    { id: 5, name: "Cadillac Escalade", year: "2018", image: cadillac_escalade_2018, capacity: 8, drivetrain: "RWD", mpg: 17, doors: 4, category: "Premium SUV" },
    { id: 2, name: "Honda Pilot", year: "2017", image: honda_pilot_2017, capacity: 8, drivetrain: "FWD", mpg: 23, doors: 4, category: "Family SUV" },
    { id: 3, name: "Chevrolet Impala", year: "2018", image: chevy_impala_2018, capacity: 5, drivetrain: "FWD", mpg: 25, doors: 4, category: "Sedan" },
    { id: 4, name: "Ford Explorer", year: "2020", image: ford_explorer_2020, capacity: 7, drivetrain: "RWD", mpg: 24, doors: 4, category: "SUV" },
    { id: 6, name: "Ford Escape", year: "2014", image: ford_escape_2014, capacity: 5, drivetrain: "FWD", mpg: 25, doors: 4, category: "Compact SUV" },
    { id: 7, name: "Hyundai Sante Fe", year: "2022", image: hyundai_sante_fe_2022, capacity: 5, drivetrain: "FWD", mpg: 26, doors: 4, category: "SUV" },
    { id: 8, name: "Fiat 500", year: "2016", image: fiat_500_2016, capacity: 2, drivetrain: "FWD", mpg: 34, doors: 2, category: "Compact" },
    { id: 9, name: "Hyundai Elantra", year: "2017", image: hyundai_elantra_2017, capacity: 5, drivetrain: "FWD", mpg: 32, doors: 4, category: "Sedan" }
  ];

  const handleReservation = (carName, carYear) => {
    localStorage.setItem("car", `${carYear} ${carName}`);
    navigate('/ContactUs');
  };

  return (
    <div className='fleet-items-wrapper'>
      <div className='fleet_items'>
        {cars.map((car) => (
          <div key={car.id} className="vehicle-card">
            <div className="vehicle-category">{car.category}</div>

            <div className="vehicle-image-container">
              <img 
                src={car.image} 
                alt={car.name}
                className="vehicle-image"
              />
              <div className="vehicle-shadow"></div>
            </div>

            <div className="vehicle-info">
              <h3 className="vehicle-name">{car.name}</h3>
              <div className="vehicle-year">{car.year}</div>
            </div>

            <div className="vehicle-specs">
              <div className="spec-item">
                <img src={capacity_icon} alt="Seats" className="spec-icon" />
                <div className="spec-details">
                  <span className="spec-label">Seats</span>
                  <span className="spec-value">{car.capacity}</span>
                </div>
              </div>

              <div className="spec-item">
                <img src={drivetrain_icon} alt="Drive" className="spec-icon" />
                <div className="spec-details">
                  <span className="spec-label">Drive</span>
                  <span className="spec-value">{car.drivetrain}</span>
                </div>
              </div>

              <div className="spec-item">
                <img src={mpg_icon} alt="MPG" className="spec-icon" />
                <div className="spec-details">
                  <span className="spec-label">MPG</span>
                  <span className="spec-value">{car.mpg}</span>
                </div>
              </div>

              <div className="spec-item">
                <img src={car_doors_icon} alt="Doors" className="spec-icon" />
                <div className="spec-details">
                  <span className="spec-label">Doors</span>
                  <span className="spec-value">{car.doors}</span>
                </div>
              </div>
            </div>

            <button
              className="reserve-button"
              onClick={() => handleReservation(car.name, car.year)}
            >
              Reserve Vehicle
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FleetItems
