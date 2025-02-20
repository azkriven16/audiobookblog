"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@/types/index";
import { Calendar, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogCard(blog: BlogPost) {
    const router = useRouter();

    return (
        <Card
            className="flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            onClick={() => router.push(`/blog/${blog.id}`)}
        >
            <CardHeader>
                <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-sm">
                        {blog.category.toUpperCase()}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Eye className="w-4 h-4 mr-1" />
                        {blog.views.toLocaleString()}
                    </div>
                </div>
                <CardTitle className="text-xl line-clamp-2 hover:text-primary">
                    {blog.title}
                </CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-muted-foreground line-clamp-2">
                    {blog.excerpt}
                </p>
            </CardContent>

            <CardFooter className="mt-auto">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-3">
                        <Avatar>
                            <AvatarImage
                                src={blog.author.avatar}
                                alt={blog.author.name}
                            />
                            <AvatarFallback>
                                {blog.author.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium">
                                {blog.author.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {blog.author.role}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(blog.date)}
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
