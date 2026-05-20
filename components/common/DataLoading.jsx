
const DataLoading = ({ content = "Loading...", className = "" }) => {
    return (
        <div
            className={`w-full h-full flex flex-col justify-center items-center space-y-4 ${className}`}
        >
            <div className="relative">
                <div className="w-16 h-16 border-4 border-primary/20 rounded-full absolute"></div>
                <div className="w-16 h-16 border-t-4 border-primary animate-spin rounded-full"></div>
            </div>
            <p className="text-base text-muted-foreground font-medium tracking-wide">
                {content}
            </p>
        </div>
    );
};

export default DataLoading;