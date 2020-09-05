import React from 'react';
import { Sidebar, Sidenav, Nav, Icon } from 'rsuite'

import './Sidebar.css'

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
                        <Nav.Item icon={<Icon icon="dashboard" />}>
                            Home
                        </Nav.Item>
                        <Nav.Item icon={<Icon icon="bar-chart" />}>
                            Data
                        </Nav.Item>
                        <Nav.Item icon={<Icon icon="wrench" />}>
                            Settings
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
}