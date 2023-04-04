"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  items: number;
};

export const Add = ({ items = 0 }: Props) => {
  const router = useRouter();
  const [text, setText] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText("");
    await fetch("/api/items", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    // so far it's the only way to refresh the data on the server components
    router.refresh();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          autoComplete="off"
          value={text}
          name="add"
          onChange={onChange}
          placeholder="type something and press enter"
        />
      </form>
      <p>Total: {items} items</p>
    </>
  );
};
