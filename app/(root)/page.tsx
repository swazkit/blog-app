// app/(root)/page.tsx
import Image from "next/image";
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";
import { title } from "process";
import { auth } from "@/auth";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 22,
      author: { _id: "1", name: "John Doe" },
      _id: "1",
      description: "This is a sample description",
      title: "Sample Title",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Health"
    },
    {
      _createdAt: new Date(),
      views: 45,
      author: { _id: "2", name: "Jane Smith" },
      _id: "2",
      description: "This is another sample description",
      title: "Another Sample Title",
      image: "https://images.unsplash.com/photo-1539683255143-73a6b838b106?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Tech"
    }
  ]



  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch Your Startup,<br/>Connect With Entrepreneurs</h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>

      <SearchForm query={query} />
    </section>

    <section className="section_container">
      <p className="text-30-semibold"> { query? `Search results for "${query}"` : "All Startups" } </p>

      <ul className="text-black-100 mt-7 card_grid">
        { posts?.length > 0 ? posts.map((post: StartupCardType, index:number) => (
          <StartupCard key={post?._id} post = {post} />
        ) ): (
          <p className="no-results"> No startups found </p>
        )}
      </ul>
    </section>
    </>
  );
}

