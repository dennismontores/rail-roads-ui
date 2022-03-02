const DepartureList = (props) => {
    if(!props.isLoaded) return null;
    if(props.error) return <div>Error: {error.message}</div>
    if(props.departureList) return (
        <div>
            <ul>
                {props.departureList.map(railRoadCar => (
                    <li key={encodeURIComponent(railRoadCar.name)}>
                        Name: {railRoadCar.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DepartureList;