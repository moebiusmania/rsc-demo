import { PrismaClient } from "@prisma/client";
import { Add } from "@/app/components/client/Add";
import { Item } from "@/app/components/client/Item";

type Item = {
  id: string;
  text: string;
};

const prisma = new PrismaClient();

export default async function List(): Promise<JSX.Element> {
  // I'm using prisma client, it could be a direct SQL query or whatever
  const items: Array<Item> = await prisma.item.findMany();

  return (
    <>
      <h2>server component embedding a client component</h2>
      <Add items={items.length} />
      <h3>List as a Server component</h3>
      <ul>
        {items?.length > 0 ? (
          items.map((item) => (
            <li key={item.id} id={item.id}>
              {item.text}
            </li>
          ))
        ) : (
          <p>no items here</p>
        )}
      </ul>
      <h3>List as mixed Server + Client components</h3>
      <ul>
        {items?.length > 0 ? (
          items.map((item) => (
            <Item key={item.id} id={item.id}>
              {item.text}
            </Item>
          ))
        ) : (
          <p>no items here</p>
        )}
      </ul>
    </>
  );
}
