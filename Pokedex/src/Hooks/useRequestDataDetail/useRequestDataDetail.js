import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestDataDetail = (url) => {
  const [dataPoke, setdataPoke] = useState();
  const [stats, setstats] = useState();
  const [types, settypes] = useState();
  const [move, setmove] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setdataPoke(res.data);
        setstats(res.data.stats);
        settypes(res.data.types);
        setmove(res.data.moves);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [url]);

  return { dataPoke, stats, types, move };
};


const todo =() =>{}