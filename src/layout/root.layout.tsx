import { Outlet } from "react-router-dom";

function RootLayout() {
    return (  
        <main className="container">
            <Outlet/>
            {/* inside this main tag is where all the compoenents are going to go in our project */}
        </main>
    );
}

export default RootLayout;