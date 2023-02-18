import { useQuery } from "../convex/_generated/react";
import { useMutation } from "../convex/_generated/react";

export default function ContexTest() {
  // data will be `undefined` while the query is first loading
  const data = useQuery("ListCourses");
  const sendMessage = useMutation("SendMessage");
  if (data === undefined) {
    return <div>Loading...</div>;
  }
  const sendHello = () => sendMessage("Hello!", "test", true);
  return (
    <div>
      {data.map((entry) => {
        return <div>{entry.name}</div>;
      })}
      <button onClick={sendHello}>click me!</button>
    </div>
  );
}
