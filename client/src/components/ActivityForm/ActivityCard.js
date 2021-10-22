import React from "react";

function ActivityCard({ name, difficulty, duration, season }) {
    return (
        <div>
                <h4>Activity: {name}</h4>
                <p>Difficulty: {difficulty}</p>
                <p>Duration: {duration} hours</p>
                <p>Season: {season}</p>
        </div>
    )
}

export default ActivityCard