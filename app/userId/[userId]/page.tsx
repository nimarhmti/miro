import React from "react";
interface userIdPageParams {
  params: {
    userId: string;
  };
}
export default function page({ params }: userIdPageParams) {
  return <div>user id is:{params.userId}</div>;
}
