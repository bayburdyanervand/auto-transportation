import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer/Footer';
import { LoginModal } from '@/components/ui/LoginModal';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
