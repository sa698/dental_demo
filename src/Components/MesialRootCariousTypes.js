import React, { useEffect, useState } from "react";

function MesialRootCariousTypes(props) {
  const [isToothSelected, setIsToothSelected] = useState(false);
  const [isRootSelected, setIsRootSelected] = useState(false);
  useEffect(() => {
    let value = props.selectedValues.some((item) => item.includes("Tooth"));
    let value2 = props.selectedValues.some((item) => item.includes("Root"));
    setIsToothSelected(value);
    setIsRootSelected(value2);
  }, [props.selectedValues]);

  console.log(props.selectedValues);
  console.log(props.rootSelect);
  return (
    <div
      style={{
        // background: "#f7fafa",
        padding: "0px",
      }}
    >
      <p
        style={{
          marginTop: "10px",
          marginLeft: "50px",
          textAlign: "center",  
          fontSize: "24px",  
          fontWeight: "bold",  
          color: "#1f556e", 
          backgroundColor: "#abdef5",  
          padding: "10px",  
          borderRadius: "5px",  
          width: "200px", 
          margin: "0 auto",  
        }}
      >
        Teeth No : 52
      </p>

      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="350"
        height="350"
        color="gray"
        viewBox="0 0 80 150"
        enable-background="new 0 0 128 208"
        style={{ backgroundColor: "transparent" }}
        xmlSpace="preserve" // Change "xml:space" to "xmlSpace"
      >
        <path
          color="red"
          fill={isToothSelected &&isRootSelected ?"purple": "#151515"}
          opacity="1.000000"
          stroke="none"
          d="
M40.818447,54.642838 
	C42.716587,66.495537 44.427952,77.991257 46.299149,89.822929 
	C47.342945,96.237648 48.517124,102.292725 49.016106,108.402931 
	C49.393475,113.024010 47.175777,116.550354 43.055122,119.130699 
	C39.420567,121.406654 36.362694,124.588402 32.789993,126.981804 
	C27.397921,130.594040 24.146029,130.566040 19.326506,126.311981 
	C12.648724,120.417709 7.955339,113.850006 9.527712,103.767982 
	C13.780634,76.498314 17.322987,49.117867 21.160719,21.783258 
	C21.299246,20.796585 21.273499,19.559231 21.851639,18.903959 
	C23.691139,16.819031 25.521561,13.790496 27.833338,13.276734 
	C31.316458,12.502657 33.459061,15.481921 34.108650,18.946476 
	C36.132294,29.739494 38.088783,40.545101 40.072941,51.345528 
	C40.253201,52.326736 40.445148,53.305801 40.818447,54.642838 
M44.869801,98.886658 
	C44.288433,96.470215 43.752518,94.041740 43.116951,91.639633 
	C41.390121,85.113144 35.704285,81.013557 28.790037,81.259354 
	C20.946392,81.538200 16.250376,85.293373 14.819409,92.482063 
	C14.268917,95.247559 13.507135,98.014503 13.363195,100.807671 
	C13.121452,105.498726 13.297035,110.211281 13.297035,116.046227 
	C15.206167,114.015015 16.125587,113.036804 18.107542,110.928116 
	C18.299707,114.207611 18.416174,116.161446 18.528303,118.115532 
	C18.809120,123.009247 24.403086,127.173470 28.515179,125.548439 
	C35.743919,122.691788 38.200504,118.935921 37.869701,111.313187 
	C37.808880,109.911682 37.861019,108.505264 37.861019,107.101120 
	C38.513309,106.966942 39.165600,106.832764 39.817890,106.698586 
	C40.488144,109.592575 41.158398,112.486565 42.166843,116.840790 
	C43.676025,113.781456 45.340233,111.784599 45.560680,109.639374 
	C45.894043,106.395348 45.221523,103.047966 44.869801,98.886658 
M19.684860,80.139671 
	C26.839420,76.663185 33.818871,77.399818 41.216930,81.755821 
	C39.724171,71.829620 38.476101,62.681404 36.947102,53.580379 
	C35.077591,42.452557 33.042862,31.350571 30.879883,20.276419 
	C30.610922,18.899376 29.121235,17.760763 28.197197,16.511671 
	C27.117241,17.779789 25.532303,18.887487 25.067392,20.350985 
	C24.221924,23.012449 23.957947,25.874500 23.597971,28.671719 
	C21.478647,45.140099 19.375650,61.610798 17.394289,78.096001 
	C17.304029,78.846970 18.438997,79.745201 19.684860,80.139671 
z"
        />

        <path
          onClick={() => {
            props.crownClick();
          }}
          fill={isToothSelected ? "red" : "white"}
          opacity="1.000000"
          stroke="none"
          d="
M44.923122,99.315582 
	C45.221523,103.047966 45.894043,106.395348 45.560680,109.639374 
	C45.340233,111.784599 43.676025,113.781456 42.166843,116.840790 
	C41.158398,112.486565 40.488144,109.592575 39.817890,106.698586 
	C39.165600,106.832764 38.513309,106.966942 37.861019,107.101120 
	C37.861019,108.505264 37.808880,109.911682 37.869701,111.313187 
	C38.200504,118.935921 35.743919,122.691788 28.515179,125.548439 
	C24.403086,127.173470 18.809120,123.009247 18.528303,118.115532 
	C18.416174,116.161446 18.299707,114.207611 18.107542,110.928116 
	C16.125587,113.036804 15.206167,114.015015 13.297035,116.046227 
	C13.297035,110.211281 13.121452,105.498726 13.363195,100.807671 
	C13.507135,98.014503 14.268917,95.247559 14.819409,92.482063 
	C16.250376,85.293373 20.946392,81.538200 28.790037,81.259354 
	C35.704285,81.013557 41.390121,85.113144 43.116951,91.639633 
	C43.752518,94.041740 44.288433,96.470215 44.923122,99.315582 
z"
        />
        <path
          onClick={() => {
            props.rootClick();
          }}
          fill={isRootSelected ? "gray" : "white"}
          opacity="1.000000"
          stroke="none"
          d="
M19.344082,80.357254 
	C18.438997,79.745201 17.304029,78.846970 17.394289,78.096001 
	C19.375650,61.610798 21.478647,45.140099 23.597971,28.671719 
	C23.957947,25.874500 24.221924,23.012449 25.067392,20.350985 
	C25.532303,18.887487 27.117241,17.779789 28.197197,16.511669 
	C29.121235,17.760763 30.610922,18.899376 30.879883,20.276419 
	C33.042862,31.350571 35.077591,42.452557 36.947102,53.580379 
	C38.476101,62.681404 39.724171,71.829620 41.216930,81.755821 
	C33.818871,77.399818 26.839420,76.663185 19.344082,80.357254 
z"
        />
      </svg>
    </div>
  );
}

export default MesialRootCariousTypes;