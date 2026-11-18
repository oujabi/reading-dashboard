export default async function SingleBookPage({params}: {params:Promise<{ bookname: string }>}) {
    const { bookname } = await params;

    return (
        <main>
            Single book page : { bookname }
        </main>
    )
}