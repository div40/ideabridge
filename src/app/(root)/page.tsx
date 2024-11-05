import IdeaCard from "@/components/IdeaCard";
import SearchForm from "@/components/SearchForm";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      createdAt: new Date(),
      views: 100,
      author: {
        _id: 1,
        name: "Mister Author",
      },
      _id: 1,
      description: "Random description",
      image:
        "https://plus.unsplash.com/premium_photo-1674078693346-dbdfeac90189?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFuaW1lfGVufDB8fDB8fHww",
      category: "Frontend",
      title: "Frontend development",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your idea, <br /> Connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas and Get Noticed</p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Ideas`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: IdeaCardType) => (
              <IdeaCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">Nothing found...</p>
          )}
        </ul>
      </section>
    </>
  );
}
