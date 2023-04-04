"use client";

import { useRouter } from "next/navigation";

type Props = {
  id: string;
  children: React.ReactNode;
};

export const Item = ({ children, id }: Props) => {
  const router = useRouter();
  const onClick = async () => {
    await fetch("/api/items/" + id, {
      method: "DELETE",
    });

    // so far it's the only way to refresh the data on the server components
    router.refresh();
  };

  return (
    <li>
      <span>{children} - </span>
      <button onClick={onClick}>delete item</button>
    </li>
  );
};
