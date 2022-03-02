import { Paper, Button } from '@mui/material';
import {useState} from "react";
import DepartureList from "./components/DepartureList";

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [departureList, setDepartureList] = useState([]);

    function getDepartureList() {
        const headers = {'Accept': 'application/json'}
        fetch("http://localhost:8080/railroadoperations/departList/", {headers})
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setDepartureList(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }
    return (
        <Paper sx={{ margin: '10px', padding: (theme) => theme.spacing(2) }}>
            Hello it's me
            <div><Button variant="contained" onClick={getDepartureList}>Sort</Button></div>
            <DepartureList isLoaded={isLoaded} departureList={departureList} error={error}/>
        </Paper>
    );
};

export default Home;
