import './App.css';
// import AboutUs from './pages/aboutUs/AboutUs';
// import UsersPage from './pages/usersPage/UsersPage';
// import BlogPage from "./pages/blogPage/BlogPage";
import ClassPage from "./pages/classPage/ClassPage";
import PageClass from "./pages/classPage/PageClass";



function App() {
    const product = {
        name: "Спорт клуб A-2",
        address: "Ахунбаева 24",
        number: "+996500124310"
    }

    return (
        <div className="container">
            {/*App js*/}
            {/*<UsersPage/>*/}
            {/*<BlogPage/>*/}
            {/*<mainPage/>  */}
            {/*<AboutUs text="There You can show information about our company" product={product}/>*/}
            <ClassPage/>
            <PageClass/>

        </div>
);
}

export default App;