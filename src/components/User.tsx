import { useState } from "react";

type Person = {
    name: string;
    isMale: boolean;
    age: number;
}

function User(): JSX.Element {

  const [user, setUser] = useState<Person>({ name: "", isMale: true, age: 0});

  function HandleSetUser() {
    setUser({ name: "Add a name as you wish", isMale: true, age: 0})
  }
    return (
        <div className="container">
            <div className="caption">
                <h1>Username: {user.name}</h1>
                <h1>User age: {(user.age as number) > 0 && user.age}</h1>
            </div>
            <div>
            <button
                onClick={HandleSetUser}
                style={{padding: 16}}
            >
                Set Random User
            </button>
            {
                user.name as string &&
                <span>
                <button
                    style={{padding: 16}}
                    onClick={() => setUser({...user, ...{age: 45}})}
                >
                    Set User Age
                </button>
                <button
                    style={{padding: 16}}
                    onClick={() => setUser({} as Person)}
                >
                    Delete User
                </button>
                </span>
            }
            </div>
        </div>
    )
}

export default User;