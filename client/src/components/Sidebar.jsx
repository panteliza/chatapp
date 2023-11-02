import React from "react";
import { ListGroup } from "react-bootstrap";
import "./Sidebar.css";

function Sidebar() {
    return (
        <>
            <h2>Available rooms</h2>
            <ListGroup>
                {/* List of rooms */}
                <ListGroup.Item>Room 1</ListGroup.Item>
                <ListGroup.Item>Room 2</ListGroup.Item>
            </ListGroup>
            <h2>Members</h2>
            {/* List of members */}
            <ListGroup.Item>Member 1</ListGroup.Item>
            <ListGroup.Item>Member 2</ListGroup.Item>
        </>
    );
}

export default Sidebar;
