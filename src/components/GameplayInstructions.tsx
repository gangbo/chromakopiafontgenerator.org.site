import {PuzzleIcon} from "lucide-react";

interface GameplayInstructionsProps {
    title: string;
    instructions: string[];
}

export default function GameplayInstructions({ title, instructions }: GameplayInstructionsProps) {
    return (
        <section className="py-5">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <PuzzleIcon className="mr-2 text-green-500"/>
                    {title}
                </h2>
                <ol className="list-decimal list-inside space-y-2">
                    {instructions.map((instruction, index) => (
                        <li key={index} className="text-lg">{instruction}</li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
