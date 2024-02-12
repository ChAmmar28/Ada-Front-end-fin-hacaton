import { useEffect } from "react";

import { IVacancyData } from "../../types/IVacancyData";

import cls from "../../styles/VacancyList.module.scss";

function VacancyList() {
  useEffect(() => {
    // const dbref = ref(getDatabase(app));
    // get(child(dbref, "/anime_merchandise/"))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       GetData(snapshot.val());
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  return (
    <ul className={cls.VacancyList}>
      {/* {dataArray &&
        dataArray.map((item) => <Cards key={item.id} data={item} />)} */}
    </ul>
  );
}

export default VacancyList;
