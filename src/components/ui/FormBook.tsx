import Form from "next/form";

export default function FormBook() {
    return (
        <>
            <div className="flex flex-col h-full w-full rounded-lg bg-sky-100">
                <h1 className="text-xl pl-1 ">New Books</h1>
                <Form action={"/add/book"} className={"flex flex-wrap border w-full h-full p-5 rounded-lg"}>
                    <div className="flex flex-col">
                        <label htmlFor="title">Title</label>
                        <input className="border p-2 w-50 h-6 rounded-md mr-1" type="text" name="title" placeholder={"The witcher"} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="author">Author</label>
                        <input className="border p-2 w-50 h-6 rounded-md mr-1" type="text" name="author" placeholder={"Tolkien"} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="genre">Genre</label>
                        <input className="border p-2 w-50 h-6 rounded-md mr-1" type="text" name="genre" placeholder={"Fantasy"} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="pages">Pages</label>
                        <input className="border p-2 w-50 h-6 rounded-md mr-1" type="number" name="pages" placeholder={"380"} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Isbn">Isbn</label>
                        <input className="border p-2 w-50 h-6 rounded-md mr-1" type="text" name="Isbn" placeholder={"135422-241-bn"} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="publicationAt">Publication Date</label>
                        <input className="border p-2 w-50 h-6 rounded-md mr-1" type="date" name="publicationAt" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="startedAt">Started At</label>
                        <input className="border p-2 w-50 h-6 rounded-md mr-1" type="date" name="startedAt" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="endedAt">Ended At</label>
                        <input className="border p-2 w-50 h-6 rounded-md mr-1" type="date" name="endedAt" />
                    </div>

                </Form>
            </div>
        </>
    );
};