import { useParams } from "@solidjs/router";
 
export default function UserPage() {
  const params = useParams();
  return <div> ESTUDIANTE {params.id}</div>;
}