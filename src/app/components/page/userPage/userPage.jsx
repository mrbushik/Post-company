import React from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import QualitiesList from "../../ui/qualities/qualitiesList";
import { useHistory } from "react-router-dom";
function UserPage({ userId }) {
    const [user, setUser] = React.useState();
    const history = useHistory();
    React.useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    });
    const handleClick = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <div>
                <h1> {user.name} </h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>Complited Meetings: {user.completedMeetings}</p>
                <h2>Rate: {userId.rate}</h2>
                <button onClick={handleClick}>Все пользователи</button>
            </div>
        );
    } else {
        return <h1> loading</h1>;
    }
}
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;
