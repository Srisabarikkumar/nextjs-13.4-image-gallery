"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function NavBar() {
    const pathname = usePathname();
     
    return <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Brand as={Link} href="/">
                NextJS 13.4 Image Gallery
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
                <Nav>
                    <Nav.Link as={Link} href="/static" active={pathname === "/static"}>Static</Nav.Link>
                    <Nav.Link as={Link} href="/dynamic" active={pathname === "/dynamic"}>Dynamic</Nav.Link>
                    <Nav.Link as={Link} href="/isr" active={pathname === "/isr"}>ISR</Nav.Link>
                    <NavDropdown title="topic" id="topic-dropdown">
                        <NavDropdown.Item as={Link} href="/topic/coding">Coding</NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/topic/fitness">Fitness</NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/topic/web development">Web Development</NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/topic/books">Books</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} href="/search" active={pathname === "/search"}>Search</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}