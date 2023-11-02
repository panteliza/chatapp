import React,{useState} from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";



function Signup() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [upladingImg, setUploadingImg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    function validateImg(e) {
      const file = e.target.files[0];
      if (file.size >= 1048576) {
          return alert("Max file size is 1mb");
      } else {
          setImage(file);
          setImagePreview(URL.createObjectURL(file));
      }
  }
  async function uploadImage() {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "hggfhu5gh");
    try {
        setUploadingImg(true);
        let res = await fetch("https://api.cloudinary.com/v1_1/dfpdyybiu/image/upload", {
            method: "post",
            body: data,
        });
        const urlData = await res.json();
        setUploadingImg(false);
        return urlData.url;
    } catch (error) {
        setUploadingImg(false);
        console.log(error);
    }
}

  async function handleSignup(e){
    e.preventDefault();
    if (!image) return alert ('Please upload your profile pic');
    const url=await uploadImage(image);
    console.log(url)
  }
    return (
        <Container>
            <Row>
                <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <Form style={{ width: "80%", maxWidth: 500 }}  onSubmit={handleSignup}>
                        <h1 className="text-center">Create account</h1>
                        <div className="signup-profile-pic__container">
                            <img src={imagePreview||"https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?auto=format&fit=crop&q=80&w=1396&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}className="signup-profile-pic" />
                            <label htmlFor="image-upload" className="image-upload-label">
                                <i className="fas fa-plus-circle add-picture-icon"></i>
                            </label>
                            <input type="file" id="image-upload" hidden accept="image/png, image/jpeg" onChange={validateImg} />
                        </div>
                       
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} value={name} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                         Submit
                        </Button>
                        <div className="py-4">
                            <p className="text-center">
                                Already have an account ? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </Form>
                </Col>
                <Col md={5} className="signup__bg"></Col>
            </Row>
        </Container>
    );
}

export default Signup;
