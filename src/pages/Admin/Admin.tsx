import React from 'react';
import { Wizard } from 'react-use-wizard';
import Banner from '../../components/Banner/Banner';
import Tabs from '../../components/Tabs/Tabs';
import AdminBoats from './AdminBoats/AdminBoats';
import AdminProducts from './AdminProducts/AdminProducts';
import AdminEngines from './AdminEngines/AdminEngines';
import AdminBoatBuilder from './AdminBoatBuilder/AdminBoatBuilder';

const Admin = () => {
    const adminLabels = ['Boats', 'Products', 'Engines', 'Boat Builder'];
    return (
        <div className="Page Admin">
            <Banner
                title="Admin Dashboard"
                subtitle="Manage all website-content and products"
            />
            <Wizard header={<Tabs labels={adminLabels} />}>
                <AdminBoats />
                <AdminProducts />
                <AdminEngines />
                <AdminBoatBuilder />
            </Wizard>
        </div>
    );
};

export default Admin;
