import {TrainCarsTable} from "./TrainCarsTable";
import {Alert} from "@mui/material";
import useFetch from "../../hooks/useFetch";

const DepartureList = () => {
    const { data, loading, error  } = useFetch("railroadoperations/departList/");
    if(loading) return <Alert severity="info">Loading...</Alert>
    if(error) return <Alert severity="error">Error while trying to load the departure list!</Alert>
    return <TrainCarsTable trainCars={data} hasActions={false} />;
}

export default DepartureList;