import {TrainCarsTable} from "./TrainCarsTable";

const DepartureList = (props) => {
    if(!props.isLoaded) return null;
    if(props.error) return <div>Error: {error.message}</div>
    if(props.departureList) return (
        <TrainCarsTable trainCars={props.departureList} hasActions />
    );
}

export default DepartureList;