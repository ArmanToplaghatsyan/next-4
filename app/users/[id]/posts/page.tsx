import GetPostByUser from "@/app/component/GetPostByUserPostPage";

export default function UserPost({params}:any) {
  return (
    <div>
      <h2><GetPostByUser userId={params.id}/></h2>
    </div>
  );
}
