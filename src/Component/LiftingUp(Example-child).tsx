import { useState } from "react";

type nameSetter = 
{
     onSetName : (name: string) => void;
};

function NameSetter ({ onSetName} : nameSetter): JSX.Element {
    const [inputName, setInputName] = useState<string>('');

    const handleClick = () => {
        onSetName(inputName);
        setInputName('');
    };

    return (
        <div>
            <input 
            type="text"
            placeholder="Enter your name"
            value = {inputName}
            onChange={(e) => setInputName(e.target.value)}
            style={{ marginRight: '8px' }} />

            <button onClick={handleClick} disabled={!inputName.trim()}>
                Set Name
            </button> 
        </div>
    );

};

export default NameSetter;