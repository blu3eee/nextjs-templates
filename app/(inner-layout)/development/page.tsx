import ToastersPlaygroud from "@/components/dev/toasters";
import React from "react";

const DevelopmentPage = (): JSX.Element => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-2 flex flex-col gap-4 px-4">
      <ToastersPlaygroud />
      <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        delectus recusandae. Distinctio rerum earum numquam debitis itaque cum
        quos quibusdam dolores hic, sapiente excepturi voluptate nihil fuga
        corrupti ullam nobis?
      </div>
    </div>
  );
};

export default DevelopmentPage;
