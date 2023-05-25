import "../../styles/User.css";
import useDetectDevice from "../../hooks/useDetectDevice";

type Props = {
    users?: object[] | any;
}

function UsersHero({users}: Props): JSX.Element {

    const { isMobile }: any = useDetectDevice();

    return (users.length === 0) ? (
        <div className="container-desktop p-sm">
            <h3 className="font-dark font-rl font-pt">{"No users available"}</h3>
        </div>
    )
    :
    (
        <div className="container-desktop w-100 p-sm">
            <div className={`user-cards-container d-grid ${isMobile ? "" : "grid-2"} gap-sm w-100`}>
                {
                    users?.map((user: object | any) => (
                        <a
                            href="/"
                            key={user.login?.uuid}
                            className="user-card p-sm border-round-sm d-row align-center gap-md"
                        >
                            <img className="user-avatar border-round-full" src={user.picture.large} alt={user.name.first + " " + user.name.last} />
                            <h3 className="font-dark font-sm">{user.name.first} {user.name.last}</h3>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default UsersHero;