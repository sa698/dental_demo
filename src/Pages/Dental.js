import React, { useState } from "react";
import NoteTabs from "../Components/Tabs";
import MesialRootCariousTypes from "../Components/MesialRootCariousTypes";
import { Popover, Cascader } from "antd";
import TableAdd from "../Components/Table";

function Dental() {
  const [crownSelect, setCrownSelect] = useState(false);
  const [rootSelect, setRootSelect] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [dataSourse, setDataSourse] = useState({
    patient: null,
    type: "",
    select: [],
    user: "Sajeer",
  });

  const rootClick = () => {
    setRootSelect(true);
    rootSelect ? setOpen(true) : setOpen(false);
    setTitle("Root");
    
    
  };
  const crownClick = () => {
    setCrownSelect(true);
    setOpen(true);
    setTitle("Tooth");  
  };
  const handleChange = (val, key) => {
    setDataSourse((prev) => ({ ...prev, key: val }));
  };

  const rootoptions = [
    {
      value: "Root",
      label: "Root",
      children: [
        {
          value: "DISEASES",
          label: "DISEASES",
          children: [
            {
              value: "Carious",
              label: "Carious",
            },
            {
              value: "Defective",
              label: "Defective",
              children: [
                {
                  value: "Open Contact",
                  label: "Open Contact",
                },
                {
                  value: "Cracked",
                  label: "Cracked",
                },
                {
                  value: "Broken",
                  label: "Broken",
                },
              ],
            },
            {
              value: "Lesion",
              label: "Lesion",
              children: [
                {
                  value: "Acute",
                  label: "Acute",
                },
                {
                  value: "Chronic",
                  label: "Chronic",
                },
                {
                  value: "Unspecified",
                  label: "Unspecified",
                },
              ],
            },
          ],
        },
        {
          value: "TREATMENTS",
          label: "TREATMENTS",
          children: [
            {
              value: "Filled",
              label: "Filled",
              children: [
                {
                  value: "Sound",
                  label: "Sound",
                },
                {
                  value: "Failed",
                  label: "Failed",
                },
                {
                  value: "Defective",
                  label: "Defective",
                },
              ],
            },
            {
              value: "Filled & Apicectomy",
              label: "Filled & Apicectomy",
              children: [
                {
                  value: "Sound",
                  label: "Sound",
                },
                {
                  value: "Failed",
                  label: "Failed",
                },
                {
                  value: "Defective",
                  label: "Defective",
                },
              ],
            },
            {
              value: "Core & Post",
              label: "Core & Core",
            },
            {
              value: "Hemisection",
              label: "Hemisection",
            },
          ],
        },
      ],
    },
  ];
  const toothoptions = [
    {
      value: "Tooth",
      label: "Tooth",
      children: [
        {
          value: "Missing",
          label: "Missing",
        },
        {
          value: "Crown",
          label: "Crown",
        },
        {
          value: "Bridge",
          label: "Bridge",
        },
        {
          value: "Veneer",
          label: "Veneer",
        },
        {
          value: "Denture",
          label: "Denture",
        },
      ],
    },
  ];
  const onChange = (value) => {
    console.log(value);
    setSelectedValues([...selectedValues, [...value]]);
  };


  const handleOpenChange = (visible) => {
    
    if (!visible) {
 
      setRootSelect(false);
      setCrownSelect(false);
    }
  };

  const hide = () => {
    setOpen(false);
  };
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  const text = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>{title}</span>
      <a onClick={hide} style={{ marginLeft: "8px", cursor: "pointer" }}>
        X
      </a>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 100px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          height: "100vh",
          alignItems: "center",
          flex: 2,
        }}
      >
        

        <Popover
          content={
            <>
             
              {title === "Root" && (
                <Cascader
                  options={rootoptions}
                  onChange={onChange}
                  placeholder="Please select"
                />
              )}
              {title === "Tooth" && (
                <Cascader
                  options={toothoptions}
                  onChange={onChange}
                  placeholder="Please select"
                />
              )}
            </>
          }
          title={text}
          open={open}
          trigger="click"
          placement="right"
          onVisibleChange={handleOpenChange}
        >
          <MesialRootCariousTypes
            crownSelect={crownSelect}
            rootSelect={rootSelect}
            rootClick={rootClick}
            crownClick={crownClick}
            selectedValues={selectedValues}
          />
        </Popover>
        <TableAdd />
      </div>

      <div
        style={{
          flex: 1,
          height: "100%",
        }}
      >
        <NoteTabs selectedValues={selectedValues} dataSourse={dataSourse} />
      </div>
     
    </div>
  );
}

export default Dental;
