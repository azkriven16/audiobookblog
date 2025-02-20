import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories = [
    { id: 1, name: "All", slug: "" },
    { id: 2, name: "Fantasy", slug: "fantasy" },
    { id: 3, name: "Science Fiction", slug: "science-fiction" },
    { id: 4, name: "Mystery & Thriller", slug: "mystery-thriller" },
    { id: 5, name: "Romance", slug: "romance" },
    { id: 6, name: "Non-Fiction", slug: "non-fiction" },
    { id: 7, name: "Self-Help", slug: "self-help" },
    { id: 8, name: "Horror", slug: "horror" },
];

export default function Categories(blogCategory: { category: string }) {
    return (
        <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={`?category=${category.slug}`}
                    passHref
                >
                    <Button
                        variant={
                            blogCategory.category === category.slug
                                ? "default"
                                : "outline"
                        }
                    >
                        {category.name}
                    </Button>
                </Link>
            ))}
        </div>
    );
}
