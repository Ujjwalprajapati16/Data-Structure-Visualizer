import React from "react";
import DataNode from "../DataNode";
import Arrow from "../Arrow";

const PopFront = ({
  initiate = (f) => f,
  object,
  params = [],
  duration = 1,
  stop = false,
}) => {
  const list = object;
  let itr = list.begin();
  const express = [];
  const width = 65;
  const interval = 20;
  const shownodenum = 9;
  let keyid = 1;

  // execute next code
  if (!stop) {
    initiate(duration * 2 * 1000);
  }

  let count = list.size() > shownodenum ? shownodenum : list.size();
  if (count > 1) {
    express.push(
      <text key={keyid} x={interval} y={40} width={30} height={15}>
        Front
      </text>
    );
    keyid += 1;
    express.push(
      <text key={keyid} x={interval} y={130} width={30} height={15}>
        Return: true
      </text>
    );
    keyid += 1;
    express.push(
      <text
        key={keyid}
        className="pqPopSizeErase animate-ListPopFrontCameOut"
        style={{ animationDuration: `${duration * 2}s` }}
        x={interval}
        y={20}
        width={30}
        height={15}
      >
        size: {list.size()}
      </text>
    );
    keyid += 1;
    express.push(
      <text
        key={keyid}
        className="pqPopSizeEmerge animate-ListPopFrontCameOut"
        style={{ animationDuration: `${duration * 2}s` }}
        x={interval}
        y={20}
        width={30}
        height={15}
      >
        size: {list.size() - 1}
      </text>
    );
    keyid += 1;
  } else if (count === 1) {
    express.push(
      <text
        key={keyid}
        className="disappear animate-ListPopFrontMove"
        style={{ animationDuration: `${duration}s` }}
        x={interval}
        y={40}
        width={30}
        height={15}
      >
        Front
      </text>
    );
    keyid += 1;
    express.push(
      <text key={keyid} x={interval} y={130} width={30} height={15}>
        Return: true
      </text>
    );
    keyid += 1;
    express.push(
      <text
        key={keyid}
        className="pqPopSizeErase animate-ListPopFrontCameOut"
        style={{ animationDuration: `${duration * 2}s` }}
        x={interval}
        y={20}
        width={30}
        height={15}
      >
        size: {list.size()}
      </text>
    );
    keyid += 1;
    express.push(
      <text
        key={keyid}
        className="pqPopSizeEmerge animate-ListPopFrontCameOut"
        style={{ animationDuration: `${duration * 2}s` }}
        x={interval}
        y={20}
        width={30}
        height={15}
      >
        size: {list.size() - 1}
      </text>
    );
    keyid += 1;
  } else {
    express.push(
      <text key={keyid} x={interval} y={40} width={30} height={15}>
        Error: No Data to eliminate
      </text>
    );
    keyid += 1;
    express.push(
      <text key={keyid} x={interval} y={130} width={30} height={15}>
        Return: false
      </text>
    );
    keyid += 1;
    express.push(
      <text key={keyid} x={interval} y={20} width={30} height={15}>
        size: {list.size()}
      </text>
    );
    keyid += 1;
  }

  // draw node
  let dataitr = 1;
  while (itr !== list.end() && count >= dataitr) {
    const data = itr.getData();
    if (dataitr === 1) {
      DataNode({
        key: keyid,
        ani_delay: "0s",
        ani_dur: `${duration}s`,
        className: "disappear animate-ListPopFrontMove",
        data: data.toString(),
        x: interval * dataitr + width * (dataitr - 1),
        y: 50,
        width: width,
      }).map((n) => express.push(n));
      keyid += 1;
    } else {
      DataNode({
        key: keyid,
        ani_delay: `${duration}s`,
        ani_dur: `${duration}s`,
        className: "listPopFrontOrigin",
        data: data.toString(),
        x: interval * dataitr + width * (dataitr - 1),
        y: 50,
        width: width,
      }).map((n) => express.push(n));
      keyid += 1;
    }
    dataitr += 1;
    itr = itr.getNext();
  }

  // draw arrow
  count = list.size() > shownodenum ? shownodenum : list.size();
  for (let i = 1; i < count; i += 1) {
    if (i === 1) {
      Arrow(
        interval * i + width * i,
        70,
        interval * (i + 1) + width * i,
        70,
        "disappear animate-ListPopFrontMove",
        keyid
      ).map((n) => express.push(n));
      keyid += 1;
      Arrow(
        interval * (i + 1) + width * i,
        80,
        interval * i + width * i,
        80,
        "disappear animate-ListPopFrontMove",
        keyid
      ).map((n) => express.push(n));
      keyid += 1;
    } else {
      Arrow(
        interval * i + width * i,
        70,
        interval * (i + 1) + width * i,
        70,
        "listPopFrontOrigin",
        keyid,
        `${duration}s`,
        `${duration}s`
      ).map((n) => express.push(n));
      keyid += 1;
      Arrow(
        interval * (i + 1) + width * i,
        80,
        interval * i + width * i,
        80,
        "listPopFrontOrigin",
        keyid,
        `${duration}s`,
        `${duration}s`
      ).map((n) => express.push(n));
      keyid += 1;
    }
  }

  return (
    <svg className="w-full h-full">
      {express}
      <style>
        {`
          @keyframes ListPopFrontMove {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-85px);
            }
          }

          @keyframes ListPopFrontCameOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          .disappear {
            opacity: 0;
          }

          .listPopFrontOrigin {
            animation-name: ListPopFrontMove;
            animation-fill-mode: forwards;
          }

          .animate-ListPopFrontMove {
            animation-name: ListPopFrontMove;
            animation-fill-mode: forwards;
          }

          .animate-ListPopFrontCameOut {
            animation-name: ListPopFrontCameOut;
            animation-duration: ${duration * 2}s;
            animation-fill-mode: forwards;
          }
        `}
      </style>
    </svg>
  );
};

export default PopFront;
