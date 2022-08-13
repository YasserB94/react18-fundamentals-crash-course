import { useState } from "react";

export const PostForm = () => {
  const [userID, setUserID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: crypto.randomUUID(),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.table(json));
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="body">Body: </label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button type="submit">Post!</button>
    </form>
  );
};
