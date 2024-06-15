import Link from "next/link";
import React from "react";

const ReviewsPage = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit
      accusamus voluptate quod cum at distinctio possimus deserunt deleniti?
      Voluptatum, facilis. Et dolor error a recusandae corporis? Aliquam, vitae
      dicta?
      <br />
      <h1>
        {" "}
        <Link href={"/reviews"}>Review Page</Link>
      </h1>
    </div>
  );
};

export default ReviewsPage;
