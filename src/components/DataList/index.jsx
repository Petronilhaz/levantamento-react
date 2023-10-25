import { useContext, useState } from "react";
import { FormContext } from "../../context/context";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataList = () => {
  const { formData, setFormData } = useContext(FormContext);
  const objKeys = [];
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (formData[0] !== undefined) {
      console.log("Log do FormData: ", formData);
      objKeys.push(Object.keys(formData[0]));
    }

    if(columns.length > 0){
      return
      
    }else if (objKeys[0] !== undefined && objKeys[0] !== null) {
        console.log("Não ta vazio");
        for (let index = 0; index < objKeys[0].length; index++) {
          setColumns((prevState)=>[...prevState,
            {
              field: objKeys[0][index],
              headerName: objKeys[0][index],
              width: 150,
            },
          ]);
        }
      }
    

    console.log(
      "FormData: ",
      formData,
      "ObjectKeys: ",
      objKeys[0],
      "columns: ",
      columns
    );
  }, [formData, objKeys, columns]);

  function gerarId() {
    return Math.random();
  }

  return (
    <>
      <p>DataList</p>
      {formData.length > 0 ? (
        <DataGrid rows={formData} getRowId={gerarId} columns={columns} />
      ) : (
        <p>Error</p>
      )}
    </>
  );
};

export { DataList };

// <DataGrid
//         rows={FormData}
//         columns={columns}
//         />
