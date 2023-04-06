import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";
import * as uuid from "uuid";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: Table.Notes.tableName,
    Item: {
      userId: "123",
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});
