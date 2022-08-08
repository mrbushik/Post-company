import React from "react";
import Bookmark from "./bookmark";
import Qualities from "./qualitie";
import PropTypes from "prop-types";

function User({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookMark
}) {
    return (
        <>
            <tr key={_id}>
                <th className=" pd-bt30">{name}</th>
                <th>
                    {" "}
                    {qualities &&
                        qualities.map((i) => (
                            <Qualities
                                key={i._id}
                                color={i.color}
                                name={i.name}
                            />
                        ))}
                </th>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate}</td>
                <td>
                    <Bookmark
                        status={bookmark}
                        onClick={() => onToggleBookMark(_id)}
                    />
                </td>
                <td>
                    <button
                        className="btn bg-danger  m-1"
                        onClick={() => onDelete(_id)}
                    >
                        удалить
                    </button>
                </td>
            </tr>
        </>
    );
}

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired, 
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  bookmark: PropTypes.bool.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
} 

export default User;
