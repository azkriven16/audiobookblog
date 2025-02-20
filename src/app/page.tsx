import BlogCard from "@/components/BlogCard";
import BlogCategories from "@/components/BlogCategories";
import blogs from "../../data/blogs.json";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const blogCategory = await searchParams;

    const filteredBlogs = blogs.filter((blog) => {
        if (blogCategory.category) {
            return blog.category.toLocaleLowerCase() === blogCategory.category;
        }
        return blog;
    });

    return (
        <main className="max-w-6xl mx-auto p-6 space-y-6">
            <h1 className="font-black text-3xl">Audiobook Blogs</h1>
            <BlogCategories category={blogCategory.category as string} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredBlogs.map((blog) => (
                    <BlogCard {...blog} key={blog.id} />
                ))}
            </div>
        </main>
    );
}
