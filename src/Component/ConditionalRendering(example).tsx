import { useState } from "react";

function UserGreetings() : JSX.Element {
    const [user, setUser] = useState<string | null >(null);

    const toggledLogin = () => {
        if (user) {
            setUser(null);
        } else {
            setUser("Dark");
        }
    }
    return (
        <div style={{ marginTop: '20px' }}>

            <h3> Welcome , {user ? user : 'Guest'}</h3>

            <button onClick={toggledLogin}>
                {user ? "Logout" : "Login"}
            </button>
        </div>
    );
};

export default UserGreetings;
