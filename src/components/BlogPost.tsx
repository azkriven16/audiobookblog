"use client";

import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
    {
        id: 1,
        title: "Pokémon Eternal Shadows: A Dark New Adventure",
        date: "2025-02-10",
        category: "ROM Hack Spotlight",
        views: 3200,
        author: {
            name: "TrainerX",
            avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
            role: "ROM Hack Reviewer",
        },
        excerpt:
            "Pokémon Eternal Shadows brings a brand-new region, a darker storyline, and Shadow Pokémon mechanics...",
        content:
            "In Pokémon Eternal Shadows, players explore the mysterious Eclipse Region, where Team Umbra seeks to harness the power of Shadow Pokémon for their own sinister goals. With an engaging storyline, new Fakémon, and a revamped battle system, this ROM hack brings an exciting twist to the classic Pokémon formula. Features include a dynamic day-night cycle, Mega Evolutions, and new regional variants. Fans of deep storytelling and challenging battles will find themselves immersed in this epic adventure!",
    },
    {
        id: 2,
        title: "Top 5 Pokémon ROM Hacks You Should Play in 2025",
        date: "2025-01-28",
        category: "Top Lists",
        views: 5100,
        author: {
            name: "HackMasterJoe",
            avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c72c1?w=100&h=100&fit=crop",
            role: "Pokémon ROM Expert",
        },
        excerpt:
            "Want to experience the best fan-made Pokémon adventures? Check out our list of must-play ROM hacks this year!",
        content:
            "Pokémon ROM hacks continue to push the boundaries of creativity and innovation. In 2025, we've seen some of the most ambitious projects yet! Here are our top five picks: \n\n1. **Pokémon Unbound** – A feature-packed hack with deep storytelling and modern mechanics. \n2. **Pokémon Radical Red** – The ultimate challenge for hardcore fans. \n3. **Pokémon Gaia** – A beautifully crafted adventure with a rich lore. \n4. **Pokémon Fusion 3** – A unique game with creative Pokémon fusions. \n5. **Pokémon Sors** – A dark, lore-driven adventure with custom mechanics. \n\nEach of these hacks offers something special, whether it's difficulty, creativity, or nostalgia!",
    },
    {
        id: 3,
        title: "How to Patch and Play Pokémon ROM Hacks",
        date: "2025-02-05",
        category: "Guides",
        views: 2500,
        author: {
            name: "PokeHacker99",
            avatar: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?w=100&h=100&fit=crop",
            role: "ROM Hacking Enthusiast",
        },
        excerpt:
            "New to ROM hacking? Here's a step-by-step guide on how to patch and play Pokémon fan games...",
        content:
            "If you're new to Pokémon ROM hacks, getting started might seem overwhelming. But don't worry! Here's a simple guide:\n\n1. **Get a Base ROM** – Most hacks require a clean Pokémon FireRed or Emerald ROM.\n2. **Download a Patching Tool** – Use tools like Lunar IPS or Flips to apply the patch.\n3. **Apply the Patch** – Open your patching tool, select the base ROM and the hack patch, then apply!\n4. **Play on an Emulator** – Use VBA-M or MyBoy! to run the patched game.\n\nWith these simple steps, you'll be diving into the world of fan-made Pokémon adventures in no time!",
    },
    {
        id: 4,
        title: "Exclusive Interview: The Creators of Pokémon Infinity",
        date: "2025-02-18",
        category: "Interviews",
        views: 1800,
        author: {
            name: "PixelMonDev",
            avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop",
            role: "ROM Hack Journalist",
        },
        excerpt:
            "We sat down with the minds behind Pokémon Infinity to talk about development, challenges, and future plans...",
        content:
            "Pokémon Infinity has taken the ROM hacking community by storm with its stunning pixel art and deep lore. In an exclusive interview, we spoke with the game's lead developer, Alex 'InfinityHack' Johnson. \n\n'Our goal was to create a game that felt like a true Pokémon experience but with a fresh, modern twist. We focused on deep world-building, character-driven storytelling, and quality-of-life improvements that enhance gameplay.'\n\nThe game introduces a time-travel mechanic, allowing players to explore different eras of Pokémon history. It also features voice-acted cutscenes, a first for Pokémon ROM hacks. When asked about future updates, the team teased an upcoming expansion that will introduce new legendary Pokémon and side quests!",
    },
];

const BlogPost = ({ post, onBack }) => {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Button
                variant="ghost"
                className="mb-6 flex items-center gap-2"
                onClick={onBack}
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
};

const BlogListing = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="min-h-screen bg-background">
            {selectedPost ? (
                <BlogPost
                    post={selectedPost}
                    onBack={() => setSelectedPost(null)}
                />
            ) : (
                <div className="max-w-6xl mx-auto p-6 space-y-6">
                    <h1 className="text-4xl font-bold mb-8">
                        Pokémon ROM Hack Blog
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogs.map((blog) => (
                            <Card
                                key={blog.id}
                                className="flex flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                                onClick={() => setSelectedPost(blog)}
                            >
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge
                                            variant="secondary"
                                            className="text-sm"
                                        >
                                            {blog.category}
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
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogListing;
