import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./MessageForm.css";

function MessageForm() {
    const message = "";
    const messages = [];

    return (
        <>
            <div className="messages-output">
                {/* Placeholder content */}
                <div className="alert alert-info">Sample message content</div>
            </div>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Row>
                    <Col md={11}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Your message" disabled value={message} onChange={(e) => {}}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={1}>
                        <Button variant="primary" type="submit" style={{ width: "100%", backgroundColor: "orange" }} disabled>
                            <i className="fas fa-paper-plane"></i>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default MessageForm;
