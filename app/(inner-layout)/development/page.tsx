import ToastersPlayground from "@/app/(inner-layout)/development/_dev/toasters";
import { Button } from "@/components/ui/button";
import React from "react";

const DevelopmentPage = (): JSX.Element => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-2 flex flex-col gap-4 px-4">
      <ToastersPlayground />
      <div className="bg-secondary text-secondary-foreground p-4 rounded-lg flex flex-col gap-2">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          delectus recusandae. Distinctio rerum earum numquam debitis itaque cum
          quos quibusdam dolores hic, sapiente excepturi voluptate nihil fuga
          corrupti ullam nobis?
        </span>
        <Button disabled className="w-fit self-end" size={"sm"}>
          Lorem
        </Button>
      </div>
    </div>
  );
};

export default DevelopmentPage;
