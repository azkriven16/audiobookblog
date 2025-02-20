"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

import blogs from "../../../../data/blogs.json";

export default function BlogInfoPage() {
    const router = useRouter();

    const post = blogs.find((blog) => blog.id === 1)!;

    return (
        <div className="max-w-6xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Button
                variant="ghost"
                className="mb-6 flex items-center gap-2"
                onClick={() => router.back()}
            >
                <ArrowLeft className="w-4 h-4" /> Back to Posts
            </Button>

            <article className="space-y-6">
                <div className="space-y-4">
                    <Badge variant="secondary" className="text-sm">
                        {post.category}
                    </Badge>

                    <h1 className="text-4xl font-bold">{post.title}</h1>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Avatar>
                                <AvatarImage
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                />
                                <AvatarFallback>
                                    {post.author.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">
                                    {post.author.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {post.author.role}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {formatDate(post.date)}
                            </div>
                            <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {post.views.toLocaleString()} views
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    {post.content.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </article>
        </div>
    );
}
