import React from 'react';
import { Sidebar, Sidenav, Nav, Icon } from 'rsuite'

import './Sidebar.css'
import { Link } from 'react-router-dom';

export default function ISSidebar() {
    return (
        <Sidebar className="sidebar">
            <Sidenav.Header className="header">
                <Icon className="header-icon" icon="search" />
                <span>InstaScrapper</span>
            </Sidenav.Header>
            <Sidenav appearance="subtle" className="body">
                <Sidenav.Body>
                    <Nav>
                        <Link to="/">
                            <Nav.Item icon={<Icon icon="dashboard" />}>
                                Home
                            </Nav.Item>
                        </Link>
                        <Link to="/data">
                            <Nav.Item icon={<Icon icon="logo-analytics" />}>
                                Data
                            </Nav.Item>
                        </Link>
                        <Link to="/settings">
                            <Nav.Item icon={<Icon icon="wrench" />}>
                                Settings
                            </Nav.Item>
                        </Link>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
}