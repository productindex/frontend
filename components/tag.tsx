import Link from "next/link";
import { useState } from "react";

interface TagProps {
  description: string;
  key: number | string;
}

const Tag: React.FC<TagProps> = ({ description, key, ...props }) => {
  return (
    <div className="tag" key={key}>
      {description}

      <style>{`
        .tag {
          background-color: #F4F4F4;
          width: auto;
          display: inline-block;
          padding: 4px 8px;
          border-radius: 2px;
          letter-spacing: 0.5px;
          font-weight: 500;
          font-size: 0.875rem;
          color: #5c5c5c;
          border: 1.5px solid #E5E9E8;
        }

      `}</style>
    </div>
  );
};

export { Tag };
