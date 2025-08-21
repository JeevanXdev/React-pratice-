import { useState } from "react";
import NameSetter from "./LiftingUp(Example-child)";

function NameManager(): JSX.Element {
    const [name, setName] = useState<string>('');

    return (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
            
            <p>Current Name: {name}</p>
            <NameSetter onSetName={setName} />
        </div>
    );
};

export default NameManager;