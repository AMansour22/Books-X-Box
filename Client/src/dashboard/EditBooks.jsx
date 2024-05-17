import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
    const { id } = useParams();
    const { bookTitle, authorName, category, bookDescription, bookPDFURL, imageURL } = useLoaderData();

    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Biography",
        "Autobiography",
        "History",
        "Self-help",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design"
    ];

    const [selectedBookCategory, setSelectedBookCategory] = useState(category);

    const handleChangeSelectedValue = (event) => {
        setSelectedBookCategory(event.target.value);
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const updatedBook = {
            bookTitle: form.bookTitle.value,
            authorName: form.authorName.value,
            imageURL: form.imageURL.value,
            bookDescription: form.bookDescription.value,
            bookPDFURL: form.bookPDFURL.value,
            category: selectedBookCategory
        };

        //update the book data
        fetch(`http://localhost:5000/book/${id}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updatedBook)
            
        })
        .then(() => {
            alert("Book updated successfully")
        });
    };

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>
            <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                {/* First Row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput
                            id="bookTitle"
                            name='bookTitle'
                            type="text"
                            placeholder="Book Name"
                            required
                            defaultValue={bookTitle}
                        />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput
                            id="authorName"
                            name='authorName'
                            type="text"
                            placeholder="Author Name"
                            required
                            defaultValue={authorName}
                        />
                    </div>
                </div>
                {/* Second Row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book image URL" />
                        </div>
                        <TextInput
                            id="imageURL"
                            name='imageURL'
                            type="text"
                            placeholder="Book image URL"
                            required
                            defaultValue={imageURL}
                        />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="category" value="Book Category" />
                        </div>
                        <select
                            name="categoryName"
                            id="category"
                            className='w-full rounded'
                            value={selectedBookCategory}
                            onChange={handleChangeSelectedValue}
                        >
                            {bookCategories.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* Book Description */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea
                        id="bookDescription"
                        name='bookDescription'
                        placeholder="Write your book description..."
                        required
                        className='w-full'
                        rows={6}
                        defaultValue={bookDescription}
                    />
                </div>
                {/* Book PDF Link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                    </div>
                    <TextInput
                        id="bookPDFURL"
                        name='bookPDFURL'
                        type="text"
                        placeholder="Book PDF URL"
                        defaultValue={bookPDFURL}
                    />
                </div>
                <Button type="submit" className='mt-5'>Update Book</Button>
            </form>
        </div>
    );
};

export default EditBooks;
