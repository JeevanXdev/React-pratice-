import type { JSX } from "react";

type Usercardprop = {
    name : string;
    age : number;
    isStudent : boolean;
};

function Usercard({name , age , isStudent} : Usercardprop):JSX.Element{
     return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Status:</strong> {isStudent ? 'Student' : 'Not a Student'}</p>
    </div>
  );
}
export default Usercard;