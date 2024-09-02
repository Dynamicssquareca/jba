import { useRouter } from 'next/router';
import AppURL from '@/pages/api/AppUrl';

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(AppURL.UserLogout, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
               
                localStorage.removeItem('authToken');
                window.location.replace('/user/login');
            } else {
                console.error('Logout failed:', await response.text());
            }
        } catch (error) {
            console.error('An error occurred during logout:', error);
        }
    };

    return (
        <a href="#" onClick={handleLogout} className="btn-logout">
            <i className="fi fi-rs-sign-out mr-10"></i>
            Sign out
        </a>
    );
};

export default LogoutButton;
