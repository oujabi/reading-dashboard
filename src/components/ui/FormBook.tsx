import Form from "next/form";

export default function FormBook() {
    return (
        <>
            <div className="flex flex-col h-full w-full rounded-lg bg-sky-100">
                <h1 className="text-xl pl-1 ">New Books</h1>
                <Form action={"/add/book"} className={"flex flex-wrap border w-full h-full p-5 rounded-lg"}>
                    <input className="border p-2 w-50 h-6 rounded-md mr-1" type="text" name="title" placeholder={"Title"} />
                    <input className="border p-2 w-50 h-6 rounded-md mr-1" type="text" name="author" placeholder={"Author"} />
                    <input className="border p-2 w-50 h-6 rounded-md mr-1" type="text" name="genre" placeholder={"genre"} />
                    <input className="border p-2 w-50 h-6 rounded-md mr-1" type="number" name="pages" placeholder={"Pages"} />
                    <input className="border p-2 w-50 h-6 rounded-md mr-1" type="text" name="Isbn" placeholder={"Isbn"} />
                    <input className="border p-2 w-50 h-6 rounded-md mr-1" type="date" name="publicationAt" placeholder={"Date de publication"} />
                    <input className="border p-2 w-50 h-6 rounded-md mr-1" type="date" name="startedAt" placeholder={"Date de commencement de la lecture"} />
                    <input className="border p-2 w-50 h-6 rounded-md mr-1" type="date" name="endedAt" placeholder={"Date de fin de la lecture"} />
                </Form>
            </div>
        </>
    );
};