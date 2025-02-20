import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <nav className="flex justify-between items-center mb-4 border-b pb-2">
                <div className="flex gap-4">
                    <Link href="/" passHref>
                        <Button variant="ghost">Blog</Button>
                    </Link>
                    <Link href="/" passHref>
                        <Button variant="ghost">Portfolio</Button>
                    </Link>
                </div>
                <Link href="/create" passHref>
                    <Button variant="default">Create</Button>
                </Link>
            </nav>
        </div>
    );
}
