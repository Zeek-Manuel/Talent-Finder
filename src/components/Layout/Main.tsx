import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Main(): JSX.Element {

  // const [usersData] = useState<object[]>(Object(Users[0]).results)
  // const [getUsersFromLocalStorage, setGetUsersFromLocalStorage] = useState<object[]>([])

  // useEffect(() => {
  //   const getUsersData = localStorage.getItem("users")

  //   if(getUsersData === null || getUsersData === undefined) {
  //     localStorage.setItem("users", JSON.stringify(usersData))
  //   }
  //   else {
  //     const users: string | null = localStorage.getItem("users");
  //     setGetUsersFromLocalStorage(JSON.parse(users as string))
  //   }


  // }, [])

  return (
    <>
      <Header />
      <main className="f-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Main;
