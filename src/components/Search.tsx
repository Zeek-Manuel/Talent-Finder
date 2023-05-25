import SearchIcon from "../assets/Icons/Search";
import useDetectDevice from "../hooks/useDetectDevice";
// import { useState } from "react";
import "../styles/Search.css";

// type Props<AO = object[]> = {
//     usersData?: AO
// }

function Search(): JSX.Element {

    // const [searchInput, setSearchInput] = useState<string>("");
    // const [userSearchResult, setUserSearchResult] = useState<typeof usersData>([] as (typeof usersData))

//     function HandleChange<E extends React.ChangeEvent<HTMLInputElement>>(e: E): void {
//         setSearchInput(e.target.value);

//         const typedWord = e.target.value;
// //
//         // const userSearchResults = usersData?.filter(
//         //     (user: object) => Object(user).name.first.toLowerCase().includes(typedWord.toLowerCase()) || Object(user).name.last.toLowerCase().includes(typedWord.toLowerCase())
//         // );

//         // setUserSearchResult(userSearchResults);
//     }

    // function HandleSubmit<E extends React.FormEvent>(e: E): void {
    //     e.preventDefault();

    //     const userSearchResults = usersData?.filter(
    //         (user: object) => Object(user).name.first.toLowerCase() === searchInput.toLowerCase() || Object(user).name.last.toLowerCase() === searchInput.toLowerCase()
    //     );

    //     setUserSearchResult(userSearchResults);
    // }

    // function checkSearchResults() {
    //     setSearchInput("");
    // }

    const { isMobile }  = useDetectDevice();
    return (
        <div className="form-container w-100">
            <form
                className="d-flex align-center w-100"
            >
                <div className="form-control d-row align-center w-100">
                    <div className="search-button-control">
                        <button
                            type="submit"
                            // onClick={HandleSubmit}
                        >
                            <SearchIcon width={isMobile ? 20 : 25} height={isMobile ? 20 : 25} fill={"var(--secondary-color)"} />
                        </button>
                    </div>
                    <input
                        type="text"
                        className="search-input w-100 font-md"
                        placeholder={"Search now..."}
                        // value={searchInput}
                        // onChange={HandleChange}
                    />
                </div>
            </form>
        </div>
        // {/* <UsersHero users={userSearchResult} /> */}
    )
}

export default Search;