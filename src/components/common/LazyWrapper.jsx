import { Suspense } from "react";
import DataLoading from "./DataLoading";

const LazyWrapper = ({ children }) => (
    <Suspense
        fallback={
            <div className="flex min-h-screen items-center justify-center">
                <DataLoading content="Loading..." />
            </div>
        }
    >
        {children}
    </Suspense>
);

export default LazyWrapper;
