import BlogCard from "@/components/BlogCard";
import blogs from "../../data/blogs.json";
export default function Home() {
    return (
        <main className="max-w-6xl mx-auto p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                    <BlogCard {...blog} key={blog.id} />
                ))}
            </div>
        </main>
    );
}
