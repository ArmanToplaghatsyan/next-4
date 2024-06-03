import SinglePostPage from "@/app/component/SinglePostPage";

export default function SiglePost({params}: any) {
  return (
    <div>
      <h3><SinglePostPage id={params.id}/></h3>
    </div>
  );
}
