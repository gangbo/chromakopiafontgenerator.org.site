import {Gamepad2} from "lucide-react";

interface GameFeaturesProps {
    title: string;
    features: string[];
}

export default function GameFeatures({ title, features }: GameFeaturesProps) {
    return (
        <section className="py-6 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Gamepad2 className="mr-2 text-blue-500"/>{ title}
                </h2>
                <ul className="list-disc list-inside space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="text-lg">{feature}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
