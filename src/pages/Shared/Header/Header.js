import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div>
            <>
                <Navbar bg="info" variant="dark" expand={true}>
                    <Container>
                        <Navbar.Brand href="/">ADANA CATERING SERVICE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                        <Nav className="ms-auto">
                            <Nav.Link href="home" className='text-warning' >Home</Nav.Link>
                            <Nav.Link href="services" className='text-warning'>Services</Nav.Link>
                            <Nav.Link href="about" className='text-warning'>About</Nav.Link>
                            <Nav.Link href="blog" className='text-warning'>Blogs</Nav.Link>
                            <Nav.Link href="contact" className='text-warning'>Contact Us</Nav.Link>

                        </Nav>
                        {
                                user ?
                                    <button className='btn btn-link text-warning text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login" className='text-warning'>
                                Login
                            </Nav.Link>}
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header; 