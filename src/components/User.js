const User = (props) => {
 const {name, location} = props;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Location : {location} </h3>
        </div>
    )
};

export default User;