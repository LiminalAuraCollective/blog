import AnchorLink from "@/components/ui/anchor-link";
import MindsList from "@/components/ui/minds-list";
import PostList from "@/components/ui/post-list";

function TitleElement({ text }: { text: string }) {
  return <h1 className="mb-4 font-bold text-lg"># {text}</h1>;
}

function AllListElement({ text, url }: { text: string; url: string }) {
  return (
    <ul className="latest-post-list list-none!">
      <li>
        <AnchorLink href={url}>{text}...</AnchorLink>
      </li>
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <section>
        <TitleElement text="近期文章" />
        <PostList count={10} />
        <AllListElement text="所有文章" url="/posts" />
      </section>
      <section>
        <TitleElement text="有话要说" />
        <MindsList count={10} />
        <AllListElement text="所有说要" url="/speak-mind" />
      </section>
    </>
  );
}
