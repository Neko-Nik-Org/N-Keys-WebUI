import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LazyWrapper from "@/components/common/LazyWrapper";

const PublicLayout = lazy(() => import("@/layouts/PublicLayout"));
const HomePage = lazy(() => import("@/pages/public/home"));
const WaitlistPage = lazy(() => import("@/pages/public/waitlist"));
const FeaturesPage = lazy(() => import("@/pages/public/feature"));
const RoadmapPage = lazy(() => import("@/pages/public/roadmap"));
const PricingPage = lazy(() => import("@/pages/public/pricing"));
const ContactPage = lazy(() => import("@/pages/public/contact"));
const HiringPage = lazy(() => import("@/pages/public/hiring"));
const DocsPage = lazy(() => import("@/pages/public/docs"));

const NotFoundPage = lazy(() => import("@/components/common/NotFoundPage"));
const ErrorPage = lazy(() => import("@/components/common/ErrorPage"));

const Router = [
    {
        path: "/",
        element: <PublicLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <LazyWrapper><HomePage /></LazyWrapper> },
            { path: "waitlist", element: <LazyWrapper><WaitlistPage /></LazyWrapper> },
            { path: "features", element: <LazyWrapper><FeaturesPage /></LazyWrapper> },
            { path: "roadmap", element: <LazyWrapper><RoadmapPage /></LazyWrapper> },
            { path: "pricing", element: <LazyWrapper><PricingPage /></LazyWrapper> },
            { path: "contact", element: <LazyWrapper><ContactPage /></LazyWrapper> },
            { path: "hiring", element: <LazyWrapper><HiringPage /></LazyWrapper> },
            { path: "docs", element: <LazyWrapper><DocsPage /></LazyWrapper> },
            { path: "docs/:slug", element: <LazyWrapper><DocsPage /></LazyWrapper> },
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
]


const router = createBrowserRouter(Router, { basename: "/" });

export default router;