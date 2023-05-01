import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import About from "./About.tsx";
import BlogList from "./BlogList.tsx";
import Contact from "./Contact.tsx";
import Home from "./Home.tsx";
import Root from "./Root.tsx";
import ErrorPage from "./ErrorPage.tsx";
import "./index.css";
import { aboutData, contactData } from "./constants.ts";

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About data={aboutData} />,
      },
      {
        path: "blog",
        element: <BlogList />,
      },
      {
        path: "contact",
        element: <Contact data={contactData} />,
      },
    ],
  },
]);

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
