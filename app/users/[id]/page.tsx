import SingleUserPage from "@/app/component/SingleUserPage";

export default function SingleUser({params}:any) {
  return (
    <div>
      <SingleUserPage id={params.id}/>
    </div>
  );
}
