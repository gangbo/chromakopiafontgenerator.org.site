interface GameScreenshotsProps {
    title: string;
    icon: React.ReactNode;
    screenshots: string[];
}

export default function GameScreenshots({title, icon, screenshots}: GameScreenshotsProps) {
    return (
        <section className="py-3 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8 flex items-center">
                    {icon}
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {screenshots.map((screenshot, index) => (
                        <img key={index}
                             src={screenshot}
                             alt={`game screen ${index + 1}`}
                             width={500}
                             className="h-auto rounded-lg shadow-md"/>
                    ))}
                </div>
            </div>
        </section>
    );
}
