import React from "react";
import Change from "../Change/Change";
import "./Chunk.css";

export default function Chunk({ baseKey, content, changes }) {
  return (
    <div className="chunk">
      <p className="chunk__content">{content}</p>
      {changes.map(({ type, ln1, ln2, ln, content }) => {
        const key = `${baseKey}-${type}-${
          type === "normal" ? `${ln1}-${ln2}` : ln
        }`;
        return (
          <Change
            key={key}
            baseKey={key}
            {...{ type, ln1, ln2, ln, content }}
          />
        );
      })}
    </div>
  );
}
