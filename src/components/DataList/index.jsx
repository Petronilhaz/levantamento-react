import { useContext, useState } from "react";
import { FormContext } from "../../context/context";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataList = () => {
  const { formData } = useContext(FormContext);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
  const objKeys = [];

    if (formData[0] !== undefined) {
      objKeys.push(Object.keys(formData[0]));
    }

    if(columns.length > 0){
      return
      
    }else if (objKeys[0] !== undefined && objKeys[0] !== null) {
        for (let index = 0; index < objKeys[0].length; index++) {
          setColumns((prevState)=>[...prevState,
            {
              field: objKeys[0][index],
              headerName: objKeys[0][index],
              width: 186,
              headerAlign: "center",
              headerClassName: "super-app-theme--header",
              cellClassName: 'super-app-theme--cell',
              align: "center",
            },
          ]);
        }
      }
  }, [formData, columns]);

  function gerarId() {
    return Math.random();
  }

  return (
    <>
      {formData.length > 0 ? (
        <DataGrid rows={formData} getRowId={gerarId} columns={columns} 
        sx={{
          margin: "20px auto 0",
          border: "1px solid black",
          width: "fit-content",

          '& .super-app-theme--header': {
            fontSize: "16px",
            border: "1px solid black",
            borderBottom: "3px solid black",

          },
          '& .super-app-theme--cell': {
            border: "0.5px solid black",
            fontSize: "15px",
            ":nth-of-type(1n + 1)": {
              
            },
            ":nth-last-of-type(2)": {
              borderRight: "1px solid black"
            }
            
          }
        }}
        />
      ) : (
        null
      )}
    </>
  );
};

export { DataList };
