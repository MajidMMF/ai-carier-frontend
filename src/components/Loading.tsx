const Loading = () => {
    return (
        <div className="bg-page flex items-center justify-center min-h-screen">
            
            <div className="flex flex-col items-center gap-5">
                
                <div className="relative w-14 h-14">
                    
                    <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20"></div>

                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 border-r-emerald-400 animate-spin"></div>

                    <div className="absolute inset-0 rounded-full blur-md bg-indigo-500/20"></div>

                </div>

                <p className="text-white/40 text-xs tracking-widest uppercase animate-pulse">
                    Loading...
                </p>

            </div>
        </div>
    )
}

export default Loading