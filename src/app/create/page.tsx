"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePage() {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        content: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting post:", formData);
        // Implement API call to save the post
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    required
                />
                <Input
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                    required
                />
                <Textarea
                    name="content"
                    placeholder="Content"
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Publish</Button>
            </form>
        </div>
    );
}
