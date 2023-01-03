import * as React from "react"
import {
    ChakraProvider,
    theme,
} from "@chakra-ui/react"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },

]);
export const App = () => (
    <ChakraProvider theme={theme}>
        {/*<h1>Hello world</h1>*/}
        <RouterProvider router={router}/>
    </ChakraProvider>
)
