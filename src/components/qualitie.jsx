import React from "react";

function Qualities(name) {
    return (
        <span className={`bg-${name.color} text-white  mr-r m-2 p-2 badge`}>
            {name.name}
        </span>
    );
}

export default Qualities;
